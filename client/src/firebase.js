import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-project-mern.firebaseapp.com",
  projectId: "real-estate-project-mern",
  storageBucket: "real-estate-project-mern.appspot.com",
  messagingSenderId: "178916512370",
  appId: "1:178916512370:web:0ce05d528fa843a24768eb",
};

export const app = initializeApp(firebaseConfig);
