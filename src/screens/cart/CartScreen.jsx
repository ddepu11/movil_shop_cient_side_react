import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';
import { ImBin } from 'react-icons/im';
import Button from '../../components/Button';
import { increaseOrDecreaseCartItemQuantity } from '../../actions/userActions';

const CartScreen = () => {
  const { localStorageCart } = useSelector((state) => state.cart);
  const { hasUserLoggedIn, userInfo } = useSelector((state) => state.user);

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

  return (
    <Wrapper className="w-960">
      {/* Shows when user has logged in */}
      {/* Shows when user has not logged in */}

      {!isUserInfoEmpty && hasUserLoggedIn ? (
        <div className="cart">
          <h1>My Cart ({userInfo.cart.length})</h1>
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
                    <img src={`/sellers/${sellerId}/${picture}`} alt={title} />
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
                    <Button
                      width="25px"
                      height="25px"
                      color="var(--dark-color)"
                      borderRadius="50%"
                      bgColor="var(--light-color)"
                      fs="1.5em"
                      handleClick={() => handleQuantity(_id, 'INC')}
                    >
                      <AiFillPlusSquare />
                    </Button>

                    <span className="quantity"> {quantity}</span>

                    <Button
                      width="25px"
                      height="25px"
                      color="var(--dark-color)"
                      borderRadius="50%"
                      bgColor="var(--light-color)"
                      fs="1.5em"
                      handleClick={() => handleQuantity(_id, 'DEC')}
                    >
                      <AiFillMinusSquare />
                    </Button>
                  </div>

                  <Button
                    width="25px"
                    height="25px"
                    color="var(--danger-color)"
                    borderRadius="50%"
                    bgColor="var(--light-color)"
                    fs="1.5em"
                  >
                    <ImBin />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="cart">
          <h1>My Cart ({localStorageCart.length})</h1>

          {localStorageCart.map((m) => {
            const { picture, title, sellerId, color, sellerName, price } = m;

            return (
              <div
                className="outer-section flex"
                key={Math.floor(Math.random() * Date.now())}
              >
                <div className="mobile flex">
                  <div className="image">
                    <img src={`/sellers/${sellerId}/${picture}`} alt={title} />
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
              </div>
            );
          })}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 20px 0;

  .cart {
    padding: 8px 0px 2px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;

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
        width: 100%;

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
        width: 20%;

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
