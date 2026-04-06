<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const features = [
  {
    title: 'Tab (Supermaven)',
    description: '高级自动补全，下一动作预测，速度与精准度领先',
  },
  {
    title: 'Agent Mode / Composer 2',
    description: '自然语言驱动多文件编辑、并行Agent、自主构建-测试-演示全流程',
  },
  {
    title: '完整代码库索引',
    description: '语义搜索 + 背景Agent（云端/自托管）',
  },
  {
    title: '多模型灵活切换',
    description: 'OpenAI、Anthropic、Gemini、xAI等 + 插件市场',
  },
]

const highlights = [
  { label: '市场份额', value: '18%', color: 'indigo' },
  { label: '定价', value: '$20/月', color: 'fuchsia' },
  { label: '评价', value: 'AI原生IDE标杆', color: 'emerald' },
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
            <span class="text-white text-xl font-bold">C</span>
          </div>
          <div>
            <HeadingGradient
              :level="2"
              size="3xl"
              palette="indigo-fuchsia-emerald"
            >
              Cursor
            </HeadingGradient>
            <p class="text-slate-500 text-sm">Anysphere · VS Code fork</p>
          </div>
        </div>
        <p class="text-slate-600">
          AI原生IDE标杆，市场份额约18%，被誉为"切换即生产力跃升"的最佳选择
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
              class="w-5 h-5 text-fuchsia-500"
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
                item.color === 'fuchsia'
                  ? 'bg-fuchsia-50 border-fuchsia-200'
                  : '',
                item.color === 'emerald'
                  ? 'bg-emerald-50 border-emerald-200'
                  : '',
              ]"
            >
              <div
                class="text-2xl font-bold"
                :class="[
                  item.color === 'indigo' ? 'text-indigo-600' : '',
                  item.color === 'fuchsia' ? 'text-fuchsia-600' : '',
                  item.color === 'emerald' ? 'text-emerald-600' : '',
                ]"
              >
                {{ item.value }}
              </div>
              <div class="text-xs text-slate-600 mt-1">{{ item.label }}</div>
            </div>
          </div>

          <div
            class="p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200"
          >
            <h4
              class="font-semibold text-slate-800 mb-2 flex items-center gap-2"
            >
              <svg
                class="w-4 h-4 text-indigo-500"
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
              新界面3.0、Mission Control网格预览
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
