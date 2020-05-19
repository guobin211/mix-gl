import { APP_CONFIG } from './app.config';
import { init } from './core/init-page';
import { circle } from './pages/circle';

window.onload = () => {
  (window as any).APP_CONFIG = APP_CONFIG;
  init(circle);
};
