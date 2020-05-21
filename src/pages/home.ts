import { CanvasPage } from '../core/init-page';
import { renderLine, renderLayoutLine } from './line';

export interface Point {
  x: number;
  y: number;
}
export interface Layout {
  start: Point,
  end: Point
};

class HomePage implements CanvasPage {

  private warp: HTMLDivElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private layout: Layout;
  private dpr: number;

  constructor() {
    this.warp = document.getElementById('app') as any;
    this.canvas = document.getElementById('canvas') as any;
    this.initCanvas();
    this.initStore();
  }

  private initCanvas() {
    if (!this.canvas) {
      return;
    }
    // setup
    this.dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * this.dpr;
    this.canvas.height = rect.height * this.dpr;
    this.ctx = this.canvas.getContext('2d', {});
    this.ctx.scale(this.dpr, this.dpr);
  }

  private initStore() {
    const left = this.canvas.offsetLeft;
    const top = this.canvas.offsetTop;
    const start = {
      x: left,
      y: top
    }
    const end = {
      x: left + this.canvas.clientWidth,
      y: top + this.canvas.clientHeight
    }
    this.layout = { start, end }
  }

  render() {
    renderLayoutLine(this.ctx, this.layout);
  }

}

export const HOME = new HomePage();