import { http } from '@/utils/http'
import type { CategoryTopItem } from '@/types/category'

export const getCategoryAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
