import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '../APIs/fetchProducts'
import { fetchItems } from '../APIs/fetchProducts'
import { useSelector, useDispatch } from 'react-redux'

const initialState = {
  cart: [],
}

export const productSlice = createSlice({
  name: 'prod_cart_management',
  initialState,
  reducers: {
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

export const { AddToCart, RemoveFromCart, ClearCart, IncreaseQty} = productSlice.actions

export default productSlice.reducer