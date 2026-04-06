<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const features = [
  {
    title: 'Plan + Build 双模式',
    description:
      'Tab键切换，先规划（Plan），再执行构建（Build），每步改码/跑命令都可审批',
  },
  {
    title: '75+ 模型任意选',
    description:
      '免费模型内置 + Models.dev支持（Claude、GPT、Gemini、本地Ollama等）',
  },
  {
    title: '多平台零锁死',
    description:
      'TUI终端 + VS Code/Cursor扩展 + 桌面App Beta（macOS/Windows/Linux）',
  },
  {
    title: '隐私第一',
    description:
      '不存储任何代码/上下文，支持LSP自动加载、多会话并行、undo/redo',
  },
]

const highlights = [
  { label: 'GitHub Stars', value: '120K+', color: 'orange' },
  { label: '月活用户', value: '5M+', color: 'amber' },
  { label: '贡献者', value: '800+', color: 'red' },
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
            <span class="text-white text-xl font-bold">O</span>
          </div>
          <div>
            <HeadingGradient
              :level="2"
              size="3xl"
              palette="indigo-fuchsia-emerald"
            >
              OpenCode
            </HeadingGradient>
            <p class="text-slate-500 text-sm">开源 · 隐私至上 · 终端优先</p>
          </div>
        </div>
        <p class="text-slate-600">
          开源、隐私至上、终端优先的"瑞士军刀"AI编码Agent——让你在终端、IDE或桌面App里像指挥"AI实习生"一样工作
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
                item.color === 'orange' ? 'bg-orange-50 border-orange-200' : '',
                item.color === 'amber' ? 'bg-amber-50 border-amber-200' : '',
                item.color === 'red' ? 'bg-red-50 border-red-200' : '',
              ]"
            >
              <div
                class="text-xl font-bold"
                :class="[
                  item.color === 'orange' ? 'text-orange-600' : '',
                  item.color === 'amber' ? 'text-amber-600' : '',
                  item.color === 'red' ? 'text-red-600' : '',
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
              独特优势
            </h4>
            <p class="text-sm text-slate-600">
              完全免费（仅付所选模型API费），curl一键安装，与Kilo Code
              CLI无缝衔接
            </p>
          </div>

          <div class="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 class="font-semibold text-slate-800 mb-2">适用场景</h4>
            <p class="text-sm text-slate-600">
              终端重度用户、追求零成本/零厂商锁定、想快速原型或日常迭代的个人开发者
            </p>
            <p class="text-xs text-slate-500 mt-2">
              建议：先试用OpenCode（零成本），再根据项目规模切换其他工具
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
