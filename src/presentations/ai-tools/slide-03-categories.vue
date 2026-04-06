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
    title: 'AI原生IDE',
    description: '独立编辑器，AI深度嵌入每一环节',
    tools: ['Cursor', 'Windsurf'],
    color: 'blue',
    icon: '🚀',
  },
  {
    id: 'ide-extension',
    title: 'IDE扩展/助手',
    description: '无缝嵌入现有工作流，最易上手',
    tools: ['GitHub Copilot', 'Tabnine', 'Amazon Q'],
    color: 'cyan',
    icon: '🔌',
  },
  {
    id: 'terminal-cli',
    title: 'Terminal/CLI工具',
    description: '复杂工程、推理优先',
    tools: ['Claude Code'],
    color: 'emerald',
    icon: '💻',
  },
  {
    id: 'chinese-tools',
    title: '中国本土工具',
    description: '中文优先、免费/生态友好',
    tools: ['Trae', '文心快码', '腾讯CodeBuddy'],
    color: 'amber',
    icon: '🇨🇳',
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
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
  },
}
</script>
<template>
  <Section>
    <Card padding="lg">
      <div class="mb-8 text-center">
        <HeadingGradient :level="2" size="4xl">
          四大类工具概览
        </HeadingGradient>
        <p class="mt-3 text-slate-600 text-lg">
          根据形态和定位，主流AI编程工具分为四大类别
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="relative rounded-2xl p-6 border bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
          :class="[colorMap[category.color].border]"
        >
          <div class="flex items-start gap-4">
            <div
              class="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
              :class="[colorMap[category.color].bg]"
            >
              {{ category.icon }}
            </div>
            <div class="flex-1">
              <h3
                class="text-xl font-bold mb-2"
                :class="[colorMap[category.color].text]"
              >
                {{ category.title }}
              </h3>
              <p class="text-slate-600 text-sm mb-3">
                {{ category.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tool, tIndex) in category.tools"
                  :key="tIndex"
                  class="inline-flex items-center rounded-lg px-3 py-1 text-xs font-medium border"
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
          <strong class="text-blue-600">AI原生IDE</strong>
          适合追求极致体验的开发者；
          <strong class="text-cyan-600">IDE扩展</strong>
          适合无缝融入现有工作流；
          <strong class="text-emerald-600">Terminal CLI</strong>
          适合复杂推理场景；
          <strong class="text-amber-600">中国本土工具</strong>
          适合中文需求和合规场景。
        </p>
      </div>
    </Card>
  </Section>
</template>
