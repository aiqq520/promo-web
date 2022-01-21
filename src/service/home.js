import request from '@/utils/request';

/**
 * 获取分类列表
 */
export async function queryCategoryList() {
  return request('/index/category/list', {
    method: 'GET'
  })
}

/**
 * 获取首页
 */
export async function queryHomeList() {
  return request('/index/home', {
    method: 'GET'
  })
}
