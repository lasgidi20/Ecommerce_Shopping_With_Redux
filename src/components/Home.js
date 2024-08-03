import React, {useEffect, memo} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FetchProductData, Ship1_2days, ShipOvernight, Ship2week, MonthsWarranty, YearWarranty, ClearFilter } from '../Slice/ProductFilterSlice';
import { fetchProducts } from '../APIs/fetchProducts';
import SingleProduct from './SingleProduct';
import Filter from './Filter';
import './style.css'

const Home = () => {
    let items = useSelector(state => state.product_filter.products)
    let shipping_information =  useSelector(state => state.product_filter.shipping)
    let warranty_information =  useSelector(state => state.product_filter.warranty)
    let search_products =  useSelector(state => state.product_filter.searchQuery)
    let set_ratings =  useSelector(state => state.product_filter.byRatings)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchProducts())
    },[])

    if (shipping_information) {
      items = shipping_information
    } else if(warranty_information){
      items = warranty_information
    } else if(search_products) {
      items = items.filter((item)=> item.title.toLowerCase().includes(search_products))
    } else if (set_ratings) {
      items = items.filter((item) => item.rating > set_ratings)
    }
  return (
    <div className='home'>
        <Filter />
       <div className='prod-container'>
         {items && items.length > 0 ? (items.map((item) => {
          return  <SingleProduct item={item} />
         })) : ("no products")}
       </div>
    </div>
  )
}

export default Home