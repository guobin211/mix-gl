import { Config } from './config'
import { CanvasSize, CanvasGrid } from './defin'

/**
 * 绘制线条
 * @param size canvas size
 * @param c canvas contxt
 * @param g grid
 */
export function renderLine(size: CanvasSize, c: CanvasRenderingContext2D, g: CanvasGrid) {
  c.lineCap = 'butt'
  c.font = `${Config.FONT_SIZE}px Consolas`
  c.strokeStyle = Config.STROKE_STYLE
  const secendColor = 'rgb(222,222,222)'
  let first = true
  const xEnd = getEndpoint(size.width - Config.THIN_LINE - (g.left || 0) - (g.right || 0), Config.OFFSET_WIDTH)
  const yEnd = getEndpoint(size.height - Config.THIN_LINE - (g.bottom || 0) - (g.top || 0), Config.OFFSET_WIDTH)
  // 纵向
  for (let i = g.left || 0; i < size.width - (g.left || 0) - (g.right || 0); i += Config.OFFSET_WIDTH) {
    c.beginPath()
    c.moveTo(i + Config.THIN_LINE, size.height - (g.bottom || 0))
    if (first) {
      c.lineTo(i + Config.THIN_LINE, g.top || 0)
      first = false
    } else {
      c.lineTo(i + Config.THIN_LINE, size.height - (g.bottom || 0) - yEnd)
    }
    c.stroke()
    c.closePath()
    const n = i - (g.left || 0)
    c.fillStyle = Config.FILL_STYLE
    c.fillText(n + '', i, size.height - (g.bottom ? g.bottom - 12 : 0))
    c.strokeStyle = secendColor
  }
  c.strokeStyle = Config.STROKE_STYLE
  first = true
  // 横向
  for (let i = size.height - (g.bottom || 0); i > (g.top || 0); i -= Config.OFFSET_WIDTH) {
    c.beginPath()
    c.moveTo((g.left || 0) + Config.THIN_LINE, i + Config.THIN_LINE)
    if (first) {
      c.lineTo(size.width - (g.right || 0), i + Config.THIN_LINE)
      first = false
    } else {
      c.lineTo(xEnd + (g.left || 0), i + Config.THIN_LINE)
    }
    c.stroke()
    c.closePath()
    c.strokeStyle = secendColor
  }
}

function getEndpoint(width: number, offset: number): number {
  return parseInt((width / offset as any), 10) * offset;
}
