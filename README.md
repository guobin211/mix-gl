# Canvas 绘制网格线

```typescript
  private _ctx?: CanvasRenderingContext2D

  size: CanvasSize = {
    width: 300,
    height: 300
  }

  grid: CanvasGrid = {
    left: 30,
    right: 30,
    top: 40,
    bottom: 60
  }

  componentDidMount() {
    renderLine(this.size, this.ctx, this.grid)
  }

```
#### 预览
<div align="center">
    <img src="https://github.com/guobin211/mix-gl/blob/react/config/bg.png" width = "600" height = "600"  alt=""/>
</div>


## Scripts

```shell script

    yarn install
    
    yarn satrt

```

