import { createHashRouter, RouterProvider } from "react-router";
import { LanguageProvider } from "./context/LanguageContext";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import CVPage from "./pages/CVPage";

const router = createHashRouter([
  { path: "/", element: <HomePage /> },
  { path: "/project/:slug", element: <ProjectPage /> },
  { path: "/cv", element: <CVPage /> },
]);

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
