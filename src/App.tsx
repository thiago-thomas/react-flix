import React from "react";
import "./style.css";
import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="app">
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </div>
  );
};
