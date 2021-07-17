import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { incDecQuantity, removeCartItem } from '../../../actions/cartActions';

import {
  addMobileToCart,
  deleteCartItem,
  increaseOrDecreaseCartItemQuantity,
} from '../../../actions/userActions';
import { getLocalCart } from '../../../utils/getLocalCart';

const CartScreenLogic = () => {
  const { localStorageCart, cartLoading } = useSelector((state) => state.cart);

  const { hasUserLoggedIn, userInfo, userLoading } = useSelector(
    (state) => state.user
  );

  const isUserInfoEmpty = Object.keys(userInfo).length === 0;

  const dispatch = useDispatch();

  const handleQuantity = (cartItemId, action) => {
    dispatch(
      increaseOrDecreaseCartItemQuantity(userInfo._id, cartItemId, action)
    );
  };

  const handleLocalCartQuantity = (cartItemId, action) => {
    dispatch(incDecQuantity(cartItemId, action));
  };

  useEffect(() => {
    // get cart item which is not in db cart
    if (!isUserInfoEmpty && localStorageCart.length !== 0) {
      const comparer = (otherArray) => (current) =>
        otherArray.filter((other) => other.mobileId === current.mobileId)
          .length === 0;

      const arr = localStorageCart.filter(comparer(userInfo.cart));

      // if there is any then save it to db cart
      if (arr.length !== 0) {
        arr.forEach((e) => dispatch(addMobileToCart(userInfo._id, e)));
      }
    }
  }, [
    isUserInfoEmpty,
    userInfo.cart,
    localStorageCart,
    userInfo._id,
    dispatch,
  ]);

  const handleUserCartItemRemove = (userId, mobileId) => {
    const cart = getLocalCart();

    if (cart) {
      dispatch(removeCartItem(mobileId));
    }

    dispatch(deleteCartItem(userId, mobileId));
  };

  return {
    handleLocalCartQuantity,
    handleQuantity,
    hasUserLoggedIn,
    userLoading,
    cartLoading,
    removeCartItem,
    userInfo,
    dispatch,
    localStorageCart,
    isUserInfoEmpty,
    handleUserCartItemRemove,
  };
};

export default CartScreenLogic;
