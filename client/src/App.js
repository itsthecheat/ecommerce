import React from 'react'
import { Route, Switch } from 'react-router-dom';
import {
  Header,
  Footer,
  ProductList,
  Cart,
  SingleProductPage,
  SignIn,
  CreateAccount,
} from './components'
import './App.css'
import 'fontsource-jost'

const App = () => {
  const header = "A Really Cool Store."
  return (
    <div className="container">
      <div className="grid-header">
        <Header header={header} />
      </div>
      <div className="grid-main">
        <Switch>
          <Route path="/" component={ProductList} exact />
          <Route path="/signin" component={SignIn} />
          <Route path="/create" component={CreateAccount} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/product/:id" component={SingleProductPage} />
        </Switch>
      </div>
      <div className="grid-footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
