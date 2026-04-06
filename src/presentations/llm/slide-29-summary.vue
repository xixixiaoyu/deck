<script setup lang="ts">
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
import Section from '@/shared/ui/Section.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>
<template>
  <Section>
    <Card padding="xl" class="grid place-items-center relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 -z-0 opacity-20 pointer-events-none">
        <svg
          class="h-full w-full"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="g-summary" x1="0" y1="0" x2="1" y2="1">
              <stop
                offset="0%"
                :style="{ stopColor: 'rgb(var(--accent) / 0.2)' }"
              />
              <stop
                offset="100%"
                :style="{ stopColor: 'rgb(var(--accent) / 0.05)' }"
              />
            </linearGradient>
            <filter
              id="blur-summary"
              filterUnits="userSpaceOnUse"
              x="-200"
              y="-200"
              width="1200"
              height="1000"
              color-interpolation-filters="sRGB"
            >
              <feGaussianBlur stdDeviation="60" edgeMode="duplicate" />
            </filter>
          </defs>
          <g filter="url(#blur-summary)">
            <circle cx="200" cy="500" r="250" fill="url(#g-summary)" />
            <circle
              cx="600"
              cy="100"
              r="200"
              fill="url(#g-summary)"
              opacity="0.6"
            />
          </g>
        </svg>
      </div>
      <div
        class="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-8 h-full justify-center"
      >
        <div class="text-center">
          <HeadingGradient
            :level="1"
            size="5xl"
            class="leading-tight font-bold tracking-tight"
          >
            课程回顾与总结
          </HeadingGradient>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-6">
            <div
              class="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm transition hover:shadow-md"
            >
              <h3
                class="font-bold text-slate-800 text-lg flex items-center gap-2 mb-2"
              >
                <span class="text-2xl">🧠</span> 原理与基础
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Transformer 架构、Token
                机制和训练流程（Pre-training/SFT/RLHF）是 LLM 应用开发的基础。
              </p>
            </div>
            <div
              class="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm transition hover:shadow-md"
            >
              <h3
                class="font-bold text-slate-800 text-lg flex items-center gap-2 mb-2"
              >
                <span class="text-2xl">📚</span> RAG 架构
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                利用 Embedding 和向量数据库引入外部知识，通过 Rerank
                和高级检索策略解决模型幻觉问题。
              </p>
            </div>
            <div
              class="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm transition hover:shadow-md"
            >
              <h3
                class="font-bold text-slate-800 text-lg flex items-center gap-2 mb-2"
              >
                <span class="text-2xl">🛠️</span> 微调 (Fine-tuning)
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                LoRA 等微调技术可改变模型行为、风格，注入特定领域知识，是 RAG
                的重要补充。
              </p>
            </div>
          </div>
          <div class="space-y-6">
            <div
              class="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm transition hover:shadow-md"
            >
              <h3
                class="font-bold text-slate-800 text-lg flex items-center gap-2 mb-2"
              >
                <span class="text-2xl">🤖</span> Agent 智能体
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                通过 Function Calling 和 ReAct 模式，让 LLM
                具备规划、工具使用和环境交互能力。
              </p>
            </div>
            <div
              class="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm transition hover:shadow-md"
            >
              <h3
                class="font-bold text-slate-800 text-lg flex items-center gap-2 mb-2"
              >
                <span class="text-2xl">⚖️</span> 评估与安全
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Ragas 评估框架、Prompt
                注入防御和数据隐私保护是构建企业级应用的关键环节。
              </p>
            </div>
            <div
              class="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm transition hover:shadow-md"
            >
              <h3
                class="font-bold text-slate-800 text-lg flex items-center gap-2 mb-2"
              >
                <span class="text-2xl">🚀</span> 部署与工程化
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                vLLM
                加速推理、边缘端小模型部署，平衡成本、延迟和效果是工程化的核心考量。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
