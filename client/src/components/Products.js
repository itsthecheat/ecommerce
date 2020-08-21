import React, { Component } from 'react';
import styles from './Products.module.css'

class Products extends Component {
  constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoading: false,
    products: []
  };
}
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
           .then((data) => {
               this.setState({products: data, isLoading: false});
           });
  }

  render() {
    const { products, isLoading } = this.state;
    if (isLoading) {
      return <p>Checking our inventory...</p>
    }
    return (
      <div className={styles.productDisplay}>
       {products.map(product =>
         <div className={styles.product} key={product.id}>
           <h3 className={styles.productTitle}>{product.title}</h3>
           <img src={product.image} alt="product"/>
           <div className={styles.productPrice}>${product.price}</div>
           <button>Add to cart</button>
         </div>
       )}
      </div>
    );
  }


}

export default Products;
