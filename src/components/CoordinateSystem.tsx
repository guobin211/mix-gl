import React, { createRef } from 'react'
import { renderLine } from './renderManage'
import { CanvasSize, CanvasRef, CanvasGrid } from './defin'

export interface CoordinateSystemProps {
  size?: CanvasSize
  grid?: CanvasGrid
  [key: string]: any
}

export interface CoordinateSystemState {
}

export default class CoordinateSystem extends React.Component<CoordinateSystemProps, CoordinateSystemState> {
  private _ctx?: CanvasRenderingContext2D
  private readonly canvasRef: CanvasRef

  private updateState() {
    this.setState((state, props) => {
      return {
        ...props
      }
    })
    this._ctx = this.initCtx()
    renderLine(this.size, this.ctx, this.grid)
  }

  private initCtx() {
    const dpr = window.devicePixelRatio || 1
    const rect = this.canvas.getBoundingClientRect()
    this.canvas.width = rect.width * dpr
    this.canvas.height = rect.height * dpr
    const ctx = this.canvas.getContext('2d')
    ctx?.scale(dpr, dpr)
    return ctx as CanvasRenderingContext2D
  }

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
  get canvas() {
    return this.canvasRef.current
  }

  get ctx() {
    if (this._ctx) {
      return this._ctx
    } else {
      this._ctx = this.initCtx()
      return this._ctx
    }
  }

  constructor(props: CoordinateSystemProps) {
    super(props)
    this.canvasRef = createRef() as any
    for (const prop in props) {
      if (props.hasOwnProperty(prop)) {
        Object.assign((this as any)[prop], props[prop])
      }
    }
  }

  componentDidMount() {
    renderLine(this.size, this.ctx, this.grid)
  }

  render() {
    return (
      <canvas ref={this.canvasRef} width={this.size.width} height={this.size.height} />
    )
  }
}
