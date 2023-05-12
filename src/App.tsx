import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

const Login = lazy(() => import("./Pages/Login"));
const DashboardLayout = lazy(() => import("./Pages/DashboardLayout"));
const Overview = lazy(() => import("./Pages/Overview"));
const Workout = lazy(() => import("./Pages/Workout"));
const DietPlan = lazy(() => import("./Pages/DietPlan"));
const Goals = lazy(() => import("./Pages/Goals"));
const Schedule = lazy(() => import("./Pages/Schedule"));
const Progress = lazy(() => import("./Pages/Progress"));

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>LOADINNNNG</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<div>LOADINNNNG</div>}>
        <DashboardLayout />
      </Suspense>
    ),
    children: [
      {
        path: "overview",
        element: (
          <Suspense fallback={<div>LOADINNNNG</div>}>
            <Overview />
          </Suspense>
        ),
      },
      {
        path: "workout",
        element: (
          <Suspense fallback={<div>LOADINNNNG</div>}>
            <Workout />
          </Suspense>
        ),
      },
      {
        path: "diet_plan",
        element: (
          <Suspense fallback={<div>LOADINNNNG</div>}>
            <DietPlan />
          </Suspense>
        ),
      },
      {
        path: "goals",
        element: (
          <Suspense fallback={<div>LOADINNNNG</div>}>
            <Goals />
          </Suspense>
        ),
      },
      {
        path: "my_schedule",
        element: (
          <Suspense fallback={<div>LOADINNNNG</div>}>
            <Schedule />
          </Suspense>
        ),
      },
      {
        path: "progress",
        element: (
          <Suspense fallback={<div>LOADINNNNG</div>}>
            <Progress />
          </Suspense>
        ),
      },
    ],
  },
]);

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
    return doc.id;
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
      <RouterProvider router={router} />
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
