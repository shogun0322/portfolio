import { analytics, logEvent } from "./firebaseClient";

export const trackPageView = (path) => {
  if (analytics && typeof window !== "undefined") {
    logEvent(analytics, "page_view", { page_path: path });
  }
};
