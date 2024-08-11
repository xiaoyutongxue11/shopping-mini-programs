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
import type { XtxGuessInstance } from '@/types/component'

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])
const XtxGuessRef = ref<XtxGuessInstance>()
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

const onScrollToLower = () => {
  XtxGuessRef.value?.getMore()
}

onLoad(() => {
  getHomeBanner()
  getHomeCategory()
  getHomeHot()
})
</script>

<template>
  <CustomNavbar />
  <scroll-view @scrolltolower="onScrollToLower" class="scroll-view" scroll-y>
    <XtxSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotList" />
    <XtxGuess ref="XtxGuessRef" />
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
