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
            <linearGradient id="g-apps" x1="0" y1="0" x2="1" y2="1">
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
              id="blur-apps"
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
          <g filter="url(#blur-apps)">
            <circle cx="200" cy="100" r="250" fill="url(#g-apps)" />
            <circle
              cx="600"
              cy="500"
              r="180"
              fill="url(#g-apps)"
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
            LLM 最佳应用场景
          </HeadingGradient>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            已在这些领域展现出超越传统的生产力
          </p>
        </div>
        <!-- 应用场景网格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <!-- Coding -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">💻</span>
              <h3 class="font-bold text-slate-800 text-lg">代码助手</h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              代码生成、重构、解释与调试
              <br />
              <span class="text-xs text-slate-400">GitHub Copilot, Cursor</span>
            </p>
          </div>
          <!-- Content Creation -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">✍️</span>
              <h3 class="font-bold text-slate-800 text-lg">内容创作</h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              营销文案、博客撰写、邮件润色
              <br />
              <span class="text-xs text-slate-400">Jasper, ChatGPT 写作</span>
            </p>
          </div>
          <!-- Smart Search -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🔍</span>
              <h3 class="font-bold text-slate-800 text-lg">智能问答与搜索</h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              直接获取答案而非链接，企业知识库问答
              <br />
              <span class="text-xs text-slate-400">Perplexity, RAG 系统</span>
            </p>
          </div>
          <!-- Translation -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🌐</span>
              <h3 class="font-bold text-slate-800 text-lg">翻译与摘要</h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              高质量多语言互译，长文档/会议快速摘要
              <br />
              <span class="text-xs text-slate-400">DeepL AI, 自动会议纪要</span>
            </p>
          </div>
          <!-- Data Analysis -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">📊</span>
              <h3 class="font-bold text-slate-800 text-lg">辅助数据分析</h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              自然语言转 SQL，数据解释与可视化建议
              <br />
              <span class="text-xs text-slate-400">Text-to-SQL 工具</span>
            </p>
          </div>
          <!-- Customer Support -->
          <div
            class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🎧</span>
              <h3 class="font-bold text-slate-800 text-lg">智能客服</h3>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              7×24 小时响应，处理常见问题与流程引导
              <br />
              <span class="text-xs text-slate-400">自动化工单处理</span>
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
