<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'

defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const stages = [
  {
    year: '2020-2022',
    title: '代码补全时代',
    subtitle: 'Assistant',
    description: '基于上下文的智能补全，提升输入效率',
    color: 'blue',
    features: ['行内提示', '函数补全', '语法感知'],
  },
  {
    year: '2023-2024',
    title: '智能助手时代',
    subtitle: 'Copilot',
    description: 'Chat 交互、代码生成、多文件理解',
    color: 'cyan',
    features: ['自然语言对话', '代码生成', '项目级上下文'],
  },
  {
    year: '2025-2026',
    title: 'Agentic 时代',
    subtitle: 'Partner',
    description: '理解全代码库、自主规划、运行终端命令并迭代优化',
    color: 'emerald',
    features: ['自主规划', '多文件重构', '终端执行与迭代'],
  },
]

const principles = [
  {
    title: '上下文理解深度',
    subtitle: 'Context Depth',
    description: '从单文件补全到全代码库感知',
    icon: '🧠',
    color: 'blue',
  },
  {
    title: '执行自主性',
    subtitle: 'Execution Autonomy',
    description: '从被动建议到主动 Agent',
    icon: '🤖',
    color: 'cyan',
  },
  {
    title: '工作流摩擦',
    subtitle: 'Workflow Friction',
    description: '工具与现有环境的融合度',
    icon: '⚡',
    color: 'emerald',
  },
]

const colorMap: Record<string, string> = {
  blue: 'bg-blue-500',
  cyan: 'bg-cyan-500',
  emerald: 'bg-emerald-500',
}

const textColorMap: Record<string, string> = {
  blue: 'text-blue-600',
  cyan: 'text-cyan-600',
  emerald: 'text-emerald-600',
}

const bgLightMap: Record<string, string> = {
  blue: 'bg-blue-50',
  cyan: 'bg-cyan-50',
  emerald: 'bg-emerald-50',
}
</script>

<template>
  <Section>
    <Card padding="lg">
      <div class="space-y-10">
        <div class="text-center">
          <HeadingGradient :level="2" size="4xl">
            AI 编程工具的演进历程
          </HeadingGradient>
          <p class="mt-3 text-slate-600 text-lg">
            从"代码补全"到"AI 搭档"的跨越式发展
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(stage, index) in stages"
            :key="index"
            class="relative rounded-2xl p-6 border border-slate-200/60 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                :class="[colorMap[stage.color], 'w-3 h-3 rounded-full']"
              ></div>
              <span class="text-sm font-medium text-slate-500">{{
                stage.year
              }}</span>
            </div>
            <h3 :class="[textColorMap[stage.color], 'text-xl font-bold mb-1']">
              {{ stage.title }}
            </h3>
            <div
              class="text-xs font-medium text-slate-400 mb-2 uppercase tracking-tighter"
            >
              {{ stage.subtitle }}
            </div>
            <p class="text-slate-600 text-sm mb-4">{{ stage.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(feature, fIndex) in stage.features"
                :key="fIndex"
                :class="[
                  bgLightMap[stage.color],
                  'px-2 py-1 rounded text-xs font-medium',
                  textColorMap[stage.color],
                ]"
              >
                {{ feature }}
              </span>
            </div>
          </div>
        </div>

        <div class="text-center py-6">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 via-cyan-50 to-emerald-50 border border-slate-200/60"
          >
            <span class="text-slate-500 text-sm font-medium"
              >基于演进历程，我们提炼出三个核心评估维度</span
            >
            <svg
              class="w-4 h-4 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        <div class="text-center mb-6">
          <div
            class="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-2"
          >
            First Principles
          </div>
          <HeadingGradient :level="3" size="3xl">
            第一性原理：重新定义工具优劣
          </HeadingGradient>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(item, index) in principles"
            :key="index"
            class="group relative p-6 rounded-2xl border border-slate-200/60 bg-white/40 backdrop-blur-xl hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
          >
            <div
              :class="[
                'w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm transition-transform duration-500 group-hover:scale-110',
                item.color === 'blue'
                  ? 'bg-blue-50 text-blue-600'
                  : item.color === 'cyan'
                    ? 'bg-cyan-50 text-cyan-600'
                    : 'bg-emerald-50 text-emerald-600',
              ]"
            >
              {{ item.icon }}
            </div>
            <h4 class="text-lg font-bold text-slate-800 mb-1">
              {{ item.title }}
            </h4>
            <div
              class="text-xs font-medium text-slate-400 mb-2 uppercase tracking-tighter"
            >
              {{ item.subtitle }}
            </div>
            <p class="text-slate-600 text-sm leading-relaxed">
              {{ item.description }}
            </p>

            <div
              class="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full"
              :class="[colorMap[item.color]]"
            ></div>
          </div>
        </div>

        <div class="text-center pt-4">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-500 text-sm font-medium border border-slate-200/60"
          >
            <span class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            2026 核心评估框架
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
