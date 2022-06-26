import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import FeedPage from "./pages/FeedPage/index";
import "./App.css";

// Includes Toastify Package
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Code Splitting - Lazy loading(dynamic import)
const GroupsPage = React.lazy(() => import("./pages/GroupsPage/index"));
const PagesPage = React.lazy(() => import("./pages/PagesPage/index"));
const PhotosPage = React.lazy(() => import("./pages/PhotosPage/index"));
const ProductsPage = React.lazy(() => import("./pages/ProductsPage/index"));
const VideosPage = React.lazy(() => import("./pages/VideosPage/index"));
const MessagesPage = React.lazy(() => import("./pages/MessagesPage/index"));
const LoginPage = React.lazy(() => import("./pages/LoginPage/index"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage/index"));
const ForgetPasswordPage = React.lazy(() => import("./pages/ForgotPasswordPage/index"));
const ResetPage = React.lazy(() => import("./pages/ResetPasswordPage/index"));
const SettingPage = React.lazy(() => import("./pages/SettingPage/index"));
const UserPage = React.lazy(() => import("./pages/UserPage/index"));



function App() {
  useSelector((state) => state.auth.token);
  useSelector((state) => state.auth.resetToken);
  const token = sessionStorage.getItem("token");
  const resetToken = sessionStorage.getItem("resetToken");

  return (
    <>
        <ToastContainer autoClose={2000} position="bottom-right" />
    <Routes>

      {token !== null && (
        <>
          <Route path="/" element={<FeedPage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/pages" element={<PagesPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      )}

      {token === null && (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget" element={<ForgetPasswordPage />} />

          {
            resetToken !== null && (
              <Route path="/reset" element={<ResetPage />} />
            )
          }

          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
    </Routes>
    </>
  );
}

export default App;
