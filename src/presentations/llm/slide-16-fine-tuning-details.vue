<script setup lang="ts">
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
import Section from '@/shared/ui/Section.vue'
import { BeakerIcon, CpuChipIcon } from '@heroicons/vue/24/outline'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
const methods = [
  {
    title: '全量微调',
    desc: '更新所有模型参数，如同重新学习全部课程',
    pros: '效果最佳，潜力最大',
    cons: '成本极高，易遗忘原有知识',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    icon: CpuChipIcon,
  },
  {
    title: '参数高效微调 (PEFT)',
    desc: '仅调整少量参数 (如 LoRA)，如同只修特定课程',
    pros: '成本低，速度快，消费级显卡可用',
    cons: '复杂任务效果可能不如全量微调',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    icon: BeakerIcon,
  },
]
const steps = [
  {
    step: '01',
    title: '数据准备',
    desc: '构建高质量问答对',
  },
  {
    step: '02',
    title: '选择基座',
    desc: '选择合适的开源模型',
  },
  {
    step: '03',
    title: '微调训练',
    desc: '使用 LoRA 等技术训练，监控 Loss',
  },
  {
    step: '04',
    title: '评估部署',
    desc: '测试评估效果，导出部署模型',
  },
]
</script>
<template>
  <Section>
    <Card padding="xl" class="grid place-items-center">
      <div class="relative z-10 px-6 py-4 md:py-8 w-full max-w-6xl">
        <div class="text-center mb-10">
          <HeadingGradient :level="2" size="5xl" class="leading-tight">
            大模型微调
          </HeadingGradient>
          <p class="mt-4 text-lg md:text-xl text-slate-600 max-w-4xl mx-auto">
            将通用模型训练成领域专家，通过特定数据调整权重，掌握垂直领域知识与技能
          </p>
        </div>
        <!-- Methods Comparison -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div
            v-for="method in methods"
            :key="method.title"
            class="p-6 rounded-xl border transition-all duration-300 hover:shadow-lg"
            :class="[method.bg, method.border]"
          >
            <div class="flex items-center gap-4 mb-4">
              <component
                :is="method.icon"
                class="w-8 h-8"
                :class="method.color"
              />
              <h3 class="text-xl font-bold text-slate-800">
                {{ method.title }}
              </h3>
            </div>
            <p class="text-slate-600 mb-4">{{ method.desc }}</p>
            <div class="space-y-2 text-sm">
              <div class="flex gap-2">
                <span class="font-bold text-slate-700 shrink-0">优势:</span>
                <span class="text-slate-600">{{ method.pros }}</span>
              </div>
              <div class="flex gap-2">
                <span class="font-bold text-slate-700 shrink-0">劣势:</span>
                <span class="text-slate-600">{{ method.cons }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Workflow -->
        <div class="relative">
          <div
            class="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden md:block z-0"
          ></div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            <div
              v-for="step in steps"
              :key="step.step"
              class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform"
            >
              <div class="text-3xl font-black text-slate-100 mb-2">
                {{ step.step }}
              </div>
              <h4 class="text-lg font-bold text-slate-800 mb-1">
                {{ step.title }}
              </h4>
              <p class="text-sm text-slate-500">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
