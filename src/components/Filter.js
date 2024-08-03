import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Rating from './Rating';
import {useDispatch} from 'react-redux'
import {SortPriceAscending, SortPriceDescending, ShipOvernight} from '../Slice/ProductSlice'
const Filter = () => {
  const [rate, setRate] = useState(3)
  const dispatch = useDispatch();
  return (
    <div className='filters'>
       <span className='title'>Filter By Category</span>
       <span>
         <Form.Check
            inline
            label="Sort Price Ascending"
            name="group1"
            type="radio"
            onClick={() => dispatch({
                type: SortPriceAscending
            })}
          />
       </span>
       <span>
         <Form.Check
             inline
             label="Sort Price Descending"
             name="group1"
             type="radio"
             onClick={() => dispatch({
              type: SortPriceDescending
             })}
          />
        </span>
        <span>
        <Form.Check
          label="Shipping Details"
          name="group2"
          type="checkbox"
          onClick={() => dispatch({
            type: ShipOvernight
          })}
        />
        </span>
        <span>
          <Form.Check
            inline
            label="Warranty Information"
            name="group2"
            type="checkbox"
            onClick={() => dispatch({
              type: ShipOvernight
            })}
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