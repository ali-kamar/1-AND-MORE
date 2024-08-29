import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import RegisterPage from "./pages/LoginRegister/RegisterPage";
import LoginPage from "./pages/LoginRegister/LoginPage";
import WhishlistPage from "./pages/Whishlist/WhishlistPage";
import AccountPage from "./pages/Account/AccountPage";
import ShopPage from "./pages/Shop/ShopPage";
import ViewProductPage from "./pages/Shop/ViewProductPage";
import Cart from "./pages/Cart/Cart";
import AdminPage from "./pages/Admin/AdminPage";
import AddCategoryPage from "./pages/Admin/AddCategoryPage";
import AdminAccountPage from "./pages/Admin/AdminAccountPage";
import OrdersPage from "./pages/Admin/OrdersPage";
import OrdersUser from "./pages/Orders/OrdersUser";
import AddProductsPage from "./pages/Admin/AddProductsPage";

//Context
import { FilterProvider } from "./contexts/Filter/FilterProvider";

function App() {
  return (
    <FilterProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/whishlist" element={<WhishlistPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product" element={<ViewProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/add-category" element={<AddCategoryPage />} />
          <Route path="/admin/account" element={<AdminAccountPage />} />
          <Route path="/admin/orders" element={<OrdersPage />} />
          <Route path="/admin/add-product" element={<AddProductsPage />} />
          <Route path="/orders" element={<OrdersUser />} />
        </Routes>
      </Router>
    </FilterProvider>
  );
}

export default App;
