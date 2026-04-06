<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
const features = [
  {
    title: 'Builder模式',
    description: '自然语言一键生成完整项目框架+环境+测试',
  },
  {
    title: 'Chat模式',
    description: '全代码库对话，深度理解项目',
  },
  {
    title: '设计稿直出代码',
    description: 'Figma/设计稿直接转换为代码',
  },
  {
    title: 'SOLO智能体',
    description: '闭环式智能体，自主完成任务',
  },
]
const highlights = [
  { label: '定价', value: '免费', color: 'emerald' },
  { label: '定位', value: '国内首款AI原生IDE', color: 'blue' },
  { label: '效率', value: '提升50%', color: 'cyan' },
]
</script>
<template>
  <Section>
    <Card padding="lg">
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center"
          >
            <span class="text-white text-xl">🎯</span>
          </div>
          <div>
            <HeadingGradient :level="2" size="3xl"> Trae </HeadingGradient>
            <p class="text-slate-500 text-sm">字节跳动 · 国内首款AI原生IDE</p>
          </div>
        </div>
        <p class="text-slate-600">
          国内首款AI原生IDE，免费+豆包/DeepSeek原生支持，适合0-1项目
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3
            class="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2"
          >
            <svg
              class="w-5 h-5 text-red-500"
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
              class="w-5 h-5 text-rose-500"
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
            class="p-4 rounded-xl bg-gradient-to-r from-red-50 to-rose-50 border border-red-200"
          >
            <h4
              class="font-semibold text-slate-800 mb-2 flex items-center gap-2"
            >
              <svg
                class="w-4 h-4 text-red-500"
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
              豆包/DeepSeek原生支持，中文优化
            </p>
          </div>
          <div class="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 class="font-semibold text-slate-800 mb-2">适用场景</h4>
            <p class="text-sm text-slate-600">
              0-1项目、个人/初创团队、中文需求
            </p>
            <p class="text-xs text-slate-500 mt-2">实测效率提升50%</p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
