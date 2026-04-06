<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

type MatrixColor = 'emerald' | 'indigo' | 'amber' | 'slate'

interface MatrixItem {
  title: string
  description: string
  icon: string
  color: MatrixColor
}

const matrixData: MatrixItem[] = [
  {
    title: '战略高地',
    description: '具有核心竞争力且市场增长迅速的领域，需全力投入。',
    icon: '🚀',
    color: 'emerald',
  },
  {
    title: '潜力蓝海',
    description: '新兴市场或创新技术，具有长远发展价值。',
    icon: '🌊',
    color: 'indigo',
  },
  {
    title: '存量维持',
    description: '成熟稳定的业务，提供现金流但增长潜力有限。',
    icon: '🏗️',
    color: 'amber',
  },
  {
    title: '谨慎观察',
    description: '高风险或低回报区域，需严密监控或逐步退出。',
    icon: '🔭',
    color: 'slate',
  },
]

const colorClasses: Record<MatrixColor, string> = {
  emerald:
    'bg-emerald-50 text-emerald-700 border-emerald-200 shadow-emerald-100',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200 shadow-indigo-100',
  amber: 'bg-amber-50 text-amber-700 border-amber-200 shadow-amber-100',
  slate: 'bg-slate-50 text-slate-700 border-slate-200 shadow-slate-100',
}
</script>

<template>
  <section class="h-full w-full p-12 flex flex-col gap-8">
    <div class="space-y-2">
      <h2 class="text-4xl font-black tracking-tight text-slate-900">
        分析矩阵
      </h2>
      <p class="text-lg text-slate-500 font-medium">
        多维度评估业务或技术的象限分布
      </p>
    </div>

    <div class="flex-1 relative grid grid-cols-2 grid-rows-2 gap-6 p-4">
      <!-- 坐标轴 -->
      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div class="w-full h-px bg-slate-200 relative">
          <div
            class="absolute -left-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 uppercase tracking-widest -rotate-90"
          >
            Growth
          </div>
          <div
            class="absolute -right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 uppercase tracking-widest -rotate-90"
          >
            High
          </div>
        </div>
      </div>
      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div class="h-full w-px bg-slate-200 relative">
          <div
            class="absolute left-1/2 -top-4 -translate-x-1/2 text-[10px] font-bold text-slate-400 uppercase tracking-widest"
          >
            High
          </div>
          <div
            class="absolute left-1/2 -bottom-4 -translate-x-1/2 text-[10px] font-bold text-slate-400 uppercase tracking-widest"
          >
            Low Value
          </div>
        </div>
      </div>

      <!-- 象限卡片 -->
      <div
        v-for="(item, index) in matrixData"
        :key="index"
        class="group relative flex flex-col p-8 rounded-[2rem] border-2 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 shadow-sm"
        :class="colorClasses[item.color]"
      >
        <div class="flex items-start justify-between mb-4">
          <div
            class="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
          >
            {{ item.icon }}
          </div>
          <div
            class="w-8 h-8 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center text-xs font-black"
          >
            0{{ index + 1 }}
          </div>
        </div>

        <h3 class="text-2xl font-black mb-3 tracking-tight">
          {{ item.title }}
        </h3>
        <p class="text-sm leading-relaxed font-medium opacity-80">
          {{ item.description }}
        </p>

        <!-- 装饰性渐变 -->
        <div
          class="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-tl-[4rem] -z-10 group-hover:scale-110 transition-transform"
        ></div>
      </div>
    </div>
  </section>
</template>
