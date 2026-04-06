# Jiansi Deck | 简思演示

一个基于 Vue 3 + TypeScript + Vite 构建的现代化演示文稿引擎。

## ✨ 特性

- 🎨 **丰富的幻灯片模板** - 包含 30+ 种预设模板，涵盖 Hero、图表、时间线、代码展示等多种场景
- 🌈 **动态背景效果** - 内置粒子动画、网格背景等多种视觉效果
- 🎯 **交互式演示** - 支持键盘导航、缩略图预览、进度条等交互功能
- 📱 **响应式设计** - 完美适配桌面和移动设备
- 🌐 **国际化支持** - 内置多语言支持框架
- 🎭 **主题定制** - 支持自定义颜色主题和样式
- 📊 **图表集成** - 集成 ECharts，支持多种数据可视化
- 🔧 **TypeScript 支持** - 完整的类型定义和开发体验

## 🚀 快速开始

### 环境要求

- Node.js ^20.19.0 || >=22.12.0
- pnpm (推荐) 或 npm

### 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install
```

### 开发模式

```bash
# 启动开发服务器
pnpm dev

# 或使用 npm
npm run dev
```

### 构建生产版本

```bash
# 类型检查并构建
pnpm build

# 或使用 npm
npm run build
```

### 预览生产构建

```bash
pnpm preview

# 或使用 npm
npm run preview
```

## 📁 项目结构

```
src/
├── presentations/          # 演示文稿内容
│   └── llm/               # LLM 相关演示文稿
├── template/              # 幻灯片模板库
├── shared/               # 共享组件和工具
│   ├── backgrounds/      # 背景效果模块
│   ├── presentation/     # 演示文稿核心组件
│   ├── ui/              # UI 组件库
│   └── i18n/            # 国际化支持
├── utils/               # 工具函数
├── views/               # 页面视图
└── router/              # 路由配置
```

## 🎯 核心功能

### 演示文稿类型

项目包含两种主要的演示文稿类型：

1. **设计语言模板** (`/template`) - 展示各种幻灯片模板和设计模式
2. **LLM 应用开发实战** (`/llm`) - 大语言模型相关的技术演示

### 幻灯片模板

系统提供了丰富的幻灯片模板，包括但不限于：

- **Hero 页面** - 标题页和介绍页
- **内容展示** - 大纲、列表、表格、引用等
- **数据可视化** - 柱状图、饼图、雷达图、仪表盘等
- **交互组件** - 投票、问答、时间线等
- **特殊布局** - 前后对比、团队介绍、多媒体展示等

### 背景效果

内置多种动态背景效果：

- **Soft Mesh** - 柔和的网格动画
- **Demo Particles** - 粒子动画效果
- 支持自定义背景扩展

### 交互功能

- **键盘导航** - 支持方向键、空格键、Home/End 等快捷键
- **缩略图预览** - 右侧缩略图面板，支持快速跳转
- **进度条** - 底部进度指示器
- **页面跳转** - 支持直接输入页码跳转
- **全屏演示** - 沉浸式演示体验

## 🛠️ 开发指南

### 代码规范

项目使用以下工具确保代码质量：

- **ESLint** - 代码检查和自动修复
- **Prettier** - 代码格式化
- **Husky** - Git hooks 管理
- **lint-staged** - 提交前代码检查

### 可用脚本

```bash
# 开发相关
pnpm dev              # 启动开发服务器
pnpm build            # 构建生产版本
pnpm preview          # 预览生产构建

# 代码质量
pnpm lint             # 运行 ESLint 并自动修复
pnpm lint:check       # 仅检查 ESLint 问题
pnpm format           # 格式化代码
pnpm format:check     # 检查代码格式
pnpm type-check       # TypeScript 类型检查
pnpm lint:format      # 同时运行 lint 和 format
```

### 添加新幻灯片

1. 在 `src/template/` 或相应的演示文稿目录中创建新的 `.vue` 文件
2. 实现幻灯片内容，遵循现有的组件结构
3. 在相应的 `index.vue` 文件中导入并添加到幻灯片列表

### 自定义背景

1. 在 `src/shared/backgrounds/modules/` 目录下创建新的背景模块
2. 实现 `BackgroundModuleMeta` 接口
3. 在 `src/shared/backgrounds/registry.ts` 中注册新背景

## 🎨 主题定制

项目使用 CSS 变量系统支持主题定制：

```css
:root {
  --surface: 248 250 252; /* 背景色 */
  --surface-muted: 241 245 249; /* 次要背景色 */
  --text-primary: 15 23 42; /* 主文字色 */
  --text-muted: 71 85 105; /* 次要文字色 */
  --accent: 99 102 241; /* 强调色 */
}
```

## 📚 技术栈

- **前端框架**: Vue 3.5+
- **构建工具**: Vite 7.0+
- **类型系统**: TypeScript 5.8+
- **样式方案**: Tailwind CSS 3.4+
- **图表库**: ECharts 6.0+
- **3D 渲染**: Three.js 0.180+
- **路由**: Vue Router 4.5+
- **图标**: Heroicons 2.2+

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者和设计师。

---

## 🔗 相关链接

- [Vue 3 官方文档](https://vuejs.org/)
- [Vite 官方文档](https://vite.dev/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [ECharts 文档](https://echarts.apache.org/)
