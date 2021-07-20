import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';
import formatePrice from '../../utils/formatePrice';
import CartPriceDetailsLogic from './logic/CartPriceDetailsLogic';

const CartPriceDetais = ({ width, height }) => {
  const { totalPrice, totalItems, discount } = CartPriceDetailsLogic();

  return (
    <Wrapper
      style={{ width: `${width}`, height: `${height}` }}
      className="price_details_div"
    >
      <h1>Price Details</h1>
      <div className="price_details">
        <div className="one flex">
          <h4>Price ({totalItems} items)</h4>
          <span>{formatePrice(totalPrice)}</span>
        </div>

        <div className="one flex">
          <h4>Discount</h4>
          <span style={{ color: 'var(--success-color)' }}>
            - {formatePrice(discount)}
          </span>
        </div>

        <div className="one flex">
          <h4>Delivery Charges</h4>
          <span style={{ color: 'var(--success-color)' }}>FREE</span>
        </div>
      </div>
      <div className="total flex">
        <h3>Total Amount</h3>
        <span>{formatePrice(totalPrice - discount)}</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

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

  @media screen and (max-width: 460px) {
    h1 {
      padding: 10px 0 10px 15px;
      font-size: 1.3em;
    }

    .price_details {
      padding: 14px 15px;

      .one {
        padding: 11px 0px;

        h4 {
          font-size: 1.1em;
          color: var(--little-dark-color);
        }

        span {
          font-size: 0.98em;
        }
      }

      border-bottom: 1px solid #cfcfcf;
    }

    .total {
      padding: 18px 15px 15px;

      h3 {
        font-size: 1.2em;
      }

      span {
        font-size: 1.1em;
      }
    }
  }
`;

CartPriceDetais.propTypes = {
  width: PropType.string,
  height: PropType.string,
};

CartPriceDetais.defaultProps = {
  width: 'auto',
  height: 'auto',
};

export default CartPriceDetais;
