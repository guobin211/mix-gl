import { Layout } from './home';

const fillStyle = '#ccddff'
const strokeStyle = '#333'
// 网格线分组
const group = 10;
// 默认间隔距离
let stepWidth = 10;
// 安全布局
const grid = {
  left: 10,
  right: 10,
  top: 10,
  bottom: 10
}

export function renderLine(c: CanvasRenderingContext2D, layout: Layout) {
  c.fillStyle = fillStyle
  c.beginPath()
  c.moveTo(20, 20)
  c.lineTo(100, 20)
  c.lineTo(100, 80)
  c.closePath()
  c.fill()
  c.strokeStyle = strokeStyle
  c.lineWidth = 1
  c.stroke()
}

export function renderLayoutLine(c: CanvasRenderingContext2D, layout: Layout) {
  const stepX = layout.end.x - layout.start.x;
  const stepY = layout.end.y - layout.start.y;
  if (stepY > stepX) {
    stepWidth = parseInt((stepX / group).toFixed(1), 10);
  } else {
    stepWidth = parseInt((stepY / group).toFixed(1), 10);
  }
  c.strokeStyle = strokeStyle;
  c.lineCap = `butt`;
  c.lineWidth = 1;
  c.font = '12px serif'
  for (let i = grid.left; i < layout.end.x - grid.right; i += stepWidth) {
    c.beginPath()
    c.moveTo(i + 0.5, layout.end.y - grid.bottom)
    c.lineTo(i + 0.5, layout.start.y - grid.top)
    c.stroke()
    c.closePath()
    const n = i - grid.left
    c.fillText(n + '', i + 2, layout.end.y - 42)
  }
  for (let i = layout.start.y; i < layout.end.y - grid.bottom; i += stepWidth) {
    c.beginPath()
    c.moveTo(grid.left, i - 0.5)
    c.lineTo(layout.end.x - grid.right, i - 0.5)
    c.stroke()
    c.closePath()
    const n = i - layout.start.y
    if (n !== 0) {
      c.fillText(n + '', grid.left + 2, layout.end.y - i - 2)
    }
  }

}