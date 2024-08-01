import React, {useEffect, memo} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FetchProductData, AddToCart, RemoveFromCart, ClearCart } from '../Slice/ProductSlice'
import { fetchProducts } from '../APIs/fetchProducts';
import SingleProduct from './SingleProduct';
import Filter from './Filter';
import './style.css'

const Home = () => {
    const items = useSelector(state => state.prod_cart_management.products.products)
    console.log(items)
    console.log(Array.isArray(items))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
  return (
    <div className='home'>
        <Filter />
       <div className='prod-container'>
         {items.length > 0 ? (items.map((item) => {
          return  <SingleProduct item={item} />
         })) : ("no products")}
       </div>
    </div>
  )
}

export default Home