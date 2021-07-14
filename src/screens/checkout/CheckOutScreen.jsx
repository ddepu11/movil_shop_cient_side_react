import React from 'react';
import styled from 'styled-components';
import CartPriceDetais from '../cart/CartPriceDetails';
import Button from '../../components/Button';
import CircleLoader from '../../components/CircleLoader';
import CheckOutScreenLogic from './Logic/CheckOutScreenLogic';

const CheckOutScreen = () => {
  // const { userInfo, userLoading, hasUserLoggedIn } = useSelector(
  //   (state) => state.user
  // );

  // const { paymentLoading, paymentSuccess } = useSelector(
  //   (state) => state.payment
  // );

  // const history = useHistory();

  // const dispatch = useDispatch();
  // const [address, setAddress] = useState('');

  // const handleAddress = (e) => {
  //   setAddress(e.target.value);
  // };

  // useEffect(() => {
  //   if (Object.keys(userInfo).length !== 0 && userInfo.cart.length === 0) {
  //     history.push('/cart');
  //     dispatch(
  //       sendNotification('Nothing to checkout,your cart is empty !', true)
  //     );
  //   }

  //   if (!hasUserLoggedIn) {
  //     history.push('/sign-in');
  //     dispatch(
  //       sendNotification('Please add somemobile in the cart to checkout!', true)
  //     );
  //   }

  //   if (paymentSuccess && hasUserLoggedIn) {
  //     history.push('/account');
  //   }
  // }, [hasUserLoggedIn, history, dispatch, paymentSuccess, userInfo]);

  // const { totalPrice, discount } = useSelector((state) => state.orderTotal);

  // const handlePay = () => {
  //   if (address === '' || address.length < 30) {
  //     dispatch(sendNotification('Please fill your full address!!', true));
  //   } else {
  //     dispatch(
  //       createAnOrder({
  //         totalPrice: totalPrice - discount,
  //         name: `${userInfo.firstName} ${userInfo.lastName}`,
  //         email: userInfo.email,
  //         contact: userInfo.phoneNumber,
  //         userId: userInfo._id,
  //       })
  //     );
  //   }
  // };

  const {
    userLoading,
    paymentLoading,
    handleAddress,
    handlePay,
    userInfo,
    address,
  } = CheckOutScreenLogic();
  if (userLoading || paymentLoading) {
    return (
      <CircleLoader
        bgColor="var(--secondary-color)"
        wrapperH="80vh"
        spW="90px"
        spH="90px"
        cirW="90px"
        cirH="90px"
      />
    );
  }

  return (
    <Wrapper className="w-960">
      <div className="user_info">
        <div className="row flex">
          <h3>Name:</h3>
          <span>{`${userInfo.firstName} ${userInfo.lastName}`}</span>
        </div>

        <div className="row flex">
          <h3>Email:</h3>
          <span>{userInfo.email}</span>
        </div>

        <div className="row flex">
          <h3>Address:</h3>
          <textarea
            name="address"
            rows="7"
            cols="30"
            value={address}
            onChange={handleAddress}
          />
        </div>

        <div className="row buy-now">
          <Button
            pt="12px"
            pb="12px"
            pl="30px"
            pr="30px"
            fs="1.3em"
            width="100%"
            mt="20px"
            handleClick={handlePay}
          >
            Buy Now
          </Button>
        </div>
      </div>
      <CartPriceDetais />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  gap: 0 5rem;
  padding: 15px 12px;

  .user_info {
    padding: 10px 00px;
    /* border: 1px solid red; */

    .row {
      justify-content: space-between;
      padding: 0px 0 25px;
      align-items: flex-start;

      h3 {
        font-size: 1.2em;
        color: var(--little-dark-color);
        letter-spacing: 2px;
      }

      span {
        font-size: 1em;
        color: #333;
        letter-spacing: 1px;
        display: block;
        width: 50%;
      }
      textarea {
        width: 50%;
        font-size: 1.1em;
        border: 1px solid var(--little-light-color);
        padding: 4px 5px;
        color: var(--medium-dark-color);
        resize: none;
      }

      textarea:focus {
        border: 0;
      }
    }
    .buy-now {
      margin: 0 auto;
      width: 50%;
    }
  }
`;

export default CheckOutScreen;
