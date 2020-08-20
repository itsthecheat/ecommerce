import React, {Component} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css';

class App extends Component {
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
  //
  // componentDidMount() {
  //   this.callBackendAPI()
  //     .then(res=> this.setState({ data: res.express }))
  //     .catch(err=> console.log(err));
  // }
  //
  // callBackendAPI = async () => {
  //   const response = await fetch('express_backend');
  //   const body = await response.json();
  //
  //   if (response.status !== 200) {
  //     throw Error(body.message)
  //   }
  //   return body;
  // };

  render() {
    const { products, isLoading } = this.state;
    const header =  'A Cool Store!';
    if (isLoading) {
      return <p>Loading...</p>
    }
    return (
      <div className="container">
        <div className="grid-header">
          <Header header={header}/>
        </div>
        <div className="grid-sidebar">
          <aside>
            Sidebar
          </aside>
        </div>
        <div className="grid-main">
          <div className="product-display">
           {products.map(product =>
             <div className="product" key={product.id}>
              <h3 className="product-title">{product.title}</h3>
              <br />
              <img src={product.image} alt="product"/>
              <br />
              ${product.price}
              <br />
              <br />
            </div>
           )}
          </div>
        </div>
        <div className="grid-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
