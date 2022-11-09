import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import VueClickAway from "vue3-click-away";
import router from "./router";
import "./assets/tailwind.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA44KPeh921g_IA02tdQRlt1OExEV8VRZo",
  authDomain: "leetcoded-14a63.firebaseapp.com",
  databaseURL: "https://leetcoded-14a63-default-rtdb.firebaseio.com",
  projectId: "leetcoded-14a63",
  storageBucket: "leetcoded-14a63.appspot.com",
  messagingSenderId: "692622659662",
  appId: "1:692622659662:web:bf2cb9570ed392530cf31f",
  measurementId: "G-2SCVMDJEX7",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);
const pinia = createPinia();

app.use(VueClickAway);
app.use(pinia);
app.use(router).mount("#app");
