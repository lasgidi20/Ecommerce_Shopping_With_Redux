import axios from 'axios'
import { FetchProductData } from '../Slice/ProductSlice'
export const fetchProducts = () => dispatch => {
    console.log('dispatching')
    fetch("https://dummyjson.com/products", {
        headers: {
             "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => dispatch({
        type: FetchProductData,
        payload: data.products
    }))
}
