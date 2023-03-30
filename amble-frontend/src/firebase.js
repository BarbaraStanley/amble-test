import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCO1YplumrohOU4QujorF4GfppJPe8zko0",
    authDomain: "amble-b5292.firebaseapp.com",
    projectId: "amble-b5292",
    storageBucket: "amble-b5292.appspot.com",
    messagingSenderId: "28246352082",
    appId: "1:28246352082:web:0e738de234b7912e96cd0b",
    measurementId: "G-THWGJNL54T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default app;