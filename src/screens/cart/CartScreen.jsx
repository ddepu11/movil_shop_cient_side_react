import React from 'react';
import styled from 'styled-components';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import CircleLoader from '../../components/CircleLoader';
import Hero from '../../components/Hero';
import CartPriceDetais from './CartPriceDetails';
import CartScreenLogic from './logic/CartScreenLogic';
import formatePrice from '../../utils/formatePrice';

const CartScreen = () => {
  const {
    handleLocalCartQuantity,
    handleQuantity,
    hasUserLoggedIn,
    userLoading,
    cartLoading,
    removeCartItem,
    handleUserCartItemRemove,
    userInfo,
    dispatch,
    localStorageCart,
    isUserInfoEmpty,
  } = CartScreenLogic();

  return (
    <>
      <Hero title="cart" />
      <Wrapper className="w-960 flex">
        <div className="cart">
          {!isUserInfoEmpty && hasUserLoggedIn ? (
            <>
              {/* Cart items from DB */}
              <h1>My Cart ({userInfo.cart.length})</h1>

              {/* Show When cart is empty */}
              {userInfo.cart.length === 0 && (
                <div className="empty_cart">
                  <h3>Your cart is empty!</h3>
                  <Button
                    mt="15px"
                    mb="15px"
                    color="var(--light-color)"
                    pt="5px"
                    pb="5px"
                    pl="16px"
                    pr="16px"
                    bgColor="var(--tertiary-color)"
                    fs="1.2em"
                    bSh="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                  >
                    <Link to="/mobiles">Shop Now</Link>
                  </Button>
                </div>
              )}

              {userInfo.cart.map((item) => (
                <div className="middle-section flex" key={item._id}>
                  <div className="mobile flex">
                    <div className="image">
                      <img src={item.picture} alt={item.title} />
                    </div>

                    <div className="info flex">
                      <div>
                        <h2>{item.title}</h2>
                        <Button
                          bgColor={item.color}
                          mt="5px"
                          mb="8px"
                          width="20px"
                          height="20px"
                          borderRadius="50%"
                          bSh=" rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 1.5px"
                        >
                          &nbsp;
                        </Button>
                        <p>
                          Seller: &nbsp;<span>{item.sellerName}</span>
                        </p>
                      </div>

                      <h4 className="price">{formatePrice(item.price)}</h4>
                    </div>
                  </div>

                  <div className="inc_dec_remove_div flex">
                    <div className="inc_dec flex">
                      {!userLoading ? (
                        <Button
                          mr="12px"
                          width="25px"
                          height="25px"
                          color={
                            item.quantity <= 1
                              ? 'var(--tertiary-color)'
                              : 'var(--dark-color)'
                          }
                          borderRadius="50%"
                          bgColor="var(--light-color)"
                          fs="1.5em"
                          isDisabled={item.quantity <= 1 && true}
                          handleClick={() => handleQuantity(item._id, 'DEC')}
                        >
                          <AiFillMinusSquare />
                        </Button>
                      ) : (
                        <CircleLoader wrapperMargin="0 15px 0 0" />
                      )}

                      <span className="quantity"> {item.quantity}</span>

                      {!userLoading ? (
                        <Button
                          ml="16px"
                          width="25px"
                          height="25px"
                          borderRadius="50%"
                          bgColor="var(--light-color)"
                          color={
                            item.quantity >= 10
                              ? 'var(--tertiary-color)'
                              : 'var(--dark-color)'
                          }
                          isDisabled={item.quantity >= 10 && true}
                          fs="1.5em"
                          handleClick={() => handleQuantity(item._id, 'INC')}
                        >
                          <AiFillPlusSquare />
                        </Button>
                      ) : (
                        <CircleLoader wrapperMargin="0 0px 0 18px" />
                      )}
                    </div>
                    {!userLoading ? (
                      <Button
                        ml="30px"
                        width="25px"
                        height="25px"
                        color="var(--danger-color)"
                        borderRadius="50%"
                        bgColor="var(--light-color)"
                        fs="1.5em"
                        handleClick={() =>
                          handleUserCartItemRemove(userInfo._id, item.mobileId)
                        }
                      >
                        <RiDeleteBin6Line />
                      </Button>
                    ) : (
                      <CircleLoader wrapperMargin="0 0px 0 32px" />
                    )}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {/* Cart items from Local Storage */}
              <h1>My Cart ({localStorageCart.length})</h1>

              {/* Show When cart is empty */}
              {localStorageCart.length === 0 && (
                <div className="empty_cart">
                  <h3>Your cart is empty!</h3>
                  <Button
                    mt="15px"
                    mb="15px"
                    color="var(--light-color)"
                    pt="5px"
                    pb="5px"
                    pl="16px"
                    pr="16px"
                    bgColor="var(--tertiary-color)"
                    fs="1.2em"
                    bSh="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                  >
                    <Link to="/mobiles">Shop Now</Link>
                  </Button>
                </div>
              )}

              {localStorageCart.map((item) => (
                <div className="middle-section flex" key={item.mobileId}>
                  <div className="mobile flex">
                    <div className="image">
                      <img src={item.picture} alt={item.title} />
                    </div>

                    <div className="info flex">
                      <div>
                        <h2>{item.title}</h2>
                        <Button
                          bgColor={item.color}
                          mt="5px"
                          mb="8px"
                          width="20px"
                          height="20px"
                          borderRadius="50%"
                          bSh=" rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 1.5px"
                        >
                          &nbsp;
                        </Button>
                        <p>
                          Seller: &nbsp;<span>{item.sellerName}</span>
                        </p>
                      </div>

                      <h4 className="price">{formatePrice(item.price)}</h4>
                    </div>
                  </div>
                  <div className="inc_dec_remove_div flex">
                    <div className="inc_dec flex">
                      {!cartLoading ? (
                        <Button
                          mr="12px"
                          width="25px"
                          height="25px"
                          color={
                            item.quantity <= 1
                              ? 'var(--tertiary-color)'
                              : 'var(--dark-color)'
                          }
                          borderRadius="50%"
                          bgColor="var(--light-color)"
                          fs="1.5em"
                          isDisabled={item.quantity <= 1 && true}
                          handleClick={() =>
                            handleLocalCartQuantity(item.mobileId, 'DEC')
                          }
                        >
                          <AiFillMinusSquare />
                        </Button>
                      ) : (
                        <CircleLoader />
                      )}

                      <span className="quantity"> {item.quantity}</span>

                      {!cartLoading ? (
                        <Button
                          ml="14px"
                          width="25px"
                          height="25px"
                          borderRadius="50%"
                          bgColor="var(--light-color)"
                          color={
                            item.quantity >= 10
                              ? 'var(--tertiary-color)'
                              : 'var(--dark-color)'
                          }
                          isDisabled={item.quantity >= 10 && true}
                          fs="1.5em"
                          handleClick={() =>
                            handleLocalCartQuantity(item.mobileId, 'INC')
                          }
                        >
                          <AiFillPlusSquare />
                        </Button>
                      ) : (
                        <CircleLoader />
                      )}
                    </div>

                    <Button
                      ml="30px"
                      width="25px"
                      height="25px"
                      color="var(--danger-color)"
                      borderRadius="50%"
                      bgColor="var(--light-color)"
                      fs="1.5em"
                      handleClick={() =>
                        dispatch(removeCartItem(item.mobileId))
                      }
                    >
                      <RiDeleteBin6Line />
                    </Button>
                  </div>
                </div>
              ))}
            </>
          )}

          {!isUserInfoEmpty && userInfo.cart.length !== 0 && (
            <div className="proceed">
              <Button
                width="100%"
                pt="10px"
                pb="10px"
                pl="20px"
                pr="20px"
                mb="10px"
                bSh="rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"
                bgColor="var(--secondary-color)"
              >
                <Link to="/checkout">Proceed to checkout</Link>
              </Button>
            </div>
          )}

          {localStorageCart.length !== 0 && !hasUserLoggedIn && (
            <div className="proceed">
              <Button
                width="100%"
                pt="10px"
                pb="10px"
                pl="20px"
                pr="20px"
                mb="10px"
                bSh="rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"
                bgColor="var(--secondary-color)"
              >
                <Link to="/checkout">Proceed to checkout</Link>
              </Button>
            </div>
          )}
        </div>

        <CartPriceDetais width="35%" />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  padding: 5px 0;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0 20px;
  min-height: 60vh;

  .cart {
    padding: 8px 0px 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

    width: 60%;

    h1 {
      padding: 10px 0 10px 40px;
      border-bottom: 1px solid #cfcfcf;
      font-size: 1.4em;
      color: var(--medium-dark-color);
    }

    .empty_cart {
      text-align: center;

      h3 {
        padding: 50px 0 0;
        font-size: 2em;
        color: var(--secondary-color);
      }

      a {
        color: var(--light-color);
      }
    }

    .middle-section {
      flex-direction: column;
      align-items: flex-start;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      padding: 30px 15px 15px;
      margin-bottom: 20px;

      .mobile {
        justify-content: flex-start;
        align-items: flex-start;

        .image {
          width: 150px;
          height: 150px;
          padding: 0 20px 0 0;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        .info {
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          height: 150px;
          padding: 0 10px;

          div {
            h2 {
              color: var(--medium-dark-color);
              font-weight: 400;
              margin-bottom: 5px;
            }

            p {
              color: var(--little-dark-color);
              margin-top: 5px;
            }
          }

          h4 {
            letter-spacing: 1px;
            font-size: 1.2em;
          }
        }
      }

      .inc_dec_remove_div {
        margin-top: 25px;
        justify-content: flex-start;
        padding: 0px 25px 0;

        .inc_dec {
          justify-content: flex-start;
          .quantity {
            font-size: 1.22em;
            font-weight: bold;
          }
        }
      }
    }

    .proceed {
      position: sticky;
      bottom: 2px;
      margin: 0 auto;
      width: 50%;

      a {
        color: var(--light-color);
      }
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 10px 5px;

    .price_details_div,
    .cart {
      width: 100% !important;
      margin-bottom: 20px;
    }

    .cart {
      padding: 5px 0px 5px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

      h1 {
        padding: 10px 0 10px 30px;
        font-size: 1.4em;
      }

      .empty_cart {
        h3 {
          height: 15vh;
          padding: 40px 0 0;
          font-size: 2em;
        }

        a {
          font-size: 1em;
        }
      }

      .middle-section {
        .mobile {
          .info {
            padding: 0 2px;
          }
        }

        .inc_dec_remove_div {
          margin-top: 25px;
          justify-content: flex-start;
          padding: 0px 25px 0;

          .inc_dec {
            justify-content: flex-start;
            .quantity {
              font-size: 1.22em;
              font-weight: bold;
            }
          }
        }
      }

      .proceed {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 460px) {
    .cart {
      h1 {
        padding: 8px 0 8px 20px;
        font-size: 1.1em;
      }

      .middle-section {
        padding: 30px 0px 12px;
        margin-bottom: 20px;

        .mobile {
          .image {
            width: 140px;
            height: 140px;
          }

          .info {
            height: 140px;
            padding: 0 0px;

            div {
              h2 {
                margin-bottom: 2px;
                font-size: 1.3em;
              }

              p {
                margin-top: 2px;
                font-size: 1em;
              }
            }

            h4 {
              font-size: 1.1em;
            }
          }
        }

        .inc_dec_remove_div {
          padding: 0px 18px 0;

          .inc_dec {
            justify-content: flex-start;
            .quantity {
              font-size: 1.15em;
            }
          }
        }
      }
    }
  }
`;

export default CartScreen;
