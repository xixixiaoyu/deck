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
        <p class="mt-4 text-slate-600 text-xl font-medium">
          2026 年 AI 编程场景的“基建级”订阅模式
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
              本质定义
            </h3>
            <p class="text-slate-700 leading-relaxed">
              国内大模型厂商为
              <span class="font-semibold text-blue-700">Agentic 编程工具</span>
              量身定制的月费订阅套餐。 采用
              <span class="font-semibold">固定月费 + 额度池</span>
              模式，解决传统按 Token 计费在长上下文 Agent 中容易“爆单”的痛点。
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
              核心痛点解决
            </h3>
            <ul class="space-y-2 text-slate-700">
              <li class="flex items-start gap-2">
                <span
                  class="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"
                ></span>
                <span>成本可预测：告别昂贵的按量计费。</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"
                ></span>
                <span>高性能模型：直通 Qwen3.5、GLM-5 等国产顶尖模型。</span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"
                ></span>
                <span
                  >专场优化：针对 Claude Code、Cursor、OpenClaw
                  等深度优化。</span
                >
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
              额度机制说明
            </h4>
            <div class="space-y-4 relative z-10">
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"
                >
                  <span class="text-xl font-bold">5h</span>
                </div>
                <div>
                  <p class="font-semibold text-white">5 小时滚动恢复</p>
                  <p class="text-sm text-slate-400">
                    核心限额维度，避免持续高强度占用
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"
                >
                  <span class="text-xl font-bold text-blue-400">7d</span>
                </div>
                <div>
                  <p class="font-semibold text-white">周/月三层嵌套</p>
                  <p class="text-sm text-slate-400">防止单月集中超量使用</p>
                </div>
              </div>
              <div class="mt-6 pt-6 border-t border-slate-800">
                <p class="text-sm italic text-slate-400 leading-relaxed">
                  "简单任务 5–10 次/请求，复杂任务 10–30+
                  次。实际可用次数通常低于标称值，需精细化管理。"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
