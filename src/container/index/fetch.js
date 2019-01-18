import { setting } from '@/api'
import { PAGETYPE } from 'common/js/constant'
import { toUppercase } from 'common/js/util'

export async function fetchData() {
  const moduleIds = []
  const entries = []

  const res = await setting.page.index.detail.get({ pageType: PAGETYPE })
  res.data.modules.forEach(module => {
    moduleIds.push(module.module_id)
    entries.push({
      config_map: module.regions[0].config_map,
      region_id: module.regions[0].region_id,
      component_name: module.module_title
    })
  }) 

  const businessRes = await setting.page.module.detail.get({ modules: moduleIds })
  if (!businessRes.data.length) return
  businessRes.data.forEach(v => {
    entries.find(item => item.region_id == v.region_id).business_obj = v.business_obj
  })
  return entries
}