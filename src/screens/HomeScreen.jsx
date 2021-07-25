import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeroImg from '../assests/home_hero_img.jpg';
import Services from '../components/Services';
import Mobile from '../components/Mobile';
import CircleLoader from '../components/CircleLoader';

const Home = () => {
  const { mobiles, mobileLoading } = useSelector((state) => state.mobile);

  return (
    <Wrapper>
      <div className="header">
        <section className="hero flex w-960">
          <aside>
            <h2 className="hero_heading">
              MovilShop Number#1 Trusted Mobile Website.
            </h2>

            <p>Comming soon in your door with huge discount</p>

            <Link className="link_btn shop_now_btn" to="/mobiles">
              Shop Now
            </Link>
          </aside>

          <div className="hero_img">
            <img src={HeroImg} alt="hero" />
          </div>
        </section>
      </div>

      <div className="recent-mobiles">
        <h2 className="heading">Recent Products</h2>

        <div className="mobiles flex">
          {mobileLoading ? (
            <CircleLoader
              wrapperH="200px"
              spW="100px"
              spH="100px"
              cirW="100px"
              cirH="100px"
            />
          ) : (
            mobiles
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((mobile, index) => {
                const {
                  _id,
                  pictures,
                  title,
                  price,
                  sellerInfo: { id },
                } = mobile;

                if (index < 5) {
                  return (
                    <Mobile
                      pictures={pictures}
                      title={title}
                      price={price}
                      usedFor="grid"
                      userId={id}
                      mobileId={_id}
                      key={_id}
                    />
                  );
                }

                return null;
              })
          )}
        </div>

        <Link to="/mobiles" className="link_btn all_products_btn">
          All Mobiles
        </Link>
      </div>

      <Services />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .link_btn {
    background-color: var(--tertiary-color);
    padding: 10px 20px;
    color: white;
  }

  .header {
    max-width: 1200px;
    margin: 0 auto;
    background-color: var(--secondary-color);
    padding: 20px;
    transform: translateY(-15px);

    .hero {
      aside {
        color: white;

        .hero_heading {
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

      .hero_img {
        width: 410px;
        height: 400px;

        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .recent-mobiles {
    background-color: var(--primary-color);
    padding: 20px;
    text-align: center;

    .heading {
      margin-bottom: 50px;
      font-size: 1.8em;
      letter-spacing: 3px;
      color: var(--light-color);
    }

    .mobiles {
      flex-wrap: wrap;
      gap: 2rem 2.5rem;

      .mobile_pic {
        height: 180px;
      }
    }

    .all_products_btn {
      margin-top: 35px;
      background-color: var(--tertiary-color);
      border-radius: 5px;
      transition: transform 0.5s ease;
    }

    .all_products_btn:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 750px) {
    .header {
      .hero {
        aside {
          text-align: center;
          padding: 30px 0;

          .hero_heading {
            font-size: 1.9em;
            letter-spacing: 3px;
            line-height: 1.4;
          }
        }

        .hero_img {
          display: none;
        }
      }
    }

    .recent-mobiles {
      padding: 12px 10px 15px;

      .heading {
        margin-bottom: 35px;
        font-size: 1.5em;
      }

      .mobiles {
        gap: 1.5rem 2rem;

        .mobile_pic {
          height: 185px;
        }
      }

      .all_products_btn {
        margin-top: 40px;
        /* padding: 15px 40px; */
        font-size: 1.2em;
      }
    }
  }
`;

export default Home;
