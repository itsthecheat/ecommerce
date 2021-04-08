import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styles from './ProductList.module.css'
import { listProducts } from '../store/actions/productActions'
import { addToCart } from '../store/actions/cartActions'

const ProductList = (props) => {
  const { dispatch, loading, products, error, match } = props

  useEffect(() => {
    dispatch(listProducts())
  }, [])

  return loading ? (
    <p>Checking our inventory...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    <div className={styles.productDisplay}>
      {products.map((product) => (
        <div className={styles.product}>
          <h3 className={styles.productTitle}>{product.title}</h3>
          <img src={product.image} alt='product' />
          <div className={styles.productPrice}>
            $
{product.price.toFixed(2)}
          </div>
          <div>
            <Link to={`/product/${product.id}`}>
              <button className={styles.cartButton}>Details</button>
            </Link>
            <button
              onClick={() => dispatch(addToCart(product.id, 1))}
              className={styles.cartButton}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  products: state.products.products,
  error: state.products.error,
})

export default connect(mapStateToProps)(ProductList)
