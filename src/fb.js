import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7-HPqtBJxbmDSCmZ4mK9VsNklxEuj6v8",
  authDomain: "fir-todo-1c9f5.firebaseapp.com",
  projectId: "fir-todo-1c9f5",
  storageBucket: "fir-todo-1c9f5.appspot.com",
  messagingSenderId: "644632035898",
  appId: "1:644632035898:web:91371677adcc3800662b03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
