import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { GoogleAuthProvider } from "firebase/auth";

/* 아래 firebaseConfig 부분은 프로젝트 생성시 홈페이지에서 제공한다. 개인정보이니 env 필수 */
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    databaseURL:
        "https://monglog-d3e1b-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export default app;
export const db = getDatabase(app);
