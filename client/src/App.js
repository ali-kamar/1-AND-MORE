import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import RegisterPage from "./pages/LoginRegister/RegisterPage";
import LoginPage from "./pages/LoginRegister/LoginPage";
import WhishlistPage from "./pages/Whishlist/WhishlistPage";
import AccountPage from "./pages/Account/AccountPage";
import ShopPage from "./pages/Shop/ShopPage";
 

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
