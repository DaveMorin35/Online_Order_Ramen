import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Checkout from "./pages/Checkout";
import Create from "./pages/Create"
import Favorite from "./pages/Favorite";
import RamenCheck from "./pages/RamenCheck";
import Login from "./components/Login";
import Register from "./components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path:"/RamenCheck/",
        element: <RamenCheck />,
      },
      {
        path:"/Login",
        element: <Login />,
      },
      {
        path:"/Register",
        element: <Register />,
      }
    ],
  },
]);

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App;