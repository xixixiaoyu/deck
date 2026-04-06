<script setup lang="ts">
import type { EChartsOption } from '@/shared/charts/echarts'
import { VChart } from '@/shared/charts/echarts'
import { computed, ref } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{ isActive?: boolean; isPreview?: boolean }>()

// 图表类型配置
const chartTypes = [
  { id: 'line', name: '折线图', icon: '📈' },
  { id: 'bar', name: '柱状图', icon: '📊' },
  { id: 'pie', name: '饼图', icon: '🥧' },
  { id: 'donut', name: '环形图', icon: '🍩' },
  { id: 'scatter', name: '散点图', icon: '⚡' },
  { id: 'radar', name: '雷达图', icon: '🎯' },
]

const activeChartType = ref('line')

// 基础数据
const baseData = {
  categories: ['阶段 A', '阶段 B', '阶段 C', '阶段 D', '阶段 E'],
  series1: [32, 48, 55, 62, 72],
  series2: [28, 36, 44, 53, 60],
  pieData: [
    { value: 335, name: 'Direct' },
    { value: 310, name: 'Email' },
    { value: 234, name: 'Ad' },
    { value: 135, name: 'Video' },
    { value: 1548, name: 'Search' },
  ],
  donutData: [
    { value: 120, name: 'A' },
    { value: 90, name: 'B' },
    { value: 60, name: 'C' },
    { value: 30, name: 'D' },
  ],
  scatterData1: [
    [10, 8],
    [20, 20],
    [36, 14],
    [48, 28],
    [60, 30],
  ],
  scatterData2: [
    [12, 4],
    [22, 16],
    [30, 10],
    [46, 22],
    [58, 26],
  ],
  radarIndicator: [
    { name: '稳定性', max: 100 },
    { name: '性能', max: 100 },
    { name: '易用性', max: 100 },
    { name: '扩展性', max: 100 },
    { name: '安全性', max: 100 },
  ],
  radarData1: [80, 76, 88, 72, 85],
  radarData2: [72, 70, 78, 68, 80],
}

// 根据类型生成图表配置
const chartOption = computed<EChartsOption>(() => {
  const baseOption = {
    tooltip: {},
    legend:
      activeChartType.value !== 'pie' && activeChartType.value !== 'donut'
        ? { top: 36 }
        : { bottom: 0 },
  }

  switch (activeChartType.value) {
    case 'line':
      return {
        ...baseOption,
        title: { text: '趋势折线图', left: 'center' },
        tooltip: { trigger: 'axis' },
        grid: { left: 40, right: 20, bottom: 40, top: 80 },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: baseData.categories,
        },
        yAxis: { type: 'value' },
        series: [
          {
            name: '示例策略',
            type: 'line',
            smooth: true,
            data: baseData.series1,
          },
          {
            name: '对照方案',
            type: 'line',
            smooth: true,
            data: baseData.series2,
          },
        ],
      }

    case 'bar':
      return {
        ...baseOption,
        title: { text: '对比柱状图', left: 'center' },
        tooltip: { trigger: 'axis' },
        grid: { left: 40, right: 20, bottom: 40, top: 80 },
        xAxis: {
          type: 'category',
          data: baseData.categories,
        },
        yAxis: { type: 'value' },
        series: [
          {
            name: '示例策略',
            type: 'bar',
            data: baseData.series1,
            itemStyle: { borderRadius: [6, 6, 0, 0] },
          },
          {
            name: '对照方案',
            type: 'bar',
            data: baseData.series2,
            itemStyle: { borderRadius: [6, 6, 0, 0] },
          },
        ],
      }

    case 'pie':
      return {
        ...baseOption,
        title: { text: '构成饼图', left: 'center' },
        tooltip: { trigger: 'item' },
        series: [
          {
            name: '来源构成',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: baseData.pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0,0,0,0.3)',
              },
            },
          },
        ],
      }

    case 'donut':
      return {
        ...baseOption,
        title: { text: '环形图', left: 'center' },
        tooltip: { trigger: 'item' },
        series: [
          {
            name: '占比',
            type: 'pie',
            radius: ['40%', '65%'],
            center: ['50%', '50%'],
            label: { show: false },
            labelLine: { show: false },
            data: baseData.donutData,
          },
        ],
      }

    case 'scatter':
      return {
        ...baseOption,
        title: { text: '散点分布图', left: 'center' },
        tooltip: { trigger: 'item' },
        grid: { left: 40, right: 20, bottom: 40, top: 80 },
        xAxis: { type: 'value' },
        yAxis: { type: 'value' },
        series: [
          {
            name: '样本 A',
            type: 'scatter',
            symbolSize: 12,
            data: baseData.scatterData1,
          },
          {
            name: '样本 B',
            type: 'scatter',
            symbolSize: 12,
            data: baseData.scatterData2,
          },
        ],
      }

    case 'radar':
      return {
        ...baseOption,
        title: { text: '能力雷达图', left: 'center' },
        radar: {
          indicator: baseData.radarIndicator,
        },
        series: [
          {
            name: '方案对比',
            type: 'radar',
            data: [
              { value: baseData.radarData1, name: '示例策略' },
              { value: baseData.radarData2, name: '对照方案' },
            ],
          },
        ],
      }

    default:
      return baseOption
  }
})

// 获取当前图表类型的描述
const currentChartDescription = computed(() => {
  const descriptions = {
    line: '使用 ECharts 展示两条趋势线。',
    bar: '显示两组方案的体量对比。',
    pie: '展示各类来源占比。',
    donut: '适合突出整体与部分的关系。',
    scatter: '直观展示变量间的关系与聚类。',
    radar: '展示多维指标的综合表现。',
  }
  return descriptions[activeChartType.value as keyof typeof descriptions] || ''
})
</script>

<template>
  <section
    class="h-full w-full relative flex items-center justify-center p-8 overflow-hidden"
  >
    <!-- 背景装饰 -->
    <div
      class="absolute inset-0 -z-10 opacity-[0.03] [background-image:linear-gradient(to_right,rgb(var(--text-primary))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--text-primary))_1px,transparent_1px)] [background-size:40px_40px]"
    ></div>
    <div
      class="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"
    ></div>

    <div
      class="w-full max-w-6xl flex flex-col gap-8 rounded-[2.5rem] p-10 bg-white/40 border border-white/20 backdrop-blur-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]"
    >
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="space-y-2">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase"
          >
            Data Visualization
          </div>
          <h2 class="text-4xl font-black tracking-tight text-slate-900">
            数据洞察
          </h2>
          <p class="text-slate-500 font-medium max-w-md">
            {{ currentChartDescription }}
          </p>
        </div>

        <!-- 图表类型选择器 -->
        <div
          class="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-slate-100/50 border border-slate-200/50 shadow-inner"
        >
          <button
            v-for="type in chartTypes"
            :key="type.id"
            @click="activeChartType = type.id"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all"
            :class="
              activeChartType === type.id
                ? 'bg-white text-slate-900 shadow-md scale-105'
                : 'text-slate-500 hover:bg-white/50 hover:text-slate-700'
            "
          >
            <span class="text-lg">{{ type.icon }}</span>
            <span>{{ type.name }}</span>
          </button>
        </div>
      </div>

      <!-- 图表容器 -->
      <div
        class="relative h-[55vh] w-full bg-white/30 rounded-3xl border border-white/40 p-6 group"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none"
        ></div>
        <VChart :option="chartOption" autoresize />
      </div>

      <!-- 底部注脚 -->
      <div
        class="flex items-center justify-between text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase"
      >
        <span>© 2026 Analysis Report</span>
        <div class="flex gap-4">
          <span class="flex items-center gap-1.5"
            ><span class="w-1.5 h-1.5 rounded-full bg-accent"></span> Real-time
            Data</span
          >
          <span class="flex items-center gap-1.5"
            ><span class="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            Verified Source</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
