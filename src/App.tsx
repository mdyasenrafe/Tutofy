import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/styles.css";
import "./styles/responsive.css";
import "./App.css";
import Signin from "./pages/onboarding/auth/Signin";
import Signup from "./pages/onboarding/auth/Signup";
import CreateProfile from "./pages/onboarding/profile/CreateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/onboarding/profile",
    element: <CreateProfile />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
