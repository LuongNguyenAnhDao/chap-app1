import {initializeApp} from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATnXNXryCZskZ1rvyQjQahprWr6HTs3Ug",
  authDomain: "chat-app-b0600.firebaseapp.com",
  projectId: "chat-app-b0600",
  storageBucket: "chat-app-b0600.appspot.com",
  messagingSenderId: "544265109280",
  appId: "1:544265109280:web:6f93694a58c0fa103ca145"
};
const app=initializeApp(firebaseConfig);

const database = getDatabase(app);

export {database, ref, push, onValue};

