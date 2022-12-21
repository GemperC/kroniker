import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
 } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAT20u-LyzzTwSfoCN7HlbEKzVYjD90zy0',
  authDomain: 'kroniker-60712.firebaseapp.com',
//   databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'kroniker-60712',
  storageBucket: 'kroniker-60712.appspot.com',
  messagingSenderId: '887721135273',
  appId: '1:887721135273:web:a0979460bab927634f6db8',
//   measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

