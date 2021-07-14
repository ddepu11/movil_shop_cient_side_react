import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { sendNotification } from '../../../actions/notificationActions';
import { createAnOrder } from '../../../actions/paymentActions';

const CheckOutScreenLogic = () => {
  const { userInfo, userLoading, hasUserLoggedIn } = useSelector(
    (state) => state.user
  );

  const { paymentLoading, paymentSuccess } = useSelector(
    (state) => state.payment
  );

  const history = useHistory();

  const dispatch = useDispatch();
  const [address, setAddress] = useState('');

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  useEffect(() => {
    if (Object.keys(userInfo).length !== 0 && userInfo.cart.length === 0) {
      history.push('/cart');
      dispatch(
        sendNotification('Nothing to checkout,your cart is empty !', true)
      );
    }

    if (!hasUserLoggedIn) {
      history.push('/sign-in');
      dispatch(
        sendNotification('Please add somemobile in the cart to checkout!', true)
      );
    }

    if (paymentSuccess && hasUserLoggedIn) {
      history.push('/account');
    }
  }, [hasUserLoggedIn, history, dispatch, paymentSuccess, userInfo]);

  const { totalPrice, discount } = useSelector((state) => state.orderTotal);

  const handlePay = () => {
    if (address === '' || address.length < 30) {
      dispatch(sendNotification('Please fill your full address!!', true));
    } else {
      dispatch(
        createAnOrder({
          totalPrice: totalPrice - discount,
          name: `${userInfo.firstName} ${userInfo.lastName}`,
          email: userInfo.email,
          contact: userInfo.phoneNumber,
          userId: userInfo._id,
        })
      );
    }
  };

  return {
    userLoading,
    paymentLoading,
    handleAddress,
    handlePay,
    userInfo,
    address,
  };
};

export default CheckOutScreenLogic;
