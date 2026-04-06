<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const features = [
  {
    title: 'AWS云原生集成',
    description: '资源分析、CLI命令生成、遗留Java/.NET现代化',
  },
  {
    title: 'Agentic任务',
    description: '/dev、/test、/review自动文档/测试/审查',
  },
  {
    title: '控制台故障诊断',
    description: '实时诊断与修复建议',
  },
  {
    title: '云迁移支持',
    description: '端到端云迁移方案',
  },
]

const highlights = [
  { label: '定价', value: '$19/月起', color: 'amber' },
  { label: '定位', value: 'AWS原生', color: 'indigo' },
  { label: '适用', value: 'AWS重度用户', color: 'emerald' },
]
</script>

<template>
  <Section>
    <Card padding="lg">
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center"
          >
            <span class="text-white text-xl">☁️</span>
          </div>
          <div>
            <HeadingGradient
              :level="2"
              size="3xl"
              palette="indigo-fuchsia-emerald"
            >
              Amazon Q Developer
            </HeadingGradient>
            <p class="text-slate-500 text-sm">原CodeWhisperer · AWS原生</p>
          </div>
        </div>
        <p class="text-slate-600">
          AWS重度用户的首选，云原生深度集成，支持云迁移项目
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3
            class="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2"
          >
            <svg
              class="w-5 h-5 text-orange-500"
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
              class="w-5 h-5 text-amber-500"
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
                item.color === 'indigo' ? 'bg-indigo-50 border-indigo-200' : '',
                item.color === 'amber' ? 'bg-amber-50 border-amber-200' : '',
                item.color === 'emerald'
                  ? 'bg-emerald-50 border-emerald-200'
                  : '',
              ]"
            >
              <div
                class="text-xl font-bold"
                :class="[
                  item.color === 'indigo' ? 'text-indigo-600' : '',
                  item.color === 'amber' ? 'text-amber-600' : '',
                  item.color === 'emerald' ? 'text-emerald-600' : '',
                ]"
              >
                {{ item.value }}
              </div>
              <div class="text-xs text-slate-600 mt-1">{{ item.label }}</div>
            </div>
          </div>

          <div
            class="p-4 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200"
          >
            <h4
              class="font-semibold text-slate-800 mb-2 flex items-center gap-2"
            >
              <svg
                class="w-4 h-4 text-orange-500"
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
              AWS云原生深度集成，遗留系统现代化
            </p>
          </div>

          <div class="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 class="font-semibold text-slate-800 mb-2">适用场景</h4>
            <p class="text-sm text-slate-600">AWS重度用户、云迁移项目</p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
