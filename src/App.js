import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Daly Dinners</h2>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <div className="row">
              <div className="col-xs-4">
              <Menu />
              </div>
              <div className="col-xs-4">
              <Specials />
              </div>
              <div className="col-xs-4">
              <Order />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Menu extends Component{
  render(){
    return(
      <div >
        <h1>Menu</h1>
        <p>Put the menu array here<br/>
        Either static json file or mongoDB access</p>
        <p>Dynamic price based on selected item</p>
      </div>
      );
  }
}

class Specials extends Component{
  render(){
    return(
      <div >
        <h1>Specials</h1>
        <p>Put the Specials array here<br/>
        Either static json file or mongoDB access</p>
        <p>Dynamic price based on selected item</p>
      </div>
      );
  }
}

class Order extends Component{
  render(){
    return(
      <div>
        <h1>Order</h1>
        <p>Itemise order here, 
          if special selected, print special name,
          followed by item breakdown</p>
        <p>Dynamic total order price here</p>
      </div>
      );

  }
}

export default App;
