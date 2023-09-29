import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDpDVj-GowT_S0ynd6B8G75WVN9l5jJRjI",
  authDomain: "moviesproject1-43cc2.firebaseapp.com",
  projectId: "moviesproject1-43cc2",
  storageBucket: "moviesproject1-43cc2.appspot.com",
  messagingSenderId: "84130607658",
  appId: "1:84130607658:web:6f40f2bba279da657b0953"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;


