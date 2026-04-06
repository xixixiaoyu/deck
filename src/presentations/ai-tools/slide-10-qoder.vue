<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
const features = [
  {
    title: '核心差异点',
    description: 'Quest 模式 Agentic 平台，10 万文件知识图 + 多专家团并行',
  },
  {
    title: '工作流改变',
    description: '输入一句需求，AI 自己调研、拆任务、写代码、测试',
  },
  {
    title: 'Quest 模式委托',
    description: '程序员从“执行者”变成“需求定义者”，专攻大型工程',
  },
  {
    title: '优缺点小结',
    description: '国产性价比高，Windows 终端准确率领先；国际模型切换稍弱',
  },
]
const highlights = [
  { label: '付费模式', value: '首购 $2/月起', color: 'blue' },
  { label: '选型建议', value: '企业级大型项目', color: 'cyan' },
  { label: '知识图谱', value: '10万文件深度理解', color: 'emerald' },
]
const whyImportant = [
  '自然语言需求自动规划生成完整项目，适合原型构建与企业级大型项目。',
  'Repo Wiki 项目知识图，深度理解复杂业务逻辑。',
  '国产性价比极高，Pro 版约 $20/月，Windows 适配优秀。',
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
              阿里 · Quest 模式 Agentic 平台
            </p>
          </div>
        </div>
        <p class="text-slate-600 mb-6">
          企业级大型项目、原型构建、遗留系统改造开发者闭眼入。专为大型工程设计的项目知识图谱。
        </p>
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
