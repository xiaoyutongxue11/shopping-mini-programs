import type { AddressParams, AddressItem } from '@/types/address'
import { http } from '@/utils/http'

export const postMemberAddressAPI = (data: AddressParams) => {
  return http<{ id: string }>({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}
