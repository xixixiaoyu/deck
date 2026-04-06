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
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop
                offset="0%"
                :style="{ stopColor: 'rgb(var(--accent) / 0.30)' }"
              />
              <stop
                offset="100%"
                :style="{ stopColor: 'rgb(var(--accent) / 0.12)' }"
              />
            </linearGradient>
            <filter
              id="blur"
              filterUnits="userSpaceOnUse"
              x="-200"
              y="-200"
              width="1200"
              height="1000"
              color-interpolation-filters="sRGB"
            >
              <feGaussianBlur stdDeviation="50" edgeMode="duplicate" />
            </filter>
          </defs>
          <g filter="url(#blur)">
            <circle cx="200" cy="150" r="150" fill="url(#g1)" />
            <circle cx="600" cy="450" r="180" fill="url(#g1)" opacity="0.6" />
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
            大模型核心原理
          </HeadingGradient>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            四大机制让机器理解语言
          </p>
        </div>
        <!-- 核心机制 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3
              class="text-lg font-bold text-slate-800 flex items-center gap-2"
            >
              <span class="text-blue-500">01.</span> 自注意力机制
            </h3>
            <p class="mt-3 text-slate-600 leading-relaxed text-sm">
              计算词与词之间的<strong>关联权重</strong>，让模型理解上下文关系。就像我们知道"它"指代什么，模型也能捕捉长距离依赖。
            </p>
          </div>
          <div
            class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3
              class="text-lg font-bold text-slate-800 flex items-center gap-2"
            >
              <span class="text-cyan-500">02.</span> 前馈神经网络
            </h3>
            <p class="mt-3 text-slate-600 leading-relaxed text-sm">
              对注意力提取的特征进行<strong>非线性变换</strong>，将简单的词关联转化为深层语义理解。相当于模型的"思考"过程。
            </p>
          </div>
          <div
            class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3
              class="text-lg font-bold text-slate-800 flex items-center gap-2"
            >
              <span class="text-emerald-500">03.</span> 概率预测
            </h3>
            <p class="mt-3 text-slate-600 leading-relaxed text-sm">
              核心是<strong>预测下一个词</strong>。模型学习海量文本的统计规律，为每个可能的词分配概率，选择最合适的词来组成句子。
            </p>
          </div>
          <div
            class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3
              class="text-lg font-bold text-slate-800 flex items-center gap-2"
            >
              <span class="text-amber-500">04.</span> 位置编码
            </h3>
            <p class="mt-3 text-slate-600 leading-relaxed text-sm">
              为每个词添加<strong>位置信息</strong>，让模型理解词序。没有它，"我爱你"和"你爱我"对模型来说是一样的。
            </p>
          </div>
        </div>
        <!-- 哲学思考：中文房间 -->
        <div
          class="bg-slate-50/80 backdrop-blur-md rounded-xl p-6 border border-slate-200 shadow-inner"
        >
          <div class="flex flex-col md:flex-row gap-6 items-start">
            <div class="flex-1">
              <h3
                class="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2"
              >
                <span class="text-2xl">🏛️</span> 中文房间实验
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                不懂中文的人按规则手册处理中文符号，输出正确回答。他真的理解中文吗？
              </p>
            </div>
            <div
              class="flex-1 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6"
            >
              <p class="text-slate-700 text-sm font-medium italic mb-2">
                模型是真正理解，还是只会模式匹配？
              </p>
              <p class="text-slate-600 text-sm leading-relaxed">
                这揭示了<strong>语法</strong>与<strong>语义</strong>的区别。LLM
                是在真正理解，还是在进行复杂的符号操作？这是 AI 领域的终极问题。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
