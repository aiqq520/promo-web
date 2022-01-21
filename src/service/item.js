import request from '@/utils/request';

/**
 * 商品列表
 */
export async function queryItemList(params) {
  return request('/item/type/list', {
    method: 'POST',
    data: params
  })
}

/**
 * 商品搜索
 */
export async function querySearch(params) {
  return request('/item/search/list', {
    method: 'POST',
    data: params
  })
}


/**
 * 商品详情
 */
export async function getItemInfo(params) {
  return request(`/item/info/${params}`, {
    method: 'POST',
  })
}
