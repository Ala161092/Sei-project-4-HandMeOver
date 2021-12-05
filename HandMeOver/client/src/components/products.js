import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductsCard'

const ProductsList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('api/products/')
        console.log(response.data)
        setProducts(response.data)

      } catch (err) {
        console.log(err)
      }
    }
    getProducts()
  }, [])

  return (
    <div>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsList