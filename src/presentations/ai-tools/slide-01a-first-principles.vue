<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'

defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const principles = [
  {
    title: '上下文理解深度',
    subtitle: 'Context Depth',
    description: '从单文件补全到全代码库感知，AI 对业务逻辑的深度索引能力。',
    icon: '🧠',
    color: 'blue',
  },
  {
    title: '执行自主性',
    subtitle: 'Execution Autonomy',
    description: '从被动建议到主动 Agent，能否自主规划并完成多文件变更与测试。',
    icon: '🤖',
    color: 'cyan',
  },
  {
    title: '工作流摩擦',
    subtitle: 'Workflow Friction',
    description: '工具与现有环境的融合度，是否需要改变开发者的肌肉记忆。',
    icon: '⚡',
    color: 'emerald',
  },
]
</script>

<template>
  <Section>
    <Card padding="lg" class="flex flex-col justify-center">
      <div class="mb-12 text-center">
        <div
          class="mb-2 text-sm font-semibold text-blue-500 uppercase tracking-widest"
        >
          First Principles
        </div>
        <HeadingGradient :level="2" size="5xl">
          第一性原理：重新定义工具优劣
        </HeadingGradient>
        <p class="mt-4 text-slate-500 text-xl max-w-3xl mx-auto">
          AI 不再是辅助插件，而是重新定义了开发者与代码对话的本质
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div
          v-for="(item, index) in principles"
          :key="index"
          class="group relative p-8 rounded-3xl border border-slate-200/60 bg-white/40 backdrop-blur-xl hover:bg-white/80 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
        >
          <div
            :class="[
              'w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3',
              item.color === 'blue'
                ? 'bg-blue-50 text-blue-600'
                : item.color === 'cyan'
                  ? 'bg-cyan-50 text-cyan-600'
                  : 'bg-emerald-50 text-emerald-600',
            ]"
          >
            {{ item.icon }}
          </div>
          <h3 class="text-2xl font-bold text-slate-800 mb-1">
            {{ item.title }}
          </h3>
          <div
            class="text-sm font-medium text-slate-400 mb-4 uppercase tracking-tighter"
          >
            {{ item.subtitle }}
          </div>
          <p class="text-slate-600 leading-relaxed">{{ item.description }}</p>

          <div
            class="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full"
            :class="[
              item.color === 'blue'
                ? 'bg-blue-500'
                : item.color === 'cyan'
                  ? 'bg-cyan-500'
                  : 'bg-emerald-500',
            ]"
          ></div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-500 text-sm font-medium border border-slate-200/60"
        >
          <span class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          2026 核心评估框架
        </div>
      </div>
    </Card>
  </Section>
</template>
