# Deck (极简演示) - 工程上下文 (AGENTS.md)

## 项目使命 (Mission)

构建一个**高性能、高可维护性、视觉精致**的现代化演示文稿引擎。通过 Vue 3 的响应式能力与 WebGL 的视觉表现力，为技术分享与产品演示提供极致的沉浸式体验。

---

## 技术底座 (Technology Stack)

- **Runtime**: [Vue 3.5+](file:///Users/yunmu/Desktop/ppt/package.json) (Composition API, `<script setup>`) - 利用最新的响应式引擎与内存管理优化。
- **Build System**: [Vite 7.0+](file:///Users/yunmu/Desktop/ppt/package.json) - 极速 HMR 与分包策略。
- **Type System**: [TypeScript 5.8+](file:///Users/yunmu/Desktop/ppt/package.json) - 严格模式，利用类型体操确保业务逻辑健壮。
- **Styling**: [Tailwind CSS 3.4+](file:///Users/yunmu/Desktop/ppt/package.json) - 遵循 8px 网格系统，原子化设计。
- **Visualization**: [ECharts 6.0+](file:///Users/yunmu/Desktop/ppt/package.json) & [Three.js 0.180+](file:///Users/yunmu/Desktop/ppt/package.json) - 兼顾数据表达与 3D 视觉冲击。
- **Infrastructure**: [Vue Router 4.5+](file:///Users/yunmu/Desktop/ppt/package.json), [pnpm 10.13+](file:///Users/yunmu/Desktop/ppt/package.json).

---

## 核心架构 (System Architecture)

### 1. 演示引擎 (The Engine)

- **PPT 容器** ([ppt-container.vue](file:///Users/yunmu/Desktop/ppt/src/shared/presentation/ppt-container.vue)): 负责视口适配 (Scale-to-Fit)、键盘导航 (Event Bus)、路由同步及全屏管理。
- **演示上下文** ([presentation-context.ts](file:///Users/yunmu/Desktop/ppt/src/shared/presentation/presentation-context.ts)): 跨组件共享状态机，管理背景 ID、多语言 (i18n) 状态及本地持久化。

### 2. 幻灯片模板库 (Templates)

精简后的高复用组件库，遵循 PascalCase 命名规范：

- **展示类**: `SlideHero`, `SlideOutline`, `SlideChapterDivider`, `SlideThankYou`.
- **内容类**: `SlideList`, `SlideCompare`, `SlideTable`, `SlideQuote`, `SlideTeam`.
- **数据类**: `SlideChart` (Bar, Line, Pie, Radar, Scatter, Donut), `SlideStats`, `SlideMatrix`.
- **交互类**: `SlidePoll`, `SlideQuiz`, `SlideTabs`, `SlideFAQ`, `SlideQAndA`.
- **进阶类**: `SlideCode`, `SlideTimeline`, `SlideSteps`, `SlideBeforeAfter`, `SlideMedia`, `SlideMultimedia`, `SlideDashboard`.

### 3. 动态背景系统 (Backgrounds)

- **Manager** ([background-manager.vue](file:///Users/yunmu/Desktop/ppt/src/shared/backgrounds/background-manager.vue)): 基于 `backgroundRegistry` 动态挂载渲染模块。
- **Modules**:
  - `Soft Mesh`: 柔和的流体网格动画，适用于商务场景。
  - `Demo Particles`: 高性能粒子交互，适用于科技感场景。

---

## 内容生态 (Presentations)

| 演示文稿            | 路由                                                                              | 核心价值                                       |
| :------------------ | :-------------------------------------------------------------------------------- | :--------------------------------------------- |
| **AI 编程工具全景** | [/ai-tools](file:///Users/yunmu/Desktop/ppt/src/presentations/ai-tools/index.vue) | 2026 最新 AI 编程趋势，从补全到 Agent。        |
| **大模型开发实战**  | [/llm](file:///Users/yunmu/Desktop/ppt/src/presentations/llm/index.vue)           | 涵盖 RAG, Fine-tuning, Agent 架构及 MCP 协议。 |
| **设计语言模板**    | [/template](file:///Users/yunmu/Desktop/ppt/src/template/index.vue)               | 展示 30+ 种标准幻灯片布局的最佳实践。          |

---

## 核心工程准则 (Engineering Standards)

### 1. 视觉灵魂 (Visual Soul)

- **一致性**: 必须遵循 [themes.ts](file:///Users/yunmu/Desktop/ppt/src/config/themes.ts) 定义的颜色系统。
- **通透感**: 优先使用 `backdrop-blur` (毛玻璃) 与渐变阴影。
- **呼吸感**: 合理利用 `gap` (8px 倍数) 与 `transition` (平滑过渡)。

### 2. 逻辑严谨 (Logic Rigor)

- **防御式编程**: 所有组件 Props 需声明严格类型与默认值。
- **性能优化**: 大规模 ECharts 或 Three.js 实例必须在 `onUnmounted` 中显式销毁。
- **可访问性 (A11y)**: 确保所有交互均支持键盘盲操。

### 3. 开发流程

- **新增幻灯片**: 在相应目录下创建 `.vue`，遵循模板解耦原则。
- **注册内容**: 更新 [presentations.ts](file:///Users/yunmu/Desktop/ppt/src/config/presentations.ts) 以确保首页可见。
- **同步文档**: 若更新了核心模板或架构，需同步调整 [AGENTS.md](file:///Users/yunmu/Desktop/ppt/AGENTS.md) 以确保 AI 上下文的准确性。

---

## 目录索引 (Index)

```
src/
├── presentations/   # 业务内容 (ai-tools, llm)
├── template/        # 原子化模板库
├── shared/          # 核心资产 (backgrounds, presentation, ui, i18n)
├── config/          # 声明式配置 (themes, presentations)
├── utils/           # 逻辑抽象 (composables, highlight)
└── components/      # 通用 UI 小部件 (Search, Toggle, Shortcuts)
```

> **Note**: 这是一个不断演进的项目。修改任何共享组件前，请务必检查其在 `template` 中的基准表现。
