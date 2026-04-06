<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{ isActive?: boolean; isPreview?: boolean }>()

// 定义统一的数据接口
interface MediaImage {
  id: number
  url: string
  title: string
}

interface MediaData {
  title: string
  description: string
  duration?: string
  features: string[]
  videoUrl?: string
  thumbnail?: string
  audioUrl?: string
  cover?: string
  images?: MediaImage[]
}

// 多媒体类型配置
const mediaTypes = [
  { id: 'video', name: '视频播放', icon: '🎬' },
  { id: 'audio', name: '音频播放', icon: '🎵' },
  { id: 'gallery', name: '图片画廊', icon: '🖼️' },
  { id: 'mixed', name: '混合媒体', icon: '🎭' },
]

const activeMediaType = ref('video')

// 视频数据
const videoData: MediaData = {
  title: '产品演示视频',
  description: '展示产品核心功能和使用场景',
  videoUrl:
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  thumbnail:
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
  duration: '3:24',
  features: [
    '高清画质，支持全屏播放',
    '自适应码率，流畅播放',
    '支持进度控制和音量调节',
  ],
}

// 音频数据
const audioData: MediaData = {
  title: '播客节目',
  description: '技术分享与行业洞察',
  audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  cover: 'https://picsum.photos/seed/audio-cover/300/300.jpg',
  duration: '5:42',
  features: [
    '高品质音频，支持多种格式',
    '播放控制，支持快进快退',
    '音量控制和播放进度显示',
  ],
}

// 图片画廊数据
const galleryData: MediaData = {
  title: '产品展示',
  description: '多角度展示产品细节',
  images: [
    {
      id: 1,
      url: 'https://picsum.photos/seed/product1/800/600.jpg',
      title: '产品正面',
    },
    {
      id: 2,
      url: 'https://picsum.photos/seed/product2/800/600.jpg',
      title: '产品侧面',
    },
    {
      id: 3,
      url: 'https://picsum.photos/seed/product3/800/600.jpg',
      title: '产品背面',
    },
    {
      id: 4,
      url: 'https://picsum.photos/seed/product4/800/600.jpg',
      title: '产品细节',
    },
    {
      id: 5,
      url: 'https://picsum.photos/seed/product5/800/600.jpg',
      title: '使用场景',
    },
    {
      id: 6,
      url: 'https://picsum.photos/seed/product6/800/600.jpg',
      title: '配件展示',
    },
  ],
  features: [
    '高清图片，支持缩放查看',
    '多图浏览，支持幻灯片模式',
    '图片信息显示和导航控制',
  ],
}

// 混合媒体数据
const mixedData: MediaData = {
  title: '多媒体展示',
  description: '视频、音频和图片的综合展示',
  videoUrl:
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  images: [
    {
      id: 1,
      url: 'https://picsum.photos/seed/mixed1/400/300.jpg',
      title: '场景一',
    },
    {
      id: 2,
      url: 'https://picsum.photos/seed/mixed2/400/300.jpg',
      title: '场景二',
    },
  ],
  features: ['多媒体融合展示', '交互式控制界面', '响应式布局适配'],
}

// 获取当前数据
const currentData = computed(() => {
  switch (activeMediaType.value) {
    case 'video':
      return videoData
    case 'audio':
      return audioData
    case 'gallery':
      return galleryData
    case 'mixed':
      return mixedData
    default:
      return videoData
  }
})

// 获取当前类型的标题
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const currentTitle = computed(() => {
  const titles = {
    video: '视频播放',
    audio: '音频播放',
    gallery: '图片画廊',
    mixed: '混合媒体',
  }
  return titles[activeMediaType.value as keyof typeof titles]
})

// 当前选中的图片索引
const selectedImageIndex = ref(0)

// 播放状态
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)

// 选择图片
const selectImage = (index: number) => {
  selectedImageIndex.value = index
}

// 上一张图片
const prevImage = () => {
  if (selectedImageIndex.value > 0) {
    selectedImageIndex.value--
  }
}

// 下一张图片
const nextImage = () => {
  const images = currentData.value.images
  if (images && selectedImageIndex.value < images.length - 1) {
    selectedImageIndex.value++
  }
}

// 播放/暂停
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const togglePlay = () => {
  isPlaying.value = !isPlaying.value
}

// 判断是否为视频类型
const isVideo = computed(
  () => activeMediaType.value === 'video' || activeMediaType.value === 'mixed'
)

// 判断是否为音频类型
const isAudio = computed(
  () => activeMediaType.value === 'audio' || activeMediaType.value === 'mixed'
)

// 判断是否为画廊类型
const isGallery = computed(
  () => activeMediaType.value === 'gallery' || activeMediaType.value === 'mixed'
)

// 格式化时间
const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

// 获取当前图片
const currentImage = computed(() => {
  const images = currentData.value.images
  return images ? images[selectedImageIndex.value] : null
})

// 获取图片总数
const totalImages = computed(() => {
  return currentData.value.images?.length || 0
})
</script>

<template>
  <section
    class="container mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-12 lg:py-16"
  >
    <div class="mb-8">
      <h2
        class="inline-block text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent/90 to-accent/70"
      >
        多媒体模板
      </h2>
      <p class="mt-2 text-slate-600">
        支持视频、音频和图片的多种媒体展示方式。
      </p>
    </div>

    <!-- 媒体类型选择器 -->
    <div class="flex flex-wrap justify-center gap-2 mb-8">
      <button
        v-for="type in mediaTypes"
        :key="type.id"
        @click="activeMediaType = type.id"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
        :class="
          activeMediaType === type.id
            ? 'bg-gradient-to-r from-accent to-accent text-white shadow-lg'
            : 'bg-white/60 border border-white/40 text-slate-700 hover:bg-white/70'
        "
      >
        <span>{{ type.icon }}</span>
        <span>{{ type.name }}</span>
      </button>
    </div>

    <!-- 媒体内容 -->
    <div
      class="rounded-3xl border border-slate-200/30 bg-white/70 backdrop-blur-md shadow-xl p-6"
    >
      <!-- 标题和描述 -->
      <div class="mb-6">
        <h3 class="text-2xl font-bold text-slate-900 mb-2">
          {{ currentData.title }}
        </h3>
        <p class="text-slate-600">{{ currentData.description }}</p>
      </div>

      <!-- 视频播放器 -->
      <div v-if="isVideo" class="mb-6">
        <div class="relative rounded-2xl overflow-hidden bg-slate-900">
          <video
            v-if="!props.isPreview && currentData.videoUrl"
            :src="currentData.videoUrl"
            :poster="currentData.thumbnail"
            class="w-full aspect-video"
            controls
            @play="isPlaying = true"
            @pause="isPlaying = false"
            @timeupdate="
              currentTime = ($event.target as HTMLVideoElement).currentTime
            "
            @loadedmetadata="
              duration = ($event.target as HTMLVideoElement).duration
            "
          ></video>
          <div
            v-else
            class="w-full aspect-video bg-slate-800 flex items-center justify-center text-slate-400"
          >
            <div class="text-center">
              <div class="text-4xl mb-2">🎬</div>
              <p>视频预览（演示模式）</p>
            </div>
          </div>
        </div>
        <div
          class="mt-3 flex items-center justify-between text-sm text-slate-600"
        >
          <span>时长：{{ currentData.duration }}</span>
          <span v-if="!props.isPreview && duration">
            {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
          </span>
        </div>
      </div>

      <!-- 音频播放器 -->
      <div v-if="isAudio" class="mb-6">
        <div class="flex gap-6">
          <div
            class="w-48 h-48 rounded-2xl overflow-hidden bg-slate-200 flex-shrink-0"
          >
            <img
              v-if="currentData.cover"
              :src="currentData.cover"
              :alt="currentData.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex-1">
            <div class="rounded-2xl bg-slate-100 p-4 mb-4">
              <audio
                v-if="!props.isPreview && currentData.audioUrl"
                :src="currentData.audioUrl"
                class="w-full"
                controls
                @play="isPlaying = true"
                @pause="isPlaying = false"
              ></audio>
              <div
                v-else
                class="w-full h-20 bg-slate-200 rounded-lg flex items-center justify-center text-slate-500"
              >
                音频播放器（演示模式）
              </div>
            </div>
            <div class="text-sm text-slate-600">
              <p>时长：{{ currentData.duration }}</p>
              <p v-if="isPlaying" class="text-accent font-medium">
                正在播放...
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 图片画廊 -->
      <div v-if="isGallery" class="mb-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- 主图显示 -->
          <div class="rounded-2xl overflow-hidden bg-slate-100">
            <img
              v-if="currentImage"
              :src="currentImage.url"
              :alt="currentImage.title"
              class="w-full aspect-[4/3] object-cover"
            />
          </div>

          <!-- 缩略图列表 -->
          <div>
            <h4 class="text-lg font-semibold text-slate-900 mb-3">图片列表</h4>
            <div class="grid grid-cols-3 gap-2 mb-4">
              <div
                v-for="(image, index) in currentData.images || []"
                :key="image.id"
                @click="selectImage(index)"
                class="aspect-video rounded-lg overflow-hidden cursor-pointer border-2 transition-all"
                :class="
                  selectedImageIndex === index
                    ? 'border-accent ring-2 ring-accent/30'
                    : 'border-transparent hover:border-slate-300'
                "
              >
                <img
                  :src="image.url"
                  :alt="image.title"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <!-- 导航控制 -->
            <div class="flex items-center justify-between">
              <button
                @click="prevImage"
                :disabled="selectedImageIndex === 0"
                class="rounded-full bg-white/60 border border-slate-300 px-4 py-2 text-slate-700 font-medium transition hover:bg-white/70 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                上一张
              </button>
              <span class="text-sm text-slate-600">
                {{ selectedImageIndex + 1 }} / {{ totalImages }}
              </span>
              <button
                @click="nextImage"
                :disabled="selectedImageIndex === totalImages - 1"
                class="rounded-full bg-white/60 border border-slate-300 px-4 py-2 text-slate-700 font-medium transition hover:bg-white/70 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                下一张
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 特性列表 -->
      <div class="border-t border-slate-200/30 pt-6">
        <h4 class="text-lg font-semibold text-slate-900 mb-3">功能特性</h4>
        <ul class="space-y-2">
          <li
            v-for="(feature, index) in currentData.features"
            :key="index"
            class="flex items-center gap-2 text-slate-700"
          >
            <span class="w-2 h-2 rounded-full bg-accent"></span>
            <span>{{ feature }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
