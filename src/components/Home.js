import React, {useEffect, memo} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FetchProductData, AddToCart, RemoveFromCart, ClearCart } from '../Slice/ProductSlice'
import { fetchProducts } from '../APIs/fetchProducts';
import { useStore } from "react-redux";
const Home = () => {
    const items = useSelector(state => state.prod_cart_management.products)
    console.log(items)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    
  return (
    <>

    </>
  )
}

export default memo(Home)