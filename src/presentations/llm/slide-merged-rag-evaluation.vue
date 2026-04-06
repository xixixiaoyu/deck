<script setup lang="ts">
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
import Section from '@/shared/ui/Section.vue'
import {
  ArrowPathIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  CircleStackIcon,
} from '@heroicons/vue/24/outline'
import {
  BeakerIcon,
  ChatBubbleBottomCenterTextIcon,
  MagnifyingGlassIcon,
  TrophyIcon,
  UserGroupIcon,
} from '@heroicons/vue/24/solid'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>
<template>
  <Section>
    <Card padding="xl" class="grid place-items-center h-full">
      <div
        class="relative z-10 px-6 py-4 w-full max-w-7xl h-full flex flex-col"
      >
        <!-- Header -->
        <div class="text-center mb-8 shrink-0">
          <HeadingGradient :level="2" size="4xl" class="leading-tight">
            RAG 评估体系
          </HeadingGradient>
          <p class="mt-2 text-lg text-slate-600 max-w-4xl mx-auto">
            检索与生成双维度评估，RAGAS 框架构建质量闭环
          </p>
        </div>
        <!-- Main Content Grid -->
        <div class="grid grid-rows-[auto_1fr] gap-6 flex-grow min-h-0">
          <!-- Row 1: Dimensions & Metrics (RAGAS) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Retrieval Side -->
            <div
              class="bg-blue-50/60 rounded-2xl p-5 border border-blue-100 flex flex-col"
            >
              <h3
                class="text-lg font-bold text-slate-800 flex items-center gap-2 mb-3"
              >
                <div class="p-1.5 bg-blue-100 rounded-lg text-blue-600">
                  <MagnifyingGlassIcon class="w-5 h-5" />
                </div>
                检索质量 (Retrieval)
              </h3>
              <div class="grid grid-cols-2 gap-3 flex-grow">
                <div
                  class="bg-white/60 rounded-xl p-3 border border-blue-100/50"
                >
                  <div class="flex items-center gap-2 mb-1">
                    <ChartBarIcon class="w-4 h-4 text-blue-600" />
                    <h4 class="font-bold text-sm text-slate-800">
                      上下文精确度
                    </h4>
                  </div>
                  <p class="text-xs text-slate-600 leading-snug">
                    检索内容纯度，减少噪声干扰
                  </p>
                </div>
                <div
                  class="bg-white/60 rounded-xl p-3 border border-blue-100/50"
                >
                  <div class="flex items-center gap-2 mb-1">
                    <CheckCircleIcon class="w-4 h-4 text-blue-600" />
                    <h4 class="font-bold text-sm text-slate-800">
                      上下文召回率
                    </h4>
                  </div>
                  <p class="text-xs text-slate-600 leading-snug">
                    关键信息完整性 (需标准答案)
                  </p>
                </div>
              </div>
            </div>
            <!-- Generation Side -->
            <div
              class="bg-sky-50/60 rounded-2xl p-5 border border-sky-100 flex flex-col"
            >
              <h3
                class="text-lg font-bold text-slate-800 flex items-center gap-2 mb-3"
              >
                <div class="p-1.5 bg-sky-100 rounded-lg text-sky-600">
                  <ChatBubbleBottomCenterTextIcon class="w-5 h-5" />
                </div>
                生成质量 (Generation)
              </h3>
              <div class="grid grid-cols-2 gap-3 flex-grow">
                <div
                  class="bg-white/60 rounded-xl p-3 border border-sky-100/50"
                >
                  <div class="flex items-center gap-2 mb-1">
                    <CheckBadgeIcon class="w-4 h-4 text-sky-600" />
                    <h4 class="font-bold text-sm text-slate-800">忠实度</h4>
                  </div>
                  <p class="text-xs text-slate-600 leading-snug">
                    回答基于上下文程度 (防幻觉)
                  </p>
                </div>
                <div
                  class="bg-white/60 rounded-xl p-3 border border-sky-100/50"
                >
                  <div class="flex items-center gap-2 mb-1">
                    <BeakerIcon class="w-4 h-4 text-sky-600" />
                    <h4 class="font-bold text-sm text-slate-800">回答相关性</h4>
                  </div>
                  <p class="text-xs text-slate-600 leading-snug">
                    回答与用户问题的匹配度
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Row 2: Methodology (The "How") -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Method 1 -->
            <div
              class="bg-amber-50/50 rounded-2xl p-5 border border-amber-100 relative overflow-hidden"
            >
              <div class="absolute top-0 right-0 p-3 opacity-10">
                <CircleStackIcon class="w-24 h-24 text-amber-600" />
              </div>
              <div class="relative z-10">
                <h3
                  class="text-base font-bold text-slate-800 mb-2 flex items-center gap-2"
                >
                  <span
                    class="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs"
                    >1</span
                  >
                  标准数据集
                </h3>
                <ul class="space-y-1.5 text-xs text-slate-700">
                  <li class="flex items-start gap-2">
                    <span
                      class="mt-1 w-1 h-1 bg-amber-400 rounded-full shrink-0"
                    ></span>
                    <span>高质量问答对 (问题+标准答案)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span
                      class="mt-1 w-1 h-1 bg-amber-400 rounded-full shrink-0"
                    ></span>
                    <span>人工标注或合成数据</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Method 2 -->
            <div
              class="bg-blue-50/50 rounded-2xl p-5 border border-blue-100 relative overflow-hidden"
            >
              <div class="absolute top-0 right-0 p-3 opacity-10">
                <TrophyIcon class="w-24 h-24 text-blue-600" />
              </div>
              <div class="relative z-10">
                <h3
                  class="text-base font-bold text-slate-800 mb-2 flex items-center gap-2"
                >
                  <span
                    class="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs"
                    >2</span
                  >
                  LLM 自动评估
                </h3>
                <ul class="space-y-1.5 text-xs text-slate-700">
                  <li class="flex items-start gap-2">
                    <span
                      class="mt-1 w-1 h-1 bg-blue-400 rounded-full shrink-0"
                    ></span>
                    <span
                      >基于
                      <span class="font-mono font-bold text-blue-700"
                        >RAGAS</span
                      >
                      框架</span
                    >
                  </li>
                  <li class="flex items-start gap-2">
                    <span
                      class="mt-1 w-1 h-1 bg-blue-400 rounded-full shrink-0"
                    ></span>
                    <span>强模型评估弱模型，提供评分依据</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Method 3 -->
            <div
              class="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100 relative overflow-hidden"
            >
              <div class="absolute top-0 right-0 p-3 opacity-10">
                <UserGroupIcon class="w-24 h-24 text-emerald-600" />
              </div>
              <div class="relative z-10">
                <h3
                  class="text-base font-bold text-slate-800 mb-2 flex items-center gap-2"
                >
                  <span
                    class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs"
                    >3</span
                  >
                  人工反馈
                </h3>
                <ul class="space-y-1.5 text-xs text-slate-700">
                  <li class="flex items-start gap-2">
                    <span
                      class="mt-1 w-1 h-1 bg-emerald-400 rounded-full shrink-0"
                    ></span>
                    <span>用户点赞/点踩反馈</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span
                      class="mt-1 w-1 h-1 bg-emerald-400 rounded-full shrink-0"
                    ></span>
                    <span>A/B 测试与 Elo 评分</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Bottom: Feedback Loop -->
          <div
            class="bg-slate-50 rounded-xl p-3 border border-slate-200 flex items-center justify-center gap-3"
          >
            <ArrowPathIcon class="w-5 h-5 text-slate-500" />
            <p class="text-sm text-slate-700 font-medium">
              <span class="text-slate-500">优化循环：</span> 收集问题案例
              <span class="text-slate-400">→</span> 优化检索与提示
              <span class="text-slate-400">→</span> 更新评估集
              <span class="text-slate-400">→</span> 持续迭代
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
