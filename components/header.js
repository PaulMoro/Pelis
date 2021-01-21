import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";


import HeaderStyle from "../styles/components/header";

function Header() {
  
  return (
    <header  className="header">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
          <img
            className="header_img"
            alt="brand"
            src="https://image.flaticon.com/icons/png/512/32/32618.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
          Pelis
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="header_icon">
          <img
            alt="Corazooon"
            src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="header_icon">
          <img
            alt="Cuenta"
            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
      </Navbar>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info" className="buttonForm">Search</Button>
      </Form>
      <style jsx AlbumStyles>
        {HeaderStyle}
      </style>
    </header>
  )
}
export default Header;
