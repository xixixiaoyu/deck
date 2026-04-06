<script setup lang="ts">
import type { Category, Presentation } from '@/config/presentations'
import {
  AcademicCapIcon,
  CalendarIcon,
  ClockIcon,
  StarIcon,
} from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  categories: Category[]
  viewMode: 'grid' | 'list'
}>()

const difficultyLabels = {
  beginner: '初级',
  intermediate: '中级',
  advanced: '高级',
}

const difficultyColors = {
  beginner: 'text-green-500 bg-green-500/10 border-green-500/20',
  intermediate: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
  advanced: 'text-red-500 bg-red-500/10 border-red-500/20',
}

function getDifficultyColor(difficulty?: string) {
  return (
    difficultyColors[difficulty as keyof typeof difficultyColors] ||
    'text-gray-500 bg-gray-500/10 border-gray-500/20'
  )
}

function getCategoryColor(categoryId: string) {
  const colors: Record<string, string> = {
    llm: 'from-teal-500 to-teal-400',
    templates: 'from-blue-500 to-blue-400',
    'data-visualization': 'from-blue-500 to-blue-400',
    'web-development': 'from-green-500 to-green-400',
  }
  return colors[categoryId] || 'from-accent to-accent/70'
}

function getCategoryIcon(categoryId: string) {
  const icons: Record<string, string> = {
    llm: '🧠',
    templates: '🎨',
    'data-visualization': '📊',
    'web-development': '💻',
  }
  return icons[categoryId] || '📁'
}

// 将所有演示文稿合并为一个数组
const allPresentations = computed(() => {
  const presentations: (Presentation & {
    categoryId: string
    categoryName: string
  })[] = []

  props.categories.forEach(category => {
    category.presentations.forEach(presentation => {
      presentations.push({
        ...presentation,
        categoryId: category.id,
        categoryName: category.name,
      })
    })
  })

  return presentations
})

// 按分类分组的演示文稿（用于列表视图）
const groupedPresentations = computed(() => {
  return props.categories.map(category => ({
    ...category,
    presentations: category.presentations.map(presentation => ({
      ...presentation,
      categoryId: category.id,
      categoryName: category.name,
    })),
  }))
})
</script>

<template>
  <div class="presentation-container">
    <!-- 网格视图 -->
    <div v-if="viewMode === 'grid'" class="grid-view">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <div
          v-for="presentation in allPresentations"
          :key="presentation.id"
          class="group relative bg-surface/40 border border-accent/10 rounded-xl overflow-hidden transition-all duration-200 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1"
        >
          <RouterLink
            :to="presentation.route"
            class="block h-full"
            :class="
              presentation.route === '#' ? 'pointer-events-none opacity-60' : ''
            "
          >
            <!-- 卡片头部 -->
            <div
              class="relative h-24 bg-gradient-to-br p-4"
              :class="getCategoryColor(presentation.categoryId)"
            >
              <div class="absolute top-2 right-2">
                <span
                  v-if="presentation.difficulty"
                  :class="[
                    'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium border',
                    getDifficultyColor(presentation.difficulty),
                  ]"
                >
                  <AcademicCapIcon class="h-3 w-3" />
                  {{ difficultyLabels[presentation.difficulty] }}
                </span>
              </div>
              <div
                class="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm text-white text-sm font-bold"
              >
                {{ getCategoryIcon(presentation.categoryId) }}
              </div>
            </div>

            <!-- 卡片内容 -->
            <div class="p-4">
              <h3
                class="font-semibold text-text-primary text-sm mb-2 line-clamp-2 group-hover:text-accent transition-colors"
              >
                {{ presentation.title }}
              </h3>
              <p class="text-xs text-text-muted line-clamp-2 mb-3">
                {{ presentation.description }}
              </p>

              <!-- 标签 -->
              <div
                v-if="presentation.tags && presentation.tags.length > 0"
                class="flex flex-wrap gap-1 mb-3"
              >
                <span
                  v-for="tag in presentation.tags.slice(0, 2)"
                  :key="tag"
                  class="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent/80"
                >
                  {{ tag }}
                </span>
                <span
                  v-if="presentation.tags.length > 2"
                  class="rounded-full bg-accent/5 px-2 py-0.5 text-xs text-accent/60"
                >
                  +{{ presentation.tags.length - 2 }}
                </span>
              </div>

              <!-- 元信息 -->
              <div
                class="flex items-center justify-between text-xs text-text-muted"
              >
                <div class="flex items-center gap-3">
                  <div
                    v-if="presentation.duration"
                    class="flex items-center gap-1"
                  >
                    <ClockIcon class="h-3 w-3" />
                    {{ presentation.duration }}
                  </div>
                  <div
                    v-if="presentation.lastUpdated"
                    class="flex items-center gap-1"
                  >
                    <CalendarIcon class="h-3 w-3" />
                    {{ presentation.lastUpdated }}
                  </div>
                </div>
                <span class="text-xs text-accent/70">{{
                  presentation.categoryName
                }}</span>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- 列表视图 -->
    <div v-else class="list-view space-y-4">
      <div
        v-for="category in groupedPresentations"
        :key="category.id"
        class="category-section bg-surface/40 border border-accent/10 rounded-xl overflow-hidden"
      >
        <!-- 分类标题 -->
        <div
          class="flex items-center gap-3 p-4 border-b border-accent/10 bg-surface/60"
        >
          <div
            class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white text-sm font-bold"
            :class="getCategoryColor(category.id)"
          >
            {{ getCategoryIcon(category.id) }}
          </div>
          <div class="flex-1">
            <h3 class="font-semibold text-text-primary">
              {{ category.name }}
            </h3>
            <p class="text-xs text-text-muted">
              {{ category.presentations.length }} 个演示文稿
            </p>
          </div>
        </div>

        <!-- 演示文稿列表 -->
        <div class="divide-y divide-accent/10">
          <RouterLink
            v-for="presentation in category.presentations"
            :key="presentation.id"
            :to="presentation.route"
            class="flex items-center gap-4 p-4 transition-colors duration-200 hover:bg-accent/5"
            :class="
              presentation.route === '#' ? 'pointer-events-none opacity-60' : ''
            "
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br text-white text-sm font-bold flex-shrink-0"
              :class="getCategoryColor(presentation.categoryId)"
            >
              {{ getCategoryIcon(presentation.categoryId) }}
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-2 mb-1">
                <h4 class="font-medium text-text-primary text-sm truncate">
                  {{ presentation.title }}
                </h4>
                <span
                  v-if="presentation.difficulty"
                  :class="[
                    'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium border flex-shrink-0',
                    getDifficultyColor(presentation.difficulty),
                  ]"
                >
                  <AcademicCapIcon class="h-3 w-3" />
                  {{ difficultyLabels[presentation.difficulty] }}
                </span>
              </div>
              <p class="text-xs text-text-muted line-clamp-1 mb-2">
                {{ presentation.description }}
              </p>
              <div class="flex items-center gap-4 text-xs text-text-muted">
                <div
                  v-if="presentation.duration"
                  class="flex items-center gap-1"
                >
                  <ClockIcon class="h-3 w-3" />
                  {{ presentation.duration }}
                </div>
                <div
                  v-if="presentation.lastUpdated"
                  class="flex items-center gap-1"
                >
                  <CalendarIcon class="h-3 w-3" />
                  {{ presentation.lastUpdated }}
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- 空状态 -->
    <div v-if="allPresentations.length === 0" class="text-center py-16">
      <div
        class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-surface-muted/60 mb-4"
      >
        <StarIcon class="h-8 w-8 text-text-muted" />
      </div>
      <h3 class="text-lg font-medium text-text-primary mb-2">
        没有找到匹配的演示文稿
      </h3>
      <p class="text-sm text-text-muted">尝试调整搜索条件或清除筛选器</p>
    </div>
  </div>
</template>

<style scoped>
.presentation-container {
  @apply w-full;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.grid-view .group:hover .line-clamp-2 {
  -webkit-line-clamp: 3;
}
</style>
