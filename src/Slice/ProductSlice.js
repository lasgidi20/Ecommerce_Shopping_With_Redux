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
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return {...state, cart: [...state.cart, {...action.payload, qty: 1}]}
    },
    RemoveFromCart: (state, action) => {
      return {...state, cart: state.cart.filter((item) => item.id !== action.payload.id)}
    },
    
    ClearCart: (state) => {
      return {...state, cart: [] }
    },
  },
})

// Action creators are generated for each case reducer function
export const { AddToCart, RemoveFromCart, ClearCart, FetchProductData } = productSlice.actions

export default productSlice.reducer