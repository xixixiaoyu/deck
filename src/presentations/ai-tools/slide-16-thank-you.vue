<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <Section>
    <Card padding="xl" class="grid place-items-center">
      <div class="absolute inset-0 -z-0 opacity-30">
        <svg
          class="h-full w-full"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
              <stop
                offset="0%"
                :style="{ stopColor: 'rgb(var(--accent) / 0.40)' }"
              />
              <stop
                offset="100%"
                :style="{ stopColor: 'rgb(var(--accent) / 0.15)' }"
              />
            </linearGradient>
            <filter
              id="blur2"
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
          <g filter="url(#blur2)">
            <circle cx="200" cy="300" r="150" fill="url(#g2)" />
            <circle cx="600" cy="300" r="180" fill="url(#g2)" opacity="0.7" />
          </g>
        </svg>
      </div>

      <div class="relative z-10 px-6 py-4 md:py-8">
        <div class="text-center">
          <div class="mb-6">
            <span class="text-6xl">🚀</span>
          </div>
          <HeadingGradient
            :level="1"
            size="6xl"
            palette="indigo-fuchsia-emerald"
            class="leading-tight"
          >
            谢谢观看
          </HeadingGradient>
          <p class="mt-5 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
            保持好奇，持续迭代，你会领先一步
          </p>

          <div class="mt-10 flex flex-wrap justify-center gap-4">
            <div
              class="px-6 py-3 rounded-xl bg-white/60 border border-slate-200 backdrop-blur-sm"
            >
              <p class="text-sm text-slate-600">
                如果有具体场景（语言栈、团队规模、预算、隐私要求），<br />
                可以给你<strong class="text-indigo-600"
                  >个性化推荐+实操教程</strong
                >
              </p>
            </div>
          </div>

          <div class="mt-8 text-sm text-slate-500">
            数据来源：Faros.ai、Tech
            Insider、Zapier、IDC、Anthropic官方、Cursor官网、GitHub等
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
