import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assests/logo.svg";
import { BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { logout } = useAuth0();
  const { hasUserLoggedIn, authLogin } = useSelector((state) => state.user);

  const handleLogOut = () => {
    if (authLogin) {
      logout();
      //clear states
    } else if (hasUserLoggedIn) {
      
      //clear states
    }
  };
  return (
    <Wrapper>
      <div className="nav_top flex w-960">
        <div className="contact">
          <ul className="flex">
            <li>
              <span>8268116588</span>
            </li>
            <li>
              <span>movilshop@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="links">
          <ul className="flex">
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              {hasUserLoggedIn || authLogin ? (
                <button className="log-out-btn" onClick={handleLogOut}>
                  Log Out
                </button>
              ) : (
                <Link to="/log-in">LogIn</Link>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar">
        <div className="nav_bottom flex w-960">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="nav_links">
            <ul className="flex">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>

          <Link to="/cart" className="cart_container">
            <span className="cart_count">6</span>
            <BiCart className="cart_icon" />
            Cart
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  max-width: 100%;
  margin: 0 auto;
  .nav_top {
    justify-content: space-between;
    padding: 30px 5px;

    ul li span,
    a {
      color: #666;
    }
    .contact {
      width: 30%;
    }
    .contact ul,
    .links ul {
      justify-content: space-between;
    }

    .links {
      width: 15%;
      .log-out-btn {
        background: #d41919;
        color: white;
        padding: 5px 10px;
      }
    }
  }
  .navbar {
    background-color: #c7c7c7;
  }
  .nav_bottom {
    justify-content: space-between;
    padding: 30px 0 70px 0;

    .nav_links {
      width: 40%;
    }
    .nav_links ul {
      justify-content: space-between;
    }
    .cart_icon {
      font-size: 1.3em;
      transform: translateY(4px);
    }
    .cart_container {
      position: relative;
    }
    .cart_count {
      position: absolute;
      top: -10px;
      left: 5px;
      background: #0066ff;
      color: white;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: grid;
      place-content: center;
      font-size: 0.7em;
    }
  }
  .nav_bottom a {
    font-size: 1.2em;
    color: #111;
  }
`;

export default Navbar;
