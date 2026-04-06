<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const beforePoints = [
  '信息分散，难以扫读',
  '视觉层级不清晰',
  '缺少关键指标展示',
]

const afterPoints = [
  '卡片化呈现，便于扫读',
  '统一渐变与排版，层次清晰',
  '关键指标与结论直观可见',
]
</script>

<template>
  <Section>
    <div class="mb-8 text-center">
      <HeadingGradient :level="2" size="5xl">优化前后（占位）</HeadingGradient>
      <p class="mt-2 text-slate-600">用于展示改版效果与价值对比。</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card class="border-slate-300/40">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-slate-800">优化前</h3>
          <span
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700"
            >需要改进</span
          >
        </div>
        <ul class="mt-4 space-y-2 text-slate-700 text-sm">
          <li
            v-for="p in beforePoints"
            :key="p"
            class="flex items-center gap-2"
          >
            <span class="w-2 h-2 rounded-full bg-slate-400"></span>
            {{ p }}
          </li>
        </ul>
      </Card>
      <Card class="border-accent/30">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-accent">优化后</h3>
          <span
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent"
            >效果显著</span
          >
        </div>
        <ul class="mt-4 space-y-2 text-slate-700 text-sm">
          <li v-for="p in afterPoints" :key="p" class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-accent"></span>
            {{ p }}
          </li>
        </ul>
      </Card>
    </div>
  </Section>
</template>
