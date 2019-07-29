import React, { Component } from 'react';
import Orders from './Orders'
// import Waiting from './Waitings'
// import Claimed from './Claimed'
import './App.css';

const orders = [
  {
    customer: {
      first_name: "Maggie",
      last_name: "Price"
    },
    item: {
      name: "Ring"
    },
    service: {
      name: "Engraving"
    },
    status: {
      boolean: "Claim"
    }
  },
  {
    customer: {
      first_name: "Scott",
      last_name: "Yu"
    },
    item: {
      name: "Champagne Glasses"
    },
    service: {
      name: "Embossing"
    },
    status: {
      boolean: "Claim"
    }
  },
  {
    customer: {
      first_name: "Scott",
      last_name: "Yu"
    },
    item: {
      name: "Champagne Glasses"
    },
    service: {
      name: "Embossing"
    },
    status: {
      boolean: "Claim"
    }
  },
  {
    customer: {
      first_name: "Scott",
      last_name: "Yu"
    },
    item: {
      name: "Champagne Glasses"
    },
    service: {
      name: "Embossing"
    },
    status: {
      boolean: "Claim"
    }
  },
  {
    customer: {
      first_name: "Scott",
      last_name: "Yu"
    },
    item: {
      name: "Champagne Glasses"
    },
    service: {
      name: "Embossing"
    },
    status: {
      boolean: "Claim"
    }
  },
  {
    customer: {
      first_name: "Scott",
      last_name: "Yu"
    },
    item: {
      name: "Champagne Glasses"
    },
    service: {
      name: "Embossing"
    },
    status: {
      boolean: "Claim"
    }
  }
]



class Waiting extends Component {

  // constructor() {
  //   super(props)
  //
  //   this.state = {
  //     orders: []
  //   }
  // }


  render() {

    return (

      <div className="App">
        <img src="https://i.imgur.com/jbzs690.png" alt="pixida"/>
        <h1>PIXIDA</h1>

        <div className="App">
          <Waiting orders={orders}/>

        </div>

      </div>
    )
  }
}


export default Waiting;
