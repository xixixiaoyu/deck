<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
const features = [
  {
    title: '多模态协作编码',
    description: '支持图像、语音等多种输入形态，实现多智能体协同办公。',
  },
  {
    title: '高代码生成率',
    description: '2025 年内部数据显示，已在百度内部实现 43% 的代码生成率。',
  },
  {
    title: '深度中文优化',
    description: '针对中文语义与中国开发者习惯深度优化，符合国内安全合规。',
  },
  {
    title: '权衡与局限',
    description: '目前定价细节尚不完全透明，国际模型生态集成仍在追赶中。',
  },
]
const highlights = [
  { label: '代码生成率', value: '内部实测 43%', color: 'emerald' },
  { label: '选型建议', value: '中文场景 · 安全合规', color: 'blue' },
  { label: '特色', value: '多模态 (语音/图)', color: 'cyan' },
]
</script>
<template>
  <Section>
    <Card padding="lg">
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center"
          >
            <span class="text-white text-xl">📝</span>
          </div>
          <div>
            <HeadingGradient :level="2" size="3xl">
              文心快码（Comate）
            </HeadingGradient>
            <p class="text-slate-500 text-sm">百度 · 独立 AI 原生 IDE / 插件</p>
          </div>
        </div>
        <p class="text-slate-600">
          注重规范、安全、工程化的团队/学生/合规项目闭眼入。SPEC
          规范驱动，行业首个多模态、多智能体协同的独立 AI 原生 IDE。
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
            class="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200"
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
              核心优势
            </h4>
            <p class="text-sm text-slate-600">SPEC规范驱动，极大抑制幻觉</p>
          </div>
          <div class="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 class="font-semibold text-slate-800 mb-2">适用场景</h4>
            <p class="text-sm text-slate-600">企业级、金融/政务严谨场景</p>
            <p class="text-xs text-slate-500 mt-2">个人版完全免费</p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
