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
            <linearGradient id="g-token" x1="0" y1="0" x2="1" y2="1">
              <stop
                offset="0%"
                :style="{ stopColor: 'rgb(var(--accent) / 0.40)' }"
              />
              <stop
                offset="100%"
                :style="{ stopColor: 'rgb(var(--accent) / 0.10)' }"
              />
            </linearGradient>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                stroke-width="0.5"
                class="text-slate-200"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle
            cx="700"
            cy="100"
            r="120"
            fill="url(#g-token)"
            filter="blur(60px)"
          />
          <circle
            cx="100"
            cy="500"
            r="100"
            fill="url(#g-token)"
            filter="blur(50px)"
          />
        </svg>
      </div>
      <div
        class="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-8 h-full justify-center"
      >
        <!-- 标题区域 -->
        <div class="text-center space-y-4">
          <HeadingGradient
            :level="1"
            size="5xl"
            class="leading-tight font-bold tracking-tight"
          >
            Token：大模型的“原子”
          </HeadingGradient>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            理解 Token 是掌握模型输入输出、成本控制与能力边界的关键
          </p>
        </div>
        <!-- 内容区域 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <!-- 左侧：概念与换算 -->
          <div class="flex flex-col gap-6">
            <!-- 什么是 Token -->
            <div
              class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm"
            >
              <h3
                class="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2"
              >
                <div
                  class="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                    />
                  </svg>
                </div>
                定义与本质
              </h3>
              <p class="text-slate-600 leading-relaxed text-sm">
                Token 是模型处理文本的最小单位，不等于单词或字符。
                <br />
                模型训练和推理时，都将文本切分为 Token 序列进行处理。
              </p>
            </div>
            <!-- 换算参考 -->
            <div
              class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm flex-1"
            >
              <h3
                class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"
              >
                <div
                  class="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M7 20h10" />
                    <path d="M10 20c0-1.333.667-2 2-2s2 .667 2 2" />
                    <path
                      d="M17.5 20c.833 0 1.5-.667 1.5-1.5 0-3.5-5.5-3.5-5.5-8.5 0-2.5 2.5-2.5 2.5-5C18.5 3 16 2 12 2S5.5 3 5.5 5c0 2.5 2.5 2.5 2.5 5 0 5-5.5 5-5.5 8.5 0 .833.667 1.5 1.5 1.5"
                    />
                  </svg>
                </div>
                换算经验法则 (OpenAI 标准)
              </h3>
              <div class="space-y-4">
                <div
                  class="flex items-center justify-between p-3 bg-slate-50/50 rounded-lg border border-slate-100"
                >
                  <span class="font-semibold text-slate-700">1,000 Tokens</span>
                  <span class="text-slate-400">≈</span>
                  <span class="font-semibold text-blue-600">750 英文单词</span>
                </div>
                <div
                  class="flex items-center justify-between p-3 bg-slate-50/50 rounded-lg border border-slate-100"
                >
                  <span class="font-semibold text-slate-700">1,000 Tokens</span>
                  <span class="text-slate-400">≈</span>
                  <span class="font-semibold text-blue-600">400~500 汉字</span>
                </div>
                <p class="text-xs text-slate-500 mt-2">
                  *注：不同模型的 Tokenizer 实现不同，中文通常比英文占用更多
                  Token（新模型已优化）。
                </p>
              </div>
            </div>
          </div>
          <!-- 右侧：可视化与重要性 -->
          <div class="flex flex-col gap-6">
            <!-- Token 切分可视化 -->
            <div
              class="bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-lg text-white"
            >
              <h3
                class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4"
              >
                Tokenization 示例
              </h3>
              <div class="space-y-4">
                <div class="space-y-2">
                  <div class="text-xs text-slate-500">Input Text</div>
                  <div class="font-mono text-emerald-400">Hello, world!</div>
                </div>
                <div class="space-y-2">
                  <div class="text-xs text-slate-500">Tokens (IDs)</div>
                  <div class="flex flex-wrap gap-2">
                    <span
                      class="px-2 py-1 bg-blue-500/30 border border-blue-500/50 rounded text-sm font-mono"
                      title="Hello"
                      >Hello (15496)</span
                    >
                    <span
                      class="px-2 py-1 bg-cyan-500/30 border border-cyan-500/50 rounded text-sm font-mono"
                      title=","
                      >, (11)</span
                    >
                    <span
                      class="px-2 py-1 bg-emerald-500/30 border border-emerald-500/50 rounded text-sm font-mono"
                      title=" world"
                    >
                      world (995)</span
                    >
                    <span
                      class="px-2 py-1 bg-amber-500/30 border border-amber-500/50 rounded text-sm font-mono"
                      title="!"
                      >! (0)</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- 为什么重要 -->
            <div
              class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm flex-1"
            >
              <h3
                class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"
              >
                <div
                  class="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 2v20" />
                    <path
                      d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                    />
                  </svg>
                </div>
                Token 的实际影响
              </h3>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"
                  ></span>
                  <div>
                    <span class="font-semibold text-slate-800 block"
                      >成本计算</span
                    >
                    <span class="text-sm text-slate-600"
                      >商业模型按 Token 收费，输入比输出便宜。</span
                    >
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"
                  ></span>
                  <div>
                    <span class="font-semibold text-slate-800 block"
                      >上下文窗口</span
                    >
                    <span class="text-sm text-slate-600"
                      >模型有最大记忆容量（如 128k），超出部分会被截断。</span
                    >
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"
                  ></span>
                  <div>
                    <span class="font-semibold text-slate-800 block"
                      >性能与延迟</span
                    >
                    <span class="text-sm text-slate-600"
                      >生成 Token 越多，耗时越长，速度以 tokens/sec 衡量。</span
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
