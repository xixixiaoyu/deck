<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
interface ComparisonRow {
  scenario: string
  tool: string
  reason: string
  color: string
}
const comparisonData: ComparisonRow[] = [
  {
    scenario: '极致体验/Agent 驱动',
    tool: 'Cursor / Claude Code',
    reason: 'Composer / 80.8% SWE-bench',
    color: 'blue',
  },
  {
    scenario: '心流/主动预测',
    tool: 'Windsurf',
    reason: 'Cascade 提前 10 步思考',
    color: 'cyan',
  },
  {
    scenario: '追求规范/合规',
    tool: 'Comate / Kiro / Augment',
    reason: 'SPEC 驱动 / 审计追踪',
    color: 'emerald',
  },
  {
    scenario: '大型项目/企业级',
    tool: 'Qoder / Codebuddy / Augment',
    reason: '知识图谱 / 全链路安全',
    color: 'amber',
  },
  {
    scenario: '中文优化/UI 重度',
    tool: 'Trae',
    reason: '设计稿直出 / 永久免费',
    color: 'rose',
  },
  {
    scenario: '预算有限/极客',
    tool: 'antigravity / Opencode',
    reason: '顶级模型白嫖 / 开源自管',
    color: 'blue',
  },
]
const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 border-blue-200 text-blue-700',
  cyan: 'bg-cyan-50 border-cyan-200 text-cyan-700',
  emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700',
  amber: 'bg-amber-50 border-amber-200 text-amber-700',
  rose: 'bg-rose-50 border-rose-200 text-rose-700',
}
</script>
<template>
  <Section>
    <Card padding="lg">
      <div class="mb-6 text-center">
        <HeadingGradient :level="2" size="4xl"> 快速对比建议 </HeadingGradient>
        <p class="mt-3 text-slate-600 text-lg">2026年实用选型指南</p>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b-2 border-slate-200">
              <th
                class="text-left py-3 px-4 text-sm font-semibold text-slate-700"
              >
                场景
              </th>
              <th
                class="text-left py-3 px-4 text-sm font-semibold text-slate-700"
              >
                首选工具
              </th>
              <th
                class="text-left py-3 px-4 text-sm font-semibold text-slate-700"
              >
                理由
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, index) in comparisonData"
              :key="index"
              class="border-b border-slate-100 hover:bg-slate-50 transition-colors"
            >
              <td class="py-3 px-4">
                <span class="font-medium text-slate-800">{{
                  row.scenario
                }}</span>
              </td>
              <td class="py-3 px-4">
                <span
                  class="inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium border"
                  :class="colorMap[row.color]"
                >
                  {{ row.tool }}
                </span>
              </td>
              <td class="py-3 px-4 text-sm text-slate-600">
                {{ row.reason }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="mt-6 p-5 rounded-xl bg-gradient-to-r from-blue-50 via-cyan-50 to-emerald-50 border border-slate-200"
      >
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
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          选型提示
        </h4>
        <p class="text-sm text-slate-600 leading-relaxed">
          根据团队规模、预算、隐私要求和技术栈选择合适的工具。
          <strong class="text-blue-600">AI原生IDE</strong> 适合追求极致体验；
          <strong class="text-cyan-600">IDE扩展</strong>
          适合无缝融入现有工作流；
          <strong class="text-emerald-600">Terminal CLI</strong>
          适合复杂推理场景。
        </p>
      </div>
    </Card>
  </Section>
</template>
