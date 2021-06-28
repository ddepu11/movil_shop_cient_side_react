import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import Mobile from '../../components/Mobile';

const AllMobileScreen = () => {
  const { mobileLoading } = useSelector((state) => state.user);

  // const dispatch = useDispatch();

  if (mobileLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <h1 className="heading">All the mobiles you have added</h1>
      <section className="mobiles">
        <Mobile />
        <Mobile />
        <Mobile />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .heading {
    font-size: 1.1em;
    color: #444;
    text-align: center;
    letter-spacing: 1.4px;
    padding: 2px 0 35px;
  }

  .mobiles {
    /* .mobile {
      padding: 0px 10px;
      justify-content: space-between;
      gap: 0 10px;

      .mobile_pic {
        width: 170px;
        height: 208px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5px;
        }
      }

      .mobile_info {
        justify-content: space-between;
        align-self: flex-start;
        width: 100%;
        padding: 0px 0px 0 25px;

        .left {
          h1 {
            font-size: 1.5em;
            letter-spacing: 2px;
            color: #333;
          }

          ul {
            padding: 12px 0 0;
            li {
              padding: 0 0 8px;
              color: #444;
              letter-spacing: 1px;
            }
          }
        }
        .right {
          align-self: flex-start;
          color: #444;
          letter-spacing: 1.1px;
          font-size: 1.2em;
        }
      }
    } */
  }
`;

export default AllMobileScreen;
