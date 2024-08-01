import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const SingleProduct = ({item}) => {
  return (
    <div className='products'>
    <Card>
      <Card.Img variant="top" src={item.images[0]} alt={item.title} />
      <Card.Body style={{paddingBottom: "20px"}}>
        <Card.Title>{item.title}</Card.Title>
        <span> {item.price}</span>
         <div>{item.availabilityStatus}</div>
         <div>{item.warrantyInformation}</div>
         <div>{item.shippingInformation}</div>
         <div>{item.stock}</div>
         <div>{item.rating}</div>
         <Button>Add To Cart</Button>
         <Button variant='danger'>Remove From Cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default SingleProduct