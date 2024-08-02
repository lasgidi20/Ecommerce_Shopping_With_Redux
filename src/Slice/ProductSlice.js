import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '../APIs/fetchProducts'

const initialState = {
  products: [],
  cart: []
}

export const productSlice = createSlice({
  name: 'prod_cart_management',
  initialState,
  reducers: {
    FetchProductData: (state, action) => {
        console.log('fecthing')
       return {...state, products: action.payload}
    },

    AddToCart: (state, action) => {
      return {...state, cart: [...state.cart, {...action.payload, qty: 1}]}
    },
    RemoveFromCart: (state, action) => {
      return {...state, cart: state.cart.filter((item) => item.id !== action.payload.id)}
    },

    IncreaseQty: (state, action) => {
        state.cart = state.cart.filter((item) => item.id === action.payload.id ? item.qty = action.payload.qty : item.qty)
    },
    
    ClearCart: (state) => {
      state.cart = []
    },
  },
})

export const { AddToCart, RemoveFromCart, ClearCart, FetchProductData, IncreaseQty } = productSlice.actions

export default productSlice.reducer