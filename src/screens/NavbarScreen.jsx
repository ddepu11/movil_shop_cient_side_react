import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { GiBowTieRibbon, GiHamburgerMenu } from 'react-icons/gi';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../assests/logo.svg';
import { logOutUser } from '../actions/userActions';
import Button from '../components/Button';

const NavbarScreen = () => {
  const { logout, isAuthenticated } = useAuth0();

  const { localStorageCart } = useSelector((state) => state.cart);
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

  const isUserInfoEmpty = Object.keys(userInfo).length === 0;

  const topNavOuterDiv = useRef(null);
  const topNavInnerDiv = useRef(null);

  // Bottom Nav Section
  const bottomNavOuterDiv = useRef(null);
  const bottomNavInnerDiv = useRef(null);

  const navBarToggle = () => {
    // Top Nav Section
    const topNavOuterHeight =
      topNavOuterDiv.current.getBoundingClientRect().height;
    const topNavInnerHeight =
      topNavInnerDiv.current.getBoundingClientRect().height;

    if (topNavOuterHeight === 0) {
      topNavOuterDiv.current.style.height = `${topNavInnerHeight}px`;
    } else {
      topNavOuterDiv.current.style.height = `0px`;
    }

    // Bottom Nav Section
    const outerDivHeight =
      bottomNavOuterDiv.current.getBoundingClientRect().height;
    const innerDivHeight =
      bottomNavInnerDiv.current.getBoundingClientRect().height;

    if (outerDivHeight === 0) {
      bottomNavOuterDiv.current.style.height = `${innerDivHeight}px`;
    } else {
      bottomNavOuterDiv.current.style.height = `0px`;
    }
  };

  const closeNavbar = () => {
    topNavOuterDiv.current.style.height = `0px`;
    bottomNavOuterDiv.current.style.height = `0px`;
  };

  return (
    <Wrapper>
      <div className="nav_top_outer" ref={topNavOuterDiv}>
        <div className="nav_top_inner flex w-960" ref={topNavInnerDiv}>
          <ul className="contact_ul flex">
            <li>
              <span>8268116588</span>
            </li>
            <li>
              <span>movilshop@gmail.com</span>
            </li>
          </ul>

          <ul className="top_right_links flex">
            {/* Seller Batch Button */}
            {(userInfo.role === 'SELLER' || role === 'SELLER') && (
              <li>
                <Button
                  pt="3px"
                  pb="3px"
                  pl="10px"
                  pr="10px"
                  fs="0.9em"
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
                <Link to="/dashboard/all-mobiles" onClick={closeNavbar}>
                  Dashboard
                </Link>
              </li>
            )}

            {/* Account Page Link */}
            {hasUserLoggedIn && (
              <li>
                <Link to="/account" onClick={closeNavbar}>
                  Account
                </Link>
              </li>
            )}

            {!hasUserLoggedIn && (
              <li>
                <Link to="/sign-up" onClick={closeNavbar}>
                  Sign Up
                </Link>
              </li>
            )}

            <li>
              {hasUserLoggedIn || !isUserInfoEmpty ? (
                <Button
                  bgColor="var(--danger-color)"
                  pt="2px"
                  pb="2px"
                  pl="10px"
                  pr="10px"
                  fs="0.9em"
                  color="white"
                  handleClick={() => {
                    handleLogOut();
                    closeNavbar();
                  }}
                  borderRadius="5px"
                  bSh="rgba(0, 0, 0, 0.3) 0px 10px 20px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
                >
                  Log Out
                </Button>
              ) : (
                <Link to="/sign-in" onClick={closeNavbar}>
                  Sign In
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="nav_bottom">
        <div className="nav_bottom_inner_div w-960 flex">
          <Link to="/" className="logo" onClick={closeNavbar}>
            <img src={logo} alt="" />
          </Link>

          <div ref={bottomNavOuterDiv} className="links_outer_div">
            <div className="links_inner_div flex" ref={bottomNavInnerDiv}>
              <ul className="flex">
                <li>
                  <Link to="/" onClick={closeNavbar}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/mobiles" onClick={closeNavbar}>
                    Mobiles
                  </Link>
                </li>

                {hasUserLoggedIn && !isUserInfoEmpty && (
                  <li>
                    <Link to="/checkout" onClick={closeNavbar}>
                      Checkout
                    </Link>
                  </li>
                )}

                {hasUserLoggedIn && !isUserInfoEmpty && (
                  <li>
                    <Link to="/orders" onClick={closeNavbar}>
                      Orders
                    </Link>
                  </li>
                )}

                <li>
                  <Link to="/about" onClick={closeNavbar}>
                    About
                  </Link>
                </li>
              </ul>
              <Link to="/cart" className="cart_container" onClick={closeNavbar}>
                <span className="cart_count">
                  {hasUserLoggedIn && !isUserInfoEmpty
                    ? userInfo.cart.length
                    : localStorageCart.length}
                </span>
                <BiCart className="cart_icon" />
                Cart
              </Link>
            </div>
          </div>

          <GiHamburgerMenu className="menu" onClick={navBarToggle} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  max-width: 100%;
  margin: 0 auto;

  .nav_top_outer {
    .nav_top_inner {
      justify-content: space-between;
      padding: 20px 10px;

      ul li span,
      a {
        color: var(--dark-color);
      }

      .contact_ul {
        justify-content: space-between;
        li {
          margin-right: 15px;
        }
      }

      .top_right_links {
        li {
          margin-left: 20px;
        }

        button {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }

  .nav_bottom {
    background-color: var(--primary-color);
    padding: 0 12px;

    .nav_bottom_inner_div {
      position: relative;
      padding: 20px 0 30px 0;
      justify-content: space-between;

      .links_outer_div {
        width: 70%;
        height: auto;

        .links_inner_div {
          justify-content: space-between;

          a {
            font-size: 1.3em;
            color: var(--light-color);
          }

          ul {
            justify-content: space-between;
            width: 70%;
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
            background: var(--tertiary-color);
            color: var(--light-color);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: grid;
            place-content: center;
            font-size: 0.7em;
          }
        }
      }

      .menu {
        display: none;
      }
    }
  }

  @media screen and (max-width: 850px) {
    .nav_top_outer {
      height: 0;
      overflow: hidden;
      transition: all 0.5s ease-in-out;

      .nav_top_inner {
        padding: 10px 5px;
        align-items: flex-start;

        .contact_ul,
        .top_right_links {
          flex-direction: column;
          align-items: flex-start;

          li {
            padding: 2px 0 10px 0px;
          }
        }
      }
    }

    .nav_bottom {
      .nav_bottom_inner_div {
        padding: 12px 0 22px 0;

        .logo {
          width: 100px;
          height: auto;
          img {
            width: 100%;
          }
        }

        .links_outer_div {
          .links_inner_div {
            a {
              font-size: 1.1em;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 830px) {
    .nav_top_outer {
      .nav_top_inner {
        ul li span,
        a {
          font-size: 0.9em;
        }

        .top_right_links {
          li {
            button {
              padding: 4px 8px !important;
              font-size: 0.8em !important;
            }
          }
        }
      }
    }

    .nav_bottom {
      .nav_bottom_inner_div {
        flex-direction: column;
        align-items: flex-start;

        .links_outer_div {
          overflow: hidden;
          height: 0;
          transition: all 0.5s ease-in-out;

          .links_inner_div {
            flex-direction: column;
            align-items: flex-start;
            padding: 0 12px;

            ul {
              align-items: flex-start;
              flex-direction: column;
              margin: 10px 0px;

              li {
                margin-bottom: 18px;
              }
            }
          }
        }

        .menu {
          display: block;
          top: 14px;
          right: 8px;
          font-size: 2.1em;
          position: absolute;
          color: var(--light-color);
          cursor: pointer;
          animation: shrink-grow 4s linear infinite;
        }

        @keyframes shrink-grow {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      }
    }
  }

  @media screen and (min-width: 830px) {
    .nav_top_outer {
      height: auto !important;
    }

    .links_outer_div {
      height: auto !important;
    }
  }
`;

export default NavbarScreen;
