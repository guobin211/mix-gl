export const requestAnimation = window.requestAnimationFrame || window.webkitRequestAnimationFrame;

let interval;

export const animate = (fn: Function) => {
  clearInterval(interval);
  interval = setInterval(fn, 33);
}
