<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const sources = [
  { title: '示例文档 1', url: 'https://example.com/doc-1' },
  { title: '示例文章 2', url: 'https://example.com/article-2' },
  { title: '示例研究 3', url: 'https://example.com/paper-3' },
]
</script>

<template>
  <section
    class="container mx-auto max-w-5xl px-6 md:px-8 lg:px-12 py-12 lg:py-16"
  >
    <div class="mb-6">
      <h2
        class="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent/90 to-accent/70"
      >
        参考资料
      </h2>
      <p class="mt-2 text-slate-600">为结论与数据提供来源与出处</p>
    </div>

    <ul class="space-y-3">
      <li
        v-for="s in sources"
        :key="s.title"
        class="flex items-center justify-between gap-4 rounded-2xl border border-slate-200/30 bg-white/70 backdrop-blur-md shadow-lg p-4"
      >
        <div class="flex-1">
          <p class="font-semibold text-slate-800">{{ s.title }}</p>
          <a
            :href="s.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[rgb(var(--accent))] hover:underline"
          >
            {{ s.url }}
          </a>
        </div>
        <span
          class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-white/70 border border-[rgb(var(--accent))] text-[rgb(var(--accent))]"
        >
          来源
        </span>
      </li>
    </ul>
  </section>
</template>
