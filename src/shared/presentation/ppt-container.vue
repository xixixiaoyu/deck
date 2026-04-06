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
      >
        ←
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
        <span> / {{ slides.length }}</span>
      </div>

      <button
        @click="nextSlide"
        :disabled="currentSlide === slides.length - 1"
        class="control-btn"
      >
        →
      </button>
    </div>

    <!-- 进度条 -->
    <div class="progress-bar">
      <div
        class="progress"
        :style="{ width: `${((currentSlide + 1) / slides.length) * 100}%` }"
      ></div>
    </div>

    <!-- 缩略图面板 -->
    <div class="thumbnails" v-show="showThumbnails">
      <div class="thumbnails-header">
        <h3>{{ thumbnailsLabel }}</h3>
        <button @click="showThumbnails = false">✕</button>
      </div>
      <div class="thumbnails-grid">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="thumbnail"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        >
          <div class="thumbnail-number">{{ index + 1 }}</div>
          <div class="thumbnail-preview">
            <component
              :is="slide"
              :isActive="false"
              :isPreview="true"
            ></component>
          </div>
        </div>
      </div>
    </div>
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
      showThumbnails.value = !showThumbnails.value
      break
    case 't':
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
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(0, 0, 0, 0.8);
  padding: 12px 24px;
  border-radius: 30px;
  backdrop-filter: blur(10px);
  z-index: 1000;
}

.control-btn {
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.control-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.control-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.slide-info {
  color: white;
  font-weight: 600;
  min-width: 80px;
  text-align: center;
  font-size: 14px;
}

.page-edit {
  display: inline-block;
  min-width: 36px;
  padding: 4px 6px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  color: #0f172a;
}

.progress-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1000;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.3s ease;
}

.thumbnails {
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 300px;
  max-height: 80vh;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 12px;
  backdrop-filter: blur(20px);
  z-index: 2000;
  overflow: hidden;
}

.thumbnails-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.thumbnails-header h3 {
  color: white;
  margin: 0;
  font-size: 16px;
}

.thumbnails-header button {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s ease;
}

.thumbnails-header button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.thumbnails-grid {
  padding: 16px;
  max-height: calc(80vh - 60px);
  overflow-y: auto;
}

.thumbnail {
  width: 100%;
  height: 120px;
  margin-bottom: 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.thumbnail:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.02);
}

.thumbnail.active {
  background: rgba(102, 126, 234, 0.3);
  border: 2px solid #667eea;
}

.thumbnail-number {
  position: absolute;
  top: 8px;
  left: 8px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  z-index: 10;
}

.thumbnail-preview {
  width: 100%;
  height: 100%;
  transform: scale(0.2);
  transform-origin: top left;
  pointer-events: none;
}

@media (max-width: 768px) {
  .thumbnails {
    width: calc(100vw - 40px);
    right: 20px;
  }

  .controls {
    padding: 10px 16px;
    gap: 15px;
  }

  .control-btn {
    width: 40px;
    height: 40px;
  }
}
</style>
