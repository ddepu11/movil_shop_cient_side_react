import React from 'react';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const MobileAvgStarsScreen = () => {
  const {
    mobile: { avgStar },
  } = useSelector((state) => state.mobile);

  return (
    <Wrapper>
      {Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5;

        if (avgStar >= index + 1)
          return <BsStarFill key={Math.floor(Math.random() * Date.now())} />;

        if (avgStar >= number)
          return <BsStarHalf key={Math.floor(Math.random() * Date.now())} />;

        return (
          <BsStar color="#3333" key={Math.floor(Math.random() * Date.now())} />
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.aside`
  color: #e9e506f6;
  font-size: 1.5em;

  * {
    margin-right: 5px;
  }
`;

export default MobileAvgStarsScreen;
