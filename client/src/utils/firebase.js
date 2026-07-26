
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAKt1U7cY_T1nFa4uSdkHcDTPqxet0SSaI",
    authDomain: "interviewiq-82a6f.firebaseapp.com",
    projectId: "interviewiq-82a6f",
    storageBucket: "interviewiq-82a6f.firebasestorage.app",
    messagingSenderId: "914814131079",
    appId: "1:914814131079:web:8c71eb8a8906f379fc9122"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth, provider }