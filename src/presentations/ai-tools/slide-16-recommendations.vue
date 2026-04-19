<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
const questions = [
  {
    question: '你更依赖视觉反馈还是命令行速度？',
    answer: '视觉派选 Cursor/Windsurf；终端派选 Claude Code/Opencode。',
    icon: '👁️',
  },
  {
    question: '代码库规模与复杂度如何？',
    answer: '超大型项目选 Augment/Qoder；中小型选 Trae/Copilot。',
    icon: '📊',
  },
  {
    question: '预算与企业合规是否是硬约束？',
    answer: '高合规选 Copilot/CodeBuddy；零预算选 Trae/Opencode。',
    icon: '⚖️',
  },
]

const strategies = [
  {
    title: '极致生产力 (混合策略)',
    description: 'Cursor/Windsurf (日常) + Claude Code (重构) + Copilot (兼容)',
    icon: '🚀',
    color: 'rose',
  },
  {
    title: '零成本全能型',
    description: 'Trae (IDE) + Opencode (CLI) + Kiro (Spec)',
    icon: '💰',
    color: 'emerald',
  },
  {
    title: '企业标准化',
    description: 'GitHub Copilot + Augment + CodeBuddy',
    icon: '🏢',
    color: 'blue',
  },
]

const coreInsights = [
  {
    title: 'AI 工具的终极价值',
    description: '放大人类判断而非取代，看见代码背后的系统逻辑与设计之美。',
    color: 'blue',
  },
  {
    title: '混合策略成为主流',
    description: '不再迷信单一工具，而是根据任务复杂度编排工具链。',
    color: 'emerald',
  },
  {
    title: '从补全到 Agent',
    description: 'Agentic Workflow 将成为 2026 年后开发者的基本肌肉记忆。',
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
  rose: {
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-600',
  },
}
</script>
<template>
  <Section>
    <Card padding="lg">
      <div class="mb-8 text-center">
        <HeadingGradient :level="2" size="4xl">
          选型框架与建议
        </HeadingGradient>
        <p class="mt-3 text-slate-600 text-lg">
          2026 混合策略：放大人类判断，看见设计之美
        </p>
      </div>

      <!-- Selection Framework -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div
          v-for="(q, index) in questions"
          :key="index"
          class="p-6 rounded-2xl border border-slate-200 bg-white/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl">{{ q.icon }}</span>
            <h4 class="font-bold text-slate-800 leading-tight">
              {{ q.question }}
            </h4>
          </div>
          <p class="text-sm text-slate-600 leading-relaxed italic">
            "{{ q.answer }}"
          </p>
        </div>
      </div>

      <!-- Hybrid Strategies -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div
          v-for="(strat, index) in strategies"
          :key="index"
          class="p-5 rounded-2xl border bg-white/60 backdrop-blur-sm flex flex-col items-center text-center group hover:scale-105 transition-all duration-300"
          :class="[colorMap[strat.color].border]"
        >
          <div
            :class="[
              'w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm group-hover:rotate-6 transition-transform',
              colorMap[strat.color].bg,
            ]"
          >
            {{ strat.icon }}
          </div>
          <h3
            class="font-bold text-lg mb-2"
            :class="[colorMap[strat.color].text]"
          >
            {{ strat.title }}
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed px-2">
            {{ strat.description }}
          </p>
        </div>
      </div>

      <!-- Core Insights -->
      <div
        class="p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-cyan-50 to-emerald-50 border border-slate-200"
      >
        <h4 class="font-bold text-slate-800 mb-4 flex items-center gap-2">
          <svg
            class="w-6 h-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          2026 核心洞察
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(insight, index) in coreInsights"
            :key="index"
            class="p-4 rounded-xl border bg-white/80 hover:bg-white transition-colors"
            :class="[colorMap[insight.color].border]"
          >
            <h5
              class="font-bold mb-2 text-sm"
              :class="[colorMap[insight.color].text]"
            >
              {{ insight.title }}
            </h5>
            <p class="text-xs text-slate-600 leading-relaxed">
              {{ insight.description }}
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
