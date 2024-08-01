import axios from 'axios'
export const fetchProducts = async () => {
    try {
      const url = await axios.get('https://dummyjson.com/products')
      const result = await url.data
      const {products} = result
      console.log(products)
      console.log(products.length)
      console.log(Array.isArray(products))
      return products
    } catch(error) {
        console.log(error)
    }
}