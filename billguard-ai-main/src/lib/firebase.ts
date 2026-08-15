/**
 * Firebase Client Configuration and Local Storage Synchronization
 * For production deployment, configure VITE_FIREBASE_API_KEY in .env
 */

export interface FirebaseConfig {
  apiKey?: string;
  authDomain?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
}

export const firebaseConfig: FirebaseConfig = {
  apiKey: (import.meta as any).env?.VITE_FIREBASE_API_KEY || "AIzaSyDemoKeyBillGuardAI2025",
  authDomain: (import.meta as any).env?.VITE_FIREBASE_AUTH_DOMAIN || "billguard-ai-prod.firebaseapp.com",
  projectId: (import.meta as any).env?.VITE_FIREBASE_PROJECT_ID || "billguard-ai-prod",
  storageBucket: (import.meta as any).env?.VITE_FIREBASE_STORAGE_BUCKET || "billguard-ai-prod.appspot.com",
  messagingSenderId: (import.meta as any).env?.VITE_FIREBASE_MESSAGING_SENDER_ID || "102938475610",
  appId: (import.meta as any).env?.VITE_FIREBASE_APP_ID || "1:102938475610:web:8f9a0b1c2d3e4f5a6b7c8d"
};

// Local storage key for offline/instant persistence
const STORAGE_KEY = 'billguard_saved_reports';

export function saveReportToLocal(report: any) {
  try {
    const existing = getSavedReportsFromLocal();
    const filtered = existing.filter((r: any) => r.id !== report.id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([report, ...filtered].slice(0, 10)));
  } catch (err) {
    console.error('Error saving report to local cache:', err);
  }
}

export function getSavedReportsFromLocal(): any[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Error reading local reports:', err);
    return [];
  }
}
