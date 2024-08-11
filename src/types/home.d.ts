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

/** 猜你喜欢-商品类型 */
export type GuessItem = {
  /** 商品描述 */
  desc: string
  /** 商品折扣 */
  discount: number
  /** id */
  id: string
  /** 商品名称 */
  name: string
  /** 商品已下单数量 */
  orderNum: number
  /** 商品图片 */
  picture: string
  /** 商品价格 */
  price: number
}
