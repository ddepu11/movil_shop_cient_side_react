import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import HeaderScreen from './HeaderScreen';
import SectionScreen from './SectionScreen';
import { getAccountInfo } from '../../actions/userActions';
import { clearMobileSaved } from '../../actions/mobileActions';
import Loading from "../../components/Loading";

const DashboardScreen = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { userInfo, hasUserLoggedIn } = useSelector((state) => state.user);
  const { mobileSaved, mobileLoading } = useSelector((state) => state.mobile);

  useEffect(() => {
    mobileSaved && dispatch(clearMobileSaved());

    !hasUserLoggedIn && history.push('/sign-in');

    Object.keys(userInfo).length === 0 && dispatch(getAccountInfo());
  }, [userInfo, dispatch, history, hasUserLoggedIn, mobileSaved]);

  if (mobileLoading) {
    return <Loading />;
  }

  return (
    <Wrapper className="w-960">
      <HeaderScreen />
      <SectionScreen />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(80px, 1fr));
  grid-template-rows: minmax(200px, auto);
  gap: 1.5rem;
  grid-template-areas:
    'h h h h'
    's s s s';
`;

export default DashboardScreen;
