import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import FeedPage from "./pages/FeedPage/index";
import "./App.css";


// Code Splitting - Lazy loading(dynamic import)
const GroupsPage = React.lazy(() => import("./pages/GroupsPage/index"));
const PagesPage = React.lazy(() => import("./pages/PagesPage/index"));
const PhotosPage = React.lazy(() => import("./pages/PhotosPage/index"));
const ProductsPage = React.lazy(() => import("./pages/ProductsPage/index"));
const VideosPage = React.lazy(() => import("./pages/VideosPage/index"));
const MessagesPage = React.lazy(() => import("./pages/MessagesPage/index"));

function App() {

  return (
    <Routes>
      <Route path="/" element={<FeedPage />} />
      <Route path="/groups" element={<GroupsPage />} />
      <Route path="/messages" element={<MessagesPage />} />
      <Route path="/pages" element={<PagesPage />} />
      <Route path="/photos" element={<PhotosPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/videos" element={<VideosPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;