type AnalyticsWindow = Window & { dataLayer?: Array<Record<string, unknown>> };

export function trackEvent(event: string, details: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.dataLayer.push({ event, ...details });
}
