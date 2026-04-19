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
    proPrice: 'Pro ¥200',
    quota5h: '1200 / 6000 (次)',
    models: 'Qwen3.5, GLM-5, Kimi-K2.5, MiniMax-M2.5',
    compatibility: '聚合型，模型最全，底座稳定',
    recommendation: '新手薅羊毛、多模型切换',
    drawback: '文档偏简、无退订、仅限主账号',
    color: 'blue',
  },
  {
    platform: '火山方舟 (字节)',
    price: '¥40 / 首月 ≈¥8.9',
    proPrice: '-',
    quota5h: '1200 / 9000 (周)',
    models: 'Doubao-Seed, DeepSeek-V3.2, GLM-4.7',
    compatibility: 'Auto 智能调度，两步配置极简',
    recommendation: '追求“模型自由”的中度开发者',
    drawback: '高峰偶发 429 错误、响应偏慢',
    color: 'teal',
  },
  {
    platform: '智谱 GLM',
    price: '¥49 / ¥200 / ¥500',
    proPrice: 'Lite / Pro / Max',
    quota5h: '80 / 400 (Prompts)',
    models: 'GLM-5.1, GLM-5-Turbo (推理/工具 SOTA)',
    compatibility: '20+ 工具，附赠 MCP 联网/视觉',
    recommendation: '极致代码质量、复杂 Agent 场景',
    drawback: '高峰消耗 ×3；无首购优惠',
    color: 'purple',
  },
  {
    platform: 'MiniMax',
    price: '¥29 / ¥49',
    proPrice: 'Starter / Plus',
    quota5h: '无周限额 (5h 刷新)',
    models: 'M2.5 / M2.5-highspeed (100+ TPS)',
    compatibility: '额度倍率高，响应极速',
    recommendation: '预算敏感、高强度稳定输出',
    drawback: '模型单一；Plus 包含多模态',
    color: 'rose',
  },
  {
    platform: 'Kimi (月之暗面)',
    price: '¥49 / ¥199',
    proPrice: 'Andante / Allegretto',
    quota5h: '按 Token 计量 (1T 参数)',
    models: 'Kimi-K2.5 (256K 上下文 + 视觉原生)',
    compatibility: '擅长 Vibe Coding 与 Agent 集群',
    recommendation: '视觉理解、复杂多轮交互',
    drawback: '工具限制严，有封号风险',
    color: 'indigo',
  },
  {
    platform: '聚合型/其他',
    price: '¥19.9 起',
    proPrice: '腾讯、百度、无问芯穹',
    quota5h: '模型覆盖广',
    models: 'Qwen, DeepSeek, GLM 等全家桶',
    compatibility: '极致性价比，适合轻量脚本',
    recommendation: '极致预算控、低频补充',
    drawback: '性能略有波动',
    color: 'cyan',
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
