import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAvXakkG4h5XUqIn4crc2RT9rWvhNLmstw',
  authDomain: 'movil-shop-35af5.firebaseapp.com',
  projectId: 'movil-shop-35af5',
  storageBucket: 'movil-shop-35af5.appspot.com',
  messagingSenderId: '677713800093',
  appId: '1:677713800093:web:da8459bb500501824c9d74',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storageInstance = getStorage();

export { storageInstance, app };
