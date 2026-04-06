<script setup lang="ts">
import { computed } from 'vue'

type Level = 1 | 2 | 3 | 4
type Size = '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
type Palette = 'accent' | 'indigo-fuchsia-emerald'

const props = defineProps<{
  level?: Level
  size?: Size
  palette?: Palette
  class?: string
}>()

const tag = computed(() => `h${props.level ?? 2}`)

const sizeClass = computed(() => {
  const map: Record<Size, string> = {
    '3xl': 'text-2xl md:text-3xl',
    '4xl': 'text-3xl md:text-4xl',
    '5xl': 'text-4xl md:text-5xl',
    '6xl': 'text-5xl md:text-6xl',
    '7xl': 'text-6xl md:text-7xl',
  }
  return map[props.size ?? '5xl']
})

const paletteClass = computed(() => {
  const p = props.palette ?? 'accent'
  if (p === 'indigo-fuchsia-emerald')
    return 'bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500'
  return 'bg-gradient-to-r from-accent via-accent/90 to-accent/80'
})
</script>

<template>
  <component
    :is="tag"
    :class="[
      'font-black tracking-tight text-transparent bg-clip-text leading-tight',
      sizeClass,
      paletteClass,
      props.class,
    ]"
  >
    <slot />
  </component>
</template>
