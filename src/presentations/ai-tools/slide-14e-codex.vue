<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
const features = [
  {
    title: '核心差异点',
    description: '多模态 + 定时任务 + 批量处理，ChatGPT 生态无缝',
  },
  {
    title: '工作流改变',
    description: 'AI 可自主运行长期/重复任务，程序员像“指挥官”下达战略指令',
  },
  {
    title: '云端沙盒执行',
    description: 'OpenAI CLI/桌面 Agent，隔离环境中读写文件与跑测试',
  },
  {
    title: '优缺点小结',
    description: '生态最成熟；但依赖 OpenAI 模型，定价随之波动',
  },
]
const highlights = [
  { label: '付费模式', value: '$20/月起', color: 'emerald' },
  { label: '选型建议', value: 'OpenAI 生态用户', color: 'teal' },
  { label: '集成', value: 'ChatGPT Plus 内含', color: 'green' },
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
            <span class="text-white text-xl font-bold">C</span>
          </div>
          <div>
            <HeadingGradient :level="2" size="3xl"> Codex </HeadingGradient>
            <p class="text-slate-500 text-sm">OpenAI · CLI/桌面 Agent 平台</p>
          </div>
        </div>
        <p class="text-slate-600">
          OpenAI
          生态用户、后端批量/定时任务开发者闭眼入。主打云端沙盒执行与长期任务自动化。
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
                item.color === 'emerald'
                  ? 'bg-emerald-50 border-emerald-200'
                  : '',
                item.color === 'teal' ? 'bg-teal-50 border-teal-200' : '',
                item.color === 'green' ? 'bg-green-50 border-green-200' : '',
              ]"
            >
              <div
                class="text-xl font-bold"
                :class="[
                  item.color === 'emerald' ? 'text-emerald-600' : '',
                  item.color === 'teal' ? 'text-teal-600' : '',
                  item.color === 'green' ? 'text-green-600' : '',
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
              独特优势
            </h4>
            <p class="text-sm text-slate-600">
              并行能力与生产级交付最强，代码风格贴近人类；深度集成OpenAI生态 +
              无限并行 + 企业级沙箱安全
            </p>
          </div>
          <div class="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 class="font-semibold text-slate-800 mb-2">适用场景</h4>
            <p class="text-sm text-slate-600">
              中大型项目、并行开发、GitHub重度用户、想"fire-and-forget"委托任务的团队
            </p>
            <p class="text-xs text-slate-500 mt-2">
              控制模式：Chat → Agent（需审批）→ Full Access（全自主）
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
