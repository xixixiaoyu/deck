<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const quote = '好的设计是让复杂变简单、让信息更可读。'
const author = '某位产品经理'
const role = '关于设计语言的思考'
</script>

<template>
  <section class="container mx-auto max-w-4xl px-6 md:px-8 lg:px-12 py-16">
    <div
      class="rounded-3xl border border-slate-200/30 bg-white/70 backdrop-blur-md shadow-2xl p-8"
    >
      <blockquote class="text-2xl md:text-3xl leading-relaxed text-slate-900">
        “{{ quote }}”
      </blockquote>
      <div class="mt-6 flex items-center justify-between">
        <div class="text-slate-600 text-sm">
          <span class="font-semibold text-slate-800">{{ author }}</span>
          · {{ role }}
        </div>
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-accent to-accent text-white text-xs font-semibold"
        >
          引用 / 证言
        </div>
      </div>
    </div>
  </section>
</template>
