<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="h-full w-full grid place-items-center p-6">
    <div class="text-center max-w-3xl">
      <h2
        class="text-5xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-400 to-sky-500"
      >
        问答环节
      </h2>
      <p class="mt-4 text-lg text-slate-600">欢迎现场提问或线上留言</p>
      <div
        class="mt-6 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/60 px-4 py-2 text-slate-700 backdrop-blur-md"
      >
        <span>提示</span>
        <span class="h-2 w-2 rounded-full bg-[rgb(var(--accent))]"></span>
        <span>聚焦关键问题，限定 3 分钟 / 问</span>
      </div>
    </div>
  </section>
</template>
