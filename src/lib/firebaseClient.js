// lib/firebaseClient.js
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBfeGae1qU9hDAapVtYkIcUe7l50lsU-Qg",
  authDomain: "sho-portfolio-322.firebaseapp.com",
  projectId: "sho-portfolio-322",
  storageBucket: "sho-portfolio-322.firebasestorage.app",
  messagingSenderId: "68477813065",
  appId: "1:68477813065:web:dbe097c143db0cb1cb9a98",
  measurementId: "G-6DDSK2K9B7",
};

let analytics;

if (typeof window !== "undefined" && !analytics) {
  const app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}

export { analytics, logEvent };
