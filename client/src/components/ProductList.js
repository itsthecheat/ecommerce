import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductList.module.css'
import { connect } from 'react-redux'
import { listProducts } from '../store/actions/productActions'


const ProductList = (props) => {
const {dispatch, loading, products, error} = props
useEffect(() => {
  dispatch(listProducts());
}, [])

return loading ? <p>Checking our inventory...</p> : error ? <p>{error}</p> :
      <div className={styles.productDisplay}>
       {products.map(product =>
         <div className={styles.product}>
           <h3 className={styles.productTitle}>{product.title}</h3>
           <img src={product.image} alt="product"/>
           <div className={styles.productPrice}>${product.price.toFixed(2)}
           </div>
           <div>
             <Link to= {`/product/${product.id}`}>
                <button className={styles.cartButton}>Details</button>
             </Link>
            {/* <button className={styles.cartButton}>Add to cart</button> 
            */}
           </div>
         </div>
       )}
      </div>
}

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  products: state.products.products,
  error: state.products.error,
})

export default connect(mapStateToProps)(ProductList);
