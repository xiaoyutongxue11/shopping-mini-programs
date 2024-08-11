<script setup lang="ts">
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem } from '@/types/home'

const bannerList = ref<BannerItem[]>([])
const getHomeBanner = async () => {
  const { result } = await getHomeBannerAPI(1)
  bannerList.value = result
}

onLoad(() => {
  getHomeBanner()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
</template>

<style lang="scss">
//
</style>
