# Vue PPT 演示文稿系统 - 项目系统提示词

## 项目概述

这是一个基于 Vue 3 + TypeScript + Vite 构建的现代化演示文稿系统，支持多种幻灯片模板、动态背景效果和交互式演示。项目名称为 "vue-ppt"，主要用于创建和展示各种类型的演示文稿。

## 技术栈

- **前端框架**: Vue 3.5+ (Composition API)
- **构建工具**: Vite 7.0+
- **类型系统**: TypeScript 5.8+
- **样式方案**: Tailwind CSS 3.4+
- **图表库**: ECharts 6.0+
- **3D 渲染**: Three.js 0.180+
- **路由**: Vue Router 4.5+
- **图标**: Heroicons 2.2+
- **包管理器**: pnpm 10.13.1+

## 项目结构

```
src/
├── presentations/          # 演示文稿内容
│   └── llm/               # LLM 相关演示文稿
├── template/              # 幻灯片模板库 (30+ 种模板)
├── shared/               # 共享组件和工具
│   ├── backgrounds/      # 背景效果模块
│   ├── presentation/     # 演示文稿核心组件
│   ├── ui/              # UI 组件库
│   └── i18n/            # 国际化支持
├── utils/               # 工具函数和组合式函数
├── views/               # 页面视图
├── components/          # 通用组件
├── config/             # 配置文件
└── router/             # 路由配置
```

## 核心功能

### 1. 演示文稿系统

- **PPT 容器** ([`src/shared/presentation/ppt-container.vue`](src/shared/presentation/ppt-container.vue:1)): 核心演示组件，支持幻灯片导航、键盘控制、缩略图预览
- **演示上下文** ([`src/shared/presentation/presentation-context.ts`](src/shared/presentation/presentation-context.ts:1)): 管理演示文稿状态、背景和语言设置
- **演示文稿类型**:
  - 设计语言模板 ([`/template`](src/template/index.vue:1)) - 展示各种幻灯片模板
  - LLM 应用开发实战 ([`/llm`](src/presentations/llm/index.vue:1)) - 大语言模型技术演示

### 2. 幻灯片模板系统

- **30+ 种模板类型**: Hero、图表、时间线、代码展示、FAQ、投票等
- **通用组件**: [`SlideUniversalChart`](src/template/slide-universal-chart.vue:1)、[`SlideUniversalCompare`](src/template/slide-universal-compare.vue:1)、[`SlideUniversalList`](src/template/slide-universal-list.vue:1)
- **特殊模板**: [`SlideDashboard`](src/template/slide-dashboard.vue:1)、[`SlideQuiz`](src/template/slide-quiz.vue:1)、[`SlideMultimediaFixed`](src/template/slide-multimedia-fixed.vue:1)

### 3. 背景效果系统

- **背景管理器** ([`src/shared/backgrounds/background-manager.vue`](src/shared/backgrounds/background-manager.vue:1)): 管理动态背景效果
- **内置背景**:
  - Soft Mesh ([`src/shared/backgrounds/modules/soft-mesh/`](src/shared/backgrounds/modules/soft-mesh/background.vue:1)): 柔和网格动画
  - Demo Particles ([`src/shared/backgrounds/modules/demo-particles/`](src/shared/backgrounds/modules/demo-particles/background.vue:1)): 粒子动画效果
- **背景注册表** ([`src/shared/backgrounds/registry.ts`](src/shared/backgrounds/registry.ts:1)): 背景模块注册和管理

### 4. 交互功能

- **键盘导航**: 方向键、空格键、Home/End、数字键快速跳转
- **缩略图预览**: 右侧缩略图面板，支持快速跳转
- **进度条**: 底部进度指示器
- **页面跳转**: 支持直接输入页码跳转
- **全屏演示**: 沉浸式演示体验

### 5. 主题系统

- **多主题支持**: 深色、浅色、蓝色、紫色、绿色主题
- **主题配置** ([`src/config/themes.ts`](src/config/themes.ts:1)): 主题颜色定义和管理
- **动态切换**: 支持运行时主题切换和本地存储

### 6. 搜索和筛选

- **搜索功能** ([`src/components/SimpleSearchAndFilter.vue`](src/components/SimpleSearchAndFilter.vue:1)): 支持标题、描述、标签搜索
- **多维筛选**: 按分类、难度、标签筛选
- **排序选项**: 按标题、难度、时长、更新时间排序

## 关键组件和工具

### 组合式函数 ([`src/utils/composables.ts`](src/utils/composables.ts:1))

- `useSearchAndFilter()`: 搜索和筛选功能
- `useTheme()`: 主题管理
- `useKeyboardNavigation()`: 键盘导航
- `useCategoryExpansion()`: 分类展开/折叠管理
- `useResponsive()`: 响应式设计辅助
- `useLocalStorage()`: 本地存储管理

### 配置文件

- **演示文稿配置** ([`src/config/presentations.ts`](src/config/presentations.ts:1)): 演示文稿元数据和分类
- **主题配置** ([`src/config/themes.ts`](src/config/themes.ts:1)): 主题颜色和样式定义

### 国际化支持

- **i18n 系统** ([`src/shared/i18n/use-deck-i18n.ts`](src/shared/i18n/use-deck-i18n.ts:1)): 支持多语言切换
- **语言文件**: 支持动态加载语言包

## 开发指南

### 代码规范

- **ESLint**: 代码检查和自动修复
- **Prettier**: 代码格式化
- **Husky**: Git hooks 管理
- **lint-staged**: 提交前代码检查

### 开发脚本

```bash
pnpm dev              # 启动开发服务器
pnpm build            # 构建生产版本
pnpm preview          # 预览生产构建
pnpm lint             # 运行 ESLint 并自动修复
pnpm format           # 格式化代码
pnpm type-check       # TypeScript 类型检查
```

### 添加新幻灯片

1. 在 `src/template/` 或相应的演示文稿目录中创建新的 `.vue` 文件
2. 实现幻灯片内容，遵循现有的组件结构
3. 在相应的 `index.vue` 文件中导入并添加到幻灯片列表

### 自定义背景

1. 在 `src/shared/backgrounds/modules/` 目录下创建新的背景模块
2. 实现 `BackgroundModuleMeta` 接口
3. 在 `src/shared/backgrounds/registry.ts` 中注册新背景

## 设计原则

1. **组件化**: 高度模块化的组件设计，便于复用和维护
2. **响应式**: 完美适配桌面和移动设备
3. **可访问性**: 支持键盘导航和屏幕阅读器
4. **性能优化**: 懒加载、预加载和动画优化
5. **类型安全**: 完整的 TypeScript 类型定义

## 常见任务

### 修改主题颜色

编辑 [`src/config/themes.ts`](src/config/themes.ts:1) 中的主题配置，修改 RGB 颜色值。

### 添加新的演示文稿分类

1. 在 [`src/config/presentations.ts`](src/config/presentations.ts:1) 中添加新的分类配置
2. 在相应的组件中添加分类图标和颜色

### 自定义键盘快捷键

在 [`src/shared/presentation/ppt-container.vue`](src/shared/presentation/ppt-container.vue:1) 的 `handleKeyDown` 方法中添加新的键盘事件处理。

### 修改幻灯片过渡效果

在 [`src/shared/presentation/ppt-container.vue`](src/shared/presentation/ppt-container.vue:1) 的 `.slide-wrapper` 样式中修改 transition 属性。

## 注意事项

1. 项目使用 pnpm 作为包管理器，请勿使用 npm 或 yarn
2. 代码风格遵循 ESLint 和 Prettier 配置
3. 新增组件需要添加适当的 TypeScript 类型定义
4. 修改全局样式时注意主题系统的兼容性
5. 添加新功能时考虑响应式设计和可访问性

## 路由结构

- `/`: 主页，显示所有演示文稿的网格/列表视图
- `/template`: 设计语言模板演示
- `/llm`: LLM 应用开发实战演示

这个项目是一个功能完整、设计精美的演示文稿系统，适合用于创建各种类型的技术演示、产品展示和教学材料。
