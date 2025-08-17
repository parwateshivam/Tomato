import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar-box'>
      <img className='logo' src={assets.logo} />
      <ul className='navbar-menu'>
        <Link to="/">
          <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</li>
        </Link>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</li>
        <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} />
        <Link to="/cart">
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} />
            <div className="dot"></div>
          </div>
        </Link>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
