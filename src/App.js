import "./App.css";
import "./assets/styles/theme.min.css";
import "./assets/styles/theme.rtl.min.css";
// import "./assets/js/theme-switcher.js";
// import "./assets/js/theme.min.js";
// import "./assets/js/customizer.min.js"

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import Index from "./pages/AdminPage/index.jsx";
import CatetogyTable from "./components/AdminComponents/Table/CatetogyTable.jsx";
import AdminLayout from "./layout/admin/AdminLayout.jsx";
import VoucherTable from "./components/AdminComponents/Table/VoucherTable.jsx";
import Product from "./components/Customer/Product.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/product" element={<Product />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="index" element={<Index />} />
          <Route path="category" element={<CatetogyTable />} />
          <Route path="voucher" element={<VoucherTable />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
