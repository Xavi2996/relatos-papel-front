import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CartPage from "./pages/CartPage/CartPage";
import Favoritos from "./pages/Favoritos/Favoritos";
// import BookPage from "./pages/BookPage/BookPage";
// import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/favoritos" element={<Favoritos />} />
                {/* <Route path="/book/:id" element={<BookPage />} />
                <Route path="/checkout" element={<CheckoutPage />} /> */}
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;