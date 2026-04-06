<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>
<template>
  <Section>
    <Card padding="xl" class="grid place-items-center relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 -z-0 opacity-40 pointer-events-none">
        <svg
          class="h-full w-full"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="g-end" x1="0" y1="0" x2="1" y2="1">
              <stop
                offset="0%"
                :style="{ stopColor: 'rgb(var(--accent) / 0.4)' }"
              />
              <stop
                offset="100%"
                :style="{ stopColor: 'rgb(var(--accent) / 0.1)' }"
              />
            </linearGradient>
            <filter
              id="blur-end"
              filterUnits="userSpaceOnUse"
              x="-200"
              y="-200"
              width="1200"
              height="1000"
              color-interpolation-filters="sRGB"
            >
              <feGaussianBlur stdDeviation="50" edgeMode="duplicate" />
            </filter>
          </defs>
          <g filter="url(#blur-end)">
            <circle cx="400" cy="300" r="180" fill="url(#g-end)" />
          </g>
        </svg>
      </div>
      <div
        class="relative z-10 w-full max-w-4xl mx-auto flex flex-col gap-10 items-center justify-center h-full text-center"
      >
        <div class="space-y-4">
          <HeadingGradient
            :level="1"
            size="7xl"
            palette="sky-cyan-emerald"
            class="leading-tight font-bold tracking-tight"
          >
            Thank You
          </HeadingGradient>
          <p class="text-3xl font-light text-slate-700">Q & A</p>
        </div>
        <div
          class="bg-white/50 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-lg max-w-2xl w-full"
        >
          <p class="text-slate-600 text-lg">
            "The best way to predict the future is to create it."
          </p>
        </div>
      </div>
    </Card>
  </Section>
</template>
