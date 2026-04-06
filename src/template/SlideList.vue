<script setup lang="ts">
import { computed, ref } from 'vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{ isActive?: boolean; isPreview?: boolean }>()

// 定义统一的数据接口
interface ListItem {
  title: string
  description?: string
  note?: string
  status?: 'done' | 'info' | 'warn' | 'default'
  icon?: string
  number?: number
}

// 列表类型配置
const listTypes = [
  { id: 'checklist', name: '清单列表', icon: '✅' },
  { id: 'features', name: '功能列表', icon: '🌟' },
  { id: 'numbered', name: '编号列表', icon: '🔢' },
  { id: 'status', name: '状态列表', icon: '📊' },
]

const activeListType = ref('checklist')

// 清单列表数据
const checklistData: ListItem[] = [
  { title: '准备演示结构', note: '确认大纲与节奏', status: 'done' },
  { title: '插入示例图表', note: '占位数据即可', status: 'info' },
  { title: '添加互动环节', note: '如投票/问答', status: 'warn' },
  { title: '检查可读性', note: '对比度/字号', status: 'done' },
]

// 功能列表数据
const featuresData: ListItem[] = [
  { title: '易读排版', description: '标准间距与字号，信息层级清晰易扫读。' },
  { title: '灵活网格', description: '一到三列自适应，适配不同内容密度。' },
  { title: '轻量交互', description: '悬浮细节、点击反馈，增进参与感。' },
  { title: '可定制主题', description: '支持品牌色与渐变，快速统一风格。' },
  { title: '高对比度配色', description: '保证可访问性，提升整体识读性。' },
  { title: '移动端友好', description: '响应式布局，窄屏展示同样舒适。' },
]

// 编号列表数据
const numberedData: ListItem[] = [
  { title: '需求梳理', description: '明确目标与范围', number: 1 },
  { title: '方案设计', description: '确定版式与数据', number: 2 },
  { title: '实现与联调', description: '完成开发与联动', number: 3 },
  { title: '评审与完善', description: '打磨体验与细节', number: 4 },
]

// 状态列表数据
const statusData: ListItem[] = [
  {
    title: '项目启动',
    description: '已完成项目初始化和团队组建',
    status: 'done',
  },
  {
    title: '需求分析',
    description: '正在进行用户调研和需求收集',
    status: 'info',
  },
  { title: '系统设计', description: '等待需求分析完成后开始', status: 'warn' },
  { title: '开发实施', description: '计划在下个季度开始', status: 'default' },
]

// 根据类型获取当前数据
const currentData = computed(() => {
  switch (activeListType.value) {
    case 'checklist':
      return checklistData
    case 'features':
      return featuresData
    case 'numbered':
      return numberedData
    case 'status':
      return statusData
    default:
      return checklistData
  }
})

// 获取当前类型的标题和描述
const currentInfo = computed(() => {
  const info = {
    checklist: {
      title: '清单列表（占位）',
      description: '状态色用于快速扫读：完成/信息/注意。',
    },
    features: {
      title: '功能列表（占位）',
      description: '常用的"要点网格"版式，适合信息汇总。',
    },
    numbered: {
      title: '编号列表（占位）',
      description: '有序列表展示，适合流程步骤说明。',
    },
    status: {
      title: '状态列表（占位）',
      description: '展示不同状态的项目进度和情况。',
    },
  }
  return info[activeListType.value as keyof typeof info]
})

// 获取状态样式类
const getStatusClass = (status?: string) => {
  const statusClasses = {
    done: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20',
    info: 'text-sky-600 bg-sky-500/10 border-sky-500/20',
    warn: 'text-amber-700 bg-amber-500/10 border-amber-500/20',
    default: 'text-slate-600 bg-slate-500/10 border-slate-500/20',
  }
  return (
    statusClasses[status as keyof typeof statusClasses] || statusClasses.default
  )
}

// 获取状态文本
const getStatusText = (status?: string) => {
  const statusTexts = {
    done: '完成',
    info: '进行中',
    warn: '待处理',
    default: '待定',
  }
  return statusTexts[status as keyof typeof statusTexts] || statusTexts.default
}

// 判断是否显示状态标签
const showStatusTag = computed(() =>
  ['checklist', 'status'].includes(activeListType.value)
)

// 判断是否显示编号
const showNumber = computed(() => activeListType.value === 'numbered')

// 获取网格列数
const gridCols = computed(() => {
  const cols = {
    checklist: 'sm:grid-cols-2 lg:grid-cols-2',
    features: 'sm:grid-cols-2 lg:grid-cols-3',
    numbered: 'sm:grid-cols-2 lg:grid-cols-2',
    status: 'sm:grid-cols-2 lg:grid-cols-2',
  }
  return cols[activeListType.value as keyof typeof cols]
})
</script>

<template>
  <section
    class="container mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-12 lg:py-16"
  >
    <div class="mb-8">
      <HeadingGradient :level="2" size="5xl"> 通用列表模板 </HeadingGradient>
      <p class="mt-2 text-slate-600">
        支持多种列表类型，点击按钮切换不同展示方式。
      </p>
    </div>

    <!-- 列表类型选择器 -->
    <div class="flex flex-wrap justify-center gap-2 mb-8">
      <button
        v-for="type in listTypes"
        :key="type.id"
        @click="activeListType = type.id"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
        :class="
          activeListType === type.id
            ? 'bg-gradient-to-r from-accent to-accent text-white shadow-lg'
            : 'bg-white/60 border border-white/40 text-slate-700 hover:bg-white/70'
        "
      >
        <span>{{ type.icon }}</span>
        <span>{{ type.name }}</span>
      </button>
    </div>

    <!-- 当前类型的标题和描述 -->
    <div class="mb-6">
      <HeadingGradient :level="2" size="4xl">
        {{ currentInfo.title }}
      </HeadingGradient>
      <p class="mt-2 text-slate-600">{{ currentInfo.description }}</p>
    </div>

    <!-- 列表内容 -->
    <div :class="`grid grid-cols-1 ${gridCols} gap-6`">
      <article
        v-for="(item, i) in currentData"
        :key="i"
        class="rounded-3xl border border-slate-200/30 bg-white/70 backdrop-blur-md p-6 md:p-8 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
      >
        <div class="flex items-start justify-between">
          <!-- 左侧内容 -->
          <div class="flex-1">
            <!-- 标题和编号 -->
            <div class="flex items-center gap-3">
              <!-- 编号显示 -->
              <span
                v-if="showNumber && item.number"
                class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-accent/20 to-accent/10 border border-white/40 text-slate-900 font-bold"
              >
                {{ item.number }}
              </span>

              <!-- 图标显示 -->
              <span
                v-else-if="!showNumber"
                class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/40 bg-gradient-to-r from-accent/20 to-accent/10 text-slate-900"
              ></span>

              <h3 class="text-lg md:text-xl font-bold text-slate-900">
                {{ item.title }}
              </h3>
            </div>

            <!-- 描述或备注 -->
            <p class="mt-2 text-sm text-slate-600">
              {{ item.description || item.note }}
            </p>
          </div>

          <!-- 右侧状态标签 -->
          <span
            v-if="showStatusTag && item.status"
            class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ml-4"
            :class="getStatusClass(item.status)"
          >
            <span class="w-2 h-2 rounded-full bg-current"></span>
            {{ getStatusText(item.status) }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
