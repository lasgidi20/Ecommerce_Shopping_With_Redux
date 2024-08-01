import React from 'react'
import { Navbar } from 'react-bootstrap'
import { FaCartShopping } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{height: 80}}>
    <Container>
      <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
      <Form.Control
        type="text"
        placeholder="Search an Item"
        style={{width: 500}}
        className="m-auto"
      />
    <Dropdown align="end">
      <Dropdown.Toggle variant="success">
        <FaCartShopping /> <span style={{paddingRight: "6px"}}>{0}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width: "370px"}}>
         <span style={{padding: "11px"}}>Cart is Empty</span>
      </Dropdown.Menu>
    </Dropdown>
    </Container>
    </Navbar>
  )
}

export default Header