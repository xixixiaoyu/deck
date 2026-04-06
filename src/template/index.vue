<script setup lang="ts">
import { computed } from 'vue'

import BackgroundManager from '@/shared/backgrounds/background-manager.vue'
import { backgroundRegistry } from '@/shared/backgrounds/registry'
import {
  createPresentationContext,
  providePresentationContext,
} from '@/shared/presentation/presentation-context'

import PptContainer from '@/shared/presentation/ppt-container.vue'

// 导入优化后的模板
import SlideHero from './SlideHero.vue'
import SlideOutline from './SlideOutline.vue'
import SlideChapterDivider from './SlideChapterDivider.vue'
import SlideList from './SlideList.vue'
import SlideCompare from './SlideCompare.vue'
import SlideStats from './SlideStats.vue'
import SlideChart from './SlideChart.vue'
import SlideMatrix from './SlideMatrix.vue'
import SlideTable from './SlideTable.vue'
import SlideCode from './SlideCode.vue'
import SlideTimeline from './SlideTimeline.vue'
import SlideSteps from './SlideSteps.vue'
import SlideBeforeAfter from './SlideBeforeAfter.vue'
import SlideMedia from './SlideMedia.vue'
import SlideMultimedia from './SlideMultimedia.vue'
import SlideQuote from './SlideQuote.vue'
import SlideTeam from './SlideTeam.vue'
import SlideFAQ from './SlideFAQ.vue'
import SlideQAndA from './SlideQAndA.vue'
import SlidePoll from './SlidePoll.vue'
import SlideQuiz from './SlideQuiz.vue'
import SlideTabs from './SlideTabs.vue'
import SlideDashboard from './SlideDashboard.vue'
import SlideReferences from './SlideReferences.vue'
import SlideThankYou from './SlideThankYou.vue'

const localeOptions = [
  {
    code: 'zh-Hans',
    label: 'Chinese',
    nativeLabel: '简体中文',
    direction: 'ltr',
  },
] as const

const presentationContext = createPresentationContext({
  defaults: {
    backgroundId: 'soft-mesh',
    locale: 'zh-Hans',
  },
  backgrounds: backgroundRegistry,
  locales: [...localeOptions],
  contextKey: 'design-language-template',
  persist: true,
})

providePresentationContext(presentationContext)

const title = computed(() => '设计语言模板库')

// 优化后的幻灯片列表 - 按逻辑顺序排列
const slides = [
  SlideHero,
  SlideOutline,
  SlideChapterDivider,
  SlideList,
  SlideCompare,
  SlideStats,
  SlideChart,
  SlideMatrix,
  SlideTable,
  SlideCode,
  SlideTimeline,
  SlideSteps,
  SlideBeforeAfter,
  SlideMedia,
  SlideMultimedia,
  SlideQuote,
  SlideTeam,
  SlideFAQ,
  SlideQAndA,
  SlidePoll,
  SlideQuiz,
  SlideTabs,
  SlideDashboard,
  SlideReferences,
  SlideThankYou,
]
</script>

<template>
  <div
    class="relative flex h-screen w-screen overflow-hidden bg-surface text-text-primary"
    style="
      --surface: 248 250 252;
      --surface-muted: 241 245 249;
      --text-primary: 15 23 42;
      --text-muted: 71 85 105;
    "
  >
    <BackgroundManager />
    <main
      class="relative z-10 flex h-full w-full items-center justify-center px-6 py-6 sm:px-10"
    >
      <div class="deck-shell h-full w-full">
        <PptContainer
          :slides="slides"
          :title="title"
          thumbnails-label="幻灯片预览"
        />
      </div>
    </main>
  </div>
</template>

<style scoped>
.deck-shell :deep(.ppt-container) {
  @apply bg-transparent;
}

.deck-shell :deep(.controls) {
  @apply fixed bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-text-primary shadow-xl shadow-black/40 backdrop-blur-xl;
}

.deck-shell :deep(.control-btn) {
  @apply flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-900 text-sm font-semibold shadow-md shadow-black/30 ring-1 ring-black/5 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:opacity-40;
}

.deck-shell :deep(.slide-info) {
  @apply min-w-[56px] text-center text-xs font-semibold text-slate-900;
}

.deck-shell :deep(.progress-bar) {
  @apply fixed inset-x-0 bottom-0 h-[3px] bg-slate-900/30;
}

.deck-shell :deep(.progress) {
  @apply h-full bg-gradient-to-r from-accent to-accent transition-all duration-300;
}

.deck-shell :deep(.thumbnails) {
  @apply fixed right-5 top-1/2 flex max-h-[80vh] w-72 -translate-y-1/2 flex-col overflow-hidden rounded-xl bg-slate-900/90 shadow-2xl shadow-slate-900/40 backdrop-blur-xl;
}

.deck-shell :deep(.thumbnails-header) {
  @apply flex items-center justify-between border-b border-white/10 px-5 py-4 text-text-primary;
}

.deck-shell :deep(.thumbnails-header h3) {
  @apply m-0 text-base font-semibold text-text-primary;
}

.deck-shell :deep(.thumbnails-header button) {
  @apply flex h-6 w-6 items-center justify-center rounded-full text-base text-text-primary transition hover:bg-white/10;
}

.deck-shell :deep(.thumbnails-grid) {
  @apply max-h-[60vh] overflow-y-auto px-4 py-4;
}

.deck-shell :deep(.thumbnail) {
  @apply relative mb-3 h-28 w-full overflow-hidden rounded-lg bg-white/5 transition hover:scale-[1.02] hover:bg-white/10;
}

.deck-shell :deep(.thumbnail.active) {
  @apply border-2 border-accent bg-accent/20;
}

.deck-shell :deep(.thumbnail-number) {
  @apply absolute left-2 top-2 rounded-md bg-slate-900/80 px-2 py-1 text-xs font-semibold text-text-primary shadow-sm shadow-black/40;
}

@media (max-width: 768px) {
  .deck-shell :deep(.thumbnails) {
    @apply right-5 w-[calc(100vw-40px)];
  }

  .deck-shell :deep(.controls) {
    @apply gap-3 px-4 py-2;
  }

  .deck-shell :deep(.control-btn) {
    @apply h-10 w-10;
  }
}
</style>
