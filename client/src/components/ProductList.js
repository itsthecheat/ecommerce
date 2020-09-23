import React, { useEffect } from 'react';
import styles from './ProductList.module.css'
import Product from './Product'
import { connect } from 'react-redux'
import { listProducts } from '../store/actions/productActions'

const ProductList = ({dispatch, loading, products, error}) => {

useEffect(() => {
  dispatch(listProducts());
}, [dispatch])

return loading ? <p>Checking our inventory...</p> : error ? <p>{error}</p> :
      <div className={styles.productDisplay}>
       {products.map(product =>
         <Product key={product.id} product={product}/>
       )}
      </div>
}

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  products: state.products.products,
  error: state.products.error,
})

export default connect(mapStateToProps)(ProductList);
