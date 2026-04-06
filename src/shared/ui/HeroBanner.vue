<script setup lang="ts">
import { computed } from 'vue'
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'

type Max = '4xl' | '5xl' | '6xl' | '7xl'
type Size = '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
type Palette = 'accent' | 'sky-cyan-emerald'
type Effect = 'aurora' | 'circles'

const props = defineProps<{
  title?: string
  subtitle?: string
  titleSize?: Size
  palette?: Palette
  max?: Max
  rounded?: '2xl' | '3xl' | '[2rem]'
  effect?: Effect
  class?: string
}>()

const gid = `g-${Math.random().toString(36).slice(2)}`
const fid = `blur-${Math.random().toString(36).slice(2)}`
const size = computed(() => props.titleSize ?? '5xl')
const pal = computed(() => props.palette ?? 'accent')
const maxw = computed(() => props.max ?? '6xl')
const round = computed(() => props.rounded ?? '[2rem]')
const fx = computed(() => props.effect ?? 'aurora')
</script>

<template>
  <Section :max="maxw" p="xl">
    <Card
      :rounded="round"
      padding="xl"
      class="text-center"
      :class="props.class"
    >
      <div v-if="fx === 'aurora'" class="aurora-overlay" aria-hidden="true">
        <span class="aurora-blob aurora-1" />
        <span class="aurora-blob aurora-2" />
        <span class="aurora-blob aurora-3" />
      </div>
      <div v-else class="absolute inset-0 -z-0 opacity-40" aria-hidden="true">
        <svg
          class="h-full w-full"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient :id="gid" x1="0" y1="0" x2="1" y2="1">
              <stop
                offset="0%"
                :style="{ stopColor: 'rgb(var(--accent) / 0.30)' }"
              />
              <stop
                offset="100%"
                :style="{ stopColor: 'rgb(var(--accent) / 0.12)' }"
              />
            </linearGradient>
            <filter
              :id="fid"
              filterUnits="userSpaceOnUse"
              x="-200"
              y="-200"
              width="1200"
              height="1000"
              color-interpolation-filters="sRGB"
            >
              <feGaussianBlur stdDeviation="40" edgeMode="duplicate" />
            </filter>
          </defs>
          <g :filter="`url(#${fid})`">
            <circle cx="160" cy="120" r="120" :fill="`url(#${gid})`" />
            <circle
              cx="640"
              cy="480"
              r="160"
              :fill="`url(#${gid})`"
              opacity="0.7"
            />
          </g>
        </svg>
      </div>

      <HeadingGradient
        :level="2"
        :size="size"
        :palette="pal"
        class="relative z-10"
      >
        <slot name="title">
          {{ props.title }}
        </slot>
      </HeadingGradient>
      <p v-if="props.subtitle" class="relative z-10 mt-4 text-slate-700">
        {{ props.subtitle }}
      </p>
      <slot v-else name="subtitle" />

      <div class="relative z-10 mt-8 flex items-center justify-center gap-4">
        <slot name="actions" />
      </div>
    </Card>
  </Section>
</template>

<style scoped>
.aurora-overlay {
  position: absolute;
  inset: -10% -10% -10% -10%;
  pointer-events: none;
  overflow: hidden;
}
.aurora-blob {
  position: absolute;
  width: 60%;
  height: 60%;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.6;
  mix-blend-mode: screen;
}
.aurora-1 {
  top: -10%;
  left: -8%;
  background: radial-gradient(
    ellipse at 30% 30%,
    rgb(99 102 241 / 0.85),
    transparent 60%
  );
  animation: blobMove1 18s ease-in-out infinite alternate;
}
.aurora-2 {
  bottom: -12%;
  left: 25%;
  background: radial-gradient(
    ellipse at 70% 30%,
    rgb(236 72 153 / 0.75),
    transparent 60%
  );
  animation: blobMove2 22s ease-in-out infinite alternate;
}
.aurora-3 {
  top: -6%;
  right: -6%;
  background: radial-gradient(
    ellipse at 40% 60%,
    rgb(16 185 129 / 0.75),
    transparent 60%
  );
  animation: blobMove3 26s ease-in-out infinite alternate;
}
@keyframes blobMove1 {
  0% {
    transform: translate(0%, 0%) scale(1);
  }
  50% {
    transform: translate(8%, 6%) scale(1.15);
  }
  100% {
    transform: translate(2%, 12%) scale(1.05);
  }
}
@keyframes blobMove2 {
  0% {
    transform: translate(-6%, 0%) scale(1.05) rotate(0deg);
  }
  50% {
    transform: translate(4%, -4%) scale(1.2) rotate(8deg);
  }
  100% {
    transform: translate(2%, 6%) scale(1.1) rotate(12deg);
  }
}
@keyframes blobMove3 {
  0% {
    transform: translate(0%, -6%) scale(1.1);
  }
  50% {
    transform: translate(-6%, 6%) scale(1.22);
  }
  100% {
    transform: translate(-2%, 10%) scale(1.12);
  }
}
</style>
