import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Error from "./Pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/Maiz/",
    element: <App />,
    children: [
      {
        path: "/Maiz/",
        element: <Home />,
      },
      {
        path: "/Maiz/About",
        element: <About />,
      },
      {
        path: "/Maiz/*",
        element: <Error />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
