<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const title = '图文讲解（占位）'
const points = [
  '左侧可放截图或插画，右侧为说明',
  '适合功能演示、案例拆解',
  '保持每点一句，便于讲述',
]
</script>

<template>
  <section
    class="container mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-12 lg:py-16"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div
        class="rounded-3xl border border-slate-200/30 bg-white/70 backdrop-blur-md shadow-xl p-4"
      >
        <div
          class="aspect-video w-full rounded-2xl bg-slate-200/70 grid place-items-center text-slate-500"
        >
          媒体占位
        </div>
        <p class="mt-2 text-center text-slate-500 text-xs">
          可替换为实际图片或图表
        </p>
      </div>
      <div>
        <h2
          class="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent/90 to-accent/70"
        >
          {{ title }}
        </h2>
        <ul class="mt-4 space-y-2 text-slate-700 text-sm">
          <li v-for="p in points" :key="p" class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-accent"></span>
            {{ p }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
