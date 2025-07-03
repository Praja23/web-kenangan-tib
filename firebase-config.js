// firebase-config.js (VERSI MODULAR TANPA compat)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCtEGk0o0tzKdPKd89LST2BeFSgNwzakfY",
  authDomain: "kenangan-141d7.firebaseapp.com",
  databaseURL: "https://kenangan-141d7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kenangan-141d7",
  storageBucket: "kenangan-141d7.appspot.com",
  messagingSenderId: "1038531306411",
  appId: "1:1038531306411:web:8168f16378bc4ed42da8ee",
  measurementId: "G-V147DEYSGW"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
