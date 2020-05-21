export interface CanvasPage {
  render: () => void;
}

export function init(page: CanvasPage) {
  setTimeout(() => {
    page.render();
  }, 33);
}

