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
            <linearGradient id="g-api" x1="0" y1="0" x2="1" y2="1">
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
              id="blur-api"
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
          <g filter="url(#blur-api)">
            <circle cx="700" cy="100" r="200" fill="url(#g-api)" />
            <circle
              cx="100"
              cy="500"
              r="150"
              fill="url(#g-api)"
              opacity="0.5"
            />
          </g>
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
            API 接入指南
          </HeadingGradient>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            三步完成大模型 API 集成
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <!-- 左侧：步骤说明 -->
          <div class="space-y-6">
            <div
              class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3
                class="text-lg font-bold text-slate-800 flex items-center gap-3"
              >
                <span
                  class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm"
                  >1</span
                >
                获取 API Key
              </h3>
              <p class="mt-2 text-slate-600 text-sm">
                在模型提供商官网注册并创建 API Key
                <span
                  class="block mt-1 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded w-fit"
                >
                  安全提示：API Key 相当于密码，请妥善保管
                </span>
              </p>
            </div>
            <div
              class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3
                class="text-lg font-bold text-slate-800 flex items-center gap-3"
              >
                <span
                  class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm"
                  >2</span
                >
                选择调用方式
              </h3>
              <ul class="mt-2 space-y-2 text-slate-600 text-sm">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  <strong>官方 SDK：</strong> 推荐使用，功能完善
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  <strong>HTTP 请求：</strong> 通用性强，适合所有语言
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  <strong>框架集成：</strong> LangChain 等适合复杂场景
                </li>
              </ul>
            </div>
            <div
              class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3
                class="text-lg font-bold text-slate-800 flex items-center gap-3"
              >
                <span
                  class="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm"
                  >3</span
                >
                环境配置
              </h3>
              <p class="mt-2 text-slate-600 text-sm">
                使用
                <code class="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700"
                  >.env</code
                >
                文件管理 API Key：<code class="text-xs font-mono text-slate-500"
                  >OPENAI_API_KEY=sk-xxx</code
                >
              </p>
            </div>
          </div>
          <!-- 右侧：代码示例 -->
          <div
            class="relative bg-slate-900 rounded-xl overflow-hidden shadow-xl border border-slate-700 flex flex-col"
          >
            <div
              class="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700"
            >
              <span class="text-xs font-mono text-slate-400">example.py</span>
              <div class="flex gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
              </div>
            </div>
            <div
              class="p-6 overflow-x-auto flex-1 font-mono text-sm leading-relaxed"
            >
              <pre
                class="whitespace-pre-wrap break-words"
              ><code class="language-python"><span class="text-blue-400">import</span> <span class="text-slate-200">os</span>
<span class="text-blue-400">from</span> <span class="text-slate-200">openai</span> <span class="text-blue-400">import</span> <span class="text-slate-200">OpenAI</span>
<span class="text-slate-500"># 初始化客户端</span>
<span class="text-slate-200">client</span> <span class="text-blue-400">=</span> <span class="text-yellow-200">OpenAI</span><span class="text-slate-300">(</span>
    <span class="text-slate-200">api_key</span><span class="text-blue-400">=</span><span class="text-slate-200">os</span><span class="text-slate-300">.</span><span class="text-blue-300">environ</span><span class="text-slate-300">.</span><span class="text-blue-300">get</span><span class="text-slate-300">(</span><span class="text-green-400">"OPENAI_API_KEY"</span><span class="text-slate-300">)</span>
<span class="text-slate-300">)</span>
<span class="text-slate-500"># 发起请求</span>
<span class="text-slate-200">response</span> <span class="text-blue-400">=</span> <span class="text-slate-200">client</span><span class="text-slate-300">.</span><span class="text-slate-200">chat</span><span class="text-slate-300">.</span><span class="text-slate-200">completions</span><span class="text-slate-300">.</span><span class="text-blue-300">create</span><span class="text-slate-300">(</span>
    <span class="text-slate-200">model</span><span class="text-blue-400">=</span><span class="text-green-400">"gpt-4"</span><span class="text-slate-300">,</span>
    <span class="text-slate-200">messages</span><span class="text-blue-400">=</span><span class="text-slate-300">[</span>
        <span class="text-slate-300">{</span><span class="text-green-400">"role"</span><span class="text-slate-300">:</span> <span class="text-green-400">"user"</span><span class="text-slate-300">,</span> <span class="text-green-400">"content"</span><span class="text-slate-300">:</span> <span class="text-green-400">"解释什么是 API"</span><span class="text-slate-300">}</span>
    <span class="text-slate-300">]</span>
<span class="text-slate-300">)</span>
<span class="text-slate-500"># 输出结果</span>
<span class="text-blue-300">print</span><span class="text-slate-300">(</span><span class="text-slate-200">response</span><span class="text-slate-300">.</span><span class="text-slate-200">choices</span><span class="text-slate-300">[</span><span class="text-orange-400">0</span><span class="text-slate-300">].</span><span class="text-slate-200">message</span><span class="text-slate-300">.</span><span class="text-slate-200">content</span><span class="text-slate-300">)</span></code></pre>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
