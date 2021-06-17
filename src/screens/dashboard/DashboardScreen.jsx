import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AsideScreen from './AsideScreen';
import SectionScreen from './SectionScreen';
import { getAccountInfo } from '../../actions/userActions';

const DashboardScreen = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { userInfo, hasUserLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    !hasUserLoggedIn && history.push('/');

    Object.keys(userInfo).length === 0 && dispatch(getAccountInfo());
  }, [userInfo, dispatch, history, hasUserLoggedIn]);

  return (
    <Wrapper className="w-960">
      <AsideScreen />
      <SectionScreen />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 20px 0;
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-template-rows: auto;
  gap: 1.5rem;
  grid-template-areas: 'a s s s';
`;

export default DashboardScreen;
