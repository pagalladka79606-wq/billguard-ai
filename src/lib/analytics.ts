// Google Analytics 4 helper

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GA_MEASUREMENT_ID = 'G-S42MR31CB2';

/**
 * Log page/view change for GA4 Realtime Analytics
 */
export function trackPageView(pageTitle: string, pagePath: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: window.location.origin + pagePath,
      page_path: pagePath,
      send_to: GA_MEASUREMENT_ID
    });
  }
}

/**
 * Log custom analytics event to GA4
 */
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      ...params,
      send_to: GA_MEASUREMENT_ID
    });
  }
}
