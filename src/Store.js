import { configureStore } from '@reduxjs/toolkit'
import productSlice from './Slice/ProductSlice'
import productFilterSlice from './Slice/ProductFilterSlice'
export const store = configureStore({
  reducer: {
    prod_cart_management: productSlice,
    product_filter: productFilterSlice
  },
})