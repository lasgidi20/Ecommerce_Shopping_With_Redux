import React from 'react'
import { Navbar } from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{height: 80}}>
    <Container>
      <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
    </Container>
    </Navbar>
  )
}

export default Header