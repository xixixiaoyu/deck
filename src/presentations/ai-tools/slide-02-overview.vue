<script setup lang="ts">
import { ref } from 'vue'
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

interface TimelineStage {
  year: string
  title: string
  description: string
  color: string
  features: string[]
}

const timeline = ref<TimelineStage[]>([
  {
    year: '2020-2022',
    title: '代码补全时代',
    description: '基于上下文的智能补全，提升输入效率',
    color: 'indigo',
    features: ['行内提示', '函数补全', '语法感知'],
  },
  {
    year: '2023-2024',
    title: '智能助手时代',
    description: 'Chat 交互、代码生成、多文件理解',
    color: 'fuchsia',
    features: ['自然语言对话', '代码生成', '项目级上下文'],
  },
  {
    year: '2025-2026',
    title: 'Agentic 时代',
    description: '自主规划、跨文件重构、端到端交付',
    color: 'emerald',
    features: ['Agent 自主执行', '测试闭环', '全流程自动化'],
  },
])

const colorMap: Record<string, string> = {
  indigo: 'bg-indigo-500',
  fuchsia: 'bg-fuchsia-500',
  emerald: 'bg-emerald-500',
}

const textColorMap: Record<string, string> = {
  indigo: 'text-indigo-600',
  fuchsia: 'text-fuchsia-600',
  emerald: 'text-emerald-600',
}

const bgLightMap: Record<string, string> = {
  indigo: 'bg-indigo-50',
  fuchsia: 'bg-fuchsia-50',
  emerald: 'bg-emerald-50',
}
</script>

<template>
  <Section>
    <Card padding="lg">
      <div class="mb-8 text-center">
        <HeadingGradient :level="2" size="4xl" palette="indigo-fuchsia-emerald">
          AI 编程工具的演进历程
        </HeadingGradient>
        <p class="mt-3 text-slate-600 text-lg">
          从"代码补全"到"AI搭档"的跨越式发展
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(stage, index) in timeline"
          :key="index"
          class="relative rounded-2xl p-6 border border-slate-200/60 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-4">
            <div :class="[colorMap[stage.color], 'w-3 h-3 rounded-full']"></div>
            <span class="text-sm font-medium text-slate-500">{{
              stage.year
            }}</span>
          </div>

          <h3 :class="[textColorMap[stage.color], 'text-2xl font-bold mb-2']">
            {{ stage.title }}
          </h3>

          <p class="text-slate-600 mb-4">{{ stage.description }}</p>

          <div class="space-y-2">
            <div
              v-for="(feature, fIndex) in stage.features"
              :key="fIndex"
              :class="[
                bgLightMap[stage.color],
                'inline-flex items-center rounded-full px-3 py-1 text-sm mr-2 mb-2',
              ]"
            >
              <span :class="[textColorMap[stage.color], 'font-medium']">{{
                feature
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-8 p-6 rounded-xl bg-gradient-to-r from-indigo-50 via-fuchsia-50 to-emerald-50 border border-slate-200/60"
      >
        <div class="flex items-start gap-4">
          <div
            class="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-white"
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
          </div>
          <div>
            <h4 class="text-lg font-semibold text-slate-800 mb-2">
              2026年的核心变化
            </h4>
            <p class="text-slate-600">
              AI 不再只是自动提示，而是能<span
                class="font-semibold text-indigo-600"
                >自主规划</span
              >、
              <span class="font-semibold text-fuchsia-600">跨文件重构</span>、
              <span class="font-semibold text-emerald-600">运行测试</span>，甚至
              <span class="font-semibold text-amber-600">端到端交付功能</span
              >的"AI搭档"。
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
