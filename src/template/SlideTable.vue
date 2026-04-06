<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

type Row = { feature: string; basic: string; pro: string; enterprise: string }

const columns = ['功能', '基础版', '专业版', '企业版']
const rows: Row[] = [
  { feature: '用户数', basic: '最多 3', pro: '最多 50', enterprise: '不限' },
  { feature: '项目数', basic: '1', pro: '10', enterprise: '不限' },
  {
    feature: '支持响应',
    basic: '社区',
    pro: '工作日 48h',
    enterprise: '7×24h',
  },
  { feature: '部署方式', basic: '共享', pro: '云专属', enterprise: '私有部署' },
]
</script>

<template>
  <section
    class="container mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-12 lg:py-16"
  >
    <div class="mb-6">
      <h2
        class="inline-block text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent/90 to-accent/70"
      >
        数据表格（占位）
      </h2>
      <p class="mt-2 text-slate-600">用于展示结构化信息与横向对比</p>
    </div>

    <div
      class="overflow-x-auto rounded-3xl border border-slate-200/30 bg-white/70 backdrop-blur-md shadow-xl"
    >
      <table class="min-w-full text-sm">
        <thead>
          <tr class="bg-[rgb(var(--accent))] text-white">
            <th
              v-for="col in columns"
              :key="col"
              class="px-4 py-3 text-left font-semibold"
            >
              {{ col }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(r, i) in rows"
            :key="r.feature"
            :class="i % 2 === 0 ? 'bg-white/60' : 'bg-white/40'"
          >
            <td class="px-4 py-3 font-semibold text-slate-800">
              {{ r.feature }}
            </td>
            <td class="px-4 py-3 text-slate-700">{{ r.basic }}</td>
            <td class="px-4 py-3 text-slate-700">{{ r.pro }}</td>
            <td class="px-4 py-3 text-slate-700">{{ r.enterprise }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
