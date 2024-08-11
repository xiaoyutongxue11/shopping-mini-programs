/**
 * 首页-广告区域数据类型
 */
export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: number
}

/**
 * 首页-前台分类数据类型
 */
export type CategoryItem = {
  icon: string
  id: string
  name: string
}

/** 首页-热门推荐数据类型 */
export type HotItem = {
  alt: string
  id: string
  pictures: string[]
  target: string
  title: string
  type: string
}
