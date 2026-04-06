<script setup lang="ts">
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
import Section from '@/shared/ui/Section.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>
<template>
  <Section>
    <Card padding="xl" class="grid place-items-center relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 -z-0 opacity-20 pointer-events-none">
        <svg
          class="h-full w-full"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="g-limits" x1="0" y1="0" x2="1" y2="1">
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
              id="blur-limits"
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
          <g filter="url(#blur-limits)">
            <rect
              x="100"
              y="100"
              width="600"
              height="400"
              rx="200"
              fill="url(#g-limits)"
            />
          </g>
        </svg>
      </div>
      <div
        class="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-8 h-full justify-center"
      >
        <!-- 标题区域 -->
        <div class="text-center space-y-3">
          <HeadingGradient
            :level="1"
            size="5xl"
            class="leading-tight font-bold tracking-tight"
          >
            大模型的局限与解决方案
          </HeadingGradient>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            认知边界，善用工具，提升 AI 效能
          </p>
        </div>
        <!-- 核心内容区 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <!-- 左侧：核心局限 -->
          <div
            class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-sm flex flex-col gap-4 relative overflow-hidden"
          >
            <div class="absolute top-0 left-0 w-1 h-full bg-red-400/50"></div>
            <h2
              class="text-2xl font-bold text-slate-800 flex items-center gap-2 mb-2"
            >
              <span class="text-red-500">⚠️</span> 核心局限
            </h2>
            <ul class="space-y-4 flex-1">
              <li class="flex gap-3">
                <span class="text-2xl shrink-0">🤥</span>
                <div>
                  <h3 class="font-bold text-slate-800">幻觉问题</h3>
                  <p class="text-slate-600 text-sm">
                    生成看似合理但实际错误的内容
                  </p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="text-2xl shrink-0">📅</span>
                <div>
                  <h3 class="font-bold text-slate-800">知识滞后</h3>
                  <p class="text-slate-600 text-sm">
                    训练数据有截止日期，无法获取最新信息
                  </p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="text-2xl shrink-0">📝</span>
                <div>
                  <h3 class="font-bold text-slate-800">上下文受限</h3>
                  <p class="text-slate-600 text-sm">
                    记忆窗口有限，难以处理长文本内容
                  </p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="text-2xl shrink-0">🧮</span>
                <div>
                  <h3 class="font-bold text-slate-800">逻辑推理弱</h3>
                  <p class="text-slate-600 text-sm">
                    多步计算和复杂推理容易出错
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <!-- 右侧：最佳解法 -->
          <div
            class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-sm flex flex-col gap-4 relative overflow-hidden"
          >
            <div class="absolute top-0 left-0 w-1 h-full bg-green-500/50"></div>
            <h2
              class="text-2xl font-bold text-slate-800 flex items-center gap-2 mb-2"
            >
              <span class="text-green-600">💡</span> 解决方案
            </h2>
            <ul class="space-y-4 flex-1">
              <li class="flex gap-3">
                <span class="text-2xl shrink-0">📚</span>
                <div>
                  <h3 class="font-bold text-slate-800">RAG 检索增强</h3>
                  <p class="text-slate-600 text-sm">
                    <span class="text-green-700 font-semibold">外挂知识库</span>
                    先检索相关资料再生成回答，减少幻觉
                  </p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="text-2xl shrink-0">🛠️</span>
                <div>
                  <h3 class="font-bold text-slate-800">函数调用工具</h3>
                  <p class="text-slate-600 text-sm">
                    <span class="text-green-700 font-semibold">工具扩展</span>
                    调用外部 API 和工具，弥补自身能力不足
                  </p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="text-2xl shrink-0">⛓️</span>
                <div>
                  <h3 class="font-bold text-slate-800">思维链提示</h3>
                  <p class="text-slate-600 text-sm">
                    <span class="text-green-700 font-semibold">分步思考</span>
                    引导 AI 逐步推理，提高逻辑准确性
                  </p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="text-2xl shrink-0">🎯</span>
                <div>
                  <h3 class="font-bold text-slate-800">模型微调</h3>
                  <p class="text-slate-600 text-sm">
                    <span class="text-green-700 font-semibold">领域专家</span>
                    注入专业数据，定制化特定领域能力
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
