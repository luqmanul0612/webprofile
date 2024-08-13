import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import HomePage from "./pages/home";
import Navbar from "./components/navbar";

export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/portofolios",
      element: <>a</>,
    },
    {
      path: "/experiences",
      element: <>a</>,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <Navbar>
      <AnimatePresence mode="wait">
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </Navbar>
  );
}
