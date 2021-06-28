import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../components/Loading';
import Mobile from '../../components/Mobile';
import { listMobiles } from '../../actions/sellerActions';

const AllMobileScreen = () => {
  const { mobileLoading, userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listMobiles(userInfo._id));
  }, [dispatch, userInfo]);

  if (mobileLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <h1 className="heading">All the mobiles you have added</h1>
      <section className="mobiles">
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
`;

export default AllMobileScreen;
