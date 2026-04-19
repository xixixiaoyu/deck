<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
interface Feature {
  id: number
  name: string
  description: string
  value: string
  examples: string
  color: string
}
const features: Feature[] = [
  {
    id: 1,
    name: '自主规划 (Autonomous Planning)',
    description: '不仅是补全，更是理解复杂意图并拆解为可执行的任务列表。',
    value: '解决复杂重构难题',
    examples: 'Cursor Composer, Windsurf Cascade, Claude Code',
    color: 'blue',
  },
  {
    id: 2,
    name: '全代码库深度感知',
    description: '毫秒级检索 10万+ 文件，理解跨模块调用与业务逻辑。',
    value: '彻底消除 AI 幻觉',
    examples: 'Augment Context Engine, Qoder Repo Wiki',
    color: 'cyan',
  },
  {
    id: 3,
    name: '终端与命令执行',
    description: 'Agent 可自主运行测试、安装依赖并根据输出迭代修复。',
    value: '实现开发闭环',
    examples: 'Claude Code, Windsurf, Trae Solo Mode',
    color: 'emerald',
  },
  {
    id: 4,
    name: 'Workspace 协作闭环',
    description: '从 GitHub Issue 直接生成 PR，自动审查并修复代码。',
    value: '极大降低协作摩擦',
    examples: 'GitHub Copilot Workspace, Codex Parallel Agent',
    color: 'amber',
  },
  {
    id: 5,
    name: '多模态与 Spec 驱动',
    description: '支持语音/图像输入，且“先出文档再编码”确保严谨性。',
    value: '工程标准与效率并重',
    examples: 'Comate, Kiro Spec Mode, CodeBuddy Sandbox',
    color: 'rose',
  },
]
const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
  },
  cyan: {
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    text: 'text-cyan-600',
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-600',
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-600',
  },
  rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-600' },
}
</script>
<template>
  <Section>
    <Card padding="lg">
      <div class="mb-6 text-center">
        <HeadingGradient :level="2" size="4xl">
          7大共有核心功能
        </HeadingGradient>
        <p class="mt-3 text-slate-600 text-lg">
          2026年主流AI编程工具的"标配能力"
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="p-4 rounded-xl border bg-white/60 backdrop-blur-sm hover:shadow-md transition-all duration-300"
          :class="[colorMap[feature.color].border]"
        >
          <div class="flex items-start gap-3">
            <div
              class="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
              :class="[
                colorMap[feature.color].bg,
                colorMap[feature.color].text,
              ]"
            >
              {{ feature.id }}
            </div>
            <div class="flex-1 min-w-0">
              <h3
                class="font-semibold text-slate-800 mb-1"
                :class="[colorMap[feature.color].text]"
              >
                {{ feature.name }}
              </h3>
              <p class="text-xs text-slate-600 mb-2">
                {{ feature.description }}
              </p>
              <div class="flex items-center gap-1 text-xs">
                <svg
                  class="w-3 h-3 text-emerald-500"
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
                <span class="text-slate-500">{{ feature.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 p-5 rounded-xl bg-slate-50 border border-slate-200">
        <h4 class="font-semibold text-slate-800 mb-3 flex items-center gap-2">
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
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          为什么这些功能"人人都有"？
        </h4>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600"
        >
          <div>
            <strong class="text-blue-600">技术收敛</strong
            >：大模型上下文窗口突破200K+ token，RAG与Agent框架成熟
          </div>
          <div>
            <strong class="text-cyan-600">开发者需求</strong
            >：80%+开发者最痛的是"重复劳动 + 上下文丢失"
          </div>
          <div>
            <strong class="text-emerald-600">生态压力</strong
            >：任何工具若缺失以上任意一项，都会被迅速边缘化
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
