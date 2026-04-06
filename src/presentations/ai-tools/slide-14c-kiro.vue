<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const features = [
  {
    title: 'Spec-Driven 工作流',
    description:
      '自然语言提示 → 自动生成EARS规范（需求+验收标准）、设计文档、任务清单，再顺序执行',
  },
  {
    title: 'Agent Hooks + Autopilot',
    description:
      '文件保存等事件触发AI自动文档/测试/优化；Autopilot模式自主完成大型任务',
  },
  {
    title: '多模态 + 深度上下文',
    description: '支持图片输入（UI设计稿）、架构分析、错误诊断、commit消息生成',
  },
  {
    title: 'Steering 文件',
    description: '项目级自定义Agent行为、编码规范，实现团队标准化',
  },
]

const highlights = [
  { label: '出品方', value: 'AWS', color: 'cyan' },
  { label: '平台', value: 'IDE+CLI', color: 'teal' },
  { label: '定价', value: '按量计费', color: 'blue' },
]
</script>

<template>
  <Section>
    <Card padding="lg">
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
          >
            <span class="text-white text-xl font-bold">K</span>
          </div>
          <div>
            <HeadingGradient
              :level="2"
              size="3xl"
              palette="indigo-fuchsia-emerald"
            >
              Kiro
            </HeadingGradient>
            <p class="text-slate-500 text-sm">AWS · Agentic IDE + CLI</p>
          </div>
        </div>
        <p class="text-slate-600">
          AWS出品的Agentic IDE + CLI，把"vibe
          coding"升级为结构化、可控的生产级流程——"规范驱动开发"先锋
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3
            class="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2"
          >
            <svg
              class="w-5 h-5 text-cyan-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            核心功能
          </h3>
          <div class="space-y-3">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="p-4 rounded-xl bg-white/60 border border-slate-200 hover:shadow-md transition-shadow"
            >
              <h4 class="font-semibold text-slate-800 mb-1">
                {{ feature.title }}
              </h4>
              <p class="text-sm text-slate-600">{{ feature.description }}</p>
            </div>
          </div>
        </div>

        <div>
          <h3
            class="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2"
          >
            <svg
              class="w-5 h-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            关键指标
          </h3>
          <div class="grid grid-cols-3 gap-3 mb-6">
            <div
              v-for="(item, index) in highlights"
              :key="index"
              class="text-center p-4 rounded-xl border"
              :class="[
                item.color === 'cyan' ? 'bg-cyan-50 border-cyan-200' : '',
                item.color === 'teal' ? 'bg-teal-50 border-teal-200' : '',
                item.color === 'blue' ? 'bg-blue-50 border-blue-200' : '',
              ]"
            >
              <div
                class="text-xl font-bold"
                :class="[
                  item.color === 'cyan' ? 'text-cyan-600' : '',
                  item.color === 'teal' ? 'text-teal-600' : '',
                  item.color === 'blue' ? 'text-blue-600' : '',
                ]"
              >
                {{ item.value }}
              </div>
              <div class="text-xs text-slate-600 mt-1">{{ item.label }}</div>
            </div>
          </div>

          <div
            class="p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"
          >
            <h4
              class="font-semibold text-slate-800 mb-2 flex items-center gap-2"
            >
              <svg
                class="w-4 h-4 text-cyan-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              独特优势
            </h4>
            <p class="text-sm text-slate-600">
              结构化最强，代码质量与可维护性高；VS Code fork兼容Open
              VSX插件/主题/设置
            </p>
          </div>

          <div class="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 class="font-semibold text-slate-800 mb-2">适用场景</h4>
            <p class="text-sm text-slate-600">
              需要严谨架构、大型项目或团队协作的开发者；特别适合从0到1避免混乱的场景
            </p>
            <p class="text-xs text-slate-500 mt-2">
              注意：学习曲线稍陡（需适应Spec流程）
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
