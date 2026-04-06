<script setup lang="ts">
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
import Section from '@/shared/ui/Section.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
const comparisonItems = [
  {
    dimension: '知识来源',
    rag: '外部知识库 (动态)',
    fineTuning: '模型权重 (静态)',
  },
  {
    dimension: '数据实时性',
    rag: '高 (即时更新)',
    fineTuning: '低 (需重新训练)',
  },
  {
    dimension: '幻觉风险',
    rag: '低 (基于事实)',
    fineTuning: '可能存在',
  },
  {
    dimension: '成本',
    rag: '低',
    fineTuning: '高',
  },
  {
    dimension: '适用场景',
    rag: '私有数据问答',
    fineTuning: '特定风格/格式',
  },
]
</script>
<template>
  <Section>
    <Card padding="xl" class="grid place-items-center">
      <div class="relative z-10 px-6 py-4 md:py-8 w-full">
        <div class="text-center mb-10">
          <HeadingGradient :level="2" size="5xl" class="leading-tight">
            RAG vs Fine-Tuning
          </HeadingGradient>
          <p class="mt-4 text-lg md:text-xl text-slate-600 max-w-4xl mx-auto">
            如何选择？RAG 给模型配备参考书，Fine-Tuning 让模型掌握新技能
          </p>
        </div>
        <div
          class="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white/50 backdrop-blur-sm"
        >
          <table class="w-full text-left text-sm md:text-base">
            <thead
              class="bg-slate-100/80 text-slate-900 font-bold uppercase tracking-wider"
            >
              <tr>
                <th class="px-6 py-4">维度</th>
                <th class="px-6 py-4 text-indigo-600">RAG (检索增强生成)</th>
                <th class="px-6 py-4 text-fuchsia-600">Fine-Tuning (微调)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr
                v-for="(item, index) in comparisonItems"
                :key="index"
                class="hover:bg-slate-50/50 transition-colors"
              >
                <td
                  class="px-6 py-4 font-semibold text-slate-700 whitespace-nowrap"
                >
                  {{ item.dimension }}
                </td>
                <td class="px-6 py-4 text-slate-600">
                  {{ item.rag }}
                </td>
                <td class="px-6 py-4 text-slate-600">
                  {{ item.fineTuning }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 rounded-lg bg-indigo-50/50 border border-indigo-100">
            <h4 class="font-bold text-indigo-700 mb-2">选择 RAG 当...</h4>
            <ul class="list-disc list-inside text-slate-600 space-y-1 text-sm">
              <li>需要基于事实的准确回答</li>
              <li>数据频繁更新</li>
              <li>需要引用来源</li>
            </ul>
          </div>
          <div
            class="p-4 rounded-lg bg-fuchsia-50/50 border border-fuchsia-100"
          >
            <h4 class="font-bold text-fuchsia-700 mb-2">
              选择 Fine-Tuning 当...
            </h4>
            <ul class="list-disc list-inside text-slate-600 space-y-1 text-sm">
              <li>需要特定语言风格</li>
              <li>需要特定输出格式</li>
              <li>基础模型表现不佳</li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
