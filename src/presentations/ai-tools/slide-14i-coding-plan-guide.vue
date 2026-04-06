<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'

defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <Section>
    <Card padding="lg">
      <div class="mb-10 text-center">
        <HeadingGradient :level="2" size="4xl"
          >选型指南与前瞻建议</HeadingGradient
        >
        <p class="mt-4 text-slate-500 text-lg">
          如何避坑并最大化 Coding Plan 价值
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 选型路线 -->
        <div
          class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col h-full"
        >
          <div class="mb-4 p-3 bg-blue-100 rounded-xl w-fit">
            <svg
              class="w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-4">选型建议</h3>
          <ul class="space-y-3 text-sm text-slate-600 flex-grow">
            <li>
              • <strong class="text-blue-700">轻度试水:</strong> MiniMax Starter
              (¥29) 或阿里/腾讯秒杀 Lite (¥7.9)。
            </li>
            <li>
              • <strong class="text-blue-700">OpenClaw 重度:</strong> 阿里云百炼
              Pro 或智谱 GLM Pro。
            </li>
            <li>
              •
              <strong class="text-blue-700">Claude Code 深度:</strong> 火山方舟
              (Anthropic 协议原生支持)。
            </li>
          </ul>
        </div>

        <!-- 避坑指南 -->
        <div
          class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col h-full"
        >
          <div class="mb-4 p-3 bg-amber-100 rounded-xl w-fit">
            <svg
              class="w-6 h-6 text-amber-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-4">避坑指南</h3>
          <ul class="space-y-3 text-sm text-slate-600 flex-grow">
            <li>
              • <strong class="text-amber-700">额度虚高:</strong> 复杂 Agent
              项目可能只够几百次真实交互。
            </li>
            <li>
              • <strong class="text-amber-700">配置关键:</strong> 必须使用专用
              API Key + Base URL，否则按量计费。
            </li>
            <li>
              • <strong class="text-amber-700">高峰限流:</strong> 14–18
              点消耗翻倍，建议错峰或多平台备选。
            </li>
          </ul>
        </div>

        <!-- 为什么爆发 -->
        <div
          class="p-6 rounded-2xl bg-slate-900 text-slate-100 shadow-xl flex flex-col h-full"
        >
          <div class="mb-4 p-3 bg-blue-500/20 rounded-xl w-fit">
            <svg
              class="w-6 h-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-4">为什么是爆发期？</h3>
          <p class="text-sm text-slate-400 leading-relaxed flex-grow">
            2026 年 AI Agent (OpenClaw 类) 成为标配。 单次任务 Token 消耗达传统
            Chat 的 <span class="text-blue-400 font-bold">100–1000 倍</span>。
            Coding Plan 把“高性价比 + 可预测成本”做到极致，是
            <span class="italic">"vibe coding + agentic workflow"</span>
            落地的重要基建。
          </p>
        </div>
      </div>

      <div class="mt-10 flex items-center justify-center gap-8">
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-blue-500"></div>
          <span class="text-sm font-medium text-slate-600 italic"
            >"先低后高，按需升级"</span
          >
        </div>
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span class="text-sm font-medium text-slate-600 italic"
            >"多平台组合，错峰使用"</span
          >
        </div>
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-purple-500"></div>
          <span class="text-sm font-medium text-slate-600 italic"
            >"关注 codingplan.org 最新动态"</span
          >
        </div>
      </div>
    </Card>
  </Section>
</template>
