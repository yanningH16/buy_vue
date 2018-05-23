import axios from 'axios'
import store from '../../store'
import * as types from '../../store/mutation-types'
import router from '../../router'
import { MessageBox } from 'mint-ui'
import { setErrorTimeList, getErrorTimeList, clearErrorTimeList } from './cache'
// axios 配置
axios.defaults.timeout = 5000
clearErrorTimeList()
  // http request 拦截器
  /* axios token认证 */
axios.interceptors.request.use((config) => {
  if (store.state.userInfo) {
    config.headers.accesstoken = store.state.userToken //    请求接口header参数添加
    config.headers.userAccountId = store.state.userInfo.buyerUserAccountId
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
axios.interceptors.response.use((res) => {
  // 需做用户token和userid存储
  if ((res.config.headers.accesstoken !== res.headers.accesstoken) && res.headers.accesstoken) {
    store.dispatch('setUserToken', res.headers.accesstoken)
  }
  return res
}, (error) => {
  console.log(error)
  if (error.response) {
    switch (error.response.status) {
      case 403:
        setErrorTimeList((new Date()).getTime())
        let lifeTime = getErrorTimeList()
        if (lifeTime.length === 1) {
          MessageBox({
            title: '提示',
            message: '登录失效，请重新登录',
            showCancelButton: true
          }).then(() => {
            store.commit(types.CLEAR_USER_TOKEN)
            router.replace({
              name: 'login'
            })
          }).catch((err) => {
            console.log(err)
          })
        }
        break
    }
    return false
  }
  return Promise.reject(error.response.data)
})

export default axios
