import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD5kBP-93psCn7O_JXb1eoqUmNQEQVcNQU",
  authDomain: "blog-app-berz.firebaseapp.com",
  projectId: "blog-app-berz",
  storageBucket: "blog-app-berz.firebasestorage.app",
  messagingSenderId: "758728463426",
  appId: "1:758728463426:web:8a85a1a3b8bf616b9109db"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth