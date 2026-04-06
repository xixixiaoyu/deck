<script setup lang="ts">
import Section from '@/shared/ui/Section.vue'
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const features = [
  {
    title: 'Context Engine',
    description:
      '实时索引整个栈（代码、依赖、架构、Git历史、Issue），从数千来源智能提炼相关上下文',
  },
  {
    title: '全平台 Agent',
    description:
      'VS Code/JetBrains IDE + CLI（shell集成） + GitHub代码审查（inline评论 + 一键修复）',
  },
  {
    title: '协调式多 Agent',
    description:
      'Intent工作区里Agent团队分工（协调器+并行执行）、持久记忆、任务列表 → PR全流程',
  },
  {
    title: '企业级安全',
    description: 'SOC2合规、SSO集成、审计日志、私有化部署选项',
  },
]

const highlights = [
  { label: 'SWE-Bench Pro', value: '51.80%', color: 'rose' },
  { label: 'PR胜率', value: '+12.8%', color: 'pink' },
  { label: '定价', value: '$20-200+/月', color: 'red' },
]
</script>

<template>
  <Section>
    <Card padding="lg">
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center"
          >
            <span class="text-white text-xl font-bold">A</span>
          </div>
          <div>
            <HeadingGradient
              :level="2"
              size="3xl"
              palette="indigo-fuchsia-emerald"
            >
              Augment Code
            </HeadingGradient>
            <p class="text-slate-500 text-sm">企业级 · 上下文记忆引擎</p>
          </div>
        </div>
        <p class="text-slate-600">
          企业级"上下文记忆引擎"驱动的AI软件Agent——专为大型复杂代码库而生，像"永不失忆的资深架构师"
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3
            class="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2"
          >
            <svg
              class="w-5 h-5 text-rose-500"
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
              class="w-5 h-5 text-pink-500"
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
                item.color === 'rose' ? 'bg-rose-50 border-rose-200' : '',
                item.color === 'pink' ? 'bg-pink-50 border-pink-200' : '',
                item.color === 'red' ? 'bg-red-50 border-red-200' : '',
              ]"
            >
              <div
                class="text-xl font-bold"
                :class="[
                  item.color === 'rose' ? 'text-rose-600' : '',
                  item.color === 'pink' ? 'text-pink-600' : '',
                  item.color === 'red' ? 'text-red-600' : '',
                ]"
              >
                {{ item.value }}
              </div>
              <div class="text-xs text-slate-600 mt-1">{{ item.label }}</div>
            </div>
          </div>

          <div
            class="p-4 rounded-xl bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200"
          >
            <h4
              class="font-semibold text-slate-800 mb-2 flex items-center gap-2"
            >
              <svg
                class="w-4 h-4 text-rose-500"
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
              上下文理解与代码质量最顶尖，跨会话记忆强；盲测500+
              PR胜过人类代码（正确性+12.8%、完整性+14.8%）
            </p>
          </div>

          <div class="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 class="font-semibold text-slate-800 mb-2">适用场景</h4>
            <p class="text-sm text-slate-600">
              大型代码库、重构、企业团队、需代码审查/合规的场景
            </p>
            <p class="text-xs text-slate-500 mt-2">
              注意：企业定价较高，但有免费层可供试用
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
