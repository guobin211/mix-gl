export function color(n: number = 0): string {
  const r = Math.floor(Math.random() * 256 - n);
  const g = Math.floor(Math.random() * 256 - n);
  const b = Math.floor(Math.random() * 256 - n);
  return `rgb(${r},${g},${b})`
}