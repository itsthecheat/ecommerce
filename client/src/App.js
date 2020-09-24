import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom';
import { Header, Footer, ProductList, createAccount, Cart, SingleProductPage } from './components'
import './App.css'
import 'fontsource-jost'

class App extends Component {
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
    const header =  'A Really Cool Store.';
    return (
      <div className="container">
        <div className="grid-header">
          <Header header={header}/>
        </div>
        <div className="grid-main">
          <Switch>
            <Route path='/' component={ProductList} exact />
            <Route path='/create' component={createAccount} />
            <Route path='/cart/:id?' component={Cart} />
            <Route path='/product/:id' component={SingleProductPage}/>
          </Switch>
        </div>
        <div className="grid-footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
