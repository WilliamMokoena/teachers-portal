// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBm5H_4fceHN49hosQe94zcOSflskhTc3I',
  authDomain: 'teachers-portal-10a39.firebaseapp.com',
  databaseURL: 'https://teachers-portal-10a39-default-rtdb.firebaseio.com',
  projectId: 'teachers-portal-10a39',
  storageBucket: 'teachers-portal-10a39.appspot.com',
  messagingSenderId: '568553737884',
  appId: '1:568553737884:web:be2fdf1d3d82a0e9b52759',
  measurementId: 'G-EECQFSHGF9',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
