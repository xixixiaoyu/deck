<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const steps = [
  {
    title: '需求梳理',
    description: '明确目标与范围，识别核心业务痛点。',
    icon: '🔍',
  },
  {
    title: '方案设计',
    description: '确定版式与数据结构，构建逻辑模型。',
    icon: '📐',
  },
  {
    title: '实现联调',
    description: '高效完成开发与系统集成，确保稳定性。',
    icon: '⚙️',
  },
  {
    title: '评审完善',
    description: '多维打磨体验细节，交付卓越成果。',
    icon: '🏆',
  },
]
</script>

<template>
  <section class="h-full w-full p-12 flex flex-col gap-12 overflow-hidden">
    <div class="space-y-2">
      <h2 class="text-4xl font-black tracking-tight text-slate-900">
        执行路径
      </h2>
      <p class="text-lg text-slate-500 font-medium">
        端到端的方法论与标准工作流展示
      </p>
    </div>

    <div class="flex-1 flex items-center justify-center">
      <div
        class="w-full max-w-6xl relative flex flex-col md:flex-row items-stretch gap-4"
      >
        <template v-for="(s, i) in steps" :key="s.title">
          <!-- 步骤卡片 -->
          <div
            class="group relative flex-1 flex flex-col p-8 rounded-[2.5rem] bg-white/50 border border-white/40 shadow-sm backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:bg-white hover:shadow-xl"
          >
            <div class="flex items-start justify-between mb-8">
              <div
                class="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-2xl shadow-lg transform group-hover:rotate-6 transition-transform"
              >
                {{ s.icon }}
              </div>
              <div
                class="text-4xl font-black text-slate-100 group-hover:text-accent/10 transition-colors"
              >
                0{{ i + 1 }}
              </div>
            </div>

            <h3 class="text-2xl font-black text-slate-900 mb-3 tracking-tight">
              {{ s.title }}
            </h3>
            <p class="text-slate-500 font-medium leading-relaxed text-sm">
              {{ s.description }}
            </p>

            <!-- 连接箭头 (仅在桌面端显示) -->
            <div
              v-if="i < steps.length - 1"
              class="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20"
            >
              <div
                class="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-md text-slate-400"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
