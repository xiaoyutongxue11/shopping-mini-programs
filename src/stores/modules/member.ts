import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { LoginResult } from '@/types/memeber'

// 定义 Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息
    const profile = ref<LoginResult>()

    // 保存会员信息，登录时使用
    const setProfile = (val: LoginResult) => {
      profile.value = val
    }

    const setNickname = (name: string) => {
      profile.value!.nickname = name
    }

    const setAvatar = (src: string) => {
      profile.value!.avatar = src
    }

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
    }

    // 记得 return
    return {
      profile,
      setProfile,
      setNickname,
      setAvatar,
      clearProfile,
    }
  },
  // TODO: 持久化
  {
    // persist: true, // 在网页端配置才凑效
    // 小程序配置
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
