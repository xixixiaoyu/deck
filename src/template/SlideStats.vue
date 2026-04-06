<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'

const props = defineProps<{ isActive?: boolean; isPreview?: boolean }>()

interface StatItem {
  label: string
  target: number
  suffix?: string
}

const stats: StatItem[] = [
  { label: '示例转化率', target: 68, suffix: '%' },
  { label: '增长（占位）', target: 1240 },
  { label: '满意度（样例）', target: 96, suffix: '%' },
]

const values = ref<number[]>(stats.map(() => 0))
let rafId: number | null = null

const animate = () => {
  if (!props.isActive) return
  const start = performance.now()
  const durations = stats.map(() => 900 + Math.random() * 700)
  const starts = values.value.slice()

  const tick = (t: number) => {
    const elapsed = t - start
    let done = true
    const next = values.value.slice()
    for (let i = 0; i < stats.length; i++) {
      const d = durations[i]
      const progress = Math.min(1, elapsed / d)
      const eased = 1 - Math.pow(1 - progress, 3)
      const target = stats[i].target
      const from = starts[i]
      const val = Math.round(from + (target - from) * eased)
      next[i] = val
      if (progress < 1) done = false
    }
    values.value = next
    if (!done) rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  if (props.isActive) animate()
})

watch(
  () => props.isActive,
  active => {
    if (active) {
      values.value = stats.map(() => 0)
      if (rafId) cancelAnimationFrame(rafId)
      animate()
    }
  }
)
</script>

<template>
  <Section>
    <div class="mb-8">
      <HeadingGradient :level="2" size="5xl">指标看板（占位）</HeadingGradient>
      <p class="mt-2 text-slate-600">示例动画数字，进入该页时缓动上升。</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <Card
        v-for="(stat, i) in stats"
        :key="i"
        padding="md"
        class="flex flex-col gap-2"
      >
        <div class="text-5xl font-black tracking-tight text-slate-900">
          {{ values[i] }}<span v-if="stat.suffix">{{ stat.suffix }}</span>
        </div>
        <div class="text-sm text-slate-600">{{ stat.label }}</div>
      </Card>
    </div>
  </Section>
</template>
