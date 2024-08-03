import React, {useEffect, memo} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FetchProductData, AddToCart, RemoveFromCart, ClearCart } from '../Slice/ProductSlice'
import { fetchProducts } from '../APIs/fetchProducts';
import SingleProduct from './SingleProduct';
import Filter from './Filter';
import './style.css'
import { fetchItems } from '../APIs/fetchProducts';

const Home = () => {
   console.log(fetchItems())
    const items = useSelector(state => state.prod_cart_management.products)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchProducts())
    },[])
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