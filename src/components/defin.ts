
/**
 * react canvas ref
 */
export interface CanvasRef {
  current: HTMLCanvasElement
}
/**
 * canvas dom width and height
 */
export interface CanvasSize {
  width: number;
  height: number;
}
/**
 * 画布布局
 */
export interface CanvasGrid {
  /**
   * 左边距
   */
  left?: number;
  /**
  * 顶部边距
  */
  top?: number;
  /**
   * 右边距
   */
  right?: number;
  /**
   * 底部边距
   */
  bottom?: number;
  show?: boolean;
  /**
   * 背景色
   */
  backgroundColor?: string;
}