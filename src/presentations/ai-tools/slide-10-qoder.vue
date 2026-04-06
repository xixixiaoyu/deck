<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
const features = [
  {
    title: 'Agentic IDE + CLI 双形态',
    description:
      '深度代码库理解 + 自主Agent（Quest Mode任务委托、Agentic Chat协作编程、NEXT精准补全）',
  },
  {
    title: '真实工程思维',
    description:
      '自主规划 → 编码 → 测试 → 验证全流程，支持多文件重构、架构感知、持久记忆',
  },
  {
    title: '多模式交互',
    description: '自然语言 → 生产级代码 + 浏览器自动化（QoderWork桌面助手）',
  },
  {
    title: '全球最新大模型',
    description:
      '上下文工程（Context Engineering），被开发者称为"让Cursor显得过时"的工具',
  },
]
const highlights = [
  { label: '发布时间', value: '2025年底', color: 'indigo' },
  { label: '定位', value: 'Cursor最强竞品', color: 'fuchsia' },
  { label: '评价', value: '2026最值得试', color: 'emerald' },
]
const whyImportant = [
  'Product Hunt 评分 5.0，YouTube/Medium多篇评测称其为"2026最值得试的Cursor替代品"',
  '在中文社区（如知乎、CSDN 2026盘点）已多次与Cursor、Trae并列为"Agentic新势力"',
  '定位与Windsurf/Claude Code高度重合，但强调"真实软件开发"而非单纯原型',
]
</script>
<template>
  <Section>
    <Card padding="lg">
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center"
          >
            <span class="text-white text-xl font-bold">Q</span>
          </div>
          <div>
            <HeadingGradient :level="2" size="3xl"> Qoder </HeadingGradient>
            <p class="text-gray-600 dark:text-gray-300 text-lg">
              新一代Agentic Coding Platform（智能体编程平台）
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3
              class="text-xl font-semibold mb-4 text-gray-900 dark:text-white"
            >
              核心特色
            </h3>
            <ul class="space-y-3">
              <li
                v-for="(feature, index) in features"
                :key="index"
                class="p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
              >
                <div class="font-medium text-gray-900 dark:text-white">
                  {{ feature.title }}
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {{ feature.description }}
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3
              class="text-xl font-semibold mb-4 text-gray-900 dark:text-white"
            >
              关键指标
            </h3>
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div
                v-for="(highlight, index) in highlights"
                :key="index"
                class="text-center p-3 rounded-lg"
                :class="{
                  'bg-indigo-50 dark:bg-indigo-900/20':
                    highlight.color === 'indigo',
                  'bg-fuchsia-50 dark:bg-fuchsia-900/20':
                    highlight.color === 'fuchsia',
                  'bg-emerald-50 dark:bg-emerald-900/20':
                    highlight.color === 'emerald',
                }"
              >
                <div class="text-sm text-gray-600 dark:text-gray-300">
                  {{ highlight.label }}
                </div>
                <div
                  class="font-bold text-lg"
                  :class="{
                    'text-indigo-600 dark:text-indigo-400':
                      highlight.color === 'indigo',
                    'text-fuchsia-600 dark:text-fuchsia-400':
                      highlight.color === 'fuchsia',
                    'text-emerald-600 dark:text-emerald-400':
                      highlight.color === 'emerald',
                  }"
                >
                  {{ highlight.value }}
                </div>
              </div>
            </div>
            <h3
              class="text-xl font-semibold mb-4 text-gray-900 dark:text-white"
            >
              为什么现在值得关注
            </h3>
            <ul class="space-y-2">
              <li
                v-for="(item, index) in whyImportant"
                :key="index"
                class="flex items-start gap-2 text-gray-700 dark:text-gray-300"
              >
                <span class="text-emerald-500 mt-1">•</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
