import { http } from '@/utils/http'
import type { ProfileDetail, ProfileParams } from '@/types/memeber'
export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

export const putMemberProfileAPI = (data: ProfileParams) => {
  return http<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
