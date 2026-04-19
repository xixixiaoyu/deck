<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
const features = [
  {
    title: 'Cascade Agent',
    description:
      '主动“思考 10 步 ahead”，运行终端命令、搜索网络并多文件顺序修改。',
  },
  {
    title: 'Flows 结构化序列',
    description: '支持开发过程的暂停与重放，实现高度可控的自动化重构。',
  },
  {
    title: '主动陪伴模式',
    description:
      '强调 AI 作为主动伙伴而非被动插件，在 2026 年初 Agent 流畅度榜首。',
  },
  {
    title: '权衡与局限',
    description:
      '配额制度（从信用制转向周/日限额）曾引发争议，需关注其稳定性。',
  },
]
const highlights = [
  { label: 'Agent 排名', value: '流畅度 Top 1', color: 'emerald' },
  { label: '选型建议', value: '预算敏感 · 复杂重构', color: 'cyan' },
  { label: '付费模式', value: 'Free / Pro $15-20', color: 'blue' },
]
</script>
<template>
  <Section>
    <Card padding="lg">
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
          >
            <span class="text-white text-xl">🌊</span>
          </div>
          <div>
            <HeadingGradient :level="2" size="3xl"> Windsurf </HeadingGradient>
            <p class="text-slate-500 text-sm">
              Cognition (原Codeium) · AI 先天 IDE
            </p>
          </div>
        </div>
        <p class="text-slate-600">
          预算敏感、追求心流开发的个人开发者或初创团队闭眼入。专注主动预测式开发。
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              class="w-5 h-5 text-blue-500"
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
                class="text-xl font-bold"
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
            class="p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"
          >
            <h4
              class="font-semibold text-slate-800 mb-2 flex items-center gap-2"
            >
              <svg
                class="w-4 h-4 text-cyan-500"
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
              核心优势
            </h4>
            <p class="text-sm text-slate-600">
              Arena Mode 并行模型对比，让开发者选择最佳方案
            </p>
          </div>
          <div class="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 class="font-semibold text-slate-800 mb-2">适用场景</h4>
            <p class="text-sm text-slate-600">
              Agentic工作流、需要模型对比的团队
            </p>
            <p class="text-xs text-slate-500 mt-2">
              免费层功能强大，适合预算有限的团队
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
