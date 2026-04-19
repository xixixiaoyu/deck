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
          <h3 class="text-xl font-bold text-slate-900 mb-4">
            第一性原理：自问
          </h3>
          <ul class="space-y-4 text-sm text-slate-600 flex-grow">
            <li class="flex items-start gap-2">
              <span class="font-bold text-blue-600">01.</span>
              <span>预算几何？(¥29 入门 vs ¥199 生产力)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="font-bold text-blue-600">02.</span>
              <span>主要场景是轻量脚本还是大型全栈/Agent？</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="font-bold text-blue-600">03.</span>
              <span>最看重模型深度、工具广度还是额度自由？</span>
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
          <h3 class="text-xl font-bold text-slate-900 mb-4">场景化推荐</h3>
          <ul class="space-y-3 text-sm text-slate-600 flex-grow">
            <li>
              • <strong class="text-slate-800">轻度/预算敏感:</strong> MiniMax
              Starter 或无问芯穹。
            </li>
            <li>
              •
              <strong class="text-slate-800">模型多样性:</strong>
              火山方舟或阿里云百炼。
            </li>
            <li>
              • <strong class="text-slate-800">复杂推理/Agent:</strong> 智谱 GLM
              系列 (SOTA 性能)。
            </li>
            <li>
              • <strong class="text-slate-800">多模态/视觉:</strong> Kimi
              Allegretto。
            </li>
          </ul>
        </div>

        <!-- 总结陈词 -->
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
          <h3 class="text-xl font-bold text-white mb-4">编码即创造</h3>
          <p class="text-sm text-slate-400 leading-relaxed flex-grow">
            Coding Plan 只是工具，而非终点。 它通过
            <span class="text-blue-400 font-bold">移除算力焦虑</span>，
            让开发者把注意力放回问题本身。 <br /><br />
            在 AI
            时代，真正的竞争力不再是拥有最贵的大模型，而是找到最匹配自己节奏的
            <span class="italic text-slate-200">“使用权”</span>。
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
