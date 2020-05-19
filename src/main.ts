import { APP_CONFIG } from './app.config';

window.onload = () => {
  (window as any).APP_CONFIG = APP_CONFIG;
};
