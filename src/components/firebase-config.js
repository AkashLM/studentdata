// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBNmi6b8TKwi0wOyBwabKm930CQXbSjl3c',
	authDomain: 'kse-studentdata.firebaseapp.com',
	projectId: 'kse-studentdata',
	storageBucket: 'kse-studentdata.appspot.com',
	messagingSenderId: '658543907549',
	appId: '1:658543907549:web:27d5174d82dd584e4f0134'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
