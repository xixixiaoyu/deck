<script setup lang="ts">
import Card from '@/shared/ui/Card.vue'
import HeadingGradient from '@/shared/ui/HeadingGradient.vue'
import Section from '@/shared/ui/Section.vue'
import {
  CheckCircleIcon,
  CommandLineIcon,
  CpuChipIcon,
  ExclamationCircleIcon,
  ServerIcon,
  ShieldCheckIcon,
  SignalIcon,
} from '@heroicons/vue/24/solid'
import { onMounted, ref } from 'vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
// --- 实时监控数据 ---
const latency = ref(120)
const rpm = ref(450)
const errorRate = ref(0.2)
const logs = ref<
  Array<{ time: string; type: string; msg: string; color: string }>
>([
  {
    time: '10:42:01',
    type: 'INFO',
    msg: 'Request processed (id=req_8a9v)',
    color: 'text-green-400',
  },
  {
    time: '10:42:02',
    type: 'INFO',
    msg: 'Cache hit (latency=12ms)',
    color: 'text-green-400',
  },
])
// 实时数据更新
onMounted(() => {
  setInterval(() => {
    latency.value = 100 + Math.random() * 40
    rpm.value = 400 + Math.floor(Math.random() * 100)
    errorRate.value = Math.random() * 0.5
    // 日志流更新
    const newLogTypes = [
      {
        type: 'INFO',
        msg: `Request processed (id=${Math.random().toString(36).substring(7)})`,
        color: 'text-green-400',
      },
      {
        type: 'WARN',
        msg: `Token limit for user_${Math.floor(Math.random() * 9000)}`,
        color: 'text-yellow-400',
      },
      {
        type: 'DEBUG',
        msg: 'Auto-scaling: checking replicas...',
        color: 'text-blue-400',
      },
    ]
    const randomLog =
      newLogTypes[Math.floor(Math.random() * newLogTypes.length)]
    if (Math.random() > 0.3) {
      const now = new Date()
      const timeStr = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
      logs.value.push({ ...randomLog, time: timeStr })
      if (logs.value.length > 5) logs.value.shift()
    }
  }, 2000)
})
</script>
<template>
  <Section>
    <Card padding="xl" class="grid place-items-center h-full">
      <div
        class="relative z-10 px-6 py-4 w-full max-w-7xl h-full flex flex-col"
      >
        <!-- Header -->
        <div class="text-center mb-8 shrink-0">
          <HeadingGradient :level="2" size="5xl" class="leading-tight">
            可信赖工程与实践
          </HeadingGradient>
          <p class="mt-3 text-lg text-slate-600 max-w-4xl mx-auto">
            从治理框架到生产环境的全链路保障
          </p>
        </div>
        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow min-h-0">
          <!-- Column 1: 治理框架 -->
          <div class="flex flex-col gap-5 overflow-y-auto pr-2">
            <!-- 1. Safety & Security -->
            <div
              class="bg-red-50/50 rounded-2xl p-5 border border-red-100 shadow-sm"
            >
              <div class="flex items-center gap-3 mb-3">
                <div class="p-2 bg-red-100 rounded-lg">
                  <ShieldCheckIcon class="w-5 h-5 text-red-600" />
                </div>
                <h3 class="text-lg font-bold text-red-900">安全与合规</h3>
              </div>
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-sm text-slate-700">
                  <span class="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  <span class="font-medium">Prompt Injection 防护</span>
                  <span
                    class="text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded"
                    >NeMo</span
                  >
                </div>
                <div class="flex items-center gap-2 text-sm text-slate-700">
                  <span class="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  <span class="font-medium">PII 敏感信息过滤</span>
                  <span
                    class="text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded"
                    >Presidio</span
                  >
                </div>
                <div class="flex items-center gap-2 text-sm text-slate-700">
                  <span class="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  <span class="font-medium">内容风控拦截</span>
                </div>
              </div>
            </div>
            <!-- 2. Reliability (可靠性) -->
            <div
              class="bg-blue-50/50 rounded-2xl p-5 border border-blue-100 shadow-sm"
            >
              <div class="flex items-center gap-3 mb-3">
                <div class="p-2 bg-blue-100 rounded-lg">
                  <CpuChipIcon class="w-5 h-5 text-blue-600" />
                </div>
                <h3 class="text-lg font-bold text-blue-900">可靠性工程</h3>
              </div>
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-sm text-slate-700">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span class="font-medium">幻觉抑制 (RAG 核查)</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-slate-700">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span class="font-medium">结构化输出 (JSON)</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-slate-700">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span class="font-medium">兜底机制</span>
                </div>
              </div>
            </div>
            <!-- 3. LLMOps Workflow -->
            <div
              class="bg-purple-50/50 rounded-2xl p-5 border border-purple-100 shadow-sm"
            >
              <div class="flex items-center gap-3 mb-3">
                <div class="p-2 bg-purple-100 rounded-lg">
                  <CommandLineIcon class="w-5 h-5 text-purple-600" />
                </div>
                <h3 class="text-lg font-bold text-purple-900">流程与评估</h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  class="px-2 py-1 bg-white border border-purple-100 text-purple-700 text-xs rounded-md font-medium"
                  >Dataset Management</span
                >
                <span
                  class="px-2 py-1 bg-white border border-purple-100 text-purple-700 text-xs rounded-md font-medium"
                  >Regression Testing</span
                >
                <span
                  class="px-2 py-1 bg-white border border-purple-100 text-purple-700 text-xs rounded-md font-medium"
                  >A/B Testing</span
                >
              </div>
            </div>
          </div>
          <!-- Column 2: 生产监控 -->
          <div
            class="bg-slate-900 rounded-3xl p-6 text-slate-200 shadow-2xl flex flex-col gap-5 font-mono relative overflow-hidden border border-slate-800"
          >
            <!-- Background decorative elements -->
            <div
              class="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
            ></div>
            <div
              class="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"
            ></div>
            <div
              class="flex items-center justify-between border-b border-slate-700 pb-4 z-10"
            >
              <div class="flex items-center gap-2">
                <div
                  class="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"
                ></div>
                <span class="font-bold text-base text-white">生产监控</span>
              </div>
              <span class="text-xs text-slate-500">us-east-1</span>
            </div>
            <!-- Metrics Grid -->
            <div class="grid grid-cols-2 gap-4 z-10">
              <div
                class="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50"
              >
                <div
                  class="text-xs text-slate-400 mb-1 flex items-center gap-1"
                >
                  <SignalIcon class="w-3 h-3" /> 延迟 (P99)
                </div>
                <div
                  class="text-2xl font-bold text-blue-400 flex items-end gap-2"
                >
                  {{ latency.toFixed(0) }}
                  <span class="text-sm text-slate-500 mb-1">ms</span>
                </div>
                <!-- Simple sparkline simulation -->
                <div class="flex gap-0.5 items-end h-6 mt-2 opacity-50">
                  <div
                    v-for="n in 10"
                    :key="n"
                    class="w-full bg-blue-500 rounded-t-sm"
                    :style="{ height: Math.random() * 100 + '%' }"
                  ></div>
                </div>
              </div>
              <div
                class="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50"
              >
                <div
                  class="text-xs text-slate-400 mb-1 flex items-center gap-1"
                >
                  <ServerIcon class="w-3 h-3" /> 吞吐量
                </div>
                <div
                  class="text-2xl font-bold text-emerald-400 flex items-end gap-2"
                >
                  {{ rpm }} <span class="text-sm text-slate-500 mb-1">RPM</span>
                </div>
                <div class="flex gap-0.5 items-end h-6 mt-2 opacity-50">
                  <div
                    v-for="n in 10"
                    :key="n"
                    class="w-full bg-emerald-500 rounded-t-sm"
                    :style="{ height: Math.random() * 100 + '%' }"
                  ></div>
                </div>
              </div>
            </div>
            <!-- 日志流 -->
            <div
              class="flex-grow bg-black/40 rounded-xl p-3 overflow-hidden text-xs space-y-1.5 border border-slate-700/30 z-10 font-mono"
            >
              <div
                v-for="(log, idx) in logs"
                :key="idx"
                :class="['flex gap-2', log.color]"
              >
                <span class="text-slate-600">[{{ log.time }}]</span>
                <span>{{ log.type }}: {{ log.msg }}</span>
              </div>
            </div>
            <div
              class="flex items-center gap-4 text-xs text-slate-400 bg-slate-800/30 p-3 rounded-lg z-10"
            >
              <div class="flex items-center gap-1.5">
                <CheckCircleIcon class="w-3.5 h-3.5 text-green-500" />
                <span>API</span>
              </div>
              <div class="flex items-center gap-1.5">
                <CheckCircleIcon class="w-3.5 h-3.5 text-green-500" />
                <span>DB</span>
              </div>
              <div class="flex items-center gap-1.5">
                <ExclamationCircleIcon class="w-3.5 h-3.5 text-yellow-500" />
                <span>Vector Store</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </Section>
</template>
