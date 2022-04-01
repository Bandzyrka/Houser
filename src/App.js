import React from 'react';
import { Routes, Route} from "react-router-dom";

import HomePage from './pages/homepage/homepage.component';
import SearchPage from './pages/searchpage/search-page.component';
import PropertyPage from './pages/property/property.component'
import NavBar from "./components/nav-bar/nav-bar.component"
import Footer from "./components/footer/footer.component"

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="search" element={<SearchPage />} /> 
      <Route path="/property/:propertyId" element={<PropertyPage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
