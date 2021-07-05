import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMobileById } from '../../actions/mobileActions';
import Loading from '../../components/Loading';
import MobileImagesPreviewScreen from './MobileImagesPreviewScreen';
import MobileInfoScreen from './MobileInfoScreen';

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
      {mobile && <MobileImagesPreviewScreen />}
      {mobile && <MobileInfoScreen />}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 450px 1fr;
  padding: 20px 10px;
`;

export default MobileScreen;
