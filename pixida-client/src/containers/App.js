import React, { Component } from 'react';
import OrderFormCard from '../components/OrderFormCard'
import Queue from './Queue'
import Finished from './Finished'
import Home from './Home'
import NavBar from '../components/NavBar'
import { Route, Switch } from 'react-router-dom'

import './App.css';



class App extends Component {

  render() {

    return (

      <div className="App">
        <img src="https://i.imgur.com/jbzs690.png" alt="pixida"/>
        <h1>PIXIDA</h1>


        <NavBar/>
        <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/orders/new' component={OrderFormCard}/>
          <Route exact path='/queue' component={Queue}/>
          <Route exact path='/finished' component={Finished}/>

        </Switch>
        </div>


      </div>
    )
  }
}


export default App
