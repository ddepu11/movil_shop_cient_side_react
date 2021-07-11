import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PropType from 'prop-types';
import formatePrice from '../../utils/formatePrice';

const CartPriceDetais = ({ width }) => {
  const { localStorageCart } = useSelector((state) => state.cart);
  const { userInfo, hasUserLoggedIn } = useSelector((state) => state.user);

  const [priceDetails, setPriceDetails] = useState({
    totalPrice: 0,
    totalItems: 0,
    discount: 0,
  });

  useEffect(() => {
    if (localStorageCart.length) {
      const totals = localStorageCart.reduce(
        (total, currVal) => {
          const { quantity, price } = currVal;

          return {
            totalPrice: total.totalPrice + quantity * price,
            totalItems: quantity + total.totalItems,
            discount: Math.floor(Math.random() * 1000),
          };
        },
        { totalPrice: 0, totalItems: 0, discount: 0 }
      );

      setPriceDetails((prevState) => ({ ...prevState, ...totals }));
    }

    if (Object.keys(userInfo).length !== 0 && hasUserLoggedIn) {
      const totals = userInfo.cart.reduce(
        (total, currVal) => {
          const { quantity, price } = currVal;

          return {
            totalPrice: quantity * price + total.totalPrice,
            totalItems: total.totalItems + quantity,
            discount: Math.floor(Math.random() * 1000),
          };
        },
        {
          totalPrice: 0,
          totalItems: 0,
          discount: 0,
        }
      );

      setPriceDetails((prevState) => ({ ...prevState, ...totals }));
    }

    !localStorageCart.length &&
      Object.keys(userInfo).length === 0 &&
      setPriceDetails({
        totalPrice: 0,
        totalItems: 0,
        discount: 0,
      });
  }, [localStorageCart, userInfo, hasUserLoggedIn]);

  return (
    <Wrapper style={{ width: `${width}` }}>
      <h1>Price Details</h1>
      <div className="price_details">
        <div className="one flex">
          <h4>Price ({priceDetails.totalItems} items)</h4>
          <span>{formatePrice(priceDetails.totalPrice)}</span>
        </div>

        <div className="one flex">
          <h4>Discount</h4>
          <span style={{ color: 'var(--success-color)' }}>
            - {formatePrice(priceDetails.discount)}
          </span>
        </div>

        <div className="one flex">
          <h4>Delivery Charges</h4>
          <span style={{ color: 'var(--success-color)' }}>FREE</span>
        </div>
      </div>
      <div className="total flex">
        <h3>Total Amount</h3>
        <span>
          {formatePrice(priceDetails.totalPrice - priceDetails.discount)}
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  position: sticky;
  top: 5px;

  h1 {
    padding: 12px 0 12px 22px;
    border-bottom: 1px solid #cfcfcf;
    font-size: 1.4em;
    color: var(--tertiary-color);
    letter-spacing: 1px;
  }

  .price_details {
    padding: 14px 22px;
    .one {
      justify-content: space-between;
      align-items: flex-start;
      padding: 12px 0px;

      h4 {
        font-size: 1.15em;
        color: var(--little-dark-color);
      }

      span {
        font-size: 0.98em;
        font-weight: bold;
        color: var(--medium-dark-color);
        letter-spacing: 1px;
      }
    }
    border-bottom: 1px solid #cfcfcf;
  }

  .total {
    justify-content: space-between;
    padding: 18px 20px 17px;

    h3 {
      font-size: 1.25em;
      color: var(--little-dark-color);
    }

    span {
      font-size: 1.15em;
      font-weight: bold;
      color: var(--medium-dark-color);
      letter-spacing: 1px;
    }
  }
`;

CartPriceDetais.propTypes = {
  width: PropType.string,
};

CartPriceDetais.defaultProps = {
  width: 'auto',
};

export default CartPriceDetais;
