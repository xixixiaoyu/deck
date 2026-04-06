<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
const recommendations = [
  {
    title: '预算有限',
    description: '优先 Trae / antigravity / Opencode / Windsurf',
    icon: '💰',
    color: 'emerald',
  },
  {
    title: '追求规范/合规',
    description: 'Comate / Kiro / Augment',
    icon: '📏',
    color: 'blue',
  },
  {
    title: '大型项目/企业',
    description: 'Qoder / Codebuddy / Augment',
    icon: '🏢',
    color: 'cyan',
  },
  {
    title: '生态绑定',
    description: 'Copilot / Codebuddy / Codex',
    icon: '�',
    color: 'amber',
  },
  {
    title: '极致体验',
    description: 'Cursor / Claude Code',
    icon: '🚀',
    color: 'rose',
  },
]
const futureTrends = [
  {
    title: '多 Agent 协作',
    description: '从“人写代码”到“人管 Agent”的范式转移',
    color: 'blue',
  },
  {
    title: 'Vibe Coding',
    description: '自然语言直接构建，零代码闭环交付',
    color: 'emerald',
  },
  {
    title: '记忆持久化',
    description: '跨会话深度理解开发者偏好与业务上下文',
    color: 'cyan',
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
  rose: {
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-600',
  },
}
</script>
<template>
  <Section>
    <Card padding="lg">
      <div class="mb-6 text-center">
        <HeadingGradient :level="2" size="4xl"> 分享小贴士 </HeadingGradient>
        <p class="mt-3 text-slate-600 text-lg">
          如何根据不同场景选型 AI 编程工具
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <div
          v-for="(rec, index) in recommendations"
          :key="index"
          class="p-4 rounded-xl border bg-white/60 backdrop-blur-sm flex flex-col items-center text-center"
          :class="[colorMap[rec.color].border]"
        >
          <div class="mb-3">
            <span class="text-3xl">{{ rec.icon }}</span>
          </div>
          <h3
            class="font-semibold text-base mb-2"
            :class="[colorMap[rec.color].text]"
          >
            {{ rec.title }}
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            {{ rec.description }}
          </p>
        </div>
      </div>
      <div
        class="p-6 rounded-xl bg-gradient-to-r from-blue-50 via-cyan-50 to-emerald-50 border border-slate-200"
      >
        <h4 class="font-semibold text-slate-800 mb-4 flex items-center gap-2">
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
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          未来趋势（2026已见端倪）
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            v-for="(trend, index) in futureTrends"
            :key="index"
            class="p-4 rounded-lg border bg-white/60"
            :class="[colorMap[trend.color].border]"
          >
            <h5
              class="font-semibold mb-1"
              :class="[colorMap[trend.color].text]"
            >
              {{ trend.title }}
            </h5>
            <p class="text-xs text-slate-600">{{ trend.description }}</p>
          </div>
        </div>
      </div>
      <div class="mt-6 p-5 rounded-xl bg-slate-50 border border-slate-200">
        <h4 class="font-semibold text-slate-800 mb-3 flex items-center gap-2">
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
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          日常工作流建议
        </h4>
        <p class="text-sm text-slate-600 leading-relaxed">
          先用<strong class="text-blue-600">Chat + 项目上下文</strong
          >快速理解陌生代码库， 再用<strong class="text-cyan-600"
            >补全 + 重构</strong
          >高效迭代， 最后让AI生成<strong class="text-emerald-600"
            >测试闭环</strong
          >—— 这套组合在所有工具里都通用，可直接节省每天8-12小时。
        </p>
      </div>
    </Card>
  </Section>
</template>
