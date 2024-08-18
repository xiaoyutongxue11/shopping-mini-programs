<script setup lang="ts">
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { useXtxGuess } from '@/composables/index'

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])
const isTriggered = ref(false)
const isLoading = ref(false)
const { XtxGuessRef, onScrollToLower } = useXtxGuess()

const getHomeBanner = async () => {
  const { result } = await getHomeBannerAPI(1)
  bannerList.value = result
}

const getHomeCategory = async () => {
  const { result } = await getHomeCategoryAPI()
  categoryList.value = result
}
const getHomeHot = async () => {
  const { result } = await getHomeHotAPI()
  hotList.value = result
}
const refresh = async () => {
  isTriggered.value = true
  XtxGuessRef.value?.resetData()
  await Promise.all([
    getHomeBanner(),
    getHomeCategory(),
    getHomeHot(),
    XtxGuessRef.value?.getMore(),
  ])
  isTriggered.value = false
}

onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBanner(), getHomeCategory(), getHomeHot()])
  isLoading.value = false
})
</script>

<template>
  <CustomNavbar />
  <scroll-view
    refresher-enabled
    :refresher-triggered="isTriggered"
    @refresherrefresh="refresh"
    @scrolltolower="onScrollToLower"
    class="scroll-view"
    scroll-y
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <XtxSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList" />
      <XtxGuess ref="XtxGuessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
