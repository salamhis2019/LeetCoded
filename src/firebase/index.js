import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA44KPeh921g_IA02tdQRlt1OExEV8VRZo",
  authDomain: "leetcoded-14a63.firebaseapp.com",
  databaseURL: "https://leetcoded-14a63-default-rtdb.firebaseio.com",
  projectId: "leetcoded-14a63",
  storageBucket: "leetcoded-14a63.appspot.com",
  messagingSenderId: "692622659662",
  appId: "1:692622659662:web:bf2cb9570ed392530cf31f",
  measurementId: "G-2SCVMDJEX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
