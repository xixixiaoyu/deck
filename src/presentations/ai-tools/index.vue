<script setup lang="ts">
import BackgroundManager from '@/shared/backgrounds/background-manager.vue'
import { demoParticlesBackground } from '@/shared/backgrounds/modules/demo-particles'
import { softMeshBackground } from '@/shared/backgrounds/modules/soft-mesh'
import PptContainer from '@/shared/presentation/ppt-container.vue'
import {
  createPresentationContext,
  providePresentationContext,
} from '@/shared/presentation/presentation-context'

import Slide01Hero from './slide-01-hero.vue'
import Slide02Overview from './slide-02-overview.vue'
import Slide03Categories from './slide-03-categories.vue'
import Slide04Cursor from './slide-04-cursor.vue'
import Slide05Windsurf from './slide-05-windsurf.vue'
import Slide06Copilot from './slide-06-copilot.vue'
import Slide07Tabnine from './slide-07-tabnine.vue'
import Slide08AmazonQ from './slide-08-amazon-q.vue'
import Slide09ClaudeCode from './slide-09-claude-code.vue'
import Slide10Trae from './slide-10-trae.vue'
import Slide11Comate from './slide-11-comate.vue'
import Slide12CodeBuddy from './slide-12-codebuddy.vue'
import Slide13Comparison from './slide-13-comparison.vue'
import Slide14CommonFeatures from './slide-14-common-features.vue'
import Slide15Recommendations from './slide-15-recommendations.vue'
import Slide16ThankYou from './slide-16-thank-you.vue'

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
  backgrounds: [demoParticlesBackground, softMeshBackground],
  locales: [...localeOptions],
  contextKey: 'ai-tools',
  persist: true,
})

providePresentationContext(presentationContext)

const slides = [
  Slide01Hero,
  Slide02Overview,
  Slide03Categories,
  Slide04Cursor,
  Slide05Windsurf,
  Slide06Copilot,
  Slide07Tabnine,
  Slide08AmazonQ,
  Slide09ClaudeCode,
  Slide10Trae,
  Slide11Comate,
  Slide12CodeBuddy,
  Slide13Comparison,
  Slide14CommonFeatures,
  Slide15Recommendations,
  Slide16ThankYou,
]
</script>

<template>
  <BackgroundManager />
  <PptContainer :slides="slides" />
</template>
