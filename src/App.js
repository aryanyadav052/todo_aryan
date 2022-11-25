import React from "react";
import Todo from "./components/todoreact/todo";
// import Temp from "./components/weather/temp";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC42BBawKs0JpyiBK5Qo3HrnhqKHluIerY",
  authDomain: "todoapparyan.firebaseapp.com",
  projectId: "todoapparyan",
  storageBucket: "todoapparyan.appspot.com",
  messagingSenderId: "573488453147",
  appId: "1:573488453147:web:3fc19f7761ed132e8d0abe",
  measurementId: "G-ZT2K07YKSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const App = () => {
  return (
    <>
      <Todo />
    </>
  );
};

export default App;
