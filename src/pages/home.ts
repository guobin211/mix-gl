class HomePage {

  private warp: HTMLDivElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    this.warp = document.getElementById('app') as any;
    this.canvas = document.getElementById('canvas') as any;
    this.initCanvas();
  }

  private initCanvas() {
    if (!this.canvas) {
      return;
    }
    this.ctx = this.canvas.getContext('2d', {});
    const ctx = this.ctx;
    ctx.lineWidth = 10;

    // Wall
    ctx.strokeRect(75, 140, 150, 110);

    // Door
    ctx.fillRect(130, 190, 40, 60);

    // Roof
    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(150, 60);
    ctx.lineTo(250, 140);
    ctx.closePath();
    ctx.stroke();
  }

}

export const HOME = new HomePage();