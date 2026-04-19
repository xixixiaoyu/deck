<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'

defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <Section>
    <Card padding="lg">
      <div class="mb-8 text-center">
        <HeadingGradient :level="2" size="4xl"
          >什么是 Coding Plan？</HeadingGradient
        >
        <p class="mt-4 text-slate-600 text-xl font-medium italic">
          “开发者在 AI 编码时代的‘成本解放’尝试”
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div class="space-y-6">
          <div
            class="p-6 rounded-2xl bg-blue-50 border border-blue-100 shadow-sm"
          >
            <h3
              class="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2"
            >
              <span class="p-1.5 bg-blue-500 rounded-lg text-white">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              核心逻辑
            </h3>
            <p class="text-slate-700 leading-relaxed">
              以
              <span class="font-bold text-blue-700">固定月费</span>
              换取海量请求额度，直接对接 Cursor、Claude Code、TRAE
              等主流工具。让模型调用从“按 Token 算账”变成“几乎无感”的日常操作。
            </p>
          </div>

          <div
            class="p-6 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm"
          >
            <h3
              class="text-xl font-bold text-emerald-900 mb-3 flex items-center gap-2"
            >
              <span class="p-1.5 bg-emerald-500 rounded-lg text-white">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </span>
              第一性原理
            </h3>
            <ul class="space-y-2 text-slate-700">
              <li class="flex items-start gap-2">
                <span
                  class="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"
                ></span>
                <span
                  >智能不再稀缺，瓶颈在于
                  <span class="font-semibold">“如何把精力留在创造”</span
                  >。</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"
                ></span>
                <span
                  >告别
                  <span class="text-rose-600 font-medium">Token 焦虑</span
                  >：复杂 Agent 循环、多轮调试不再昂贵。</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"
                ></span>
                <span>让高频编码从奢侈品变成基础设施。</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex flex-col justify-center">
          <div
            class="relative p-8 rounded-3xl bg-slate-900 text-slate-100 overflow-hidden shadow-2xl"
          >
            <div class="absolute top-0 right-0 p-4 opacity-10">
              <svg class="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                />
              </svg>
            </div>
            <h4
              class="text-amber-400 font-bold text-lg mb-4 uppercase tracking-wider"
            >
              2026 市场格局
            </h4>
            <div class="space-y-4 relative z-10">
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"
                >
                  <span class="text-xl font-bold">6+</span>
                </div>
                <div>
                  <p class="font-semibold text-white">六大主流玩家</p>
                  <p class="text-sm text-slate-400">
                    阿里、字节、智谱、MiniMax、Kimi、腾讯等
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"
                >
                  <span class="text-xl font-bold text-blue-400">API</span>
                </div>
                <div>
                  <p class="font-semibold text-white">差异化侧重</p>
                  <p class="text-sm text-slate-400">
                    定价机制、额度刷新、模型矩阵与工具适配
                  </p>
                </div>
              </div>
              <div class="mt-6 pt-6 border-t border-slate-800">
                <p class="text-sm italic text-slate-400 leading-relaxed">
                  "真正的竞争力从来不是拥有最贵的大模型，而是找到最匹配自己节奏的‘使用权’。"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
