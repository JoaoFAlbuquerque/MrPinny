import React from "react";
import { Homepage } from "./pages/Homepage/Homepage";
import { MemeCreator } from "./pages/MemeCreatorPage/MemeCreator";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/MemeGenerator",
      element: <MemeCreator />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
