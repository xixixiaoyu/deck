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
            <linearGradient id="g-params" x1="0" y1="0" x2="1" y2="1">
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
              id="blur-params"
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
          <g filter="url(#blur-params)">
            <circle cx="200" cy="500" r="250" fill="url(#g-params)" />
            <circle
              cx="600"
              cy="100"
              r="180"
              fill="url(#g-params)"
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
            API 参数详解
          </HeadingGradient>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            掌握关键参数，精准控制模型输出
          </p>
        </div>
        <!-- 参数网格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <!-- Model -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <div class="p-1.5 rounded-lg bg-indigo-100 text-indigo-600">
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
                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                  ></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 class="font-bold text-slate-800 text-lg font-mono">model</h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              指定使用的模型 ID
              <br />
              <span class="text-xs text-slate-400"
                >gpt-4, claude-3-opus, deepseek-chat</span
              >
            </p>
          </div>
          <!-- Messages -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <div class="p-1.5 rounded-lg bg-fuchsia-100 text-fuchsia-600">
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
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                  ></path>
                </svg>
              </div>
              <h3 class="font-bold text-slate-800 text-lg font-mono">
                messages
              </h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              对话历史列表，包含
              <code class="bg-slate-100 px-1 rounded">role</code>
              和
              <code class="bg-slate-100 px-1 rounded">content</code>
              字段
            </p>
          </div>
          <!-- Temperature -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <div class="p-1.5 rounded-lg bg-orange-100 text-orange-600">
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
                  <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
                </svg>
              </div>
              <h3 class="font-bold text-slate-800 text-lg font-mono">
                temperature
              </h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              控制输出随机性 (0.0 - 2.0)
              <br />
              <span class="text-xs text-slate-500">
                • 0.2: 专注确定 (代码/数学)<br />
                • 0.8: 创意多样 (创作/闲聊)
              </span>
            </p>
          </div>
          <!-- Max Tokens -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <div class="p-1.5 rounded-lg bg-emerald-100 text-emerald-600">
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
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 class="font-bold text-slate-800 text-lg font-mono">
                max_tokens
              </h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              限制生成内容的最大 Token 数量，防止回复过长或消耗过多
            </p>
          </div>
          <!-- Top P -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <div class="p-1.5 rounded-lg bg-cyan-100 text-cyan-600">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <h3 class="font-bold text-slate-800 text-lg font-mono">top_p</h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              <strong>核采样</strong>，选取概率累积达到 P (如 0.9) 的最小候选集
              <br />
              <span class="text-xs text-slate-500 mt-1 block">
                候选集大小<strong>动态变化</strong>：确定性高时候选少，不确定时候选多
              </span>
            </p>
          </div>
          <!-- Top K -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <div class="p-1.5 rounded-lg bg-teal-100 text-teal-600">
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
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <h3 class="font-bold text-slate-800 text-lg font-mono">top_k</h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              仅从概率最高的 <strong>K 个</strong>词中采样 (如 K=50)
              <br />
              <span class="text-xs text-slate-500 mt-1 block">
                候选集大小<strong>固定</strong>：切断低概率长尾，防止离谱输出
              </span>
            </p>
          </div>
          <!-- Stream -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <div class="p-1.5 rounded-lg bg-rose-100 text-rose-600">
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
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <h3 class="font-bold text-slate-800 text-lg font-mono">stream</h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              流式输出 (true/false)，实时返回结果，实现"打字机"效果，减少等待感
            </p>
          </div>
          <!-- Thinking -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <div class="p-1.5 rounded-lg bg-violet-100 text-violet-600">
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
                    d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"
                  />
                  <path d="M12 12v6" />
                  <path d="M12 6v2" />
                </svg>
              </div>
              <h3 class="font-bold text-slate-800 text-lg font-mono">
                thinking
              </h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              <strong>思考模式</strong>，如
              <code class="bg-slate-100 px-1 rounded text-xs"
                >{"type": "enabled", "budget_tokens": 1024}</code
              >
              <br />
              <span class="text-xs text-slate-500 mt-1 block">
                决定模型回答前是否进行深度思考 (CoT)，可设置思考预算
              </span>
            </p>
          </div>
          <!-- Seed -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <div class="p-1.5 rounded-lg bg-lime-100 text-lime-600">
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
                  <line x1="4" x2="20" y1="9" y2="9" />
                  <line x1="4" x2="20" y1="15" y2="15" />
                  <line x1="10" x2="8" y1="3" y2="21" />
                  <line x1="16" x2="14" y1="3" y2="21" />
                </svg>
              </div>
              <h3 class="font-bold text-slate-800 text-lg font-mono">seed</h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              <strong>随机种子</strong>，指定整数 (如 42)
              <br />
              <span class="text-xs text-slate-500 mt-1 block">
                使模型输出<strong>可复现</strong>：相同 Seed + 相同参数 =
                几乎相同结果，适合测试调试
              </span>
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
