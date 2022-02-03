import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCKHenxu2XrqDYMEUoYZKeB9WCp9e35Z4U',
  authDomain: 'music-76e9b.firebaseapp.com',
  projectId: 'music-76e9b',
  storageBucket: 'music-76e9b.appspot.com',
  appId: '1:199615994550:web:d20993f60111d1824fa417',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();

const db = app.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
};
