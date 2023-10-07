import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./container/Footer";
import { useEffect } from "react";
import NotFoundPage from "./pages/NotFound";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    var themeMode = document.documentElement.getAttribute("data-mode");

    if (!themeMode) {
      var theme = localStorage.getItem("theme");

      document.documentElement.setAttribute("data-mode", theme || "light");
    }
  }, []);


  return (
    <div className="dark:bg-zinc-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

