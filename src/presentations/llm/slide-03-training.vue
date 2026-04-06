<script setup lang="ts">
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
import Section from '@/shared/ui/Section.vue'
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
      <div class="relative z-10 px-6 py-4 md:py-8 w-full">
        <div class="text-center">
          <HeadingGradient :level="1" size="6xl" class="leading-tight">
            大模型训练过程
          </HeadingGradient>
          <p class="mt-4 text-lg md:text-xl text-slate-600 max-w-5xl mx-auto">
            大模型训练分为三个关键阶段，从基础语言学习到对齐人类价值观。
          </p>
        </div>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <div class="bg-white/50 rounded-lg p-5">
            <h3 class="text-lg font-semibold text-slate-800">
              1. 预训练 (Pre-training)
            </h3>
            <p class="mt-2 text-sm text-slate-600">
              在海量文本和代码数据上训练，学习语言模式、事实知识和推理能力，让模型"博览群书"。
            </p>
          </div>
          <div class="bg-white/50 rounded-lg p-5">
            <h3 class="text-lg font-semibold text-slate-800">
              2. 指令微调 (Instruction-tuning)
            </h3>
            <p class="mt-2 text-sm text-slate-600">
              使用高质量"指令-回答"数据集微调，让模型学会理解并遵循人类指令。
            </p>
          </div>
          <div class="bg-white/50 rounded-lg p-5">
            <h3 class="text-lg font-semibold text-slate-800">
              3. 对齐 (Alignment)
            </h3>
            <p class="mt-2 text-sm text-slate-600">
              通过人类反馈强化学习(RLHF)等技术，使模型行为与人类价值观对齐，确保输出有用、诚实且无害。
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
