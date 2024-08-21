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

export const getMemberAddressByIdAPI = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

export const putMemberAddressById = (id: string, data: AddressParams) => {
  return http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}

export const deleteMemberAddressById = (id: string) => {
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}
