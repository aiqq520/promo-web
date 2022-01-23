import { queryCategoryList, queryHomeList } from '@/service/home';

const Model = {
  namespace: 'global',
  state: {
    homeInfo: {}, // 首页
    categoryList: [], // 类目集合
  },
  effects: {
    *init({ _ }, { call, put }) {
      const response = yield call(queryHomeList)
      if (!response || !response.success) return
      const { data } = (response || {})

      yield put({
        type: 'initData',
        payload: data
      })
    },
    *fetch({ _ }, { call, put }) {
      const response = yield call(queryCategoryList)
      if(!response || !response.success) return
      const { data } = (response || {})

      yield put({
        type: 'fetchData',
        payload: data
      })

    }
  },
  reducers: {
    initData(state, action) {
      const data = action.payload
      return {
        ...state,
        homeInfo: data || {}
      }
    },
    fetchData(state, action) {
      const data = action.payload
      return {
        ...state,
        categoryList: data || []
      }
    }
  }
}

export default Model
