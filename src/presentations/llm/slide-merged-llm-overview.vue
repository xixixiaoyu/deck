<script setup lang="ts">
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
import Section from '@/shared/ui/Section.vue'
import {
  ArrowRightIcon,
  CpuChipIcon,
  EyeIcon,
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
            <linearGradient id="g-flow-merged" x1="0" y1="0" x2="1" y2="1">
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
              id="blur-flow-merged"
              filterUnits="userSpaceOnUse"
              x="-200"
              y="-200"
              width="1200"
              height="1000"
            >
              <feGaussianBlur stdDeviation="60" edgeMode="duplicate" />
            </filter>
          </defs>
          <g filter="url(#blur-flow-merged)">
            <circle cx="700" cy="100" r="200" fill="url(#g-flow-merged)" />
            <circle
              cx="100"
              cy="500"
              r="150"
              fill="url(#g-flow-merged)"
              opacity="0.5"
            />
          </g>
        </svg>
      </div>
      <div
        class="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-5 h-full"
      >
        <!-- Title -->
        <div class="text-center">
          <HeadingGradient
            :level="2"
            size="4xl"
            class="leading-tight font-bold tracking-tight"
          >
            大模型全景：流程、类型与多模态
          </HeadingGradient>
          <p class="text-lg text-slate-600 font-medium mt-2">
            Unified View: Workflow, Model Types & Multimodality
          </p>
        </div>
        <!-- Part 1: QA Workflow -->
        <div
          class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg"
        >
          <h3
            class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-3"
          >
            <CpuChipIcon class="w-6 h-6 text-indigo-500" />
            问答工作流程 (QA Workflow)
          </h3>
          <div
            class="flex flex-col md:flex-row items-center justify-between gap-3 text-sm"
          >
            <!-- Step 1 -->
            <div
              class="flex flex-col items-center gap-2 p-4 bg-white/70 rounded-xl border border-indigo-100 w-full md:w-auto flex-1 justify-center shadow-sm"
            >
              <span class="font-bold text-slate-700 text-base">用户提问</span>
              <span class="text-xs text-slate-500">Query</span>
              <p class="text-xs text-slate-600 text-center mt-1">
                输入自然语言问题
              </p>
            </div>
            <ArrowRightIcon
              class="w-5 h-5 text-slate-400 rotate-90 md:rotate-0"
            />
            <!-- Step 2 -->
            <div
              class="flex flex-col items-center gap-2 p-4 bg-white/70 rounded-xl border border-indigo-100 w-full md:w-auto flex-1 justify-center shadow-sm"
            >
              <span class="font-bold text-slate-700 text-base">分词处理</span>
              <span class="text-xs text-slate-500">Tokenization</span>
              <p class="text-xs text-slate-600 text-center mt-1">
                文本转换为 Token 序列
              </p>
            </div>
            <ArrowRightIcon
              class="w-5 h-5 text-slate-400 rotate-90 md:rotate-0"
            />
            <!-- Step 3 -->
            <div
              class="flex flex-col items-center gap-2 p-4 bg-indigo-50 rounded-xl border border-indigo-200 w-full md:w-auto flex-1 shadow-md justify-center"
            >
              <span class="font-bold text-indigo-700 text-base">模型推理</span>
              <span class="text-xs text-indigo-600">Next Token Prediction</span>
              <p class="text-xs text-indigo-600 text-center mt-1">
                逐个预测下一个 Token
              </p>
            </div>
            <ArrowRightIcon
              class="w-5 h-5 text-slate-400 rotate-90 md:rotate-0"
            />
            <!-- Step 4 -->
            <div
              class="flex flex-col items-center gap-2 p-4 bg-white/70 rounded-xl border border-indigo-100 w-full md:w-auto flex-1 justify-center shadow-sm"
            >
              <span class="font-bold text-slate-700 text-base">生成回答</span>
              <span class="text-xs text-slate-500">Output</span>
              <p class="text-xs text-slate-600 text-center mt-1">
                组合成完整回答
              </p>
            </div>
          </div>
        </div>
        <!-- Part 2: The Three Pillars -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 min-h-0">
          <!-- General LLM -->
          <div
            class="bg-blue-50/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg flex flex-col"
          >
            <div
              class="flex items-center gap-3 mb-4 border-b border-blue-100 pb-3"
            >
              <div class="p-2 bg-blue-100 rounded-xl text-blue-600">
                <LightBulbIcon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-slate-800">通用模型</h3>
                <p class="text-sm text-slate-500">General LLMs</p>
              </div>
            </div>
            <ul class="space-y-3 text-sm text-slate-700 flex-1">
              <li class="flex gap-2">
                <span class="text-blue-500 font-bold">•</span>
                <span><strong>特点：</strong> 响应快，通用性强，直觉反应</span>
              </li>
              <li class="flex gap-2">
                <span class="text-blue-500 font-bold">•</span>
                <span><strong>机制：</strong> 概率预测下一个 Token</span>
              </li>
              <li class="flex gap-2">
                <span class="text-blue-500 font-bold">•</span>
                <span><strong>场景：</strong> 写作、摘要、闲聊、简单问答</span>
              </li>
            </ul>
            <div class="mt-4 pt-3 border-t border-blue-100/50">
              <div class="text-sm font-mono text-blue-800 opacity-80">
                GPT-4o, Claude 4.5 Sonnet
              </div>
            </div>
          </div>
          <!-- Reasoning LLM -->
          <div
            class="bg-purple-50/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-lg flex flex-col"
          >
            <div
              class="flex items-center gap-3 mb-4 border-b border-purple-100 pb-3"
            >
              <div class="p-2 bg-purple-100 rounded-xl text-purple-600">
                <CpuChipIcon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-slate-800">推理模型</h3>
                <p class="text-sm text-slate-500">Reasoning LLMs</p>
              </div>
            </div>
            <ul class="space-y-3 text-sm text-slate-700 flex-1">
              <li class="flex gap-2">
                <span class="text-purple-500 font-bold">•</span>
                <span><strong>特点：</strong> 深度思考，逻辑强，响应较慢</span>
              </li>
              <li class="flex gap-2">
                <span class="text-purple-500 font-bold">•</span>
                <span><strong>机制：</strong> 思维链 (CoT)，隐式推理纠错</span>
              </li>
              <li class="flex gap-2">
                <span class="text-purple-500 font-bold">•</span>
                <span><strong>场景：</strong> 数学、代码、复杂逻辑谜题</span>
              </li>
            </ul>
            <div class="mt-4 pt-3 border-t border-purple-100/50">
              <div class="text-sm font-mono text-purple-800 opacity-80">
                o1, o3, o3-mini
              </div>
            </div>
          </div>
          <!-- Multimodal LMM -->
          <div
            class="bg-emerald-50/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-lg flex flex-col"
          >
            <div
              class="flex items-center gap-3 mb-4 border-b border-emerald-100 pb-3"
            >
              <div class="p-2 bg-emerald-100 rounded-xl text-emerald-600">
                <EyeIcon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-slate-800">多模态模型</h3>
                <p class="text-sm text-slate-500">LMMs (Vision/Audio)</p>
              </div>
            </div>
            <ul class="space-y-3 text-sm text-slate-700 flex-1">
              <li class="flex gap-2">
                <span class="text-emerald-500 font-bold">•</span>
                <span><strong>视觉：</strong> VQA、OCR、物体检测</span>
              </li>
              <li class="flex gap-2">
                <span class="text-emerald-500 font-bold">•</span>
                <span
                  ><strong>听/说：</strong> 语音识别 (STT) 与合成 (TTS)</span
                >
              </li>
              <li class="flex gap-2">
                <span class="text-emerald-500 font-bold">•</span>
                <span
                  ><strong>应用：</strong> 截图写代码、视频理解、具身智能</span
                >
              </li>
            </ul>
            <div class="mt-4 pt-3 border-t border-emerald-100/50">
              <div class="text-sm font-mono text-emerald-800 opacity-80">
                GPT-4o, Gemini 3.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
