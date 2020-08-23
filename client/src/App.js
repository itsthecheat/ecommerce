import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import createAccount from './components/createAccount'
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
      {/*<div className="grid-sidebar">
          <aside>
            Sidebar
          </aside>
        </div> */}
        <div className="grid-main">
          {/*begin product cards */}
          <Switch>
            <Route path='/' component={Products} exact />
            <Route path='/create' component={createAccount} />
          </Switch>
          {/*end product cards */}
        </div>
        <div className="grid-footer">
          <Footer />
        </div>

      </div>


    )
  }
}

export default App;
