<template>
  <div class="ppt-container" @keydown="handleKeyDown" tabindex="0">
    <!-- 幻灯片内容区域 -->
    <div class="slides-viewport">
      <div
        class="slide-wrapper"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide"
          :class="{ active: currentSlide === index }"
        >
          <component :is="slide" :isActive="currentSlide === index"></component>
        </div>
      </div>
    </div>

    <!-- 控制栏 -->
    <div class="controls">
      <button
        @click="previousSlide"
        :disabled="currentSlide === 0"
        class="control-btn"
        title="上一页 (Left / PageUp)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <div class="slide-info">
        <input
          class="page-edit text-center"
          type="text"
          inputmode="numeric"
          pattern="[0-9]*"
          v-model="editablePage"
          :style="{ width: `${inputWidth}ch` }"
          @keydown.enter.prevent="commitInlinePageJump"
          @keydown.stop
          @keydown="onEditableKeyDown"
          @input="onEditableInput"
          @focus="onEditableFocus"
          @blur="commitInlinePageJump"
          :title="`当前页码 / 总页数 (按 Enter 确认跳转)`"
        />
        <span class="total-pages"> / {{ slides.length }}</span>
      </div>

      <button
        @click="nextSlide"
        :disabled="currentSlide === slides.length - 1"
        class="control-btn"
        title="下一页 (Right / PageDown / Space)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div class="control-divider"></div>

      <button
        @click="showThumbnails = !showThumbnails"
        class="control-btn overview-toggle"
        :class="{ active: showThumbnails }"
        title="概览模式 (G / T)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      </button>
    </div>

    <!-- 进度条 -->
    <div class="progress-bar">
      <div
        class="progress"
        :style="{ width: `${((currentSlide + 1) / slides.length) * 100}%` }"
      ></div>
    </div>

    <!-- 概览模式 (Overview Mode) -->
    <Transition name="fade-scale">
      <div
        class="overview-overlay"
        v-show="showThumbnails"
        @click.self="showThumbnails = false"
      >
        <div class="overview-container">
          <div class="overview-header">
            <h2 class="overview-title">
              <span class="title-gradient">{{ title }}</span>
              <span class="slide-count"
                >{{ slides.length }} {{ thumbnailsLabel }}</span
              >
            </h2>
            <button
              @click="showThumbnails = false"
              class="close-btn"
              title="关闭概览 (Esc)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div class="overview-grid custom-scrollbar">
            <div
              v-for="(slide, index) in slides"
              :key="index"
              class="overview-item"
              :class="{ active: currentSlide === index }"
              @click="goToSlide(index)"
            >
              <div class="overview-item-inner">
                <div class="overview-preview-wrapper">
                  <div class="overview-preview">
                    <component
                      :is="slide"
                      :isActive="false"
                      :isPreview="true"
                    ></component>
                  </div>
                </div>
                <div class="overview-info">
                  <span class="overview-number">{{
                    String(index + 1).padStart(2, '0')
                  }}</span>
                  <div
                    class="active-indicator"
                    v-if="currentSlide === index"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: 'PPT演示',
  },
  thumbnailsLabel: {
    type: String,
    default: '幻灯片预览',
  },
})

const currentSlide = ref(0)
const showThumbnails = ref(false)
const NAVIGATION_COOLDOWN = 250
let lastNavigationAt = 0
const editablePage = ref('1')
const inputWidth = computed(() =>
  Math.max(2, String(props.slides.length).length)
)

const getTimestamp = () =>
  typeof performance !== 'undefined' ? performance.now() : Date.now()

const readInitialSlideFromURL = () => {
  if (typeof window === 'undefined') return
  const url = new URL(window.location.href)
  const raw = url.searchParams.get('slide') ?? url.searchParams.get('s')
  if (!raw) return
  const n = parseInt(String(raw), 10)
  if (Number.isNaN(n)) return
  const clamped = Math.min(Math.max(n, 1), props.slides.length)
  currentSlide.value = clamped - 1
}

const writeSlideToURL = () => {
  if (typeof window === 'undefined') return
  const url = new URL(window.location.href)
  url.searchParams.set('slide', String(currentSlide.value + 1))
  window.history.replaceState(null, '', url)
}

const nextSlide = () => {
  const now = getTimestamp()
  if (now - lastNavigationAt < NAVIGATION_COOLDOWN) {
    return
  }
  if (currentSlide.value < props.slides.length - 1) {
    currentSlide.value++
    lastNavigationAt = now
  }
}

const previousSlide = () => {
  const now = getTimestamp()
  if (now - lastNavigationAt < NAVIGATION_COOLDOWN) {
    return
  }
  if (currentSlide.value > 0) {
    currentSlide.value--
    lastNavigationAt = now
  }
}

const goToSlide = (index: number) => {
  currentSlide.value = index
  showThumbnails.value = false
  lastNavigationAt = getTimestamp()
}

const handleKeyDown = (event: KeyboardEvent) => {
  const t = event.target as HTMLElement
  if (
    t &&
    (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)
  ) {
    return
  }
  if (event.repeat) {
    event.preventDefault()
    return
  }

  // 添加数字键快速跳转功能
  if (event.key >= '1' && event.key <= '9') {
    const slideIndex = parseInt(event.key) - 1
    if (slideIndex < props.slides.length) {
      event.preventDefault()
      goToSlide(slideIndex)
    }
    return
  }

  switch (event.key) {
    case 'ArrowRight':
    case ' ':
    case 'PageDown':
      event.preventDefault()
      nextSlide()
      break
    case 'ArrowLeft':
    case 'PageUp':
      event.preventDefault()
      previousSlide()
      break
    case 'Home':
      event.preventDefault()
      currentSlide.value = 0
      break
    case 'End':
      event.preventDefault()
      currentSlide.value = props.slides.length - 1
      break
    case 'Escape':
      event.preventDefault()
      showThumbnails.value = false
      break
    case 't':
    case 'g':
    case 'G':
    case 'T':
      event.preventDefault()
      showThumbnails.value = !showThumbnails.value
      break
  }
}

const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max)

const commitInlinePageJump = () => {
  const raw = editablePage.value.trim()
  if (!raw) {
    editablePage.value = String(currentSlide.value + 1)
    return
  }
  const parsed = parseInt(raw, 10)
  if (Number.isNaN(parsed)) {
    editablePage.value = String(currentSlide.value + 1)
    return
  }
  const clamped = clamp(parsed, 1, props.slides.length)
  if (clamped - 1 === currentSlide.value) {
    editablePage.value = String(clamped)
    return
  }
  goToSlide(clamped - 1)
}

const onEditableInput = (e: Event) => {
  const t = e.target as HTMLInputElement
  const raw =
    t && typeof t.value === 'string'
      ? t.value
      : t && t.textContent
        ? t.textContent
        : ''
  const sanitized = String(raw).replace(/\D+/g, '')
  editablePage.value = sanitized
}

const onEditableFocus = (e: FocusEvent) => {
  const t = e.target as HTMLInputElement
  if (t && typeof t.select === 'function') {
    try {
      t.select()
    } catch {
      // Ignore selection errors
    }
    return
  }
  if (t && t.childNodes && t.childNodes.length) {
    const sel = window.getSelection()
    if (sel) {
      const range = document.createRange()
      range.selectNodeContents(t)
      sel.removeAllRanges()
      sel.addRange(range)
    }
  }
}

const onEditableKeyDown = (e: KeyboardEvent) => {
  const key = e.key
  const total = props.slides.length
  const current = (() => {
    const n = parseInt(editablePage.value || '0', 10)
    return Number.isNaN(n) ? currentSlide.value + 1 : n
  })()

  const stepAdjust = (delta: number) => {
    const next = clamp(current + delta, 1, total)
    editablePage.value = String(next)
  }

  switch (key) {
    case 'ArrowUp':
      e.preventDefault()
      e.stopPropagation()
      stepAdjust(1)
      break
    case 'ArrowDown':
      e.preventDefault()
      e.stopPropagation()
      stepAdjust(-1)
      break
    case 'Home':
      e.preventDefault()
      e.stopPropagation()
      editablePage.value = '1'
      break
    case 'End':
      e.preventDefault()
      e.stopPropagation()
      editablePage.value = String(total)
      break
    case 'PageUp':
      e.preventDefault()
      e.stopPropagation()
      stepAdjust(5)
      break
    case 'PageDown':
      e.preventDefault()
      e.stopPropagation()
      stepAdjust(-5)
      break
    case 'Escape':
      e.preventDefault()
      e.stopPropagation()
      editablePage.value = String(currentSlide.value + 1)
      ;(e.target as HTMLElement).blur()
      break
    default:
      break
  }
}

onMounted(() => {
  document.title = props.title
  // 自动获取焦点以支持键盘导航
  const container = document.querySelector('.ppt-container') as HTMLElement
  if (container) {
    container.focus()
  }
  readInitialSlideFromURL()
  editablePage.value = String(currentSlide.value + 1)

  // 添加页面可见性变化监听，优化性能
  const handleVisibilityChange = () => {
    if (document.hidden) {
      // 页面隐藏时暂停动画
      document.body.style.setProperty('--animation-paused', 'paused')
    } else {
      // 页面显示时恢复动画
      document.body.style.setProperty('--animation-paused', 'running')
    }
  }

  document.addEventListener('visibilitychange', handleVisibilityChange)

  // 在组件卸载时清理事件监听
  onBeforeUnmount(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange)
  })
})

watch(currentSlide, (newVal, oldVal) => {
  editablePage.value = String(newVal + 1)
  writeSlideToURL()

  // 添加页面切换动画优化
  if (newVal !== oldVal) {
    // 预加载下一张和上一张幻灯片
    const preloadSlide = (index: number) => {
      if (index >= 0 && index < props.slides.length) {
        // 预加载逻辑，这里可以根据需要实现
        // 例如预加载图片、视频等资源
      }
    }

    preloadSlide(newVal + 1) // 预加载下一张
    preloadSlide(newVal - 1) // 预加载上一张
  }
})
</script>

<style scoped>
.ppt-container {
  @apply fixed inset-0 overflow-hidden bg-transparent outline-none z-[1];
}

.slides-viewport {
  @apply w-full h-full overflow-hidden;
}

.slide-wrapper {
  @apply flex w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)];
}

.slide {
  @apply flex-[0_0_100%] w-screen h-screen flex items-center justify-center relative overflow-hidden;
}

.controls {
  @apply fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-surface/80 border border-border/40 px-4 py-2 rounded-[20px] backdrop-blur-[20px] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.05)] z-[1000];
}

.control-btn {
  @apply w-9 h-9 border-none rounded-xl bg-transparent text-text-muted cursor-pointer transition-all duration-200 flex items-center justify-center outline-none;
}

.control-btn:hover:not(:disabled) {
  @apply bg-accent/10 text-accent;
}

.control-btn.active {
  @apply bg-accent text-white;
}

.control-btn:disabled {
  @apply opacity-20 cursor-not-allowed;
}

.control-divider {
  @apply w-px h-6 bg-border/60 mx-1;
}

.slide-info {
  @apply flex items-center gap-2 text-text-primary font-semibold px-2 text-sm [font-variant-numeric:tabular-nums] min-w-[80px] justify-center;
}

.total-pages {
  @apply text-text-muted font-medium;
}

.page-edit {
  @apply min-w-[40px] px-2 py-1 rounded-lg bg-surface-muted/60 text-text-primary border border-transparent transition-all duration-200 font-bold text-sm;
}

.page-edit:focus {
  @apply outline-none bg-surface-muted border-accent/40 ring-4 ring-accent/10;
}

.progress-bar {
  @apply fixed bottom-0 left-0 w-full h-[3px] bg-border/10 z-[1000] backdrop-blur-[4px];
}

.progress {
  @apply h-full bg-gradient-to-r from-accent/60 to-accent transition-[width] duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] relative;
  box-shadow: 0 0 12px rgb(var(--accent) / 0.5);
}

.progress::after {
  content: '';
  @apply absolute top-0 right-0 w-[2px] h-full bg-white opacity-80;
  box-shadow: 0 0 8px white;
}

/* 概览模式样式 */
.overview-overlay {
  @apply fixed inset-0 bg-surface/80 backdrop-blur-[20px] z-[2000] flex flex-col p-10;
}

.overview-container {
  @apply max-w-[1400px] mx-auto w-full h-full flex flex-col gap-8;
}

.overview-header {
  @apply flex justify-between items-center;
}

.overview-title {
  @apply flex flex-col gap-1;
}

.title-gradient {
  @apply text-[28px] font-extrabold bg-clip-text text-transparent tracking-tighter;
  background-image: linear-gradient(
    135deg,
    rgb(var(--text-primary)),
    rgb(var(--accent))
  );
}

.slide-count {
  @apply text-sm text-text-muted font-medium;
}

.close-btn {
  @apply w-10 h-10 rounded-full border border-border/60 bg-surface text-text-primary flex items-center justify-center cursor-pointer transition-all duration-200;
}

.close-btn:hover {
  @apply bg-surface-muted rotate-90;
}

.overview-grid {
  @apply grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6 overflow-y-auto p-1 flex-1;
}

.overview-item {
  @apply cursor-pointer [perspective:1000px];
}

.overview-item-inner {
  @apply relative bg-surface rounded-xl border border-border/60 overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_4px_12px_rgba(0,0,0,0.03)];
}

.overview-item:hover .overview-item-inner {
  @apply -translate-y-2 scale-[1.02] border-accent/40 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.05)];
}

.overview-item.active .overview-item-inner {
  @apply border-accent border-2 shadow-[0_0_0_4px_rgba(var(--accent)/0.1)];
}

.overview-preview-wrapper {
  @apply aspect-video w-full overflow-hidden bg-surface-muted/30;
}

.overview-preview {
  @apply w-screen h-screen origin-top-left pointer-events-none;
  transform: scale(calc(240 / 1920));
}

/* 适配不同宽度的缩放 */
@media (min-width: 1024px) {
  .overview-preview {
    transform: scale(calc(280 / 1920));
  }
}

.overview-info {
  @apply p-[10px_14px] flex justify-between items-center bg-surface;
}

.overview-number {
  @apply text-[12px] font-bold text-text-muted font-mono;
}

.active-indicator {
  @apply w-2 h-2 rounded-full bg-accent;
  box-shadow: 0 0 8px rgb(var(--accent) / 0.6);
}

/* 动画 */
.fade-scale-enter-active,
.fade-scale-leave-active {
  @apply transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)];
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  @apply opacity-0 scale-[1.05];
}

.custom-scrollbar::-webkit-scrollbar {
  @apply w-[6px];
}

.custom-scrollbar::-webkit-scrollbar-track {
  @apply bg-transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  @apply bg-border rounded-[10px];
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  @apply bg-text-muted/40;
}

/* 代码块滚动条美化 */
:deep(pre) {
  scrollbar-width: thin;
  scrollbar-color: rgb(var(--accent) / 0.6) rgb(var(--border) / 0.2);
}

:deep(pre)::-webkit-scrollbar {
  @apply h-2 w-2;
}

:deep(pre)::-webkit-scrollbar-track {
  @apply bg-border/25 rounded-full;
}

:deep(pre)::-webkit-scrollbar-thumb {
  @apply bg-gradient-to-r from-accent to-[#9333ea] rounded-full;
}

:deep(pre)::-webkit-scrollbar-thumb:hover {
  @apply from-accent/80 to-[#7e22ce];
}

@media (max-width: 768px) {
  .overview-overlay {
    @apply p-5;
  }

  .overview-grid {
    @apply grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4;
  }

  .overview-preview {
    transform: scale(calc(160 / 1920));
  }

  .controls {
    @apply bottom-5 px-3;
  }
}
</style>
