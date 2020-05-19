export function createElement<T>(tag: string, attr: object) {
  const dom: any = document.createElement(tag);
  for (const key in attr) {
    if (attr.hasOwnProperty(key)) {
      dom.setAttribute(key, attr[key]);
    }
  }
  return dom as T;
}
