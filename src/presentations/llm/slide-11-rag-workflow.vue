<script setup lang="ts">
import { highlight } from '@/utils/highlight'
import { computed, ref } from 'vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const tabs = [
  {
    id: 'offline',
    label: '离线阶段：数据准备',
    content: [
      '数据提取：从各种数据源提取文档',
      '文本分块：将文档切割成更小的文本块',
      '向量化：将文本块转换为高维向量',
      '建立索引：存储到向量数据库中',
    ],
  },
  {
    id: 'online',
    label: '在线阶段：检索与生成',
    content: [
      '问题向量化：将用户问题转换为向量',
      '相似度检索：搜索最相关的文本块',
      '构建提示词：整合检索结果与问题',
      '生成答案：调用大模型生成最终答案',
    ],
  },
]
const activeTab = ref('offline')

const indexExample = `{
  "chunk_id": "doc-001#3",
  "text": "请假流程：员工需提前 3 天在 HR 系统提交申请。",
  "embedding": [0.012, -0.234, 0.443, ...],
  "metadata": {
    "source": "HR 手册",
    "page": 12
  }
}`

const promptExample = `你是一位知识库问答助手，根据上下文回答用户问题。

问题：项目管理用什么工具？

上下文：
[1] 我们统一使用 Jira 进行需求、任务与缺陷管理
[2] 新成员需要加入公司 Jira 组织并完成权限申请

要求：
- 直接给出答案并引用依据
- 保持简洁准确
- 若不确定，请提出澄清问题`

const highlightedIndexExample = computed(() => highlight(indexExample, 'json'))
const highlightedPromptExample = computed(() =>
  highlight(promptExample, 'markdown')
)
</script>

<template>
  <section
    class="container mx-auto max-w-6xl px-6 md:px-8 lg:px-12 pt-12 pb-32 lg:pt-16 lg:pb-40"
  >
    <div class="mb-8 text-center">
      <h2
        class="inline-block text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent/90 to-accent/70"
      >
        RAG 的工作流程
      </h2>
      <p class="mt-2 text-slate-600 max-w-2xl mx-auto">
        RAG 分为离线数据准备和在线检索生成两个阶段
      </p>
    </div>

    <div class="flex justify-center">
      <div
        class="inline-flex p-1 bg-slate-200/50 backdrop-blur-sm rounded-2xl border border-white/20"
      >
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
          :class="[
            activeTab === tab.id
              ? 'bg-white text-slate-800 shadow-sm ring-1 ring-black/5'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50',
          ]"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Steps List -->
      <div class="grid gap-4">
        <div
          v-for="(item, index) in tabs.find(t => t.id === activeTab)?.content"
          :key="index"
          class="group flex items-start gap-4 p-4 rounded-2xl bg-white/60 border border-white/60 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300"
        >
          <div
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white font-bold text-sm shadow-sm group-hover:scale-110 transition-transform"
            :class="
              activeTab === 'offline'
                ? 'bg-gradient-to-br from-emerald-400 to-teal-500'
                : 'bg-gradient-to-br from-blue-400 to-blue-500'
            "
          >
            {{ index + 1 }}
          </div>
          <p class="pt-1 text-slate-700 leading-relaxed font-medium">
            {{ item }}
          </p>
        </div>
      </div>

      <!-- Example Code Block -->
      <div class="relative group h-full">
        <div
          class="absolute -inset-2 rounded-[2rem] opacity-40 blur-xl transition duration-700 group-hover:opacity-80"
          :class="
            activeTab === 'offline'
              ? 'bg-gradient-to-r from-emerald-400/30 to-teal-500/30'
              : 'bg-gradient-to-r from-blue-400/30 to-blue-500/30'
          "
        ></div>
        <div
          class="relative h-full rounded-2xl bg-[#1e1e1e] border border-white/10 overflow-hidden shadow-2xl flex flex-col"
        >
          <div
            class="flex items-center justify-between gap-2 px-4 py-3 border-b border-white/5 bg-white/5"
          >
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span
              class="text-xs font-mono text-white/30 uppercase tracking-wider"
            >
              {{
                activeTab === 'offline'
                  ? 'INDEX_EXAMPLE.JSON'
                  : 'PROMPT_TEMPLATE.MD'
              }}
            </span>
          </div>
          <div class="p-6 overflow-y-auto custom-scrollbar max-h-[500px]">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <pre
              class="font-mono text-sm leading-relaxed text-blue-100/90"
            ><code class="whitespace-pre-wrap" v-html="activeTab === 'offline' ? highlightedIndexExample : highlightedPromptExample" /></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
}
</style>
