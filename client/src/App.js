import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res=> this.setState({ data: res.express }))
      .catch(err=> console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div className="container">
        <div className="grid-header">
          <header>
            <h1>This is the header</h1>
          </header>
        </div>
        <div className="grid-sidebar">
          <aside>
            Sidebar
          </aside>
        </div>
        <div className="grid-main">
           <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </p>
           <p>
             Lacus sed turpis tincidunt id aliquet risus feugiat in. Ut tortor pretium viverra suspendisse potenti nullam. Scelerisque viverra mauris in aliquam. Aliquet enim tortor at auctor. Lorem donec massa sapien faucibus et molestie ac. Convallis convallis tellus id interdum velit laoreet id donec. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Bibendum est ultricies integer quis auctor elit. Et pharetra pharetra massa massa ultricies mi quis. Diam donec adipiscing tristique risus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Tellus orci ac auctor augue mauris augue neque. Euismod in pellentesque massa placerat duis ultricies. Ultricies integer quis auctor elit sed vulputate mi sit amet. Eget duis at tellus at urna condimentum mattis. Purus in mollis nunc sed id semper. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Velit ut tortor pretium viverra suspendisse potenti. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Tempor orci eu lobortis elementum nibh tellus molestie nunc non.
           </p>
        </div>
        <div className="grid-footer">
          <footer>Footer</footer>
        </div>
      </div>
    );
  }
}

export default App;
