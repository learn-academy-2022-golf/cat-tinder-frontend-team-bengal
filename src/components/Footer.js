import React, { useState } from 'react'

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

const Footer = (args) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <>

      <Navbar {...args} color="info" fixed='bottom'>

      <NavbarBrand href="/">Team Bengal</NavbarBrand>
      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>

        <Nav navbar>

          <NavItem>
            <NavLink href="/catindex">
              See the cats
            </NavLink>
          </NavItem>

          <NavItem><NavLink href="/catnew">Create a new cat</NavLink></NavItem>

          <NavItem>
            <NavLink href="/catshow">
              See a cat
            </NavLink>
          </NavItem>

          <NavItem><NavLink href="/catedit">Edit a feline</NavLink></NavItem>

          <NavItem><NavLink href="/*">woopsies</NavLink></NavItem>

        </Nav>

      </Collapse>

    </Navbar>
    </>
  )
}

export default Footer