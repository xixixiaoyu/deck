#!/usr/bin/env bash

# Deck (极简演示) 自动化部署脚本
# 功能：本地构建 -> SSH 同步 -> 远程部署
# 作者：Senior Engineer Persona

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

# 默认配置文件路径
CONFIG_FILE=".env.deploy"

# 检查配置文件是否存在
if [ ! -f "$CONFIG_FILE" ]; then
    echo -e "${RED}错误: 找不到配置文件 $CONFIG_FILE${NC}"
    echo -e "请根据 .env.deploy.example 创建该文件并填写服务器信息。"
    exit 1
fi

# 加载配置
source "$CONFIG_FILE"

# 检查必要参数
if [[ -z "$SERVER_IP" || -z "$SERVER_USER" || -z "$SERVER_PATH" ]]; then
    echo -e "${RED}错误: $CONFIG_FILE 中缺少必要参数 (SERVER_IP, SERVER_USER, SERVER_PATH)${NC}"
    exit 1
fi

echo -e "${BLUE}>>> 1. 开始本地构建...${NC}"

# 1. 安装依赖 (可选，默认跳过以提高速度)
# pnpm install

# 2. 执行构建
if pnpm run build; then
    echo -e "${GREEN}构建成功!${NC}"
else
    echo -e "${RED}构建失败，请检查本地代码。${NC}"
    exit 1
fi

echo -e "${BLUE}>>> 2. 准备同步到服务器: $SERVER_IP ...${NC}"

# 3. 使用 rsync 同步 dist 目录
# -a: 归档模式
# -v: 显示详情
# -z: 传输时压缩
# --delete: 删除服务器上多余的文件 (确保目录完全同步)
rsync -avz --delete dist/ "${SERVER_USER}@${SERVER_IP}:${SERVER_PATH}"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}同步成功!${NC}"
else
    echo -e "${RED}同步失败，请检查 SSH 连接。${NC}"
    exit 1
fi

# 4. 可选: 同步 Nginx 配置 (默认注释，需手动开启并配置 NGINX_PATH)
# if [[ -n "$NGINX_PATH" ]]; then
#     echo -e "${BLUE}>>> 正在同步 Nginx 配置...${NC}"
#     scp scripts/nginx.conf "${SERVER_USER}@${SERVER_IP}:${NGINX_PATH}"
#     ssh "${SERVER_USER}@${SERVER_IP}" "sudo nginx -s reload"
#     echo -e "${GREEN}Nginx 配置已重载!${NC}"
# fi

echo -e "${BLUE}>>> 3. 部署完成!${NC}"
echo -e "访问地址: http://${SERVER_IP}/deck"
echo -e "正式地址: http://jiansi.xyz/deck"
