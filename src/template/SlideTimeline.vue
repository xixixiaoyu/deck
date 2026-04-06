<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ isActive?: boolean; isPreview?: boolean }>()

type Status = 'done' | 'in_progress' | 'planned'

const milestones: {
  label: string
  title: string
  description: string
  status: Status
}[] = [
  {
    label: '2025 Q1',
    title: '基础架构',
    description: '完成 Vue 3 + Tailwind 的高性能演示容器。',
    status: 'done',
  },
  {
    label: '2025 Q2',
    title: '标准模板',
    description: '提供 30+ 种通用页型，支持动态数据。',
    status: 'done',
  },
  {
    label: '2025 Q3',
    title: '高级互动',
    description: '支持投票、测验、远程控制等高级互动。',
    status: 'in_progress',
  },
  {
    label: '2025 Q4',
    title: '生态建设',
    description: '开放插件接口，沉淀最佳实践与主题。',
    status: 'planned',
  },
]

const layout = ref<'vertical' | 'horizontal'>('horizontal')

const statusGradient = (s: Status) =>
  s === 'done'
    ? 'from-emerald-400 to-emerald-600'
    : s === 'in_progress'
      ? 'from-accent/80 to-accent/60'
      : 'from-slate-200 to-slate-300'

const statusChip = (s: Status) =>
  s === 'done'
    ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
    : s === 'in_progress'
      ? 'bg-accent/10 text-accent border-accent/20'
      : 'bg-slate-50 text-slate-500 border-slate-100'
</script>

<template>
  <section class="h-full w-full p-12 flex flex-col gap-12 overflow-hidden">
    <div class="flex items-end justify-between">
      <div class="space-y-2">
        <h2 class="text-4xl font-black tracking-tight text-slate-900">
          发展历程
        </h2>
        <p class="text-lg text-slate-500 font-medium">
          清晰的时间轴展示，助力叙事节奏
        </p>
      </div>

      <div
        class="flex gap-1.5 p-1.5 rounded-2xl bg-slate-100/50 border border-slate-200/50 shadow-inner"
      >
        <button
          @click="layout = 'horizontal'"
          class="px-4 py-2 rounded-xl text-xs font-bold transition-all"
          :class="
            layout === 'horizontal'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          "
        >
          水平布局
        </button>
        <button
          @click="layout = 'vertical'"
          class="px-4 py-2 rounded-xl text-xs font-bold transition-all"
          :class="
            layout === 'vertical'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          "
        >
          垂直布局
        </button>
      </div>
    </div>

    <div class="flex-1 flex items-center justify-center">
      <!-- 水平布局 -->
      <div v-if="layout === 'horizontal'" class="w-full relative px-12">
        <div
          class="absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2"
        ></div>
        <div class="grid grid-cols-4 gap-8 relative">
          <div
            v-for="(m, i) in milestones"
            :key="i"
            class="group flex flex-col items-center text-center space-y-6"
          >
            <div class="relative z-10">
              <div
                class="w-12 h-12 rounded-full bg-gradient-to-br shadow-xl ring-8 ring-white transition-transform group-hover:scale-110 flex items-center justify-center text-white text-sm font-black"
                :class="statusGradient(m.status)"
              >
                {{ i + 1 }}
              </div>
            </div>

            <div class="space-y-3">
              <div
                class="inline-flex px-3 py-1 rounded-full border text-[10px] font-black tracking-widest uppercase"
                :class="statusChip(m.status)"
              >
                {{ m.label }}
              </div>
              <h3 class="text-xl font-black text-slate-900">{{ m.title }}</h3>
              <p class="text-sm text-slate-500 leading-relaxed font-medium">
                {{ m.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 垂直布局 -->
      <div v-else class="w-full max-w-4xl relative">
        <div
          class="absolute left-[23px] top-0 bottom-0 w-px bg-slate-200"
        ></div>
        <div class="space-y-8">
          <div
            v-for="(m, i) in milestones"
            :key="i"
            class="group relative pl-16"
          >
            <div
              class="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br shadow-xl ring-8 ring-white transition-transform group-hover:scale-110 flex items-center justify-center text-white text-sm font-black z-10"
              :class="statusGradient(m.status)"
            >
              {{ i + 1 }}
            </div>

            <div
              class="p-8 rounded-[2rem] bg-white/50 border border-white/40 shadow-sm backdrop-blur-xl group-hover:shadow-md transition-all"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-4">
                  <span class="text-sm font-black text-slate-400">{{
                    m.label
                  }}</span>
                  <h3 class="text-2xl font-black text-slate-900">
                    {{ m.title }}
                  </h3>
                </div>
                <div
                  class="px-3 py-1 rounded-full border text-[10px] font-black tracking-widest uppercase"
                  :class="statusChip(m.status)"
                >
                  {{
                    m.status === 'done'
                      ? 'Completed'
                      : m.status === 'in_progress'
                        ? 'Running'
                        : 'Planned'
                  }}
                </div>
              </div>
              <p class="text-slate-500 font-medium leading-relaxed">
                {{ m.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
