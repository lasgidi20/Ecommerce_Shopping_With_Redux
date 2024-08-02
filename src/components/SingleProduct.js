import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch,useSelector } from 'react-redux';
import { AddToCart, RemoveFromCart } from '../Slice/ProductSlice';
const SingleProduct = ({item}) => {
  const cart_items = useSelector(state => state.prod_cart_management.cart)
  console.log(cart_items)
  const dispatch = useDispatch()
  return (
    <div className='products'>
    <Card>
      <Card.Img variant="top" src={item.images[0]} alt={item.title} />
      <Card.Body style={{paddingBottom: "20px"}}>
        <Card.Title>{item.title}</Card.Title>
        <span> £{item.price}</span>
         <div>{item.availabilityStatus}</div>
         <div>{item.warrantyInformation}</div>
         <div>{item.shippingInformation}</div>
         <div>{item.stock}</div>
         <div>{item.rating}</div>
         {cart_items.some((prod) => prod.id === item.id) ? (<Button variant='danger' onClick={() => dispatch({
            type: RemoveFromCart,
            payload: item
         })}>Remove From Cart</Button>) : (  <Button onClick={()=> dispatch({
            type: AddToCart,
            payload: item
         })}>Add To Cart</Button>)}
      </Card.Body>
    </Card>
    </div>
  )
}

export default SingleProduct