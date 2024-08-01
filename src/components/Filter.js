import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Rating from './Rating';
const Filter = () => {
  const [rate, setRate] = useState(3)
  return (
    <div className='filters'>
       <span className='title'>Filter By Category</span>
       <span>
         <Form.Check
            inline
            label="Sort Price Ascending"
            name="group1"
            type="radio"
          />
       </span>
       <span>
         <Form.Check
             inline
             label="Sort Price Descending"
             name="group1"
             type="radio"
          />
        </span>
        <span>
        <Form.Check
          label="Shipping Details"
          name="group2"
          type="checkbox"
        />
        </span>
        <span>
          <Form.Check
            inline
            label="Warranty Information"
            name="group2"
            type="checkbox"
          />
        </span>
        <span>
            <label style={{paddingRight: "11px"}}> <Rating rate={rate} style={{cursor: "pointer"}} onClick={(i) => setRate(i)}/></label>
        </span>
        <Button variant="light">Clear Filters</Button>
    </div>
  )
}

export default Filter