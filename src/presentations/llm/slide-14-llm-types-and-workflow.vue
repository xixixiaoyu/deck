<script setup lang="ts">
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
import Section from '@/shared/ui/Section.vue'
import {
  ArrowRightIcon,
  CpuChipIcon,
  LightBulbIcon,
} from '@heroicons/vue/24/outline'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>
<template>
  <Section>
    <Card padding="xl" class="grid place-items-center relative overflow-hidden">
      <!-- Background Decoration -->
      <div class="absolute inset-0 -z-0 opacity-20 pointer-events-none">
        <svg
          class="h-full w-full"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="g-flow" x1="0" y1="0" x2="1" y2="1">
              <stop
                offset="0%"
                :style="{ stopColor: 'rgb(var(--accent) / 0.3)' }"
              />
              <stop
                offset="100%"
                :style="{ stopColor: 'rgb(var(--accent) / 0.1)' }"
              />
            </linearGradient>
            <filter
              id="blur-flow"
              filterUnits="userSpaceOnUse"
              x="-200"
              y="-200"
              width="1200"
              height="1000"
            >
              <feGaussianBlur stdDeviation="60" edgeMode="duplicate" />
            </filter>
          </defs>
          <g filter="url(#blur-flow)">
            <circle cx="700" cy="100" r="200" fill="url(#g-flow)" />
            <circle
              cx="100"
              cy="500"
              r="150"
              fill="url(#g-flow)"
              opacity="0.5"
            />
          </g>
        </svg>
      </div>
      <div
        class="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-6 h-full"
      >
        <!-- Title -->
        <div class="text-center mb-4">
          <HeadingGradient
            :level="2"
            size="4xl"
            class="leading-tight font-bold tracking-tight"
          >
            问答流程与模型类型
          </HeadingGradient>
          <p class="text-lg text-slate-600 font-medium mt-2">
            从处理机制到模型演进：理解大模型如何思考与回答
          </p>
        </div>
        <!-- Part 1: QA Workflow -->
        <div
          class="bg-white/50 backdrop-blur-sm rounded-xl p-5 border border-white/40 shadow-sm"
        >
          <h3
            class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"
          >
            <CpuChipIcon class="w-5 h-5 text-blue-500" />
            大模型问答工作流程
          </h3>
          <div
            class="flex flex-col md:flex-row items-center justify-between gap-2 text-sm"
          >
            <!-- Step 1 -->
            <div
              class="flex flex-col items-center gap-2 p-3 bg-white/60 rounded-lg border border-blue-100 w-full md:w-auto flex-1"
            >
              <span class="font-bold text-slate-700">用户提问</span>
              <span class="text-xs text-slate-500">User Query</span>
            </div>
            <ArrowRightIcon
              class="w-4 h-4 text-slate-400 rotate-90 md:rotate-0"
            />
            <!-- Step 2 -->
            <div
              class="flex flex-col items-center gap-2 p-3 bg-white/60 rounded-lg border border-blue-100 w-full md:w-auto flex-1"
            >
              <span class="font-bold text-slate-700">分词处理</span>
              <span class="text-xs text-slate-500">Tokenization</span>
            </div>
            <ArrowRightIcon
              class="w-4 h-4 text-slate-400 rotate-90 md:rotate-0"
            />
            <!-- Step 3 -->
            <div
              class="flex flex-col items-center gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200 w-full md:w-auto flex-1 shadow-sm"
            >
              <span class="font-bold text-blue-700">模型推理</span>
              <span class="text-xs text-blue-600"
                >Inference (Next Token Prediction)</span
              >
            </div>
            <ArrowRightIcon
              class="w-4 h-4 text-slate-400 rotate-90 md:rotate-0"
            />
            <!-- Step 4 -->
            <div
              class="flex flex-col items-center gap-2 p-3 bg-white/60 rounded-lg border border-blue-100 w-full md:w-auto flex-1"
            >
              <span class="font-bold text-slate-700">生成回答</span>
              <span class="text-xs text-slate-500"
                >De-tokenization & Output</span
              >
            </div>
          </div>
        </div>
        <!-- Part 2: General vs Reasoning LLM -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          <!-- General LLM -->
          <div
            class="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm flex flex-col"
          >
            <div
              class="flex items-center gap-3 mb-3 border-b border-slate-100 pb-3"
            >
              <div class="p-2 bg-blue-100 rounded-lg text-blue-600">
                <LightBulbIcon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-slate-800">通用大模型</h3>
                <p class="text-xs text-slate-500">
                  General LLMs (e.g., GPT-5, Claude 4.5)
                </p>
              </div>
            </div>
            <ul class="space-y-3 text-sm text-slate-700 flex-1">
              <li class="flex gap-2">
                <span class="text-blue-500 font-bold">•</span>
                <span
                  ><strong>核心特点：</strong>
                  响应速度快，通用性强，擅长广泛的任务。</span
                >
              </li>
              <li class="flex gap-2">
                <span class="text-blue-500 font-bold">•</span>
                <span
                  ><strong>工作机制：</strong>
                  基于海量数据训练，直接预测下一个最可能的
                  Token，类似“直觉”反应。</span
                >
              </li>
              <li class="flex gap-2">
                <span class="text-blue-500 font-bold">•</span>
                <span
                  ><strong>适用场景：</strong>
                  创意写作、摘要生成、简单问答、翻译、闲聊。</span
                >
              </li>
            </ul>
          </div>
          <!-- Reasoning LLM -->
          <div
            class="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm flex flex-col"
          >
            <div
              class="flex items-center gap-3 mb-3 border-b border-slate-100 pb-3"
            >
              <div class="p-2 bg-blue-100 rounded-lg text-blue-600">
                <CpuChipIcon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-slate-800">推理大模型</h3>
                <p class="text-xs text-slate-500">
                  Reasoning LLMs (e.g., o1, o3-mini)
                </p>
              </div>
            </div>
            <ul class="space-y-3 text-sm text-slate-700 flex-1">
              <li class="flex gap-2">
                <span class="text-blue-500 font-bold">•</span>
                <span
                  ><strong>核心特点：</strong>
                  擅长复杂逻辑，能够进行深度思考，但响应较慢。</span
                >
              </li>
              <li class="flex gap-2">
                <span class="text-blue-500 font-bold">•</span>
                <span
                  ><strong>工作机制：</strong> 引入<strong
                    >思维链 (Chain of Thought)</strong
                  >，在输出结果前先进行多步隐式推理和自我纠错。</span
                >
              </li>
              <li class="flex gap-2">
                <span class="text-blue-500 font-bold">•</span>
                <span
                  ><strong>适用场景：</strong>
                  复杂数学、逻辑谜题、科学研究、深度编程任务。</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
