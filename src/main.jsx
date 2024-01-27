import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";

import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className=" mx-auto">
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        closeOnClick={false}
        theme="light"
        pauseOnHover
        draggable
      />
    </div>
  </React.StrictMode>
);
