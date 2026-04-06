<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
interface Category {
  id: string
  title: string
  description: string
  tools: string[]
  color: string
  icon: string
}
const categories: Category[] = [
  {
    id: 'ai-native-ide',
    title: 'AI 原生 IDE',
    description: '独立编辑器，AI 深度嵌入每一环节，Agent 驱动',
    tools: ['Cursor', 'Windsurf', 'Trae', 'Kiro', 'Qoder'],
    color: 'blue',
    icon: '🚀',
  },
  {
    id: 'ide-extension',
    title: 'IDE 扩展/助手',
    description: '无缝嵌入现有工作流，最易上手且生态最稳',
    tools: ['GitHub Copilot', 'Augment', 'Codex', '文心快码', '腾讯 CodeBuddy'],
    color: 'cyan',
    icon: '🔌',
  },
  {
    id: 'terminal-cli',
    title: 'Terminal/CLI Agent',
    description: '复杂工程推理、自主执行命令、极致性能',
    tools: ['Claude Code', 'Opencode', 'antigravity'],
    color: 'emerald',
    icon: '💻',
  },
]
const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
  },
  cyan: {
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    text: 'text-cyan-700',
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
  },
}
</script>
<template>
  <Section>
    <Card padding="lg">
      <div class="mb-8 text-center">
        <HeadingGradient :level="2" size="4xl">
          三大类工具概览
        </HeadingGradient>
        <p class="mt-3 text-slate-600 text-lg">
          根据形态和定位，主流 AI 编程工具分为三大类别
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="relative rounded-2xl p-6 border bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300 flex flex-col"
          :class="[colorMap[category.color].border]"
        >
          <div class="flex flex-col items-center text-center gap-4 flex-1">
            <div
              class="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm"
              :class="[colorMap[category.color].bg]"
            >
              {{ category.icon }}
            </div>
            <div class="flex-1 flex flex-col">
              <h3
                class="text-2xl font-bold mb-3"
                :class="[colorMap[category.color].text]"
              >
                {{ category.title }}
              </h3>
              <p class="text-slate-600 text-sm mb-6 leading-relaxed">
                {{ category.description }}
              </p>
              <div class="mt-auto flex flex-wrap justify-center gap-2">
                <span
                  v-for="(tool, tIndex) in category.tools"
                  :key="tIndex"
                  class="inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium border transition-colors hover:bg-opacity-80"
                  :class="[
                    colorMap[category.color].bg,
                    colorMap[category.color].border,
                    colorMap[category.color].text,
                  ]"
                >
                  {{ tool }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200">
        <div class="flex items-center gap-3 mb-3">
          <svg
            class="w-5 h-5 text-slate-600"
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
          <span class="font-semibold text-slate-800">选型提示</span>
        </div>
        <p class="text-slate-600 text-sm leading-relaxed">
          <strong class="text-blue-600">AI 原生 IDE</strong>
          适合追求极致 Agent 体验与深度集成，利用独立编辑器构建闭环；
          <strong class="text-cyan-600">IDE 扩展</strong>
          适合存量项目与团队协作，在熟悉的环境中获得 AI 赋能；
          <strong class="text-emerald-600">Terminal CLI</strong>
          适合资深开发者与复杂重构，通过强推理 Agent 解决长时任务。
        </p>
      </div>
    </Card>
  </Section>
</template>
