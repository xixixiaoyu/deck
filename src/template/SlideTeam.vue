<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const members = [
  {
    name: 'Alex Chen',
    role: '产品负责人',
    initials: 'AC',
    gradient: 'from-accent to-accent',
  },
  {
    name: 'Li Wei',
    role: '前端工程师',
    initials: 'LW',
    gradient: 'from-accent to-accent',
  },
  {
    name: 'Zhao Yun',
    role: '设计师',
    initials: 'ZY',
    gradient: 'from-accent to-accent',
  },
]
</script>

<template>
  <section
    class="container mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-12 lg:py-16"
  >
    <div class="mb-8 text-center">
      <h2
        class="inline-block text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent/90 to-accent/70"
      >
        团队介绍（占位）
      </h2>
      <p class="mt-2 text-slate-600">用于演讲者或项目团队的介绍。</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <article
        v-for="m in members"
        :key="m.name"
        class="rounded-3xl border border-slate-200/30 bg-white/70 backdrop-blur-md p-6 shadow-xl"
      >
        <div class="flex items-center gap-4">
          <div
            class="grid place-items-center w-14 h-14 rounded-full bg-gradient-to-r text-white font-bold"
            :class="m.gradient"
          >
            {{ m.initials }}
          </div>
          <div>
            <h3 class="text-lg font-bold text-slate-900">{{ m.name }}</h3>
            <p class="text-slate-700 text-sm">{{ m.role }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
