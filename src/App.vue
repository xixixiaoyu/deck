<script setup lang="ts">
import { useTheme } from '@/utils/composables'

// 初始化主题管理
useTheme()
</script>

<template>
  <router-view />
</template>

<style scoped></style>
