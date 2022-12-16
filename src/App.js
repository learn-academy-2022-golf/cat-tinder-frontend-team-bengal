
// Boilerplate
import logo from './logo.svg';
import './App.css';

// Our imports
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer.js';
import Header from './components/Header.js';

// Imports from pages
import CatEdit from './pages/CatEdit.js';
import CatIndex from './pages/CatIndex.js';
import CatNew from './pages/CatNew.js';
import CatShow from './pages/CatShow.js';
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js';

// Imports mock cats
import cats from './MockCats.js';

function App() {
  return (
    <div>

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


    </div>
  );
}

export default App;
