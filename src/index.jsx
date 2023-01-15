import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/tachyons/css/tachyons.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Perfil } from "./routes/Perfil";
import { Login } from "./routes/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>aa</div>,
    errorElement: <div>erro</div>
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "/login/signin",
    element: <Login />,
  },
  {
    path: "/login/register",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
