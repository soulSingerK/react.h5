import axios from 'axios'
// import router from '@/router'

import {
  userToken
} from './index'

let conf = {
  headers: {
    timeout: 5000,
    'Content-Type': 'application/json;charset=UTF-8'
  }
}

const instance = axios.create(conf)

instance.interceptors.request.use(async config => {
  config.url = `/router/rest?method=aqsea.${config.url}&version=v1`
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'dev-production') {
    config.url = `p${config.url}`
  } else if (process.env.NODE_ENV === 'production') {
    config.url = `http://api.aqsea.com${config.url}`
  } else if (process.env.NODE_ENV === 'dev-staging') {
    config.url = `s${config.url}`
  } else if (process.env.NODE_ENV === 'development') {
    config.url = `http://10.9.2.247:8080${config.url}`
  } else {
    config.url = `/mock${config.url}`
  }

  if (!config.notToken) {
    const token = await userToken.getToken()
    const userInfo = await userToken.getUser()
    if (token) {
      config.headers.Authorization = `${token.token_type} ${token.access_token}`
      if (userInfo !== null) {
        config.headers['X-User-Id'] = userInfo.user_id
        config.headers['X-User-Name'] = encodeURIComponent(userInfo.user_name)
        config.headers['X-User-Nick'] = encodeURIComponent(userInfo.user_nick)
        config.headers['X-User-Type'] = 'Distributor'
      }
    }
  }

  return config
})

instance.interceptors.response.use(res => {
  if (res.data.data && res.data.data.is_success === false) {
    let link = res.request.responseURL.match(/[?&]method=([^?&]+)/)
    if (link) {
      console.log('接口' + link[1] + '貌似出错了')
    }
  }
  // if (res.data.data.code === '401') {
  //   userToken.clearToken()
  //   router.push({
  //     name: 'login',
  //     query: {
  //       redirect: router.currentRoute.fullPath
  //     }
  //   })
  // }
  return res.data.data
})

export default instance
