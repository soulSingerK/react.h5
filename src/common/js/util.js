/**
 * 将下划线转化成大写字母 如c-img-ad => CImgAd
 * @param {*} str 
 */
export function toUppercase(str) {
  if (!str) return ''
  const arr = str.split('-')
  return arr.map(v => {
    return v.replace(/( |^)[a-z]/g, l => l.toUpperCase())
  }).join('')
}