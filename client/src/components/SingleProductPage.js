import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styles from './SingleProductPage.module.css'
import { singleProduct } from '../store/actions/singleProductAction'

const SingleProductPage = (props) => {
const { dispatch, match, product, error, loading } = props;
const [qty, setQty] = useState(1);
const handleAddToCart = () => {
  props.history.push(`/cart/${match.params.id}?qty=${qty}`)
}
  useEffect(() => {
    const { id } = match.params
    dispatch(singleProduct(id))
  }, [])

  return loading ? <p>Loading...</p> : error ? <p>{error}</p> :
<>
  <Link to='/'><h2>Back</h2></Link>
  <div className={styles.containerDisplay}>
    <div >
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
    </div>
    <div className={styles.cartInfo}>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
        <label for="quantity">Quantity:</label>
        <input value={qty} onChange={(e) => { setQty(e.target.value) }} type="number" id="name" name="name" required
          minlength="1" maxlength="3" size="3"/>
        <button onClick={handleAddToCart} key={product.id}  className={styles.cartButton}>Add to cart</button>
      </div>
  </div>
</>
}

const mapStateToProps = state => ({
  product: state.product.product,
  loading: state.product.loading,
  error: state.product.error,
})

export default connect(mapStateToProps)(SingleProductPage) 
