import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux'
import Rating from './Rating';
import {SortPriceAscending, SortPriceDescending, ShipOvernight, Ship2week, Ship1_2days, MonthsWarranty, YearWarranty, ClearFilter, Ship1_Month, ByRatings} from '../Slice/ProductFilterSlice'
const Filter = () => {
  const set_ratings = useSelector(state => state.product_filter.byRatings)
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
          label="Shipped OverNight"
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
            label="Shipped In 2 Weeks"
            name="group2"
            type="checkbox"
            onChange={() => dispatch({
              type: Ship2week
            })}
          />
        </span>

        <span>
          <Form.Check
            inline
            label="Shipped In 1-2 Days"
            name="group2"
            type="checkbox"
            onChange={() => dispatch({
              type: Ship1_2days
            })}
          />
        </span>

        <span>
          <Form.Check
            inline
            label="Ships in 1 month"
            name="group2"
            type="checkbox"
            onChange={() => dispatch({
              type: Ship1_Month
            })}
          />
        </span>

        <span>
          <Form.Check
            inline
            label="Products with A Month Warranty"
            name="group2"
            type="checkbox"
            onChange={() => dispatch({
              type:  MonthsWarranty
            })}
          />
        </span>

        <span>
          <Form.Check
            inline
            label="Products with A Year Warranty"
            name="group2"
            type="checkbox"
            onChange={() => dispatch({
              type: YearWarranty
            })}
          />
        </span>
        <span>
            <label style={{paddingRight: "11px"}}> Sort By Rating: <Rating rate={set_ratings} style={{cursor: "pointer"}} onClick={(i) => dispatch({
              type: ByRatings,
              payload: i + 1
            })}/></label>
        </span>
        <Button variant="light" onClick={() => dispatch({
           type: ClearFilter
        })}>Clear Filters</Button>
    </div>
  )
}

export default Filter