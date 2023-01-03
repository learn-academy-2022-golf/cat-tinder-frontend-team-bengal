// React
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom"

// Styling

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

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
const App = (args) => { 
  
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  
  return (<>

    <Header />

    <Navbar {...args}>

      <NavbarBrand href="/">Team Bengal</NavbarBrand>
      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>

        <Nav navbar>
          <NavItem><NavLink href="/catindex">See the cats</NavLink></NavItem>

          <NavItem><NavLink href="/catshow">See a cat</NavLink></NavItem>

          <NavItem><NavLink href="/catnew">Create a new cat</NavLink></NavItem>

          <NavItem><NavLink href="/catedit">Edit a feline</NavLink></NavItem>

          <NavItem><NavLink href="/*">woopsies</NavLink></NavItem>

        </Nav>

      </Collapse>

    </Navbar>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catindex" element={<CatIndex />} />
      <Route path="/catshow" element={<CatShow />} />
      <Route path="/catnew" element={<CatNew />} />
      <Route path="/catedit" element={<CatEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <br /><br />
    <Footer />

  </>);
}

export default App;
