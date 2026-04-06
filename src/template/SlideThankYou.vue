<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const contacts = [
  { label: 'Email', value: 'name@example.com' },
  { label: 'Website', value: 'example.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/example' },
]
</script>

<template>
  <section class="h-full w-full grid place-items-center p-6">
    <div class="text-center max-w-3xl">
      <h2
        class="text-5xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-400 to-sky-500"
      >
        感谢聆听
      </h2>
      <p class="mt-4 text-lg text-slate-600">保持联系，欢迎进一步交流</p>
      <div class="mt-6 flex flex-wrap justify-center gap-3">
        <span
          v-for="c in contacts"
          :key="c.label"
          class="inline-flex items-center gap-2 rounded-full border bg-white/70 border-slate-200/40 px-4 py-2 text-slate-700 backdrop-blur-md"
        >
          <span class="h-2 w-2 rounded-full bg-[rgb(var(--accent))]"></span>
          <span class="font-semibold">{{ c.label }}</span>
          <span>{{ c.value }}</span>
        </span>
      </div>
    </div>
  </section>
</template>
