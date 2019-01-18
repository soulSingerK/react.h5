import connect from './connect'
// import distribution from './distribution'
// import router from '../router'

const tokenKey = 'token'
const userKey = 'user'
const shopKey = 'shop'

export default {
  getToken() {
    let data = localStorage.getItem(tokenKey)
    if (!data) return null

    data = JSON.parse(data)

    if (new Date(data.expiresTime) < new Date()){
      this.clearToken()
      return null
    }

    return data
  },
  async getNewToken() {
    let data = this.getToken()
    if (!data) {
      return null
    }
    const res = await connect.refreshtoken.get({
      refresh_token: data.refresh_token
    }, {headers: {Authorization: `${data.token_type} ${data.access_token}`}})
    if (!res.is_success) {
      return null
    }
    return this.setToken(res.token)
  },
  setToken(data) {
    data.expiresTime = Date.now() + data.expires_in * 1000
    localStorage.setItem(tokenKey, JSON.stringify(data))
    return data
  },
  clearToken() {
    localStorage.removeItem(tokenKey)
    localStorage.removeItem(userKey)
  },
  getUser() {
    const data = localStorage.getItem(userKey)
    if (data) {
      return JSON.parse(data)
    }

    return null
  },
  setUser(data) {
    localStorage.setItem(userKey, JSON.stringify(data))
  },
  // getShop() {
  //   return JSON.parse(localStorage.getItem(shopKey)) || null
  // },
  // async setShop() {
  //   const shopInfo = await distribution.page.shop.get()
  //   shopInfo.shop && localStorage.setItem(shopKey, JSON.stringify(shopInfo.shop))
  //   return this.getShop()
  // },
  // async checkPage () {
  //   let user = this.getUser()
  //   if (JSON.parse(localStorage.getItem('reload')) === 1 && (!user || user.user_status.key === 'inactive')) {
  //     localStorage.removeItem('reload')
  //     localStorage.removeItem('redirect')
  //     this.clearToken()
  //     router.replace({ path: '/' })
  //     return Promise.reject('未登录')
  //   }
  //   if (!user || user.user_status.key === 'inactive') {
  //     localStorage.setItem('redirect', JSON.stringify({
  //       page: router.currentRoute.path,
  //       query: router.currentRoute.query
  //     }))
  //     localStorage.setItem('reload', 1)
  //     this.clearToken()
  //     router.push({ name: 'login' })
  //     return Promise.reject('未登录')
  //   }
  //   if (localStorage.getItem('reload')) {
  //     localStorage.removeItem('reload')
  //   }
  //   return Promise.resolve()
  // },
  checkUser () {
    let user = this.getUser()
    return user && user.user_status.key !== 'inactive'
  }
}
