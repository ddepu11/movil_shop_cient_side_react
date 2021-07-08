import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import { sendNotification } from '../../../actions/notificationActions';
import { addMobileToLocalStorageCart } from '../../../actions/cartActions';
import { addMobileToCart } from '../../../actions/userActions';
import Button from '../../../components/Button';

const MobileCartBuyButtons = ({ color }) => {
  const {
    mobile: { pictures, title, sellerInfo, _id: mobileId, price },
  } = useSelector((state) => state.mobile);

  const history = useHistory();

  const dispatch = useDispatch();

  const {
    id: userId,
    hasUserLoggedIn,
    userInfo: { cart },
  } = useSelector((state) => state.user);

  const handleAddToCart = () => {
    if (!color) {
      dispatch(sendNotification('Please select color!!!', true));
    } else {
      if (!hasUserLoggedIn) {
        dispatch(
          addMobileToLocalStorageCart(
            mobileId,
            pictures[0],
            title,
            color,
            sellerInfo.name,
            sellerInfo.id,
            price
          )
        );
      } else {
        // If user logged in then save car to db

        // Check have you already added mobile to cart
        let mobileExistsInCart = false;

        cart.forEach((m) => {
          if (m.mobileId === mobileId) mobileExistsInCart = true;
        });

        !mobileExistsInCart
          ? dispatch(
              addMobileToCart(
                userId,
                mobileId,
                pictures[0],
                title,
                color,
                sellerInfo.name,
                sellerInfo.id,
                price
              )
            )
          : dispatch(
              sendNotification('You have already added to cart!', false)
            );
      }

      history.push('/cart');
    }
  };

  return (
    <Wrapper className="flex">
      <Button
        bgColor="#e49c00"
        color="#ffffff"
        pt="15px"
        pb="15px"
        pr="30px"
        pl="30px"
        mr="15px"
        fs="1em"
        handleClick={handleAddToCart}
      >
        <div className="flex">
          <FiShoppingCart fontSize="1.15em" />
          <span>Add to Cart</span>
        </div>
      </Button>

      <Button
        bgColor="#f14c00"
        color="#fff7f7"
        pt="15px"
        pb="15px"
        pr="30px"
        pl="30px"
        fs="1em"
      >
        <div className="flex">
          <AiTwotoneThunderbolt fontSize="1.15em" />
          <span>Buy Now</span>
        </div>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  padding: 30px 0 0;

  div {
    span {
      text-transform: uppercase;
      margin-left: 10px;
      font-weight: bold;
      letter-spacing: 0.9px;
    }
  }
`;

MobileCartBuyButtons.propTypes = {
  color: PropTypes.string.isRequired,
};

export default MobileCartBuyButtons;
