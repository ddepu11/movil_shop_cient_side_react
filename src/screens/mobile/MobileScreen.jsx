import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMobileById } from '../../actions/mobileActions';
import MobileImagesScreen from './images/MobileImagesScreen';
import MobileInfoScreen from './MobileInfoScreen';
import Hero from '../../components/Hero';
import CircleLoader from '../../components/CircleLoader';

const MobileScreen = () => {
  const { mobileId } = useParams();

  const dispatch = useDispatch();

  const { mobile, mobileLoading } = useSelector((state) => state.mobile);

  useEffect(() => {
    dispatch(getMobileById(mobileId));
  }, [dispatch, mobileId]);

  const [color, setColor] = useState('');

  if (mobileLoading) {
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
    <>
      <Hero title={`mobiles / ${mobile.title}`} />
      <Wrapper className="w-960 flex">
        {mobile && <MobileImagesScreen color={color} />}
        {mobile && <MobileInfoScreen setColor={setColor} color={color} />}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  padding: 20px 5px;
  justify-content: space-between;

  @media screen and (max-width: 1005px) {
    flex-direction: column;

    aside {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

export default MobileScreen;
