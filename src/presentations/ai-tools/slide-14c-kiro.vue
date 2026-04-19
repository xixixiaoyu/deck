<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
const features = [
  {
    title: 'Spec-Driven 开发',
    description: '先生成需求、设计文档与任务列表再编码，避免“直接上手”的混乱。',
  },
  {
    title: 'MCP 支持极强',
    description:
      '深度支持 Model Context Protocol (MCP)，扩展 AI 交互能力边界。',
  },
  {
    title: 'Vibe 与 Spec 模式',
    description: '双模式切换：Vibe 追求极致速度，Spec 追求严谨的结构化交付。',
  },
  {
    title: '权衡与局限',
    description: '主要面向 AWS 生态团队，第三方模型（除 Claude 外）选择受限。',
  },
]
const highlights = [
  { label: '核心哲学', value: 'Spec-Driven', color: 'cyan' },
  { label: '选型建议', value: 'AWS 生态 / 架构先行', color: 'teal' },
  { label: '付费模式', value: 'Pro $20/月 (信用制)', color: 'blue' },
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
            <span class="text-white text-xl font-bold">K</span>
          </div>
          <div>
            <HeadingGradient :level="2" size="3xl"> Kiro </HeadingGradient>
            <p class="text-slate-500 text-sm">
              AWS 系 · Spec 规范驱动 Agent IDE
            </p>
          </div>
        </div>
        <p class="text-slate-600">
          AWS 用户、追求结构化规范的团队/受监管行业闭眼入。Vibe 与 Spec
          双模式切换，极致的可追溯性。
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
                item.color === 'cyan' ? 'bg-cyan-50 border-cyan-200' : '',
                item.color === 'teal' ? 'bg-teal-50 border-teal-200' : '',
                item.color === 'blue' ? 'bg-blue-50 border-blue-200' : '',
              ]"
            >
              <div
                class="text-xl font-bold"
                :class="[
                  item.color === 'cyan' ? 'text-cyan-600' : '',
                  item.color === 'teal' ? 'text-teal-600' : '',
                  item.color === 'blue' ? 'text-blue-600' : '',
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
              独特优势
            </h4>
            <p class="text-sm text-slate-600">
              结构化最强，代码质量与可维护性高；VS Code fork兼容Open
              VSX插件/主题/设置
            </p>
          </div>
          <div class="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 class="font-semibold text-slate-800 mb-2">适用场景</h4>
            <p class="text-sm text-slate-600">
              需要严谨架构、大型项目或团队协作的开发者；特别适合从0到1避免混乱的场景
            </p>
            <p class="text-xs text-slate-500 mt-2">
              注意：学习曲线稍陡（需适应Spec流程）
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
