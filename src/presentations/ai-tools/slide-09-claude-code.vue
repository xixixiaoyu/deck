<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
const features = [
  {
    title: '最强推理大脑',
    description: 'SWE-Bench 得分领跑（80.9%），1M 上下文，适合大型架构重构。',
  },
  {
    title: '终端原生执行',
    description: '全代码库理解、多文件重构与 git 自动提交，极致性能与速度。',
  },
  {
    title: '资深工程师思维',
    description: '让 AI 像资深工程师一样自主思考与行动，无视觉反馈干扰。',
  },
  {
    title: '权衡与局限',
    description: '学习曲线较陡，无免费层，Pro $20/月起（Max $100-200/月）。',
  },
]
const highlights = [
  { label: '基准测试', value: 'SWE-Bench 80.9%', color: 'emerald' },
  { label: '上下文', value: '1,000,000 Tokens', color: 'blue' },
  { label: '选型建议', value: '终端原住民 · 重构', color: 'cyan' },
]
</script>
<template>
  <Section>
    <Card padding="lg">
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center"
          >
            <span class="text-white text-xl">🤖</span>
          </div>
          <div>
            <HeadingGradient :level="2" size="3xl">
              Claude Code
            </HeadingGradient>
            <p class="text-slate-500 text-sm">
              Anthropic · 从补全助手到 Agent 团队的跨越
            </p>
          </div>
        </div>
        <p class="text-slate-600">
          基于 Agent Teams
          协作架构，将程序员从“代码搬运工”解放为“指挥官”。支持多 Agent
          并行执行，处理百万行代码库的深度重构。
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3
            class="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2"
          >
            <svg
              class="w-5 h-5 text-emerald-500"
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
              class="w-5 h-5 text-teal-500"
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
            class="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200"
          >
            <h4
              class="font-semibold text-slate-800 mb-2 flex items-center gap-2"
            >
              <svg
                class="w-4 h-4 text-emerald-500"
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
              Agent Teams 核心优势
            </h4>
            <p class="text-sm text-slate-600">
              队友间直接通信，自我协调任务，并行排查多重假设
            </p>
          </div>
          <div class="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 class="font-semibold text-slate-800 mb-2">协作体验</h4>
            <p class="text-sm text-slate-600">
              Lead 负责统筹，Subagents 负责攻坚，Context 极致隔离
            </p>
            <p class="text-xs text-slate-500 mt-2">
              专为复杂任务而生的“AI 研发小组”
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
