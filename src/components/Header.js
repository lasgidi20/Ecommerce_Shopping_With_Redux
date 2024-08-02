import React from 'react'
import { Navbar } from 'react-bootstrap'
import { FaCartShopping } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
    const items = useSelector(state => state.prod_cart_management.cart)
    console.log(items)
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
        <FaCartShopping /> <span style={{paddingRight: "6px"}}>{items.length}</span>
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