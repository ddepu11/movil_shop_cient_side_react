import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import {
  deleteCartItem,
  increaseOrDecreaseCartItemQuantity,
} from '../../actions/userActions';
import CircleLoader from '../../components/CircleLoader';
import { incDecQuantity, removeCartItem } from '../../actions/cartActions';
import Hero from '../../components/Hero';
import CartPriceDetais from './CartPriceDetails';

const CartScreen = () => {
  const { localStorageCart, cartLoading } = useSelector((state) => state.cart);

  const { hasUserLoggedIn, userInfo, userLoading } = useSelector(
    (state) => state.user
  );

  const isUserInfoEmpty = Object.keys(userInfo).length === 0;

  const formatePrice = (price) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);

  const dispatch = useDispatch();

  const handleQuantity = (cartItemId, action) => {
    dispatch(
      increaseOrDecreaseCartItemQuantity(userInfo._id, cartItemId, action)
    );
  };

  const handleLocalCartQuantity = (cartItemId, action) => {
    dispatch(incDecQuantity(cartItemId, action));
  };

  return (
    <>
      <Hero title="cart" />
      <Wrapper className="w-960 flex">
        {/* Shows when user has logged in */}
        <div className="cart">
          {!isUserInfoEmpty && hasUserLoggedIn ? (
            <>
              <h1>My Cart ({userInfo.cart.length})</h1>

              {userInfo.cart.length === 0 && (
                <div className="empty_cart">
                  <h3>Your cart is empty!</h3>
                  <Button
                    mt="15px"
                    color="var(--light-color)"
                    pt="5px"
                    pb="5px"
                    pl="16px"
                    pr="16px"
                    bgColor="var(--tertiary-color)"
                    fs="1.2em"
                    bSh="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                  >
                    <Link to="/mobiles">Fill It</Link>
                  </Button>
                </div>
              )}

              {userInfo.cart.map((m) => {
                const {
                  _id,
                  picture,
                  title,
                  sellerId,
                  color,
                  sellerName,
                  price,
                  quantity,
                } = m;

                return (
                  <div
                    className="outer-section flex"
                    key={Math.floor(Math.random() * Date.now())}
                  >
                    <div className="mobile flex">
                      <div className="image">
                        <img
                          src={`/sellers/${sellerId}/${picture}`}
                          alt={title}
                        />
                      </div>

                      <div className="info flex">
                        <div>
                          <h2>{title}</h2>
                          <Button
                            bgColor={color}
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
                            Seller: &nbsp;<span>{sellerName}</span>
                          </p>
                        </div>

                        <h4 className="price">{formatePrice(price)}</h4>
                      </div>
                    </div>

                    <div className="inc_dec_remove_div flex">
                      <div className="inc_dec flex">
                        {!userLoading ? (
                          <Button
                            width="25px"
                            height="25px"
                            color={
                              quantity <= 1
                                ? 'var(--tertiary-color)'
                                : 'var(--dark-color)'
                            }
                            borderRadius="50%"
                            bgColor="var(--light-color)"
                            fs="1.5em"
                            isDisabled={quantity <= 1 && true}
                            handleClick={() => handleQuantity(_id, 'DEC')}
                          >
                            <AiFillMinusSquare />
                          </Button>
                        ) : (
                          <CircleLoader />
                        )}

                        <span className="quantity"> {quantity}</span>

                        {!userLoading ? (
                          <Button
                            width="25px"
                            height="25px"
                            borderRadius="50%"
                            bgColor="var(--light-color)"
                            color={
                              quantity >= 10
                                ? 'var(--tertiary-color)'
                                : 'var(--dark-color)'
                            }
                            isDisabled={quantity >= 10 && true}
                            fs="1.5em"
                            handleClick={() => handleQuantity(_id, 'INC')}
                          >
                            <AiFillPlusSquare />
                          </Button>
                        ) : (
                          <CircleLoader />
                        )}
                      </div>
                      {!userLoading ? (
                        <Button
                          width="25px"
                          height="25px"
                          color="var(--danger-color)"
                          borderRadius="50%"
                          bgColor="var(--light-color)"
                          fs="1.5em"
                          handleClick={() =>
                            dispatch(deleteCartItem(userInfo._id, _id))
                          }
                        >
                          <RiDeleteBin6Line />
                        </Button>
                      ) : (
                        <CircleLoader />
                      )}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {/* Shows when user has not logged in */}
              <h1>My Cart ({localStorageCart.length})</h1>

              {localStorageCart.length === 0 && (
                <div className="empty_cart">
                  <h3>Your cart is empty!</h3>
                  <Button
                    mt="15px"
                    color="var(--light-color)"
                    pt="5px"
                    pb="5px"
                    pl="16px"
                    pr="16px"
                    bgColor="var(--tertiary-color)"
                    fs="1.2em"
                    bSh="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                  >
                    <Link to="/mobiles">Fill It</Link>
                  </Button>
                </div>
              )}

              {localStorageCart.map((m) => {
                const {
                  mobileId,
                  picture,
                  title,
                  sellerId,
                  color,
                  sellerName,
                  price,
                  quantity,
                } = m;

                return (
                  <div
                    className="outer-section flex"
                    key={Math.floor(Math.random() * Date.now())}
                  >
                    <div className="mobile flex">
                      <div className="image">
                        <img
                          src={`/sellers/${sellerId}/${picture}`}
                          alt={title}
                        />
                      </div>

                      <div className="info flex">
                        <div>
                          <h2>{title}</h2>
                          <Button
                            bgColor={color}
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
                            Seller: &nbsp;<span>{sellerName}</span>
                          </p>
                        </div>

                        <h4 className="price">{formatePrice(price)}</h4>
                      </div>
                    </div>
                    <div className="inc_dec_remove_div flex">
                      <div className="inc_dec flex">
                        {!cartLoading ? (
                          <Button
                            width="25px"
                            height="25px"
                            color={
                              quantity <= 1
                                ? 'var(--tertiary-color)'
                                : 'var(--dark-color)'
                            }
                            borderRadius="50%"
                            bgColor="var(--light-color)"
                            fs="1.5em"
                            isDisabled={quantity <= 1 && true}
                            handleClick={() =>
                              handleLocalCartQuantity(mobileId, 'DEC')
                            }
                          >
                            <AiFillMinusSquare />
                          </Button>
                        ) : (
                          <CircleLoader />
                        )}

                        <span className="quantity"> {quantity}</span>

                        {!cartLoading ? (
                          <Button
                            width="25px"
                            height="25px"
                            borderRadius="50%"
                            bgColor="var(--light-color)"
                            color={
                              quantity >= 10
                                ? 'var(--tertiary-color)'
                                : 'var(--dark-color)'
                            }
                            isDisabled={quantity >= 10 && true}
                            fs="1.5em"
                            handleClick={() =>
                              handleLocalCartQuantity(mobileId, 'INC')
                            }
                          >
                            <AiFillPlusSquare />
                          </Button>
                        ) : (
                          <CircleLoader />
                        )}
                      </div>

                      <Button
                        width="25px"
                        height="25px"
                        color="var(--danger-color)"
                        borderRadius="50%"
                        bgColor="var(--light-color)"
                        fs="1.5em"
                        handleClick={() => dispatch(removeCartItem(mobileId))}
                      >
                        <RiDeleteBin6Line />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <CartPriceDetais />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  padding: 5px 0;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0 15px;
  min-height: 60vh;

  .cart {
    padding: 8px 0px 30px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    width: 65%;
    /* border: 1px soli d red; */

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

    h1 {
      padding: 10px 0 10px 40px;
      border-bottom: 1px solid #cfcfcf;
      font-size: 1.4em;
      color: var(--medium-dark-color);
    }

    .outer-section {
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
        justify-content: space-between;
        padding: 0px 20px 0;
        width: 30%;

        .inc_dec {
          justify-content: space-between;
          width: 60%;

          .quantity {
            font-size: 1.22em;
            font-weight: bold;
          }
        }
      }
    }
  }
`;

export default CartScreen;
