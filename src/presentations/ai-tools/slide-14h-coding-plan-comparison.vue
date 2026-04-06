<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'

defineProps<{ isActive?: boolean; isPreview?: boolean }>()

interface CodingPlanRow {
  platform: string
  price: string
  proPrice: string
  quota5h: string
  models: string
  compatibility: string
  recommendation: string
  drawback: string
  color: string
}

const codingPlans: CodingPlanRow[] = [
  {
    platform: '阿里云百炼',
    price: '¥40 / 首月 ¥7.9',
    proPrice: '¥200',
    quota5h: '1200 / 6000',
    models: 'Qwen3.5-Plus, GLM-5, Kimi-K2.5, MiniMax-M2.5',
    compatibility: '最全 (Claude Code, Cursor, OpenClaw 等 10+)',
    recommendation: '预算党、多模型切换重度用户',
    drawback: 'Lite 已停新购；需用专用 Base URL',
    color: 'blue',
  },
  {
    platform: '智谱 GLM',
    price: '≈¥49 (普惠)',
    proPrice: '¥200+',
    quota5h: '≈80 / ≈400 prompts',
    models: 'GLM-5.1, GLM-5 (Pro/Max 专享), GLM-4.x 系列',
    compatibility: '最广 (20+ 款, 含 MCP 工具链)',
    recommendation: '追求工具生态、MCP 需求用户',
    drawback: '高峰期消耗 ×3；限售',
    color: 'purple',
  },
  {
    platform: '腾讯云',
    price: '¥40 / 秒杀 ¥7.9',
    proPrice: '¥200 / ¥39.9',
    quota5h: '1200 / 6000',
    models: 'GLM-5, Kimi-K2.5, MiniMax-M2.5, HY 2.0',
    compatibility: '主流全覆盖',
    recommendation: '喜欢秒杀优惠的用户',
    drawback: '无退款；额度滚动恢复需注意',
    color: 'indigo',
  },
  {
    platform: '百度千帆',
    price: '¥40',
    proPrice: '¥200',
    quota5h: '1200 / 6000',
    models: 'GLM-5, Kimi-K2.5, MiniMax-M2.5, DeepSeek-V3.2',
    compatibility: 'Claude Code 等主流',
    recommendation: '入门级稳定需求',
    drawback: '与腾讯类似，模型略少',
    color: 'cyan',
  },
  {
    platform: '火山方舟 (字节)',
    price: '¥40 / 首月 ≈¥8.9',
    proPrice: '-',
    quota5h: '1200 (约)',
    models: '6 款模型 + Auto 智能调度',
    compatibility: 'Anthropic 协议原生支持',
    recommendation: 'Claude Code 重度用户',
    drawback: '额度按 5 小时重置灵活',
    color: 'teal',
  },
  {
    platform: 'MiniMax',
    price: '¥29 (Starter)',
    proPrice: '-',
    quota5h: '高 (无周限额报道)',
    models: 'M2.5 / M2.5-highspeed (TPS >100)',
    compatibility: '主流工具',
    recommendation: '最便宜入门党',
    drawback: '模型单一；连续使用需关注',
    color: 'rose',
  },
]

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-50 border-blue-200 text-blue-800',
  purple: 'bg-purple-50 border-purple-200 text-purple-800',
  indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800',
  cyan: 'bg-cyan-50 border-cyan-200 text-cyan-800',
  teal: 'bg-teal-50 border-teal-200 text-teal-800',
  rose: 'bg-rose-50 border-rose-200 text-rose-800',
}
</script>

<template>
  <Section>
    <Card padding="lg">
      <div class="mb-6 text-center">
        <HeadingGradient :level="2" size="4xl"
          >2026 主流 Coding Plan 全景扫描</HeadingGradient
        >
        <p class="mt-2 text-slate-500 text-lg">
          数据来源: 各平台官方文档 + codingplan.org 社区汇总
        </p>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b-2 border-slate-200">
              <th
                class="py-3 px-4 text-sm font-bold text-slate-800 uppercase tracking-wider"
              >
                平台
              </th>
              <th
                class="py-3 px-4 text-sm font-bold text-slate-800 uppercase tracking-wider"
              >
                价格 (入门/Pro)
              </th>
              <th
                class="py-3 px-4 text-sm font-bold text-slate-800 uppercase tracking-wider"
              >
                5h 额度
              </th>
              <th
                class="py-3 px-4 text-sm font-bold text-slate-800 uppercase tracking-wider w-1/4"
              >
                核心模型
              </th>
              <th
                class="py-3 px-4 text-sm font-bold text-slate-800 uppercase tracking-wider"
              >
                推荐人群
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(plan, index) in codingPlans"
              :key="index"
              class="border-b border-slate-100 hover:bg-slate-50 transition-colors"
            >
              <td class="py-4 px-4 font-bold text-slate-900">
                {{ plan.platform }}
              </td>
              <td class="py-4 px-4">
                <div class="text-sm font-medium text-slate-800">
                  {{ plan.price }}
                </div>
                <div class="text-xs text-slate-500">{{ plan.proPrice }}</div>
              </td>
              <td class="py-4 px-4 text-sm font-medium text-blue-600">
                {{ plan.quota5h }}
              </td>
              <td class="py-4 px-4">
                <p class="text-xs text-slate-600 leading-snug">
                  {{ plan.models }}
                </p>
              </td>
              <td class="py-4 px-4">
                <span
                  class="inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold border"
                  :class="colorClasses[plan.color]"
                >
                  {{ plan.recommendation }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          class="p-4 rounded-xl bg-amber-50 border border-amber-200 flex gap-3"
        >
          <div class="p-2 bg-amber-500 rounded-lg text-white h-fit">
            <svg
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div>
            <h4 class="font-bold text-amber-900 mb-1">关键槽点 / 风险</h4>
            <ul class="text-xs text-amber-800 space-y-1">
              <li>• 阿里云: Lite 停新购，需配置专用 URL。</li>
              <li>• 智谱: 高峰期消耗翻倍，限售严重。</li>
              <li>• 腾讯/百度: 不支持退款，模型相对单一。</li>
            </ul>
          </div>
        </div>
        <div
          class="p-4 rounded-xl bg-blue-50 border border-blue-200 flex gap-3"
        >
          <div class="p-2 bg-blue-500 rounded-lg text-white h-fit">
            <svg
              class="w-5 h-5"
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
          </div>
          <div>
            <h4 class="font-bold text-blue-900 mb-1">工具兼容性亮点</h4>
            <p class="text-xs text-blue-800 leading-relaxed">
              智谱 GLM 支持 20+ 工具，含 MCP 协议。阿里百炼覆盖最全主流工具。
              火山方舟对 Anthropic 协议支持最佳，适合 Claude Code 重度用户。
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
