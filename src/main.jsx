import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Body from "./Components/Body.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import RestaurantMenu from "./Components/RestaurantMenu.jsx";
import Error from "./Components/Error.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/NomNomFoods",
    element: <App />,
    children: [
      {
        path: "/NomNomFoods",
        element: <Body />,
      },
      {
        path: "/NomNomFoods/about",
        element: <About />,
      },
      {
        path: "/NomNomFoods/contact",
        element: <Contact />,
      },
      {
        path: "/NomNomFoods/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
