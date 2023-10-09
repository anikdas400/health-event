// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS6wsmtmOHmwpO4iFOi2kjZqeD95VUdlw",
  authDomain: "health-event-25e0a.firebaseapp.com",
  projectId: "health-event-25e0a",
  storageBucket: "health-event-25e0a.appspot.com",
  messagingSenderId: "141059939437",
  appId: "1:141059939437:web:db5c77ff5536bbbc72b364"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth