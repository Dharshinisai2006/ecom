import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    setUser(null); // Clear user state
    alert("You have logged out.");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>GreenCart</p>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {isMenuOpen && (
        <ul className="nav-menu-mobile">
          <li onClick={() => setMenu("home")}><Link to='/'>Home</Link></li>
          <li onClick={() => setMenu("seeds")}><Link to='/seeds'>Seeds</Link></li>
          <li onClick={() => setMenu("fertilizers")}><Link to='/fertilizers'>Fertilizers</Link></li>
          <li onClick={() => setMenu("irrigation")}><Link to='/irrigation'>Irrigation</Link></li>
        </ul>
      )}

      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}><Link to='/'>Home</Link>{menu === "home" && <hr />}</li>
        <li onClick={() => setMenu("seeds")}><Link to='/seeds'>Seeds</Link>{menu === "seeds" && <hr />}</li>
        <li onClick={() => setMenu("fertilizers")}><Link to='/fertilizers'>Fertilizers</Link>{menu === "fertilizers" && <hr />}</li>
        <li onClick={() => setMenu("irrigation")}><Link to='/irrigation'>Irrigation</Link>{menu === "irrigation" && <hr />}</li>
      </ul>

      <div className="nav-login-cart">
        {user ? (
          <>
            <p>Welcome, {user.name}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to='/login'><button>Login</button></Link>
        )}
        <Link to='/cart'>
          <img src={cart_icon} alt="Cart" />
          
        </Link>
      </div>
     
    </div>
  );
};

export default Navbar;