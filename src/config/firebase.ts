// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB0iVBf_TzYILq_ZYGGGVrZcLt3PXTOG9Q',
  authDomain: 'plant-shop-website.firebaseapp.com',
  projectId: 'plant-shop-website',
  storageBucket: 'plant-shop-website.appspot.com',
  messagingSenderId: '863651521218',
  appId: '1:863651521218:web:597781bc7869e5f89e515b',
  measurementId: 'G-DYKQRZ0XP5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
