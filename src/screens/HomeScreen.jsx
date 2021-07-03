import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import HeroImg from '../assests/home_hero_img.jpg';
import Product from '../components/Product';
import Services from '../components/Services';
import { isUserRegisteredWithThisEmail } from '../actions/userActions';

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  const { hasUserLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated && !hasUserLoggedIn) {
      dispatch(isUserRegisteredWithThisEmail(user.email));
    }
  }, [user, dispatch, isAuthenticated, hasUserLoggedIn]);

  return (
    <Wrapper>
      <div className="header">
        <section className="flex w-960">
          <aside>
            <h2>MovilShop Number#1 Trusted Mobile Website.</h2>

            <p>Comming soon in your door with huge discount</p>

            <Link className="link_btn shop_now_btn" to="/mobiles">
              Shop Now
            </Link>
          </aside>

          <img src={HeroImg} alt="" />
        </section>
      </div>

      <div className="recent-products">
        <h2>Recent Products</h2>
        <div className="r_p_div flex">
          <Product />
          <Product />
          <Product />
        </div>
        <Link to="/" className="link_btn all_products_btn">
          All Products
        </Link>
      </div>
      <Services />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .link_btn {
    background-color: #fd3a65;
    padding: 10px 20px;
    color: white;
  }

  .header {
    max-width: 1200px;
    margin: 0 auto;
    background-color: #db7979;
    padding: 20px;
    transform: translateY(-35px);

    .flex {
      justify-content: space-between;

      aside {
        align-self: center;
        color: white;

        h2 {
          font-size: 2.2em;
          letter-spacing: 4px;
          line-height: 1.4;
          text-transform: uppercase;
        }

        p {
          font-size: 0.9em;
          margin-top: 20px;
          text-transform: capitalize;
        }

        .shop_now_btn {
          margin-top: 30px;
        }
      }

      img {
        width: 50%;
        height: 100%;
      }
    }
  }

  .recent-products {
    background-color: #c7c7c7;
    padding: 20px;
    text-align: center;

    h2 {
      margin-bottom: 50px;
      font-size: 1.8em;
      letter-spacing: 2px;
    }

    .r_p_div {
      flex-wrap: wrap;
      gap: 5rem;
    }

    .all_products_btn {
      margin-top: 30px;
    }
  }
`;

export default Home;
