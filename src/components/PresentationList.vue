<script setup lang="ts">
import type { Category } from '@/config/presentations'
import { useCategoryExpansion } from '@/utils/composables'
import {
  AcademicCapIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ClockIcon,
} from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'

defineProps<{
  categories: Category[]
}>()

const { toggleCategory, isCategoryExpanded } = useCategoryExpansion()

const difficultyLabels = {
  beginner: '初级',
  intermediate: '中级',
  advanced: '高级',
}

const difficultyColors = {
  beginner: 'text-green-500',
  intermediate: 'text-yellow-500',
  advanced: 'text-red-500',
}

function getDifficultyColor(difficulty?: string) {
  return (
    difficultyColors[difficulty as keyof typeof difficultyColors] ||
    'text-gray-500'
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
</script>

<template>
  <div class="presentation-list">
    <div class="space-y-6">
      <section
        v-for="category in categories"
        :key="category.id"
        class="category-section rounded-2xl border border-accent/10 bg-surface/40 overflow-hidden transition-all duration-300 hover:border-accent/20"
      >
        <!-- 分类标题 -->
        <button
          @click="toggleCategory(category.id)"
          :aria-expanded="isCategoryExpanded(category.id)"
          class="group flex w-full items-center justify-between gap-6 rounded-2xl px-5 py-4 text-left transition-colors duration-200 hover:bg-accent/10"
        >
          <div class="flex items-center gap-3">
            <div
              class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white text-sm font-bold"
              :class="getCategoryColor(category.id)"
            >
              {{ getCategoryIcon(category.id) }}
            </div>
            <div>
              <h3
                class="text-base font-bold uppercase tracking-widest text-text-primary"
              >
                {{ category.name }}
              </h3>
              <div class="flex items-center gap-2 mt-1">
                <p class="text-xs text-text-muted">
                  {{ category.presentations.length }} 个演示文稿
                </p>
                <p v-if="category.description" class="text-xs text-text-muted">
                  · {{ category.description }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs uppercase tracking-widest text-accent/70">
              {{ category.id }}
            </span>
            <ChevronDownIcon
              class="h-4 w-4 text-accent transition-transform duration-200"
              :class="{ 'rotate-180': isCategoryExpanded(category.id) }"
            />
          </div>
        </button>

        <!-- 演示文稿列表 -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <ul
            v-show="isCategoryExpanded(category.id)"
            class="divide-y divide-accent/10 border-t border-accent/10"
          >
            <li
              v-for="presentation in category.presentations"
              :key="presentation.id"
              class="presentation-item group"
            >
              <RouterLink
                :to="presentation.route"
                class="flex items-start gap-3 px-5 py-4 transition-colors duration-200"
                :class="[
                  presentation.route === '#'
                    ? 'pointer-events-none text-text-muted'
                    : 'hover:bg-accent/10',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-[rgb(var(--accent))] focus-visible:outline-offset-2',
                ]"
              >
                <ChevronRightIcon
                  class="mt-1 h-4 w-4 text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />

                <div class="flex-1 min-w-0">
                  <div class="flex items-start justify-between gap-2">
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-text-primary truncate">
                        {{ presentation.title }}
                      </p>
                      <p
                        class="mt-1 text-sm leading-relaxed text-text-muted line-clamp-2"
                      >
                        {{ presentation.description }}
                      </p>
                    </div>

                    <div class="flex flex-col items-end gap-1 flex-shrink-0">
                      <span
                        v-if="presentation.difficulty"
                        :class="[
                          'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium',
                          getDifficultyColor(presentation.difficulty),
                        ]"
                      >
                        <AcademicCapIcon class="h-3 w-3" />
                        {{ difficultyLabels[presentation.difficulty] }}
                      </span>
                    </div>
                  </div>

                  <!-- 元信息 -->
                  <div
                    class="mt-3 flex items-center gap-4 text-xs text-text-muted"
                  >
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

                  <!-- 标签 -->
                  <div
                    v-if="presentation.tags && presentation.tags.length > 0"
                    class="mt-3 flex flex-wrap gap-1"
                  >
                    <span
                      v-for="tag in presentation.tags"
                      :key="tag"
                      class="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent/80"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </RouterLink>
            </li>
          </ul>
        </transition>
      </section>
    </div>

    <!-- 空状态 -->
    <div v-if="categories.length === 0" class="text-center py-12">
      <div
        class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-surface-muted/60 mb-4"
      >
        <svg
          class="h-8 w-8 text-text-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 class="text-lg font-medium text-text-primary mb-2">
        没有找到匹配的演示文稿
      </h3>
      <p class="text-sm text-text-muted">尝试调整搜索条件或清除筛选器</p>
    </div>
  </div>
</template>

<style scoped>
.presentation-list {
  @apply space-y-6;
}

.category-section {
  @apply shadow-sm;
}

.presentation-item {
  @apply relative;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
