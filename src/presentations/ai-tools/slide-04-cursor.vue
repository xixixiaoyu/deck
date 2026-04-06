<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
const features = [
  {
    title: 'Tab 极致补全',
    description: '毫秒级感知意图，支持跨文件预测与 Copilot++ 丝滑心流体验',
  },
  {
    title: '工作流改变',
    description: '从“单行纠错”跃升为“全量委托”，支持 16+ 并行 Agent 协作',
  },
  {
    title: 'Composer 2 进化',
    description: '基于 Kimi K2.5 + RL 强化学习，支持 100+ 步长周期任务处理',
  },
  {
    title: '优缺点小结',
    description: '生态无缝、极致体验；但重度使用有软限，初学者有门槛',
  },
]
const highlights = [
  { label: '补全黑科技', value: 'Copilot++', color: 'blue' },
  { label: 'Agent 引擎', value: 'Composer 2', color: 'cyan' },
  { label: '订阅模式', value: 'Pro $20/月', color: 'emerald' },
]
</script>
<template>
  <Section>
    <Card padding="lg">
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center"
          >
            <span class="text-white text-xl font-bold">C</span>
          </div>
          <div>
            <HeadingGradient :level="2" size="3xl"> Cursor </HeadingGradient>
            <p class="text-slate-500 text-sm">
              Anysphere · AI 原生 VS Code 分支
            </p>
          </div>
        </div>
        <p class="text-slate-600">
          VS Code 重度用户首选。Copilot++ 极致补全与 Composer 2 强力 Agent
          驱动的完整 AI 原生 IDE。
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3
            class="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2"
          >
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
              class="w-5 h-5 text-cyan-500"
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
          <div class="grid grid-cols-3 gap-3 mb-6">
            <div
              v-for="(item, index) in highlights"
              :key="index"
              class="text-center p-4 rounded-xl border"
              :class="[
                item.color === 'blue' ? 'bg-blue-50 border-blue-200' : '',
                item.color === 'cyan' ? 'bg-cyan-50 border-cyan-200' : '',
                item.color === 'emerald'
                  ? 'bg-emerald-50 border-emerald-200'
                  : '',
              ]"
            >
              <div
                class="text-2xl font-bold"
                :class="[
                  item.color === 'blue' ? 'text-blue-600' : '',
                  item.color === 'cyan' ? 'text-cyan-600' : '',
                  item.color === 'emerald' ? 'text-emerald-600' : '',
                ]"
              >
                {{ item.value }}
              </div>
              <div class="text-xs text-slate-600 mt-1">{{ item.label }}</div>
            </div>
          </div>
          <div
            class="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-50 border border-blue-200"
          >
            <h4
              class="font-semibold text-slate-800 mb-2 flex items-center gap-2"
            >
              <svg
                class="w-4 h-4 text-blue-500"
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
              2026年更新
            </h4>
            <p class="text-sm text-slate-600">
              Composer 2 核心进化、新界面 3.0、Mission Control 网格预览
            </p>
          </div>
          <div class="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 class="font-semibold text-slate-800 mb-2">适用场景</h4>
            <p class="text-sm text-slate-600">全栈开发、重构、大型代码库</p>
            <p class="text-xs text-slate-500 mt-2">
              开发者反馈："每天省8-12小时"
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
