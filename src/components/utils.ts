import { CanvasGrid, CanvasSize } from './CoordinateSystem'

const offsetLine = 0.5
const offsetWidth = 40

export function renderLine(size: CanvasSize, c: CanvasRenderingContext2D, g: CanvasGrid) {
  c.lineCap = 'butt'
  c.lineWidth = 1
  c.font = '12px serif'
  c.strokeStyle = '#333'
  for (let i = g.left || 0; i < size.width - (g.left || 0) - (g.right || 0); i += offsetWidth) {
    c.beginPath()
    c.moveTo(i + offsetLine, size.height - (g.bottom || 0))
    c.lineTo(i + offsetLine, g.top || 0)
    c.stroke()
    c.closePath()
    const n = i - (g.left || 0)
    c.fillText(n + '', i, size.height - (g.bottom ? g.bottom - 12 : 0))
    c.strokeStyle = '#ccc'
  }
  c.strokeStyle = '#333'
  for (let i = size.height - (g.bottom || 0); i > (g.top || 0); i-=offsetWidth) {
    c.beginPath()
    c.moveTo(g.left|| 0, i +offsetLine)
    c.lineTo(size.width - (g.right || 0), i + offsetLine)
    c.stroke()
    c.closePath()
    c.strokeStyle = '#ccc'
  }
}
