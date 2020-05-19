export function init(page: HTMLElement) {
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(page);
}
