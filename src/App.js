import "./App.css";
import SignInPage from "./pages/SignInPage";
import SignupPage from "./pages/SignupPage";
import { Routes, Route } from "react-router-dom";
import NotificationPage from "./pages/NotificationPage";
import HomePage from "./pages/HomePage";
import OrderDetails from "./pages/OrderDetails";
import FooterMenu from "./components/common/FooterMenu";
import CartPage from "./pages/CartPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile";
import PrivetOutlet from "./components/common/PrivetOutlet";
import AdminOutlet from "./components/common/AdminOutlet";
import AllUser from "./pages/AllUser";
import Company from "./pages/Company";
import ProductPage from "./pages/ProductPage";
import CreateProductPage from "./pages/CreateProductPage";

import { useEffect } from "react";
import MyOrder from "./pages/MyOrder";
import Orders from "./pages/Orders";
import AdminOrders from './pages/AdminOrders';
import AdminOrderDetails from './pages/AdminOrderDetails';

function App() {
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      return localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);
  return (
    <>
   
      <main>
        <Routes>
          <Route path="/sing-up" element={<SignupPage />} />
          <Route path="/sing-in" element={<SignInPage />} />

          <Route path="/*" element={<PrivetOutlet />}>
            <Route path="" element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="notification" element={<NotificationPage />} />
            <Route path="order-details/:id" element={<OrderDetails />} />
            <Route path="my-order" element={<MyOrder />} />
            <Route element={<AdminOutlet />}>
              <Route path="users" element={<AllUser />} />
              <Route path="company" element={<Company />} />
              <Route path="product" element={<ProductPage />} />
              <Route path="add-product" element={<CreateProductPage />} />
              <Route path="admin/orders" element={<AdminOrders />} />
              <Route path="admin/orders/:id" element={<AdminOrderDetails />} />
            </Route>
          </Route>
        </Routes>
      </main>
      <FooterMenu />
      <ToastContainer />
    </>
  );
}

export default App;
