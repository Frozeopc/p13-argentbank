import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/argentBankLogo.png'

function Header() {
  return (
    <nav className="main-nav">
      <Link 
        className="main-nav-logo" 
        to={"/"}>
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
     <Navbar />
    </nav>
  )
}

export default Header