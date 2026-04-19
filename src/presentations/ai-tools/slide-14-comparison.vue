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
    subLabel: '极致 Agent / 深度架构理解',
    color: 'bg-gradient-to-br from-red-600 to-red-800 shadow-red-200/50',
    tools: [
      { name: 'Claude Code', desc: '终端最强推理大脑，SWE-Bench 80.9% 领跑者' },
      { name: 'Cursor', desc: 'AI 原生标杆，Composer 跨文件编辑 + Agent 模式' },
      { name: 'Windsurf', desc: 'Cascade Agent “提前10步思考”，心流体验极佳' },
    ],
  },
  {
    id: '顶级',
    label: '确实顶级',
    subLabel: '高性能索引 / 专业领域神作',
    color:
      'bg-gradient-to-br from-orange-500 to-orange-700 shadow-orange-200/50',
    tools: [
      { name: 'Augment', desc: '40万+文件索引，大型代码库重构的性能怪兽' },
      { name: 'Qoder', desc: 'Quest 模式 + Repo Wiki，擅长 10万级文件解析' },
      { name: 'Opencode', desc: '极客首选，支持 75+ 模型，完全自控与隐私' },
    ],
  },
  {
    id: '人上人',
    label: '主流之选',
    subLabel: '生态无缝 / 零成本起步',
    color: 'bg-gradient-to-br from-amber-400 to-amber-600 shadow-amber-200/50',
    tools: [
      { name: 'Trae', desc: '字节出品，“完全免费”的原生 IDE 颠覆者' },
      {
        name: 'GitHub Copilot',
        desc: '生态王者，Workspace 自动化 (Issue to PR)',
      },
      { name: 'Kiro', desc: 'Spec-Driven 规范驱动，AWS 生态深度集成' },
    ],
  },
  {
    id: 'NPC',
    label: '众生相',
    subLabel: '常规增强 / 垂直场景',
    color:
      'bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-emerald-200/50',
    tools: [
      { name: 'Comate', desc: '百度出品，43% 代码生成率，多模态交互领先' },
      { name: 'CodeBuddy', desc: '腾讯云一体化，设计转代码 + 沙箱执行' },
      {
        name: 'Antigravity',
        desc: 'Google 系 Agent-First 平台，双视图 Mission Control',
      },
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
