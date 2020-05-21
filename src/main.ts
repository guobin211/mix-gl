import { APP_CONFIG } from './app.config';
import { init } from './core/init-page';
import { HOME } from './pages/home';

window.onload = () => {
  (window as any).APP_CONFIG = APP_CONFIG;
  console.log(HOME);
  init(HOME);
};
