export function getConfig<AppConfig>() {
  return (window as any).APP_CONFIG as AppConfig;
}
