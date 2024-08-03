import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '../APIs/fetchProducts'

const initialState = {
  products: [],
  sort:'',
  shipping: '',
  warranty: '',
  searchQuery: '',
  byRatings: 0
}

export const productFilterSlice = createSlice({
  name: 'product_filter',
  initialState,
  reducers: {
    FetchProductData: (state, action) => {
      return {...state, products: action.payload}
    },

    SortPriceAscending: (state) => {
      state.sort = state.products.sort((a,b) => a.price - b.price )
    },

    SortPriceDescending: (state) => {
      state.sort =  state.products.sort((a,b) =>  b.price - a.price )
    },

    ShipOvernight: (state) => {
       state.shipping = state.products.filter((item) => item.shippingInformation === 'Ships overnight' )
    },

    Ship2week: (state) => {
      state.shipping = state.products.filter((item) => item.shippingInformation === 'Ships in 2 weeks' )
    },

   Ship1_2days: (state) => {
      state.shipping = state.products.filter((item) => item.shippingInformation === 'Ships in 1-2 business days' )
   },

   Ship1_Month: (state) => {
      state.shipping = state.products.filter((item) => item.shippingInformation === 'Ships in 1 month' )
   },

    MonthsWarranty: (state) => {
       state.warranty = state.products.filter((item) => item.warrantyInformation === '1 month warranty' )
    },

    YearWarranty: (state) => {
       state.warranty = state.products.filter((item) => item.warrantyInformation === '1 year warranty' )
    },

    SearchQuery: (state, action) => {
      return {...state, searchQuery: action.payload}
    },

    ByRatings: (state, action) => {
      return {...state, byRatings: action.payload}
    },

    ClearFilter: (state) => {
       return {...state, sort: '', shipping: '', warranty: '', byRatings: 0}
    },
  },
})

export const { FetchProductData, SortPriceAscending, SortPriceDescending, ShipOvernight, Ship1_2days, Ship2week, Ship1_Month, MonthsWarranty, YearWarranty, ClearFilter, SearchQuery, ByRatings } = productFilterSlice.actions

export default productFilterSlice.reducer