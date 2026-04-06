<script setup lang="ts">
import HeroBanner from '@/shared/ui/HeroBanner.vue'
import { computed, ref } from 'vue'

const props = defineProps<{ isActive?: boolean; isPreview?: boolean }>()

// Hero 类型配置
const heroTypes = [
  { id: 'standard', name: '标准封面', icon: '🎯' },
  { id: 'spotlight', name: '聚光灯', icon: '💡' },
  { id: 'minimal', name: '简约', icon: '✨' },
]

const activeHeroType = ref('standard')

// 获取当前类型的标题和描述
const currentInfo = computed(() => {
  const info = {
    standard: {
      title: '设计语言模板（示例）',
      subtitle: '多版式、可重用、含交互与 SVG 动效的中文演示模板',
      titleSize: '7xl' as const,
      palette: 'sky-cyan-emerald' as const,
      effect: 'circles' as const,
    },
    spotlight: {
      title: '用关键字点亮叙事',
      subtitle: '突出核心概念，强化信息传递',
      titleSize: '6xl' as const,
      palette: 'sky-cyan-emerald' as const,
      effect: 'circles' as const,
    },
    minimal: {
      title: '简洁即是力量',
      subtitle: '少即是多，专注核心信息',
      titleSize: '6xl' as const,
      palette: 'sky-cyan-emerald' as const,
      effect: 'circles' as const,
    },
  }
  return info[activeHeroType.value as keyof typeof info]
})
</script>

<template>
  <section class="h-full w-full">
    <!-- Hero 类型选择器（仅在非预览模式下显示） -->
    <div v-if="!props.isPreview" class="absolute top-8 right-8 z-20">
      <div
        class="flex gap-1.5 p-1.5 rounded-2xl bg-white/40 border border-white/20 shadow-xl backdrop-blur-xl"
      >
        <button
          v-for="type in heroTypes"
          :key="type.id"
          @click="activeHeroType = type.id"
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all"
          :class="
            activeHeroType === type.id
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-500 hover:bg-white/20 hover:text-slate-700'
          "
        >
          <span>{{ type.icon }}</span>
          <span>{{ type.name }}</span>
        </button>
      </div>
    </div>

    <!-- 标准 Hero -->
    <HeroBanner
      v-if="activeHeroType === 'standard'"
      :effect="currentInfo.effect"
      :title="currentInfo.title"
      :subtitle="currentInfo.subtitle"
      :titleSize="currentInfo.titleSize"
      :palette="currentInfo.palette"
    >
      <template #actions>
        <div class="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            class="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-slate-800 active:scale-95"
          >
            立即开始
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              class="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button
            class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-8 py-4 text-sm font-bold text-slate-700 shadow-xl backdrop-blur-md transition-all hover:bg-white hover:shadow-2xl active:scale-95"
          >
            了解更多
          </button>
        </div>
      </template>
    </HeroBanner>

    <!-- 聚光灯 Hero -->
    <section
      v-else-if="activeHeroType === 'spotlight'"
      class="h-full w-full flex items-center justify-center p-12 bg-[radial-gradient(circle_at_50%_30%,rgb(var(--accent)/0.12),transparent_65%)]"
    >
      <div class="text-center max-w-[1080px] space-y-8">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold tracking-wider uppercase"
        >
          <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          2026 最新设计语言
        </div>
        <h2
          class="mx-auto text-[clamp(3.5rem,10vw,7.5rem)] font-black tracking-tight leading-[0.95] text-slate-900"
        >
          <span>用 </span>
          <span
            class="relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-accent via-emerald-500 to-cyan-500 pb-2"
          >
            关键字
            <span
              class="absolute bottom-4 left-0 w-full h-3 bg-accent/10 -rotate-1 -z-10"
            ></span>
          </span>
          <br />
          <span>点亮你的叙事</span>
        </h2>
        <p
          class="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
        >
          {{ currentInfo.subtitle }}
        </p>
      </div>
    </section>

    <!-- 简约 Hero -->
    <section
      v-else-if="activeHeroType === 'minimal'"
      class="h-full w-full flex items-center justify-center p-12"
    >
      <div class="text-center max-w-4xl">
        <div class="mb-12 flex justify-center">
          <div
            class="w-16 h-16 rounded-3xl bg-gradient-to-tr from-accent to-emerald-400 rotate-12 shadow-2xl shadow-accent/20 flex items-center justify-center text-white"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              />
            </svg>
          </div>
        </div>
        <h1
          class="mx-auto text-[clamp(2.5rem,8vw,5.5rem)] font-bold tracking-tight leading-tight text-slate-900"
        >
          {{ currentInfo.title }}
        </h1>
        <div
          class="mt-12 w-32 h-1.5 bg-gradient-to-r from-accent via-emerald-400 to-accent mx-auto rounded-full shadow-sm"
        ></div>
        <p
          class="mt-12 text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium"
        >
          {{ currentInfo.subtitle }}
        </p>
      </div>
    </section>
  </section>
</template>
