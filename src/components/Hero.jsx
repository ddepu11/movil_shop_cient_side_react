import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Hero = ({ title }) => (
  <Wrapper>
    <div className="w-960">
      <h1>Home / {title}</h1>
    </div>
  </Wrapper>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
};

const Wrapper = styled.main`
  background: var(--secondary-color);
  padding: 25px 5px;
  color: var(--light-color);

  .w-960 {
    h1 {
      font-size: 2em;
      letter-spacing: 2px;
      font-weight: 300;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 15px 10px;

    .w-960 {
      h1 {
        font-size: 1.4em;
        letter-spacing: 2px;
        font-weight: 300;
      }
    }
  }
`;

export default Hero;
