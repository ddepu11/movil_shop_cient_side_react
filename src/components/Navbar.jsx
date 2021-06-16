import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { GiBowTieRibbon } from 'react-icons/gi';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../assests/logo.svg';
import { logOutUser } from '../actions/userActions';
import Button from './Button';

const Navbar = () => {
  const { logout, isAuthenticated } = useAuth0();

  const { hasUserLoggedIn, userInfo, role } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOut = () => {
    if (isAuthenticated) {
      dispatch(logOutUser());
      logout();
      history.push('/');
      // clear states
    } else if (hasUserLoggedIn) {
      // clear states
      dispatch(logOutUser());
      history.push('/');
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
            {/* Seller Batch Button */}
            {(userInfo.role === 'SELLER' || role === 'SELLER') && (
              <li>
                <Button
                  pt="6px"
                  pb="6px"
                  pl="12px"
                  pr="1px"
                  fs="1.05em"
                  color="white"
                  bSh="rgba(0, 0, 0, 0.3) 0px 10px 20px, rgba(0, 0, 0, 0.22) 0px 10px 12px"
                  bgColor="#333"
                  borderRadius="5px"
                  cursor="auto"
                >
                  <GiBowTieRibbon />
                  <span
                    style={{
                      color: 'white',
                      marginLeft: '5px',
                      padding: '0px  5px',
                    }}
                  >
                    You are a seller
                  </span>
                </Button>
              </li>
            )}

            {/* Dashboard page link */}
            {(userInfo.role === 'SELLER' ||
              userInfo.role === 'ADMIN' ||
              role === 'SELLER' ||
              role === 'ADMIN') && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}

            {/* Account Page Link */}
            {hasUserLoggedIn && (
              <li>
                <Link to="/account">Account</Link>
              </li>
            )}

            {!hasUserLoggedIn && (
              <li>
                <Link to="/sign-up">Sign Up</Link>
              </li>
            )}

            <li>
              {hasUserLoggedIn || Object.keys(userInfo).length !== 0 ? (
                <Button
                  bcgImage="linear-gradient(to right, #bb2032 0%, #df3f51  51%, #D31027  100%)"
                  pt="5px"
                  pb="5px"
                  pl="15px"
                  pr="15px"
                  fs="1em"
                  color="white"
                  handleClick={handleLogOut}
                  borderRadius="5px"
                  bSh="rgba(0, 0, 0, 0.3) 0px 10px 20px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
                >
                  Log Out
                </Button>
              ) : (
                <Link to="/sign-in">Sign In</Link>
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
      li {
        margin-left: 20px;
      }
    }

    .links {
      width: auto;
      button {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  .navbar {
    background-color: #c7c7c7;
  }
  .nav_bottom {
    justify-content: space-between;
    padding: 20px 0 60px 0;

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
