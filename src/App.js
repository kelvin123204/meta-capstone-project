import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ReservePage from "./pages/ReservePage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/reserve", element: <ReservePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
