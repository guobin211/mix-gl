import { createElement } from './create-element';

interface CanvasProps {
  width?: number;
  height?: number;
}

export function createCanvas(attr?: CanvasProps): HTMLCanvasElement {
  const props: CanvasProps = {
    width: attr.width || 300,
    height: attr.height || 300
  }
  return createElement('canvas', props) as HTMLCanvasElement;
}