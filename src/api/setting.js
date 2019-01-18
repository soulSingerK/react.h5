import axios from './fetch-api'

export default {
  page: {
    frame: {
      get: async (params) => {
        return await axios.get('setting.page.frame.get', {
          params
        })
      }
    },
    module: {
      detail: {
        get: async (data) => {
          return await axios.post('setting.page.module.detail.get', data)
        }
      }
    },
    list: async (params) => {
      return await axios.get('setting.page.list', {
        params
      })
    },
    index: {
      detail: {
        async get(params) {
          const res = await axios.get('setting.page.index.detail.get', { params })
          return res
        }
      }
    }
  }
}
