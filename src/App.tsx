import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import HomePage from "./pages/home";
import Navbar from "./components/navbar";
import PortofoliosPage from "./pages/portofolios";
import ExperiencesPage from "./pages/experiences";

export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/portofolios",
      element: <PortofoliosPage />,
    },
    {
      path: "/experiences",
      element: <ExperiencesPage />,
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
