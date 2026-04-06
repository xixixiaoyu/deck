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
import Slide09ClaudeCode from './slide-09-claude-code.vue'
import Slide10Qoder from './slide-10-qoder.vue'
import Slide11Trae from './slide-11-trae.vue'
import Slide12Comate from './slide-12-comate.vue'
import Slide13CodeBuddy from './slide-13-codebuddy.vue'
import Slide14aOpenSourceAgents from './slide-14a-open-source-agents.vue'
import Slide14bOpencode from './slide-14b-opencode.vue'
import Slide14cKiro from './slide-14c-kiro.vue'
import Slide14dAugment from './slide-14d-augment.vue'
import Slide14eCodex from './slide-14e-codex.vue'
import Slide14fAntigravity from './slide-14f-antigravity.vue'
import Slide14Comparison from './slide-14-comparison.vue'
import Slide15CommonFeatures from './slide-15-common-features.vue'
import Slide16Recommendations from './slide-16-recommendations.vue'
import Slide17ThankYou from './slide-17-thank-you.vue'

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
  Slide09ClaudeCode,
  Slide10Qoder,
  Slide11Trae,
  Slide12Comate,
  Slide13CodeBuddy,
  Slide14aOpenSourceAgents,
  Slide14bOpencode,
  Slide14cKiro,
  Slide14dAugment,
  Slide14eCodex,
  Slide14fAntigravity,
  Slide14Comparison,
  Slide15CommonFeatures,
  Slide16Recommendations,
  Slide17ThankYou,
]
</script>

<template>
  <BackgroundManager />
  <PptContainer :slides="slides" />
</template>
