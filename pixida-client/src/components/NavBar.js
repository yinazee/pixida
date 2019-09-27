import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
      <p><NavLink exact to="/"  >Home</NavLink></p>
      <p><NavLink exact to="/orders/new"  >New Order</NavLink></p>
      <p><NavLink exact to="/queue"  >Queue Orders</NavLink></p>
      <p><NavLink exact to="/finished"  >Finished Orders</NavLink></p>
    </div>
  )
}
export default NavBar
