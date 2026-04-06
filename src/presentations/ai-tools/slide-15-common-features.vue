<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
interface Feature {
  id: number
  name: string
  description: string
  value: string
  examples: string
  color: string
}
const features: Feature[] = [
  {
    id: 1,
    name: '智能代码补全',
    description: '行内/多行自动提示（Tab/Inline）',
    value: '提升输入速度30-50%',
    examples: 'Cursor的Supermaven、Copilot补全、Windsurf实时建议',
    color: 'blue',
  },
  {
    id: 2,
    name: '自然语言交互（Chat）',
    description: '用中文/英文描述需求 → AI即时回复代码/解释',
    value: '降低编程门槛',
    examples: '所有工具内置Chat，支持"解释这段代码""加一个用户登录功能"',
    color: 'cyan',
  },
  {
    id: 3,
    name: '代码生成',
    description: '自然语言描述 → 生成完整函数/模块/特性',
    value: '从0到1快速原型',
    examples: '"用React写一个带验证的表单" → 直接出可用代码',
    color: 'emerald',
  },
  {
    id: 4,
    name: '项目级上下文理解',
    description: '自动索引整个代码库，而非仅当前文件',
    value: '避免"幻觉"',
    examples: '全代码库感知（Cursor/Windsurf/Claude Code/Trae均支持）',
    color: 'amber',
  },
  {
    id: 5,
    name: '代码重构与优化',
    description: '自动建议/执行多文件重构、性能优化',
    value: '维持代码健康',
    examples: '一键重构、提取函数、迁移框架（所有工具均有）',
    color: 'blue',
  },
  {
    id: 6,
    name: '调试与测试辅助',
    description: '自动找Bug、生成单元测试、提出修复方案',
    value: '减少人为错误',
    examples: '测试生成 + 断点建议 + 错误解释（标配）',
    color: 'rose',
  },
  {
    id: 7,
    name: 'Git/版本控制集成',
    description: '自动生成Commit/PR、关联Issue',
    value: '打通全链路',
    examples: 'Copilot Workspace、Cursor Agent、Claude Code终端Git操作',
    color: 'cyan',
  },
]
const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
  },
  cyan: {
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    text: 'text-cyan-600',
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-600',
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-600',
  },
  rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-600' },
}
</script>
<template>
  <Section>
    <Card padding="lg">
      <div class="mb-6 text-center">
        <HeadingGradient :level="2" size="4xl">
          7大共有核心功能
        </HeadingGradient>
        <p class="mt-3 text-slate-600 text-lg">
          2026年主流AI编程工具的"标配能力"
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="p-4 rounded-xl border bg-white/60 backdrop-blur-sm hover:shadow-md transition-all duration-300"
          :class="[colorMap[feature.color].border]"
        >
          <div class="flex items-start gap-3">
            <div
              class="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
              :class="[
                colorMap[feature.color].bg,
                colorMap[feature.color].text,
              ]"
            >
              {{ feature.id }}
            </div>
            <div class="flex-1 min-w-0">
              <h3
                class="font-semibold text-slate-800 mb-1"
                :class="[colorMap[feature.color].text]"
              >
                {{ feature.name }}
              </h3>
              <p class="text-xs text-slate-600 mb-2">
                {{ feature.description }}
              </p>
              <div class="flex items-center gap-1 text-xs">
                <svg
                  class="w-3 h-3 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-slate-500">{{ feature.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 p-5 rounded-xl bg-slate-50 border border-slate-200">
        <h4 class="font-semibold text-slate-800 mb-3 flex items-center gap-2">
          <svg
            class="w-5 h-5 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          为什么这些功能"人人都有"？
        </h4>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600"
        >
          <div>
            <strong class="text-blue-600">技术收敛</strong
            >：大模型上下文窗口突破200K+ token，RAG与Agent框架成熟
          </div>
          <div>
            <strong class="text-cyan-600">开发者需求</strong
            >：80%+开发者最痛的是"重复劳动 + 上下文丢失"
          </div>
          <div>
            <strong class="text-emerald-600">生态压力</strong
            >：任何工具若缺失以上任意一项，都会被迅速边缘化
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
