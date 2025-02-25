import React from 'react'
import { Button, Navbar } from 'react-bootstrap'
import { FaCartShopping } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux'
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './style.css';
import { RemoveFromCart } from '../Slice/ProductSlice';
import { SearchQuery } from '../Slice/ProductFilterSlice';

const Header = () => {
    const items = useSelector(state => state.prod_cart_management.cart)
    console.log(items)
    const dispatch = useDispatch()
  return (
    <Navbar bg='dark' variant='dark' style={{height: 80}}>
    <Container>
      <Link to='/'>
      <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
      </Link>
      <Form.Control
        type="text"
        placeholder="Search an Item"
        style={{width: 500}}
        className="m-auto"
        onChange={(e) => dispatch({
          type: SearchQuery,
          payload: e.target.value
        })}
      />
    <Dropdown align="end">
      <Dropdown.Toggle variant="success">
        <FaCartShopping /> <span style={{paddingRight: "6px"}}>{items.length || 0}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width: "370px"}}>
         {items.length > 0 ? items.map((item) => (<span className="cartItems">
            <img src={item.thumbnail} 
                alt={item.title}
                className='itemImg'
            />

            <div className='cart-detail'>
                <span style={{paddingRight: "7px"}}>{item.title}</span>
                <span>£{item.price}</span>
            </div>

            <AiFillDelete
            fontSize="20px"
            onClick={() => dispatch({
                type: RemoveFromCart,
                payload: item
            })}
            style={{cursor: "pointer"}}
            />

         </span>)) : (<span style={{padding: "11px"}}>Cart is Empty</span>)}
         <Link to='/cart'>
         <Button style={{width: "95%", marginLeft: "10px", marginTop: "10px"}}>Cart Page</Button>
         </Link>
      </Dropdown.Menu>
    </Dropdown>
    </Container>
    </Navbar>
  )
}

export default Header