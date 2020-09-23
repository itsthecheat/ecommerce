import React from 'react';
import styles from './ProductList.module.css'
import {Link} from 'react-router-dom'


const Product = ({product}) => (
  <div className={styles.product} key={product.id}>
    <h3 className={styles.productTitle}>{product.title}</h3>
    <img src={product.image} alt="product"/>
    <div className={styles.productPrice}>${product.price.toFixed(2)}
    </div>
    <div>
      <Link to= {{pathname:`/product/${product.id}`, query: { id: product.id }}}>
         <button className={styles.cartButton}>Details</button>
      </Link>
      <button key={product.id}  className={styles.cartButton}>Add to cart</button>
    </div>
  </div>
)

export default Product
