import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import HomePage from './pages/homepage/homepage.component';
import SearchPage from './pages/searchpage/search-page.component';

import NavBar from "./components/nav-bar/nav-bar.component"
import Footer from "./components/footer/footer.component"

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="search" element={<SearchPage />} /> 
    </Routes>
    <Footer />
    </>
  );
}

export default App;
