import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
// import BookPage from "./pages/BookPage/BookPage";
// import CartPage from "./pages/CartPage/CartPage";
// import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/book/:id" element={<BookPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
