import React from 'react'
import {Navbar, Nav, NavbarBrand} from 'react-bootstrap'

export const Header = () => {
  return (
    <Navbar
    collapseOnSelect
    bg="warning"
    variant='light' expand="md"
    
    >
        <NavbarBrand>
        logo
            <img src="" alt="" />
        </NavbarBrand>

        <Navbar.Toggle
        aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
                <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
                <Nav.Link href='/dashboard'>Tickets</Nav.Link>
                <Nav.Link href='/dashboard'>Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>

    </Navbar>
    
  )
}
