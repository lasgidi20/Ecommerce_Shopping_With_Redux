import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, ListGroup } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Form } from 'react-bootstrap';
import { ClearCart, IncreaseQty, RemoveFromCart } from '../Slice/ProductSlice';
import { AiFillDelete } from 'react-icons/ai';
const Cart = () => {
    const items = useSelector(state => state.prod_cart_management.cart)
    console.log(items)
    const dispatch = useDispatch()
    const [total, setTotal] = useState(0)
    useEffect(() => {
        setTotal(items.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
    }, [items])

  return (
    <div className='home'>
        <div className='prod-container'>
         {items.map((item, index) => (
             <ListGroup key={index}>
                <ListGroup.Item>
                <Row>
                  <Col md={2}> <Image variant='top' src={item.images[0]} rounded fluid/></Col>
                  <Col md={2}><span>{item.title}</span></Col>
                  <Col md={2}><span>£{item.price}</span></Col>
                  <Col md={2}><span>{item.rating}</span></Col>
                  <Col md={2}> <Form.Control as="select" value={item.qty} onChange={(e) => dispatch({
                     type: IncreaseQty,
                     payload: {
                        id: item.id,
                        qty: e.target.value
                     },
                  })}>
                      {[...Array(item.stock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                      ))}</Form.Control></Col>
                  <Col md={2}><AiFillDelete onClick={() => dispatch({
                    type: RemoveFromCart,
                    payload: item
                  })}/></Col>
                </Row>
                </ListGroup.Item>
             </ListGroup>
         ))}
        </div>
        <div className='filters'>
           <span> Subtotal: {items.length} Items In Cart</span>
           <span style={{fontSize: "30px", fontWeight: 500}}>Total: £{total}</span>
           {total > 0 ? <Button>Pay</Button> : '' }
        </div>
    </div>
  )
}

export default Cart