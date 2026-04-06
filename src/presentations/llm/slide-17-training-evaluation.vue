<script setup lang="ts">
import TrainingCurveChart from '@/shared/charts/TrainingCurveChart.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
import Section from '@/shared/ui/Section.vue'
import { ChartBarIcon, ScaleIcon } from '@heroicons/vue/24/outline'
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/vue/24/solid'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>
<template>
  <Section>
    <Card padding="xl" class="grid place-items-center">
      <div class="relative z-10 px-6 py-4 md:py-8 w-full max-w-7xl">
        <div class="text-center mb-8">
          <HeadingGradient :level="2" size="5xl" class="leading-tight">
            训练评估与验证
          </HeadingGradient>
          <p class="mt-4 text-lg text-slate-600 max-w-4xl mx-auto">
            如何判断模型"学会了"？关注训练过程中的关键指标和验证状态。
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Left Column: Metrics -->
          <div class="space-y-6">
            <h3
              class="text-2xl font-bold text-slate-800 flex items-center gap-2"
            >
              <ChartBarIcon class="w-7 h-7 text-indigo-600" />
              关键指标 (Metrics)
            </h3>
            <div
              class="bg-indigo-50/50 rounded-xl p-5 border border-indigo-100"
            >
              <h4 class="font-bold text-indigo-700 mb-2">
                1. 训练集 (Training Set)
              </h4>
              <p class="text-xs text-indigo-600/80 mb-2">模型学习的数据集</p>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <span
                    class="font-mono text-xs bg-indigo-200 text-indigo-800 px-1.5 py-0.5 rounded mt-0.5"
                    >Loss</span
                  >
                  <span class="text-slate-600 text-sm"
                    >损失函数值，越低表示预测越准确</span
                  >
                </li>
              </ul>
            </div>
            <div class="bg-amber-50/50 rounded-xl p-5 border border-amber-100">
              <h4 class="font-bold text-amber-700 mb-2">
                2. 验证集 (Validation Set)
              </h4>
              <p class="text-xs text-amber-600/80 mb-2">
                训练中用于调整超参数，监控过拟合
              </p>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <span
                    class="font-mono text-xs bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded mt-0.5"
                    >Val Loss</span
                  >
                  <span class="text-slate-600 text-sm"
                    >验证集损失，上升时表明过拟合</span
                  >
                </li>
              </ul>
            </div>
            <div
              class="bg-fuchsia-50/50 rounded-xl p-5 border border-fuchsia-100"
            >
              <h4 class="font-bold text-fuchsia-700 mb-2">
                3. 测试集 (Test Set)
              </h4>
              <p class="text-xs text-fuchsia-600/80 mb-2">
                训练完成后评估最终模型性能
              </p>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <span
                    class="font-mono text-xs bg-fuchsia-200 text-fuchsia-800 px-1.5 py-0.5 rounded mt-0.5"
                    >Benchmarks</span
                  >
                  <span class="text-slate-600 text-sm"
                    >MMLU、C-Eval 等标准评测榜单</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- Right Column: Verification Status -->
          <div class="space-y-6">
            <h3
              class="text-2xl font-bold text-slate-800 flex items-center gap-2"
            >
              <ScaleIcon class="w-7 h-7 text-emerald-600" />
              验证状态 (Verification)
            </h3>
            <div class="space-y-4">
              <!-- Success -->
              <div
                class="flex flex-col gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100 transition-all hover:shadow-md"
              >
                <div class="flex items-start gap-4">
                  <CheckCircleIcon class="w-8 h-8 text-emerald-500 shrink-0" />
                  <div>
                    <h4 class="font-bold text-emerald-800">
                      训练成功 (Success)
                    </h4>
                    <p class="text-sm text-emerald-700 mt-1">
                      Training Loss 与 Validation Loss
                      同步下降并收敛，模型泛化能力强
                    </p>
                  </div>
                </div>
                <!-- Success Curve -->
                <div
                  class="w-full bg-white/60 rounded-lg p-2 border border-emerald-100/50"
                >
                  <TrainingCurveChart type="success" />
                </div>
              </div>
              <!-- Overfitting -->
              <div
                class="flex flex-col gap-4 p-4 rounded-xl bg-amber-50 border border-amber-100 transition-all hover:shadow-md"
              >
                <div class="flex items-start gap-4">
                  <ExclamationTriangleIcon
                    class="w-8 h-8 text-amber-500 shrink-0"
                  />
                  <div>
                    <h4 class="font-bold text-amber-800">
                      过拟合 (Overfitting)
                    </h4>
                    <p class="text-sm text-amber-700 mt-1">
                      Training Loss 下降但
                      <span class="font-bold">Validation Loss 上升</span
                      >，模型开始"死记硬背"
                    </p>
                  </div>
                </div>
                <!-- Overfitting Curve -->
                <div
                  class="w-full bg-white/60 rounded-lg p-2 border border-amber-100/50"
                >
                  <TrainingCurveChart type="overfitting" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
