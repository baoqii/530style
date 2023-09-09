import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import "./App.css";
import Shop from "./pages/Shop";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetail";
import Layout from "./pages/Layout";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedRoutes = () => {
  const location = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
  });

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home firstRender={firstRender} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
