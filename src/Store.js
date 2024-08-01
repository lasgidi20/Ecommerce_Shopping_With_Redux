import { configureStore } from '@reduxjs/toolkit'
import productSlice from './Slice/ProductSlice'
export const store = configureStore({
  reducer: {
    prod_cart_management: productSlice
  },
})