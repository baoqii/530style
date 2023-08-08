import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetail";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      index: true,
      element: <Home />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    { path: "/product/:id", element: <ProductDetail /> },
    { path: "*", element: <ErrorPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
