import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound";
import Homepage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import BitcoinRatesPage from "../pages/BitcoinRatesPage";


function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />
      <Route path="login" element={<LoginPage {...props} />} /> 
      <Route path="bitcoin" element={<BitcoinRatesPage /> } /> 
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;