import React, { useState, useEffect } from 'react';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const MobileAvgStarsScreen = () => {
  const {
    mobile: { reviews },
  } = useSelector((state) => state.mobile);

  // how many times the specific star was given
  const [mobileStars, setMobileStars] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  // Calculate how many times the specific star was given
  useEffect(() => {
    reviews &&
      reviews.forEach((e) => {
        setMobileStars((prevState) => ({
          ...prevState,
          [e.stars]: prevState[e.stars] + 1,
        }));
      });
  }, [reviews]);

  // Final avg stars after all calculations
  const [avgStar, setAvgStar] = useState(0);

  // Calculate avg stars
  useEffect(() => {
    const keys = Object.keys(mobileStars);
    const values = Object.values(mobileStars);

    let u = 0;

    keys.forEach((e, index) => {
      u += e * values[index];
    });

    const b = values.reduce((p, c) => p + c);

    setAvgStar(u / b);
  }, [mobileStars]);

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
