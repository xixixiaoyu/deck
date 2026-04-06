<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
const features = [
  {
    title: '核心差异点',
    description: 'Agent 优先 Mission Control，浏览器自动化任务',
  },
  {
    title: '工作流改变',
    description: '视觉化管理多 Agent 异步工程任务',
  },
  {
    title: 'Mission Control',
    description: '可视化任务面板，实时追踪多个 Agent 的执行进度与状态',
  },
  {
    title: '浏览器自动化',
    description: '深度集成浏览器，可自动执行 Web 端的测试、部署与交互任务',
  },
]
const highlights = [
  { label: '付费模式', value: 'Pro $20/月', color: 'emerald' },
  { label: '选型建议', value: '预算紧/个人开发者', color: 'teal' },
  { label: '定位', value: 'Agent 优先', color: 'blue' },
]
</script>
<template>
  <Section>
    <Card padding="lg">
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"
          >
            <span class="text-white text-xl font-bold">A</span>
          </div>
          <div>
            <HeadingGradient :level="2" size="3xl">
              antigravity
            </HeadingGradient>
            <p class="text-slate-500 text-sm">Mission Control · 浏览器自动化</p>
          </div>
        </div>
        <p class="text-slate-600">
          预算紧、白嫖顶级模型的个人开发者闭眼入。视觉化管理多 Agent
          异步工程任务。
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3
            class="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2"
          >
            <svg
              class="w-5 h-5 text-indigo-500"
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
            核心功能
          </h3>
          <div class="space-y-3">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="p-4 rounded-xl bg-white/60 border border-slate-200 hover:shadow-md transition-shadow"
            >
              <h4 class="font-semibold text-slate-800 mb-1">
                {{ feature.title }}
              </h4>
              <p class="text-sm text-slate-600">{{ feature.description }}</p>
            </div>
          </div>
        </div>
        <div>
          <h3
            class="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2"
          >
            <svg
              class="w-5 h-5 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            关键指标
          </h3>
          <div class="grid grid-cols-1 gap-4">
            <div
              v-for="(highlight, index) in highlights"
              :key="index"
              class="p-4 rounded-xl flex items-center justify-between"
              :class="{
                'bg-emerald-50 border border-emerald-100':
                  highlight.color === 'emerald',
                'bg-teal-50 border border-teal-100': highlight.color === 'teal',
                'bg-blue-50 border border-blue-100': highlight.color === 'blue',
              }"
            >
              <span class="text-slate-600">{{ highlight.label }}</span>
              <span
                class="font-bold"
                :class="{
                  'text-emerald-600': highlight.color === 'emerald',
                  'text-teal-600': highlight.color === 'teal',
                  'text-blue-600': highlight.color === 'blue',
                }"
                >{{ highlight.value }}</span
              >
            </div>
          </div>
          <div class="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <h4 class="font-semibold text-slate-800 mb-2">选型小贴士</h4>
            <p class="text-sm text-slate-600 leading-relaxed">
              antigravity
              提供了极其慷慨的免费额度，是个人开发者白嫖顶级模型、体验 Agent
              协同工作流的首选。
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
