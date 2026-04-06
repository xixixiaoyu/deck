<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
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
            <linearGradient id="g-future" x1="0" y1="0" x2="1" y2="1">
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
              id="blur-future"
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
          <g filter="url(#blur-future)">
            <circle cx="400" cy="300" r="300" fill="url(#g-future)" />
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
            未来前沿应用场景
          </HeadingGradient>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            从数字世界走向物理世界，从工具走向伙伴
          </p>
        </div>
        <!-- 未来场景布局 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <!-- 左侧：Agents & Multimodal -->
          <div class="flex flex-col gap-4">
            <div
              class="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm flex-1"
            >
              <div class="flex items-center gap-3 mb-3">
                <span class="text-3xl">🤖</span>
                <h3 class="font-bold text-slate-800 text-xl">
                  自主智能体 (Autonomous Agents)
                </h3>
              </div>
              <p class="text-slate-600 leading-relaxed">
                不再仅仅是回答问题，而是能够<strong>自主规划任务、调用工具、修正错误</strong>并完成复杂目标。
                <br />
                <span class="text-sm text-slate-400 mt-2 block"
                  >想象一下：只需一句话“帮我策划并预订去日本的旅行”，AI
                  就能自动查询攻略、对比机票酒店、完成支付并生成日程表。</span
                >
              </p>
            </div>
            <div
              class="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm flex-1"
            >
              <div class="flex items-center gap-3 mb-3">
                <span class="text-3xl">👁️</span>
                <h3 class="font-bold text-slate-800 text-xl">原生多模态交互</h3>
              </div>
              <p class="text-slate-600 leading-relaxed">
                像人类一样同时理解<strong>语音、视频、图像和文本</strong>，实现零延迟的实时自然交互。
                <br />
                <span class="text-sm text-slate-400 mt-2 block"
                  >视频通话中的 AI
                  助手能看懂你的表情，听懂你的语气，并实时提供建议。</span
                >
              </p>
            </div>
          </div>
          <!-- 右侧：Embodied AI & Science -->
          <div class="flex flex-col gap-4">
            <div
              class="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm flex-1"
            >
              <div class="flex items-center gap-3 mb-3">
                <span class="text-3xl">🦾</span>
                <h3 class="font-bold text-slate-800 text-xl">
                  具身智能 (Embodied AI)
                </h3>
              </div>
              <p class="text-slate-600 leading-relaxed">
                将大模型的大脑装入机器人的身体，使其能够<strong>理解物理世界并进行操作</strong>。
                <br />
                <span class="text-sm text-slate-400 mt-2 block"
                  >家庭服务机器人整理房间、烹饪食物；工业机器人自主适应新的生产任务。</span
                >
              </p>
            </div>
            <div
              class="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm flex-1"
            >
              <div class="flex items-center gap-3 mb-3">
                <span class="text-3xl">🧬</span>
                <h3 class="font-bold text-slate-800 text-xl">科学发现加速器</h3>
              </div>
              <p class="text-slate-600 leading-relaxed">
                在海量科学文献和数据中寻找规律，辅助<strong>新材料研发、药物设计、基因编辑</strong>等前沿探索。
                <br />
                <span class="text-sm text-slate-400 mt-2 block"
                  >AI
                  预测蛋白质结构仅仅是开始，未来可能协助攻克癌症等疑难杂症。</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
