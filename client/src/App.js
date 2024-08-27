import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import RegisterPage from "./pages/LoginRegister/RegisterPage";
import LoginPage from "./pages/LoginRegister/LoginPage";
import WhishlistPage from "./pages/Whishlist/WhishlistPage";
import AccountPage from "./pages/Account/AccountPage";
import ShopPage from "./pages/Shop/ShopPage";
import ViewProductPage from "./pages/Shop/ViewProductPage";
import Cart from "./pages/Cart/Cart";
import CartSummary from "./components/Cart/CartSummary/CartSummary";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/whishlist" element={<WhishlistPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product" element={<ViewProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/carts" element={<CartSummary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
