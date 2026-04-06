<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
const features = [
  {
    title: '核心差异点',
    description: 'Quest 模式 Agentic 平台，Repo Wiki 项目知识图',
  },
  {
    title: '工作流改变',
    description: '自然语言需求自动规划生成完整项目',
  },
  {
    title: 'Agentic IDE + CLI 双形态',
    description:
      '深度代码库理解 + 自主Agent（Quest Mode任务委托、Agentic Chat协作编程）',
  },
  {
    title: '全球最新大模型',
    description:
      '上下文工程（Context Engineering），被开发者称为"让Cursor显得过时"的工具',
  },
]
const highlights = [
  { label: '付费模式', value: '积分制(低成本)', color: 'blue' },
  { label: '选型建议', value: '企业级大项目', color: 'cyan' },
  { label: '评价', value: '2026最值得试', color: 'emerald' },
]
const whyImportant = [
  '自然语言需求自动规划生成完整项目，适合原型构建与企业级大型项目。',
  'Repo Wiki 项目知识图，深度理解复杂业务逻辑。',
  '在 2026 年盘点中被视为 Agentic 编程平台的新标杆。',
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
              企业级大型项目、原型构建开发者闭眼入
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
                  'bg-blue-50 dark:bg-blue-900/20': highlight.color === 'blue',
                  'bg-cyan-50 dark:bg-cyan-900/20': highlight.color === 'cyan',
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
                    'text-blue-600 dark:text-blue-400':
                      highlight.color === 'blue',
                    'text-cyan-600 dark:text-cyan-400':
                      highlight.color === 'cyan',
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
