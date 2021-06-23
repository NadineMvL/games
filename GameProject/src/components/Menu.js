import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import '../myStyles.css';


function Menu() {
    return ( 
    <div className='banner'>
        <Navbar bg = "light" expand = "lg" >
        <Navbar.Brand href = "#home" > Chillax Boo </Navbar.Brand> 
         <Nav>
        <Nav.Link href = "/home" > Home </Nav.Link> 
        <Nav.Link href = "/magic" > Magic Mystic </Nav.Link> 
        <Nav.Link href = "/todo" > To Do</Nav.Link>
        <Nav.Link href = "/zen" > Find Zen</Nav.Link>
        <Nav.Link href = "/help" > Help</Nav.Link>
        </Nav> 
        </Navbar>

    </div>
    );
}

export default Menu;
//Menu is to be displayed on every page