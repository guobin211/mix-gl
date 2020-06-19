import { color } from '../core/color';

export function drawRect(ctx: CanvasRenderingContext2D) {
  drawArc(ctx)
}

function drawMoreRect(ctx: CanvasRenderingContext2D) {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' + Math.floor(255 - 42.5 * j) + ', 0)';
      // x, y, width height
      ctx.fillRect(j * 25, i * 25, 25, 25);
    }
  }
}

export function drawArc(ctx: CanvasRenderingContext2D) {
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.strokeStyle = color(i + j)
      ctx.beginPath();
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }
}
