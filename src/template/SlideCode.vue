<script setup lang="ts">
import { computed } from 'vue'
import { highlight } from '@/utils/highlight'

defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const code = `// 示例：构建索引并查询
export async function demo() {
  const index = await buildIndex(docs)
  const engine = index.asQueryEngine({ similarity_top_k: 5 })
  const answer = await engine.query('示例问题')
  return answer
}`

const highlightedCode = computed(() => highlight(code, 'typescript'))

const highlights = [
  {
    title: '结构清晰',
    description: '索引构建 → 查询引擎 → 提问，逻辑一目了然。',
  },
  {
    title: '参数可调',
    description: '如 similarity_top_k 展示检索范围的灵活性。',
  },
  {
    title: '讲解友好',
    description: '适合技术分享中的代码走读，代码高亮清晰。',
  },
]
</script>

<template>
  <section class="h-full w-full p-12 flex flex-col gap-8 overflow-hidden">
    <div class="space-y-2">
      <h2 class="text-4xl font-black tracking-tight text-slate-900">
        核心实现
      </h2>
      <p class="text-lg text-slate-500 font-medium">
        技术分享与架构评审，突出关键片段与要点
      </p>
    </div>

    <div class="flex-1 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 min-h-0">
      <!-- 代码窗口 -->
      <div
        class="flex flex-col bg-[#1e1e1e] rounded-3xl border border-white/10 shadow-2xl overflow-hidden group"
      >
        <!-- 窗口控制条 -->
        <div
          class="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5"
        >
          <div class="flex gap-2">
            <div class="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
            <div class="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
            <div class="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
          </div>
          <div
            class="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase"
          >
            index.ts
          </div>
          <div class="w-12"></div>
        </div>

        <!-- 代码内容 -->
        <div
          class="flex-1 p-8 font-mono text-base leading-relaxed overflow-auto custom-scrollbar"
        >
          <!-- eslint-disable-next-line vue/no-v-html -->
          <pre class="whitespace-pre"><code v-html="highlightedCode" /></pre>
        </div>
      </div>

      <!-- 说明面板 -->
      <div class="flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
        <div
          v-for="(h, i) in highlights"
          :key="i"
          class="group p-6 rounded-[2rem] bg-white/50 border border-white/40 shadow-sm backdrop-blur-xl hover:shadow-md transition-all duration-300"
        >
          <div class="flex items-center gap-4 mb-3">
            <div
              class="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-black"
            >
              0{{ i + 1 }}
            </div>
            <h3 class="font-black text-slate-900 tracking-tight">
              {{ h.title }}
            </h3>
          </div>
          <p class="text-slate-500 text-sm font-medium leading-relaxed">
            {{ h.description }}
          </p>
        </div>

        <!-- 装饰性元素 -->
        <div
          class="mt-auto p-6 rounded-[2rem] bg-accent/5 border border-accent/10 flex items-center gap-4"
        >
          <div
            class="w-10 h-10 rounded-2xl bg-accent/20 flex items-center justify-center text-accent text-xl"
          >
            💡
          </div>
          <p class="text-xs font-bold text-accent/80 tracking-wide">
            提示：点击代码片段可快速复制，长按查看详细注释。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
