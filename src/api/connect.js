import axios from './fetch-api'

const dataConf = {
  client_id: 'h5_distributor',
  client_secret: 'a719n%$12#@1ls',
  platform: 3,
  app_version: '1.0.0'
}

const conf = {
  notToken: true
}

export default {
  refreshtoken: {
    get: async (data, config) => {
      Object.assign(data, dataConf, {
        grant_type: 'refresh_token'
      })
      return await axios.post('connect.refreshtoken.get', data, Object.assign(config, conf))
    }
  },
  token: {
    get: async (data) => {
      Object.assign(data, dataConf, {
        grant_type: 'password',
        scope: 'category_brand distribution discovery item logistics user trade_refund fund offline_access openid profile'
      })

      return await axios.post('connect.token.get', data, conf)
    }
  },
  anonymoustoken: {
    get: async (data) => {
      Object.assign(data, dataConf, {
        grant_type: 'anonymous',
        scope: 'category_brand distribution discovery item logistics user trade_refund fund offline_access openid profile'
      })

      return await axios.post('connect.token.get', data, conf)
    }
  },
  verifycode: {
    login: async (data, dataConf) => {
      Object.assign(data, dataConf, {
        client_id: 'h5_distributor',
        client_secret: 'a719n%$12#@1ls',
        grant_type: 'verifycode',
        scope: 'category_brand distribution discovery item logistics user trade_refund fund profile offline_access openid'
      })
      return await axios.post('connect.verifycode.login', data, conf)
    }
  }
}
