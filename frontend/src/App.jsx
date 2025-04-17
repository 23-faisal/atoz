import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import HomePage from "./pages/HomePage";
import { Toaster } from "./components/ui/sonner";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import CheckOutPage from "./pages/CheckOutPage";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomePage from "./pages/AdminHomePage";
import AdminUserManagement from "./pages/AdminUserManagement";

function App() {
  return (
    <>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          {/* user layout */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route
              path="collections/:collection"
              element={<CollectionPage />}
            />
            <Route path="checkout" element={<CheckOutPage />} />
            {/* Route for product details page with dynamic productId */}
            <Route path="product/:productId" element={<ProductDetails />} />
          </Route>

          {/* admin layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHomePage />} />
            <Route path="users" element={<AdminUserManagement />} />
            <Route path="products" element={<div>Products</div>} />
            <Route path="orders" element={<div>Orders</div>} />
            <Route path="shop" element={<div>Shop</div>} />
          </Route>
        </Routes>

        <Toaster position="top-right" />
      </Router>
    </>
  );
}

export default App;
