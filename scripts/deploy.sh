#!/usr/bin/env bash

# Deck (极简演示) 自动化本地部署脚本
# 功能：本地构建 -> 本地分发 -> 权限设置
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
    echo -e "请根据 .env.deploy.example 创建该文件。"
    exit 1
fi

# 加载配置
source "$CONFIG_FILE"

# 检查必要参数
if [[ -z "$SERVER_PATH" ]]; then
    echo -e "${RED}错误: $CONFIG_FILE 中缺少必要参数 (SERVER_PATH)${NC}"
    exit 1
fi

echo -e "${BLUE}>>> 1. 开始本地构建...${NC}"

# 1. 安装依赖 (如果 node_modules 不存在)
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}检测到 node_modules 缺失，正在安装依赖...${NC}"
    pnpm install
fi

# 2. 执行构建
if pnpm run build; then
    echo -e "${GREEN}构建成功!${NC}"
else
    echo -e "${RED}构建失败，请检查代码。${NC}"
    exit 1
fi

echo -e "${BLUE}>>> 2. 准备分发到本地目标目录: $SERVER_PATH ...${NC}"

# 3. 确保目标目录存在
if [ ! -d "$SERVER_PATH" ]; then
    echo -e "目标目录不存在，正在创建: $SERVER_PATH"
    mkdir -p "$SERVER_PATH"
fi

# 4. 同步 dist 目录到目标位置 (使用本地 cp 而非 rsync)
# 注意：这里我们只同步内容，不删除目标目录本身，以免权限丢失
cp -R dist/* "$SERVER_PATH/"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}本地分发成功!${NC}"
else
    echo -e "${RED}分发失败，请检查目录权限。${NC}"
    exit 1
fi

# 5. 可选: 复制 Nginx 配置并重载 (如果提供了 NGINX_PATH 且具有 sudo 权限)
if [[ -n "$NGINX_PATH" ]]; then
    echo -e "${BLUE}>>> 正在更新 Nginx 配置...${NC}"
    sudo cp scripts/nginx.conf "$NGINX_PATH"
    sudo nginx -s reload
    echo -e "${GREEN}Nginx 配置已重载!${NC}"
fi

echo -e "${BLUE}>>> 3. 部署完成!${NC}"
echo -e "项目路径: $SERVER_PATH"
echo -e "访问地址: http://jiansi.xyz/deck"
