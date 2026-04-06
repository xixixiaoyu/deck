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
  <div class="presentation-template">
    <BackgroundManager />
    <PptContainer
      :slides="slides"
      :title="title"
      thumbnails-label="幻灯片预览"
    />
  </div>
</template>

<style scoped>
.presentation-template {
  width: 100vw;
  height: 100vh;
}
</style>
