import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import TheGuestLayout from "./layouts/TheGuestLayout.jsx";
import TheHomePage from "./pages/TheHomePage.jsx";
import TheAboutPage from "./pages/TheAboutPage.jsx";
import TheExperiencePage from "./pages/TheExperiencePage.jsx";
import TheEducationPage from "./pages/TheEducationPage.jsx";
import TheSkillsPage from "./pages/TheSkillsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TheGuestLayout />,
    children: [
      {
        path: "/",
        element: <TheHomePage />,
      },
      {
        path: "/about",
        element: <TheAboutPage />,
      },
      {
        path: "/experience",
        element: <TheExperiencePage />,
      },
      {
        path: "/education",
        element: <TheEducationPage />,
      },
      {
        path: "/skills",
        element: <TheSkillsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
