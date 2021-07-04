import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMobileById } from '../actions/mobileActions';
import Loading from '../components/Loading';

const MobileScreen = () => {
  const { mobileId } = useParams();
  const dispatch = useDispatch();

  const { mobile, mobileLoading } = useSelector((state) => state.mobile);

  useEffect(() => {
    dispatch(getMobileById(mobileId));
  }, [dispatch, mobileId]);

  if (mobileLoading) {
    return <Loading />;
  }

  return (
    <Wrapper className="w-960">
      <h1>A Mobile</h1>
      {console.log(mobile)}
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default MobileScreen;
