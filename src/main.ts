import { APP_CONFIG } from './app.config';
import { init } from './pages';

window.onload = () => {
  (window as any).APP_CONFIG = APP_CONFIG;
  init();
};
