// React
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom"



// *********************
// End styling
// Begin content
// *********************

// Components
import Footer from './components/Footer.js';
import Header from './components/Header.js';

// Pages
import CatEdit from './pages/CatEdit.js';
import CatIndex from './pages/CatIndex.js';
import CatNew from './pages/CatNew.js';
import CatShow from './pages/CatShow.js';
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js';

// Imports mock cats
import cats from './MockCats.js';

// *********************
// End imports
// Begin App
// *********************
const App = () => { 
  
  return (<>

    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catindex" element={<CatIndex />} />
      <Route path="/catshow" element={<CatShow />} />
      <Route path="/catnew" element={<CatNew />} />
      <Route path="/catedit" element={<CatEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />

  </>);
}

export default App;
