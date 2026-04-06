<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

interface ToolInfo {
  name: string
  tag: string
  tagClass: string
  dotClass: string
  bgClass: string
  borderClass: string
  textClass: string
  desc: string
  features: string[]
}

const tools: ToolInfo[] = [
  {
    name: 'Cline',
    tag: '稳定王者',
    tagClass: 'bg-blue-200 text-blue-800',
    dotClass: 'bg-blue-500',
    bgClass: 'bg-gradient-to-br from-blue-50 to-blue-100',
    borderClass: 'border-blue-200',
    textClass: 'text-blue-700',
    desc: '开源Agentic编码Agent的"起源之作"，强调稳定、可控、零厂商锁定',
    features: [
      'Plan+Act双模式',
      '工具调用全家桶',
      'MCP市场扩展',
      '跨平台支持',
      'BYO API密钥',
    ],
  },
  {
    name: 'Roo Code',
    tag: '进阶fork',
    tagClass: 'bg-green-200 text-green-800',
    dotClass: 'bg-green-500',
    bgClass: 'bg-gradient-to-br from-green-50 to-green-100',
    borderClass: 'border-green-200',
    textClass: 'text-green-700',
    desc: 'Cline的"进阶fork"，主打多模式+高度自定义，像"AI开发团队"直接住在编辑器里',
    features: [
      '多Persona模式',
      '任务记忆重构',
      'Agentic深度',
      '社区驱动',
      '模型自由',
    ],
  },
  {
    name: 'Kilo Code',
    tag: '集大成',
    tagClass: 'bg-purple-200 text-purple-800',
    dotClass: 'bg-purple-500',
    bgClass: 'bg-gradient-to-br from-purple-50 to-purple-100',
    borderClass: 'border-purple-200',
    textClass: 'text-purple-700',
    desc: '当前"最热门开源Agent"，融合Cline稳定+Roo Code多模式的"集大成者"',
    features: [
      '5+智能模式',
      '全流程Agent',
      'MCP Server市场',
      '跨平台极致',
      '500+模型支持',
    ],
  },
]

const comparisonRows = [
  {
    dim: '起源',
    cline: '原创开源Agent',
    roo: 'Cline的fork',
    kilo: 'Roo Code的fork',
  },
  {
    dim: '模式系统',
    cline: 'Plan+Act基础',
    roo: '多Persona丰富',
    kilo: '5+智能模式最强',
  },
  {
    dim: '上下文',
    cline: '优秀',
    roo: '优秀+任务记忆',
    kilo: '自动压缩+Context7',
  },
  { dim: '扩展性', cline: 'MCP市场', roo: '高度自定义', kilo: 'MCP+零门槛' },
  { dim: '热度', cline: '5M+稳定王者', roo: '社区活跃', kilo: 'OpenRouter #1' },
  { dim: '上手难度', cline: '最低', roo: '中等', kilo: '最低零障碍' },
  { dim: '定价', cline: '完全免费', roo: '免费', kilo: '免费+可选Pass' },
  {
    dim: '最佳人群',
    cline: '追求稳定控制',
    roo: '爱自定义/复杂项目',
    kilo: '所有人首选',
  },
]

const colorMap: Record<string, string> = {
  cline: 'bg-blue-100 border-blue-300 text-blue-800',
  roo: 'bg-green-100 border-green-300 text-green-800',
  kilo: 'bg-purple-100 border-purple-300 text-purple-800',
}
</script>

<template>
  <Section>
    <Card padding="md">
      <div class="mb-4 text-center">
        <HeadingGradient :level="2" size="3xl" palette="indigo-fuchsia-emerald">
          开源 Agent 三剑客
        </HeadingGradient>
        <p class="mt-2 text-slate-600 text-base">
          Cline、Roo Code、Kilo Code - 2026年自主编码Agent对比
        </p>
      </div>

      <!-- 三列工具介绍 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div
          v-for="tool in tools"
          :key="tool.name"
          :class="[tool.bgClass, tool.borderClass]"
          class="rounded-xl p-4 border"
        >
          <div class="flex items-center gap-2 mb-2">
            <div :class="tool.dotClass" class="w-2.5 h-2.5 rounded-full"></div>
            <h3 class="text-lg font-bold" :class="tool.textClass">
              {{ tool.name }}
            </h3>
            <span
              :class="tool.tagClass"
              class="text-xs px-2 py-0.5 rounded-full"
              >{{ tool.tag }}</span
            >
          </div>
          <p class="text-sm mb-3" :class="tool.textClass">{{ tool.desc }}</p>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="feat in tool.features"
              :key="feat"
              class="text-xs px-2 py-0.5 rounded bg-white/60"
              :class="tool.textClass"
            >
              {{ feat }}
            </span>
          </div>
        </div>
      </div>

      <!-- 对比表格 -->
      <div class="mb-4">
        <h3 class="text-lg font-bold text-slate-800 mb-3 text-center">
          三者快速对比
        </h3>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-slate-200">
                <th class="text-left py-2 px-3 font-semibold text-slate-700">
                  维度
                </th>
                <th class="text-left py-2 px-3 font-semibold text-slate-700">
                  Cline
                </th>
                <th class="text-left py-2 px-3 font-semibold text-slate-700">
                  Roo Code
                </th>
                <th class="text-left py-2 px-3 font-semibold text-slate-700">
                  Kilo Code
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in comparisonRows"
                :key="row.dim"
                class="border-b border-slate-100 hover:bg-slate-50"
              >
                <td class="py-2 px-3 font-medium text-slate-800">
                  {{ row.dim }}
                </td>
                <td class="py-2 px-3">
                  <span
                    class="inline-block px-2 py-0.5 rounded text-xs border"
                    :class="colorMap.cline"
                  >
                    {{ row.cline }}
                  </span>
                </td>
                <td class="py-2 px-3">
                  <span
                    class="inline-block px-2 py-0.5 rounded text-xs border"
                    :class="colorMap.roo"
                  >
                    {{ row.roo }}
                  </span>
                </td>
                <td class="py-2 px-3">
                  <span
                    class="inline-block px-2 py-0.5 rounded text-xs border"
                    :class="colorMap.kilo"
                  >
                    {{ row.kilo }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 核心结论 -->
      <div
        class="p-4 rounded-xl bg-gradient-to-r from-blue-50 via-green-50 to-purple-50 border border-slate-200"
      >
        <h4
          class="font-semibold text-slate-800 mb-2 flex items-center gap-2 text-sm"
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
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          核心结论
        </h4>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-700"
        >
          <div>
            <strong class="text-blue-600">想最稳、最简单</strong> →
            <strong>Cline</strong>
          </div>
          <div>
            <strong class="text-green-600">需要多角色协作</strong> →
            <strong>Roo Code</strong>
          </div>
          <div>
            <strong class="text-purple-600">最强开源Agent</strong> →
            <strong>Kilo Code</strong>
          </div>
        </div>
        <p class="text-xs text-slate-600 mt-2">
          💡 建议先装
          <strong>Kilo Code</strong> 试用，支持直接导入Cline/Roo配置，零迁移成本
        </p>
      </div>
    </Card>
  </Section>
</template>
