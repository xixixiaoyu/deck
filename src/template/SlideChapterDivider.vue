<script setup lang="ts">
withDefaults(
  defineProps<{
    isActive?: boolean
    isPreview?: boolean
    chapter?: string
    title?: string
    description?: string
  }>(),
  {
    chapter: 'Chapter Section',
    title: '章节分隔',
    description: '用来承上启下，重置注意力与心智模型。',
  }
)
</script>

<template>
  <section
    class="h-full w-full relative flex items-center justify-center p-12 overflow-hidden"
  >
    <!-- 装饰性背景元素 -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent/5 via-transparent to-accent/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute top-0 left-0 w-full h-full opacity-[0.03] [background-image:radial-gradient(rgb(var(--text-primary))_1px,transparent_1px)] [background-size:32px_32px]"
      ></div>
    </div>

    <div class="text-center max-w-4xl space-y-8 relative">
      <div class="flex items-center justify-center gap-4 mb-12">
        <div
          class="h-px w-12 bg-gradient-to-r from-transparent to-slate-300"
        ></div>
        <span
          class="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase"
          >{{ chapter }}</span
        >
        <div
          class="h-px w-12 bg-gradient-to-l from-transparent to-slate-300"
        ></div>
      </div>

      <h2
        class="text-[clamp(3rem,8vw,6rem)] font-black tracking-tight leading-none text-slate-900"
      >
        <span
          class="inline-block hover:scale-105 transition-transform duration-500"
        >
          {{ title }}
        </span>
      </h2>

      <div class="flex flex-col items-center gap-6">
        <div
          class="w-24 h-1.5 bg-accent rounded-full shadow-lg shadow-accent/20"
        ></div>
        <p
          class="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed"
        >
          {{ description }}
        </p>
      </div>

      <!-- 底部装饰 -->
      <div class="pt-16 flex justify-center gap-3">
        <div
          v-for="i in 3"
          :key="i"
          class="w-2 h-2 rounded-full bg-slate-200"
        ></div>
      </div>
    </div>
  </section>
</template>
