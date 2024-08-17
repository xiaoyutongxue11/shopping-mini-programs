import { http } from '@/utils/http'
import type { LoginResult } from '@/types/memeber'

type LoginParams = {
  code: string
  encrypteData: string
  iv: string
}

export const postLoginWxMinAPI = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
