import React, { Component } from 'react';
// import Orders from './Orders'
import Waiting from './Waitings'
import Claimed from './Claimed'
import './App.css';


class App extends Component {



  render() {

    return (

      <div className="App">
        <img src="https://i.imgur.com/jbzs690.png" alt="pixida"/>
        <h1>PIXIDA</h1>

        <div className="App">
          <Waiting orders={orders}/>
          <Claimed orders={orders}/>

        </div>

      </div>
    )
  }
}


export default App;
