<script setup lang="ts">
import { computed } from 'vue'

type Palette = 'accent' | 'blue-cyan'

const props = defineProps<{
  opacity?: number
  strokeWidth?: number
  duration?: number
  palette?: Palette
  class?: string
}>()

const gid = `wave-${Math.random().toString(36).slice(2)}`
const stroke = computed(() => props.strokeWidth ?? 12)
const opa = computed(() => props.opacity ?? 0.6)
const dur = computed(() => props.duration ?? 8)
const paletteStops = computed(() => {
  const p = props.palette ?? 'accent'
  if (p === 'blue-cyan')
    return ['rgb(99 102 241 / 0.9)', 'rgb(236 72 153 / 0.5)']
  return ['rgb(var(--accent) / 0.9)', 'rgb(var(--accent) / 0.5)']
})
</script>

<template>
  <div
    class="absolute inset-0 -z-0"
    :class="props.class"
    :style="{ opacity: opa }"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 800 200"
      class="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient :id="gid" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" :style="{ stopColor: paletteStops[0] }" />
          <stop offset="100%" :style="{ stopColor: paletteStops[1] }" />
        </linearGradient>
      </defs>
      <path
        d="M0 120 C 120 80, 240 160, 360 120 S 600 80, 800 120"
        fill="none"
        :stroke="`url(#${gid})`"
        :stroke-width="stroke"
      >
        <animate
          attributeName="d"
          :dur="`${dur}s`"
          repeatCount="indefinite"
          values="M0 120 C 120 80, 240 160, 360 120 S 600 80, 800 120; M0 120 C 120 140, 240 100, 360 120 S 600 160, 800 120; M0 120 C 120 80, 240 160, 360 120 S 600 80, 800 120"
        />
      </path>
    </svg>
  </div>
</template>
