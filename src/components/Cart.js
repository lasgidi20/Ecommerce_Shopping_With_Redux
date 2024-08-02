import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Form } from 'react-bootstrap';
const Cart = () => {
    const items = useSelector(state => state.prod_cart_management.cart)
    console.log(items)
    const dispatch = useDispatch()
  return (
    <div className='home'>
        <div className='prod-container'>
         {items.map((item, index) => (
             <ListGroup key={index}>
                <ListGroup.Item>
                <Row>
                  <Col md={2}> <Image variant='top' src={item.images[0]} rounded fluid/></Col>
                  <Col md={2}><span>{item.title}</span></Col>
                  <Col md={2}><span>{item.price}</span></Col>
                  <Col md={2}><span>{item.rating}</span></Col>
                  <Col md={2}>    <Form.Control as='select' value={item.qty}>
                                      {[...Array(item.stock).keys()].map((x) => (
                                         <option value="x + 1">{x + 1}</option>
                                      ))}
                                  </Form.Control></Col>
                
                </Row>
                </ListGroup.Item>
             </ListGroup>
         ))}
        </div>
        <div className='filters'>
           <span> Subtotal: {items.length} Items In Cart</span>
           <span style={{fontSize: "30px", fontWeight: 500}}>Total: {'total'}</span>
        </div>
    </div>
  )
}

export default Cart