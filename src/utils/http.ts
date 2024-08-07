import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 非http开头的url，自动拼接上方的baseURL
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 请求超时时间
    options.timeout = 10000
    // 添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 添加token请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}

// 拦截request请求
uni.addInterceptor('request', httpInterceptor)
// 拦截uploadFile请求
uni.addInterceptor('uploadFile', httpInterceptor)
