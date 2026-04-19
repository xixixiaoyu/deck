<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'

defineProps<{ isActive?: boolean; isPreview?: boolean }>()

interface Tool {
  name: string
  desc: string
}

interface Tier {
  id: string
  label: string
  subLabel: string
  color: string
  tools: Tool[]
}

const tierData: Tier[] = [
  {
    id: '夯',
    label: '夯中之夯',
    subLabel: '深度工程化 / 极致硬核',
    color: 'bg-gradient-to-br from-red-600 to-red-800 shadow-red-200/50',
    tools: [
      { name: 'Claude Code', desc: '终端最强推理 Agent，Anthropic 原生加持' },
      { name: 'Augment', desc: '企业级性能怪兽，全链路上下文极速索引' },
    ],
  },
  {
    id: '顶级',
    label: '确实顶级',
    subLabel: '第一梯队 / 差异化神作',
    color:
      'bg-gradient-to-br from-orange-500 to-orange-700 shadow-orange-200/50',
    tools: [
      { name: 'Codex', desc: 'OpenAI 编程模型鼻祖，虽然低调但底蕴深厚' },
      { name: 'Qoder', desc: '代码知识图谱 + 深度工程化，重构与理解之王' },
    ],
  },
  {
    id: '人上人',
    label: '人上人选',
    subLabel: '进阶之选 / 主流神作',
    color: 'bg-gradient-to-br from-amber-400 to-amber-600 shadow-amber-200/50',
    tools: [
      { name: 'Cursor', desc: '目前公认的主流 T0，Composer 2.0 体验极佳' },
      { name: 'Windsurf', desc: 'Cascade 深度 Agent，心流预判与编排极强' },
    ],
  },
  {
    id: 'NPC',
    label: '众生相',
    subLabel: '常规插件 / 标准补全',
    color:
      'bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-emerald-200/50',
    tools: [
      { name: 'Trae', desc: '设计稿直出 + 深度中文优化，字节出品稳如 NPC' },
      { name: 'Comate', desc: '百度出品，稳健的补全与合规性落地选择' },
      { name: 'CodeBuddy', desc: '中规中矩的编程助手，适合基础场景辅助' },
      { name: 'Kiro', desc: '专注极致规范与代码审计，特定场景可用' },
    ],
  },
  {
    id: '待',
    label: '待升级',
    subLabel: '传统方案 / 建议迭代',
    color: 'bg-gradient-to-br from-slate-500 to-slate-700 shadow-slate-200/50',
    tools: [
      { name: '传统补全插件', desc: '基础单行补全，建议升级至 Agent 方案' },
    ],
  },
]
</script>

<template>
  <Section>
    <Card padding="lg" class="flex flex-col h-full">
      <div class="mb-8 text-center shrink-0">
        <HeadingGradient :level="2" size="4xl">
          AI 编程工具「夯拉榜」
        </HeadingGradient>
        <p class="mt-3 text-slate-500 text-lg font-medium">
          2026 开发者实用选型指南
        </p>
      </div>

      <div class="flex-grow space-y-3 overflow-y-auto pr-2 custom-scrollbar">
        <div
          v-for="tier in tierData"
          :key="tier.id"
          class="group flex items-stretch gap-4 rounded-2xl bg-white/50 border border-slate-100/80 hover:border-blue-200/50 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <!-- Tier Label -->
          <div
            class="w-32 shrink-0 flex flex-col items-center justify-center rounded-l-2xl text-white relative overflow-hidden"
            :class="tier.color"
          >
            <span
              class="text-4xl font-black italic relative z-10 drop-shadow-lg"
              >{{ tier.id }}</span
            >
            <span
              class="text-[11px] font-black tracking-widest mt-2 opacity-100 relative z-10 bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/10"
            >
              {{ tier.label }}
            </span>
          </div>

          <!-- Tier Content -->
          <div class="flex-grow p-4 flex flex-col justify-center">
            <div class="mb-2.5">
              <span
                class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]"
              >
                {{ tier.subLabel }}
              </span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              <div
                v-for="tool in tier.tools"
                :key="tool.name"
                class="flex flex-col p-3 rounded-xl bg-slate-50/50 border border-slate-100 hover:border-blue-100 hover:bg-white transition-all group/tool"
              >
                <div class="flex items-center gap-2 mb-1">
                  <span
                    class="font-bold text-slate-800 group-hover/tool:text-blue-600 transition-colors"
                  >
                    {{ tool.name }}
                  </span>
                </div>
                <p class="text-[11px] text-slate-500 leading-relaxed">
                  {{ tool.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #cbd5e1;
}
</style>
