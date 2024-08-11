import { http } from '@/utils/http'
import type { BannerItem } from '@/types/home'
export const getHomeBannerAPI = (distributionSite: 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
