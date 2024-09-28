import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from 'firebase/auth'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgSiH4bA9aa80WlgjX_2BDwlSQtAylWS8",
  authDomain: "test-github-auth-1d45e.firebaseapp.com",
  projectId: "test-github-auth-1d45e",
  storageBucket: "test-github-auth-1d45e.appspot.com",
  messagingSenderId: "47667171327",
  appId: "1:47667171327:web:db2f3fb8fad0d2167421ca"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize authentication

// Create Vue app
createApp(App).use(store).use(router).mount('#app');



// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries