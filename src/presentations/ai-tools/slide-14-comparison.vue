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
    subLabel: '统治级 Agent / 绝对统治力',
    color: 'from-red-600 to-orange-600',
    tools: [
      { name: 'Cursor', desc: '目前的 T0 级神作，Composer 2.0 独领风骚' },
      { name: 'Windsurf', desc: 'Cascade 提前 10 步预判，心流体验拉满' },
    ],
  },
  {
    id: '顶级',
    label: '确实顶级',
    subLabel: '第一梯队 / 强力竞争者',
    color: 'from-orange-500 to-amber-500',
    tools: [
      { name: 'Trae', desc: '设计稿直出 + 深度中文优化，字节出品确实夯' },
      { name: 'Claude Code', desc: 'Anthropic 官方 Agent，终端推理之王' },
    ],
  },
  {
    id: '人上人',
    label: '人上人选',
    subLabel: '进阶之选 / 特定领域王者',
    color: 'from-amber-400 to-yellow-500',
    tools: [
      { name: 'Augment', desc: '极速索引与全链路安全，企业级性能怪兽' },
      { name: 'Comate', desc: '百度出品，合规与本土化结合最好的选择' },
    ],
  },
  {
    id: 'NPC',
    label: '众生相',
    subLabel: '中规中矩 / 稳健补全',
    color: 'from-emerald-500 to-teal-500',
    tools: [
      { name: 'Qoder', desc: '代码知识图谱，大型项目重构可用' },
      { name: 'Kiro', desc: '专注极致规范与代码审计' },
    ],
  },
  {
    id: '拉',
    label: '有点拉胯',
    subLabel: '落后时代 / 纯补全型',
    color: 'from-slate-400 to-slate-600',
    tools: [
      { name: '传统补全插件', desc: '还停留在单行补全时代，建议尽快升级' },
      { name: '自制极简脚本', desc: '适合极客折腾，生产力效率一般' },
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

      <div class="flex-grow space-y-4 overflow-y-auto pr-2 custom-scrollbar">
        <div
          v-for="tier in tierData"
          :key="tier.id"
          class="group flex items-stretch gap-4 rounded-2xl bg-white/40 border border-slate-100 hover:border-slate-200 transition-all duration-300"
        >
          <!-- Tier Label -->
          <div
            class="w-32 shrink-0 flex flex-col items-center justify-center rounded-l-2xl text-white shadow-lg relative overflow-hidden"
            :class="tier.color"
          >
            <div
              class="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"
            ></div>
            <span
              class="text-4xl font-black italic relative z-10 drop-shadow-md"
              >{{ tier.id }}</span
            >
            <span
              class="text-xs font-bold tracking-widest mt-2 opacity-90 relative z-10 bg-black/20 px-2 py-0.5 rounded"
            >
              {{ tier.label }}
            </span>
          </div>

          <!-- Tier Content -->
          <div class="flex-grow p-4 flex flex-col justify-center">
            <div class="mb-3">
              <span
                class="text-xs font-bold text-slate-400 uppercase tracking-widest"
              >
                {{ tier.subLabel }}
              </span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div
                v-for="tool in tier.tools"
                :key="tool.name"
                class="flex flex-col p-3 rounded-xl bg-white/80 border border-slate-100/50 hover:shadow-md transition-all group/tool"
              >
                <div class="flex items-center gap-2 mb-1">
                  <span
                    class="font-bold text-slate-800 group-hover/tool:text-blue-600 transition-colors"
                  >
                    {{ tool.name }}
                  </span>
                </div>
                <p class="text-xs text-slate-500 leading-relaxed">
                  {{ tool.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 shrink-0"
      >
        <div class="flex items-center gap-3 text-slate-600">
          <div class="p-1.5 bg-blue-100 rounded-lg text-blue-600">
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
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p class="text-xs leading-relaxed">
            <strong class="text-slate-800">选型逻辑：</strong>
            <span class="text-red-600 font-bold">「夯」</span>级看重全自动 Agent
            编排；
            <span class="text-orange-600 font-bold">「顶级」</span
            >看重特定场景的极致提效；
            <span class="text-emerald-600 font-bold">「NPC」</span
            >级主打稳健与合规。
          </p>
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
