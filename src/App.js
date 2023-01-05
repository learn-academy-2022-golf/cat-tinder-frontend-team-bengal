// React
import React from 'react';
import { Routes, Route } from "react-router-dom"



// *********************
// End imports
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

  const createCat = (cat) => {

  }
  
  return (<>

    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catindex" element={<CatIndex cats={cats} />} />
      <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
      <Route path="/catnew" element={<CatNew createCat={createCat} />} />
      <Route path="/catedit" element={<CatEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    <Footer />

  </>);
}

export default App;
