import React from "react";
import "./App.css";
import {
  ClerkProvider,
  SignIn,
  SignedIn,
  SignedOut,
  useAuth,
} from "@clerk/clerk-react";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
} from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAwWiHikXlVEwnSsdg3Q79oSauTTzRGB2w",
  authDomain: "fitnessflow-d920a.firebaseapp.com",
  projectId: "fitnessflow-d920a",
  storageBucket: "fitnessflow-d920a.appspot.com",
  messagingSenderId: "982193170041",
  appId: "1:982193170041:web:966405908b832a486516a8",
  measurementId: "G-B5ZS5NDPWZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const getUsers = async (db: Firestore) => {
  const usersCol = collection(db, "users");
  const userSnapshot = await getDocs(usersCol);
  const userList = userSnapshot.docs.map((doc) => {
    const userData = doc.data();
    // const userId = userData.id;
    return doc.id
  });
  console.log("user list: ", userList);
};

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
        <div>You are signed in</div>
        <Example />
      </SignedIn>
      <SignedOut>
        <div>You are signed out</div>
        <div>
          <SignIn />
          <Example />
        </div>
      </SignedOut>
    </ClerkProvider>
  );
}

function Example() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  console.log(userId);

  // In case the user signs out while on the page.
  getUsers(db);


  if (!isLoaded || !userId) {
    return null;
  }


  return (
    <div>
      Hello, {userId} your current active session is {sessionId}
    </div>
  );
}

export default App;
