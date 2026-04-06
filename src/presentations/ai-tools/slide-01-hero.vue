<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>
<template>
  <Section>
    <Card padding="xl" class="grid place-items-center">
      <div class="absolute inset-0 -z-0 opacity-40">
        <svg
          class="h-full w-full"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
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
              id="blur"
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
          <g filter="url(#blur)">
            <circle cx="160" cy="120" r="120" fill="url(#g1)" />
            <circle cx="640" cy="480" r="160" fill="url(#g1)" opacity="0.7" />
          </g>
        </svg>
      </div>
      <div class="relative z-10 px-6 py-4 md:py-8">
        <div class="text-center">
          <div
            class="mb-4 text-sm font-medium text-slate-500 tracking-wider uppercase"
          >
            2026年4月全景整理
          </div>
          <HeadingGradient
            :level="1"
            size="7xl"
            palette="sky-cyan-emerald"
            class="leading-tight"
          >
            2026 年 AI 编码工具深度调研报告
          </HeadingGradient>
          <p class="mt-5 text-lg md:text-2xl text-slate-700 max-w-4xl mx-auto">
            全景扫描 · 细节下钻 · 风险核查 · 权威校验
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <span
              class="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
            >
              AI原生IDE
            </span>
            <span
              class="inline-flex items-center rounded-full bg-cyan-50 px-4 py-1.5 text-sm font-medium text-cyan-700 ring-1 ring-inset ring-cyan-700/10"
            >
              IDE扩展
            </span>
            <span
              class="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-700/10"
            >
              Terminal CLI
            </span>
            <span
              class="inline-flex items-center rounded-full bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700 ring-1 ring-inset ring-amber-700/10"
            >
              中国本土工具
            </span>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
