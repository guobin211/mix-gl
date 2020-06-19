/**
 * 16进制颜色转rgba
 * @param hexColor 16进制颜色
 * @param alpha 不透明度
 */
function hexToRGBA(hexColor: string, alpha = 1) {
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  let color = hexColor.toLowerCase()
  if (color && reg.test(color)) {
    if (color.length === 4) {
      let sColorNew = '#'
      for (let i = 1; i < 4; i += 1) {
        sColorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1))
      }
      color = sColorNew
    }
    const sColorChange = []
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + color.slice(i, i + 2)))
    }
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')'
  } else {
    return hexColor
  }
}

/**
 * rgba颜色色值
 * @param rgb 颜色
 */
function getNumberOfRGB(rgb: string): number[] {
  const res = []
  for (const s of rgb.split(',')) {
    if (s.includes('rgba(')) {
      res.push(s.slice(5))
    } else if (s.includes(')')) {
      res.push(s.slice(0, s.length - 1))
    } else if (s.includes('rgb(')) {
      res.push(s.slice(4))
    } else {
      res.push(s)
    }
  }

  return res.map(s => Number(s))
}

function getRGB(color: string): number[] {
  if (color.startsWith('#')) {
    const rgb = hexToRGBA(color)
    return getNumberOfRGB(rgb)
  }
  return getNumberOfRGB(color)
}


export const Utils = {
  getRGB
}