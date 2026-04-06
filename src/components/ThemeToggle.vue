<script setup lang="ts">
import { useTheme } from '@/utils/composables'
import {
  CubeIcon,
  FireIcon,
  MoonIcon,
  SparklesIcon,
  SunIcon,
} from '@heroicons/vue/24/outline'
import { computed } from 'vue'

const { currentTheme, themes, setTheme } = useTheme()

const themeIcons = {
  dark: MoonIcon,
  light: SunIcon,
  blue: SparklesIcon,
  blue: CubeIcon,
  green: FireIcon,
}

const currentIcon = computed(() => {
  return themeIcons[currentTheme.value.id as keyof typeof themeIcons] || SunIcon
})

function cycleTheme() {
  const currentIndex = themes.findIndex(t => t.id === currentTheme.value.id)
  const nextIndex = (currentIndex + 1) % themes.length
  setTheme(themes[nextIndex])
}
</script>

<template>
  <div class="theme-toggle">
    <button
      @click="cycleTheme"
      class="group relative rounded-full border border-accent/20 bg-surface/40 p-2.5 transition-all duration-200 hover:border-accent/40 hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[rgb(var(--accent))] focus-visible:outline-offset-2"
      :title="`切换主题 (当前: ${currentTheme.name})`"
    >
      <component
        :is="currentIcon"
        class="h-5 w-5 text-text-primary transition-transform duration-200 group-hover:rotate-12"
      />

      <!-- 主题指示器 -->
      <div
        class="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-surface"
        :style="{ backgroundColor: `rgb(var(--accent))` }"
      ></div>
    </button>

    <!-- 主题选择器 (可选的扩展功能) -->
    <div class="theme-selector" v-if="false">
      <div class="relative">
        <button
          @click="cycleTheme"
          class="flex items-center gap-2 rounded-lg border border-accent/20 bg-surface/40 px-3 py-2 text-sm font-medium text-text-primary transition-all duration-200 hover:border-accent/40 hover:bg-accent/10"
        >
          <component :is="currentIcon" class="h-4 w-4" />
          {{ currentTheme.name }}
        </button>

        <!-- 下拉菜单 -->
        <div
          class="absolute right-0 top-full mt-2 w-48 rounded-lg border border-accent/20 bg-surface/60 shadow-lg backdrop-blur-xl"
        >
          <button
            v-for="theme in themes"
            :key="theme.id"
            @click="setTheme(theme)"
            class="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-text-primary transition-colors duration-200 hover:bg-accent/10"
            :class="{ 'bg-accent/20': theme.id === currentTheme.id }"
          >
            <component
              :is="themeIcons[theme.id as keyof typeof themeIcons]"
              class="h-4 w-4"
            />
            {{ theme.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.theme-toggle {
  @apply relative;
}

.theme-selector {
  @apply relative;
}
</style>
