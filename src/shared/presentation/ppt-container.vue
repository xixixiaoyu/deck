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
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: transparent;
  outline: none;
  z-index: 1;
}

.slides-viewport {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide {
  flex: 0 0 100%;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.controls {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(var(--surface) / 0.7);
  border: 1px solid rgb(var(--border) / 0.4);
  padding: 6px 12px;
  border-radius: 24px;
  backdrop-filter: blur(16px);
  box-shadow:
    0 4px 20px -4px rgb(0 0 0 / 0.1),
    0 2px 8px -2px rgb(0 0 0 / 0.05);
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.controls:hover {
  background: rgba(var(--surface) / 0.85);
  box-shadow:
    0 10px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.05);
  transform: translateX(-50%) translateY(-2px);
}

.control-btn {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: rgb(var(--text-muted));
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.control-btn:hover:not(:disabled) {
  background: rgb(var(--accent) / 0.1);
  color: rgb(var(--accent));
}

.control-btn.active {
  background: rgb(var(--accent));
  color: white;
}

.control-btn:disabled {
  opacity: 0.2;
  cursor: not-allowed;
}

.control-divider {
  width: 1px;
  height: 20px;
  background: rgb(var(--border) / 0.6);
  margin: 0 4px;
}

.slide-info {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgb(var(--text-muted));
  font-weight: 500;
  padding: 0 8px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
}

.total-pages {
  opacity: 0.6;
}

.page-edit {
  min-width: 32px;
  padding: 2px 6px;
  border-radius: 6px;
  background: rgb(var(--surface-muted) / 0.5);
  color: rgb(var(--text-primary));
  border: 1px solid transparent;
  transition: all 0.2s ease;
  font-weight: 600;
}

.page-edit:focus {
  outline: none;
  background: rgb(var(--surface-muted));
  border-color: rgb(var(--accent) / 0.3);
}

.progress-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgb(var(--border) / 0.2);
  z-index: 1000;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, rgb(var(--accent)), #9333ea);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 8px rgb(var(--accent) / 0.4);
}

/* 概览模式样式 */
.overview-overlay {
  position: fixed;
  inset: 0;
  background: rgba(var(--surface) / 0.8);
  backdrop-filter: blur(20px);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  padding: 40px;
}

.overview-container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.overview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.overview-title {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.title-gradient {
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(
    135deg,
    rgb(var(--text-primary)),
    rgb(var(--accent))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
}

.slide-count {
  font-size: 14px;
  color: rgb(var(--text-muted));
  font-weight: 500;
}

.close-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgb(var(--border) / 0.6);
  background: rgb(var(--surface));
  color: rgb(var(--text-primary));
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: rgb(var(--surface-muted));
  transform: rotate(90deg);
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
  overflow-y: auto;
  padding: 4px;
  flex: 1;
}

.overview-item {
  cursor: pointer;
  perspective: 1000px;
}

.overview-item-inner {
  position: relative;
  background: rgb(var(--surface));
  border-radius: 12px;
  border: 1px solid rgb(var(--border) / 0.6);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.03);
}

.overview-item:hover .overview-item-inner {
  transform: translateY(-8px) scale(1.02);
  border-color: rgb(var(--accent) / 0.4);
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.05);
}

.overview-item.active .overview-item-inner {
  border-color: rgb(var(--accent));
  border-width: 2px;
  box-shadow: 0 0 0 4px rgb(var(--accent) / 0.1);
}

.overview-preview-wrapper {
  aspect-ratio: 16/9;
  width: 100%;
  overflow: hidden;
  background: rgb(var(--surface-muted) / 0.3);
}

.overview-preview {
  width: 100vw;
  height: 100vh;
  transform: scale(calc(240 / 1920)); /* 根据网格最小宽度缩放，1920为基准宽度 */
  transform-origin: top left;
  pointer-events: none;
}

/* 适配不同宽度的缩放 */
@media (min-width: 1024px) {
  .overview-preview {
    transform: scale(calc(280 / 1920));
  }
}

.overview-info {
  padding: 10px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(var(--surface));
}

.overview-number {
  font-size: 12px;
  font-weight: 700;
  color: rgb(var(--text-muted));
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.active-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgb(var(--accent));
  box-shadow: 0 0 8px rgb(var(--accent) / 0.6);
}

/* 动画 */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgb(var(--border));
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgb(var(--text-muted) / 0.4);
}

@media (max-width: 768px) {
  .overview-overlay {
    padding: 20px;
  }

  .overview-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
  }

  .overview-preview {
    transform: scale(calc(160 / 1920));
  }

  .controls {
    bottom: 20px;
    padding: 8px 12px;
  }
}
</style>
