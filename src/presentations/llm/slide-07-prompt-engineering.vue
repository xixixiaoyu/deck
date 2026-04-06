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
      <div class="absolute inset-0 -z-0 opacity-30 pointer-events-none">
        <svg
          class="h-full w-full"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="g-prompt" x1="0" y1="0" x2="1" y2="1">
              <stop
                offset="0%"
                :style="{ stopColor: 'rgb(var(--accent) / 0.25)' }"
              />
              <stop
                offset="100%"
                :style="{ stopColor: 'rgb(var(--accent) / 0.05)' }"
              />
            </linearGradient>
            <filter
              id="blur-prompt"
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
          <g filter="url(#blur-prompt)">
            <circle cx="200" cy="500" r="250" fill="url(#g-prompt)" />
            <circle
              cx="600"
              cy="100"
              r="180"
              fill="url(#g-prompt)"
              opacity="0.6"
            />
          </g>
        </svg>
      </div>
      <div
        class="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-6 h-full justify-center"
      >
        <!-- 标题区域 -->
        <div class="text-center space-y-2">
          <HeadingGradient
            :level="1"
            size="5xl"
            class="leading-tight font-bold tracking-tight"
          >
            Prompt 工程核心技巧
          </HeadingGradient>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            掌握 BROKE 原则，释放 AI 潜能
          </p>
        </div>
        <!-- 参数网格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <!-- Tip 1: Background/Role -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🎭</span>
              <h3 class="font-bold text-slate-800 text-lg">
                背景设定 (Background)
              </h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              设定专家角色，提供任务背景信息。
              <br />
              <span class="text-xs text-slate-400"
                >例: "你是一位资深 Python 工程师..."</span
              >
            </p>
          </div>
          <!-- Tip 2: Role/Objectives -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🎯</span>
              <h3 class="font-bold text-slate-800 text-lg">
                目标明确 (Objectives)
              </h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              清晰定义模型需要完成的具体任务。
              <br />
              <span class="text-xs text-slate-400"
                >例: "重构代码以提高可读性..."</span
              >
            </p>
          </div>
          <!-- Tip 3: Key Results/Format -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">📦</span>
              <h3 class="font-bold text-slate-800 text-lg">
                结果要求 (Key Results)
              </h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              指定输出格式、风格和长度要求。
              <br />
              <span class="text-xs text-slate-400"
                >例: "Markdown 列表形式，不超过 200 字"</span
              >
            </p>
          </div>
          <!-- Tip 4: Evolve/Examples -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">💡</span>
              <h3 class="font-bold text-slate-800 text-lg">
                示例演示 (Examples)
              </h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              提供输入输出示例，引导模型理解。
              <br />
              <span class="text-xs text-slate-400"
                >例: "苹果 → 水果; 白菜 → 蔬菜"</span
              >
            </p>
          </div>
          <!-- Tip 5: Chain of Thought -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">⛓️</span>
              <h3 class="font-bold text-slate-800 text-lg">
                思维链 (Chain of Thought)
              </h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              引导模型逐步思考，展示推理过程。
              <br />
              <span class="text-xs text-slate-400"
                >例: "请逐步分析问题，然后得出结论"</span
              >
            </p>
          </div>
          <!-- Tip 6: Constraints -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🚧</span>
              <h3 class="font-bold text-slate-800 text-lg">
                约束条件 (Constraints)
              </h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              明确禁止事项，避免幻觉和冗余信息。
              <br />
              <span class="text-xs text-slate-400"
                >例: "不要解释代码，直接给出结果"</span
              >
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
