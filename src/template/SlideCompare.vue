<script setup lang="ts">
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
import Section from '@/shared/ui/Section.vue'
import { computed, ref } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{ isActive?: boolean; isPreview?: boolean }>()

// 定义统一的数据接口
interface CompareItem {
  name: string
  features: string[]
  recommended?: boolean
  highlight?: boolean
  price?: string
}

// 对比类型配置
const compareTypes = [
  { id: 'features', name: '功能对比', icon: '🔧' },
  { id: 'pricing', name: '定价方案', icon: '💰' },
  { id: 'products', name: '产品对比', icon: '📦' },
]

const activeCompareType = ref('features')

// 功能对比数据
const featuresData: CompareItem[] = [
  {
    name: '基础版',
    recommended: false,
    features: ['入门示例', '轻量依赖', '快速上手'],
  },
  {
    name: '专业版',
    recommended: true,
    features: ['更多版式', '互动组件', '自定义主题'],
  },
  {
    name: '高级版',
    recommended: false,
    features: ['全面模板库', '深度自定义', '演讲助理'],
  },
]

// 定价方案数据
const pricingData: CompareItem[] = [
  {
    name: '入门版',
    price: '¥ 0',
    highlight: false,
    features: ['基础功能', '社区支持', '单项目'],
  },
  {
    name: '专业版',
    price: '¥ 99 / 月',
    highlight: true,
    features: ['高级功能', '优先支持', '多项目'],
  },
  {
    name: '企业版',
    price: '定制报价',
    highlight: false,
    features: ['专属顾问', '私有部署', 'SLA 保证'],
  },
]

// 产品对比数据
const productsData: CompareItem[] = [
  {
    name: '产品 A',
    recommended: false,
    features: ['基础功能', '标准支持', '月度更新'],
  },
  {
    name: '产品 B',
    recommended: true,
    features: ['高级功能', '优先支持', '实时更新'],
  },
  {
    name: '产品 C',
    recommended: false,
    features: ['企业功能', '专属支持', '定制更新'],
  },
]

// 根据类型获取当前数据
const currentData = computed(() => {
  switch (activeCompareType.value) {
    case 'features':
      return featuresData
    case 'pricing':
      return pricingData
    case 'products':
      return productsData
    default:
      return featuresData
  }
})

// 获取当前类型的标题和描述
const currentInfo = computed(() => {
  const info = {
    features: {
      title: '功能对比（占位）',
      description: '并列卡片示例，中间卡片高亮为"推荐"。',
    },
    pricing: {
      title: '定价方案（占位）',
      description: '展示不同套餐与权益，辅助商务沟通',
    },
    products: {
      title: '产品对比（占位）',
      description: '对比不同产品的功能特点和优势',
    },
  }
  return info[activeCompareType.value as keyof typeof info]
})

// 判断是否显示价格
const showPrice = computed(() => activeCompareType.value === 'pricing')

// 获取推荐标签文本
const getRecommendedText = (type: string) => {
  const texts = {
    features: '推荐',
    pricing: '推荐',
    products: '推荐',
  }
  return texts[type as keyof typeof texts] || '推荐'
}
</script>

<template>
  <Section>
    <div class="mb-8">
      <HeadingGradient :level="2" size="5xl">通用对比模板</HeadingGradient>
      <p class="mt-2 text-slate-600">
        支持多种对比类型，点击按钮切换不同对比方式。
      </p>
    </div>

    <!-- 对比类型选择器 -->
    <div class="flex flex-wrap justify-center gap-2 mb-8">
      <button
        v-for="type in compareTypes"
        :key="type.id"
        @click="activeCompareType = type.id"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
        :class="
          activeCompareType === type.id
            ? 'bg-gradient-to-r from-accent to-accent text-white shadow-lg'
            : 'bg-white/60 border border-white/40 text-slate-700 hover:bg-white/70'
        "
      >
        <span>{{ type.icon }}</span>
        <span>{{ type.name }}</span>
      </button>
    </div>

    <!-- 当前类型的标题和描述 -->
    <div class="mb-6 text-center">
      <h2
        class="inline-block text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent/90 to-accent/70"
      >
        {{ currentInfo.title }}
      </h2>
      <p class="mt-2 text-slate-600">{{ currentInfo.description }}</p>
    </div>

    <!-- 对比内容 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card
        v-for="(item, i) in currentData"
        :key="i"
        padding="md"
        class="flex flex-col"
        :class="
          item.recommended || item.highlight
            ? 'ring-2 ring-[rgb(var(--accent))]'
            : ''
        "
      >
        <div class="flex items-baseline justify-between">
          <h3 class="text-xl font-bold text-slate-900">{{ item.name }}</h3>
          <span
            v-if="item.recommended || item.highlight"
            class="text-sm font-semibold text-[rgb(var(--accent))]"
          >
            {{ getRecommendedText(activeCompareType) }}
          </span>
        </div>

        <!-- 价格显示（仅在定价类型时显示） -->
        <div
          v-if="showPrice && item.price"
          class="mt-2 text-3xl font-black text-slate-900"
        >
          {{ item.price }}
        </div>

        <!-- 功能列表 -->
        <ul class="mt-4 space-y-2 text-slate-700 text-sm flex-1">
          <li
            v-for="(feature, j) in item.features"
            :key="j"
            class="flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="text-emerald-500"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span>{{ feature }}</span>
          </li>
        </ul>

        <!-- 操作按钮 -->
        <button
          class="mt-6 rounded-full bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent))] px-4 py-2 text-white shadow hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/50"
        >
          {{ showPrice ? '了解更多' : '选择方案' }}
        </button>
      </Card>
    </div>
  </Section>
</template>
