<script setup lang="ts">
import type { EChartsOption } from '@/shared/charts/echarts'
import { VChart } from '@/shared/charts/echarts'
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps<{ isActive?: boolean; isPreview?: boolean }>()

// 仪表盘类型配置
const dashboardTypes = [
  { id: 'overview', name: '总览仪表盘', icon: '📊' },
  { id: 'performance', name: '性能监控', icon: '⚡' },
  { id: 'analytics', name: '数据分析', icon: '📈' },
]

const activeDashboardType = ref('overview')

// 关键指标数据
const kpiData = [
  { label: '总用户数', value: 12845, change: '+12.5%', trend: 'up' },
  { label: '活跃率', value: 68.3, change: '+3.2%', trend: 'up', suffix: '%' },
  { label: '转化率', value: 24.7, change: '-1.8%', trend: 'down', suffix: '%' },
  { label: '满意度', value: 4.6, change: '+0.3', trend: 'up', suffix: '/5.0' },
]

// 动画数值
const animatedValues = ref<number[]>(kpiData.map(() => 0))

// 性能数据
const performanceData = [
  { name: '响应时间', value: 245, unit: 'ms', status: 'good' },
  { name: 'CPU 使用率', value: 67, unit: '%', status: 'warning' },
  { name: '内存占用', value: 2.3, unit: 'GB', status: 'good' },
  { name: '错误率', value: 0.02, unit: '%', status: 'good' },
]

// 获取状态样式
const getStatusClass = (status: string) => {
  const statusClasses = {
    good: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20',
    warning: 'text-amber-600 bg-amber-500/10 border-amber-500/20',
    error: 'text-red-600 bg-red-500/10 border-red-500/20',
  }
  return (
    statusClasses[status as keyof typeof statusClasses] || statusClasses.good
  )
}

// 获取趋势图标
const getTrendIcon = (trend: string) => {
  if (trend === 'up') {
    return '📈'
  } else if (trend === 'down') {
    return '📉'
  }
  return '➡️'
}

// 获取趋势颜色
const getTrendColor = (trend: string) => {
  return trend === 'up' ? 'text-emerald-600' : 'text-red-600'
}

// 图表配置
const lineChartOption = computed<EChartsOption>(() => ({
  title: { text: '用户增长趋势', left: 'center' },
  tooltip: { trigger: 'axis' },
  grid: { left: 40, right: 20, bottom: 40, top: 60 },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月'],
  },
  yAxis: { type: 'value' },
  series: [
    {
      name: '新增用户',
      type: 'line',
      smooth: true,
      data: [820, 932, 901, 934, 1290, 1330],
      itemStyle: { color: 'rgb(var(--accent))' },
    },
    {
      name: '活跃用户',
      type: 'line',
      smooth: true,
      data: [620, 732, 701, 734, 1090, 1130],
      itemStyle: { color: 'rgb(var(--accent)/0.6)' },
    },
  ],
}))

const pieChartOption = computed<EChartsOption>(() => ({
  title: { text: '用户来源分布', left: 'center' },
  tooltip: { trigger: 'item' },
  series: [
    {
      name: '来源',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '60%'],
      data: [
        { value: 1048, name: '直接访问' },
        { value: 735, name: '搜索引擎' },
        { value: 580, name: '社交媒体' },
        { value: 484, name: '邮件营销' },
        { value: 300, name: '其他' },
      ],
    },
  ],
}))

// 动画函数
const animateValues = () => {
  if (!props.isActive) return
  const start = performance.now()
  const durations = kpiData.map(() => 800 + Math.random() * 600)
  const starts = animatedValues.value.slice()

  const tick = (t: number) => {
    const elapsed = t - start
    let done = true
    const next = animatedValues.value.slice()

    for (let i = 0; i < kpiData.length; i++) {
      const d = durations[i]
      const progress = Math.min(1, elapsed / d)
      const eased = 1 - Math.pow(1 - progress, 3)
      const target = kpiData[i].value
      const from = starts[i]
      const val = from + (target - from) * eased
      next[i] = val
      if (progress < 1) done = false
    }

    animatedValues.value = next
    if (!done) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

onMounted(() => {
  if (props.isActive) animateValues()
})

watch(
  () => props.isActive,
  active => {
    if (active) {
      animatedValues.value = kpiData.map(() => 0)
      animateValues()
    }
  }
)

// 获取当前仪表盘类型的内容
const currentContent = computed(() => {
  switch (activeDashboardType.value) {
    case 'overview':
      return 'showOverview'
    case 'performance':
      return 'showPerformance'
    case 'analytics':
      return 'showAnalytics'
    default:
      return 'showOverview'
  }
})
</script>

<template>
  <section
    class="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-12 lg:py-16"
  >
    <div class="mb-8">
      <h2
        class="inline-block text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent/90 to-accent/70"
      >
        仪表盘模板
      </h2>
      <p class="mt-2 text-slate-600">多维度数据展示，支持实时监控和分析。</p>
    </div>

    <!-- 仪表盘类型选择器 -->
    <div class="flex flex-wrap justify-center gap-2 mb-8">
      <button
        v-for="type in dashboardTypes"
        :key="type.id"
        @click="activeDashboardType = type.id"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
        :class="
          activeDashboardType === type.id
            ? 'bg-gradient-to-r from-accent to-accent text-white shadow-lg'
            : 'bg-white/60 border border-white/40 text-slate-700 hover:bg-white/70'
        "
      >
        <span>{{ type.icon }}</span>
        <span>{{ type.name }}</span>
      </button>
    </div>

    <!-- 总览仪表盘 -->
    <div v-if="currentContent === 'showOverview'" class="space-y-6">
      <!-- KPI 指标卡片 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="(kpi, i) in kpiData"
          :key="i"
          class="rounded-2xl border border-slate-200/30 bg-white/70 backdrop-blur-md p-4 shadow-xl"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-slate-600">{{ kpi.label }}</span>
            <span :class="getTrendColor(kpi.trend)" class="text-xs font-medium">
              {{ getTrendIcon(kpi.trend) }} {{ kpi.change }}
            </span>
          </div>
          <div class="text-2xl font-bold text-slate-900">
            {{ animatedValues[i].toFixed(kpi.value % 1 === 0 ? 0 : 1)
            }}{{ kpi.suffix || '' }}
          </div>
        </div>
      </div>

      <!-- 图表区域 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          class="rounded-2xl border border-slate-200/30 bg-white/70 backdrop-blur-md p-6 shadow-xl"
        >
          <VChart :option="lineChartOption" class="h-80 w-full" />
        </div>
        <div
          class="rounded-2xl border border-slate-200/30 bg-white/70 backdrop-blur-md p-6 shadow-xl"
        >
          <VChart :option="pieChartOption" class="h-80 w-full" />
        </div>
      </div>
    </div>

    <!-- 性能监控仪表盘 -->
    <div v-else-if="currentContent === 'showPerformance'" class="space-y-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="(perf, i) in performanceData"
          :key="i"
          class="rounded-2xl border border-slate-200/30 bg-white/70 backdrop-blur-md p-4 shadow-xl"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-slate-600">{{ perf.name }}</span>
            <span
              class="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-medium"
              :class="getStatusClass(perf.status)"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
              {{
                perf.status === 'good'
                  ? '正常'
                  : perf.status === 'warning'
                    ? '警告'
                    : '错误'
              }}
            </span>
          </div>
          <div class="text-2xl font-bold text-slate-900">
            {{ perf.value }}{{ perf.unit }}
          </div>
        </div>
      </div>

      <!-- 性能趋势图 -->
      <div
        class="rounded-2xl border border-slate-200/30 bg-white/70 backdrop-blur-md p-6 shadow-xl"
      >
        <h3 class="text-lg font-semibold text-slate-900 mb-4">性能趋势</h3>
        <VChart :option="lineChartOption" class="h-80 w-full" />
      </div>
    </div>

    <!-- 数据分析仪表盘 -->
    <div v-else-if="currentContent === 'showAnalytics'" class="space-y-6">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- 漏斗图 -->
        <div
          class="rounded-2xl border border-slate-200/30 bg-white/70 backdrop-blur-md p-6 shadow-xl"
        >
          <h3 class="text-lg font-semibold text-slate-900 mb-4">转化漏斗</h3>
          <div class="space-y-2">
            <div
              class="flex items-center justify-between p-3 bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg"
            >
              <span class="text-sm font-medium">访问</span>
              <span class="text-sm font-bold">10,000</span>
            </div>
            <div
              class="flex items-center justify-between p-3 bg-gradient-to-r from-accent/15 to-accent/5 rounded-lg"
            >
              <span class="text-sm font-medium">注册</span>
              <span class="text-sm font-bold">3,500</span>
            </div>
            <div
              class="flex items-center justify-between p-3 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg"
            >
              <span class="text-sm font-medium">活跃</span>
              <span class="text-sm font-bold">1,200</span>
            </div>
            <div
              class="flex items-center justify-between p-3 bg-gradient-to-r from-accent/5 to-accent/2 rounded-lg"
            >
              <span class="text-sm font-medium">付费</span>
              <span class="text-sm font-bold">300</span>
            </div>
          </div>
        </div>

        <!-- 热力图 -->
        <div
          class="rounded-2xl border border-slate-200/30 bg-white/70 backdrop-blur-md p-6 shadow-xl"
        >
          <h3 class="text-lg font-semibold text-slate-900 mb-4">活跃时段</h3>
          <div class="grid grid-cols-7 gap-1 text-xs">
            <div
              v-for="day in ['一', '二', '三', '四', '五', '六', '日']"
              :key="day"
              class="text-center text-slate-600 p-1"
            >
              {{ day }}
            </div>
            <div
              v-for="i in 35"
              :key="i"
              class="aspect-square rounded"
              :class="`bg-accent/${Math.floor(Math.random() * 9 + 1)}0`"
            ></div>
          </div>
        </div>

        <!-- 排行榜 -->
        <div
          class="rounded-2xl border border-slate-200/30 bg-white/70 backdrop-blur-md p-6 shadow-xl"
        >
          <h3 class="text-lg font-semibold text-slate-900 mb-4">热门页面</h3>
          <div class="space-y-3">
            <div
              v-for="i in 5"
              :key="i"
              class="flex items-center justify-between"
            >
              <div class="flex items-center gap-3">
                <span
                  class="w-6 h-6 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 text-xs font-bold flex items-center justify-center"
                >
                  {{ i }}
                </span>
                <span class="text-sm">页面 {{ i }}</span>
              </div>
              <span class="text-sm font-medium text-slate-600">{{
                Math.floor(Math.random() * 9000 + 1000)
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
