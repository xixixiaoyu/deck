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
import Slide02Principles from './slide-02-principles.vue'
import Slide03Training from './slide-03-training.vue'
import Slide04ApiIntegration from './slide-04-api-integration.vue'
import Slide05ApiParameters from './slide-05-api-parameters.vue'
import Slide06Tokens from './slide-06-tokens.vue'
import Slide07PromptEngineering from './slide-07-prompt-engineering.vue'
import Slide08CurrentApplications from './slide-08-current-applications.vue'
import Slide09FutureApplications from './slide-09-future-applications.vue'
import Slide10LimitationsAndSolutions from './slide-10-limitations-and-solutions.vue'
import Slide11RagWorkflow from './slide-11-rag-workflow.vue'
import Slide11bEmbeddingAndVectorDb from './slide-11b-embedding-and-vector-db.vue'
import Slide12LlamaIndexRag from './slide-12-llamaindex-rag.vue'
import Slide13RagOptimization from './slide-13-rag-optimization.vue'
import Slide15RagVsFineTuning from './slide-15-rag-vs-fine-tuning.vue'
import Slide16FineTuningDetails from './slide-16-fine-tuning-details.vue'
import Slide17TrainingEvaluation from './slide-17-training-evaluation.vue'
import Slide22FunctionCallingAndMcp from './slide-22-function-calling-and-mcp.vue'
import Slide23AgentArchitecture from './slide-23-agent-architecture.vue'
import Slide24MultiAgentPatterns from './slide-24-multi-agent-patterns.vue'
import Slide29Summary from './slide-29-summary.vue'
import Slide30ThankYou from './slide-30-thank-you.vue'
import SlideMergedLlmOverview from './slide-merged-llm-overview.vue'
import SlideMergedModelStrategy from './slide-merged-model-strategy.vue'
import SlideMergedRagEvaluation from './slide-merged-rag-evaluation.vue'
import SlideMergedTrustworthyEngineering from './slide-merged-trustworthy-engineering.vue'

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
  contextKey: 'llm-tutorial',
  persist: true,
})

providePresentationContext(presentationContext)

// Reordered slides for better logical flow
const slides = [
  // Part 1: Fundamentals
  Slide01Hero,
  Slide02Principles,
  Slide06Tokens, // Moved here: Tokens are the atoms, understand them before workflow
  SlideMergedLlmOverview, // Merged: Workflow, Types & Multimodality
  Slide03Training,
  Slide10LimitationsAndSolutions, // Moved here: Transition from fundamentals to solutions

  // Part 2: Development & API
  Slide04ApiIntegration,
  Slide05ApiParameters,
  Slide07PromptEngineering,
  Slide22FunctionCallingAndMcp, // Moved here: Advanced dev capability

  // Part 3: RAG (Retrieval Augmented Generation)
  Slide11bEmbeddingAndVectorDb, // NEW: Foundation for RAG
  Slide11RagWorkflow,
  Slide12LlamaIndexRag,
  Slide13RagOptimization,
  SlideMergedRagEvaluation,

  // Part 4: Fine-tuning
  Slide16FineTuningDetails,
  Slide15RagVsFineTuning,
  Slide17TrainingEvaluation,

  // Part 5: Agents
  Slide23AgentArchitecture,
  Slide24MultiAgentPatterns,

  // Part 6: Engineering & Production
  SlideMergedModelStrategy, // Merged: Selection, Deployment & Edge
  SlideMergedTrustworthyEngineering,

  // Part 7: Conclusion
  Slide08CurrentApplications,
  Slide09FutureApplications,
  Slide29Summary,
  Slide30ThankYou,
]
</script>

<template>
  <div class="presentation-llm">
    <BackgroundManager />
    <ppt-container
      :slides="slides"
      title="大语言模型应用开发实战"
      thumbnails-label="个大模型核心概念"
    />
  </div>
</template>

<style scoped>
.presentation-llm {
  width: 100vw;
  height: 100vh;
}
</style>
