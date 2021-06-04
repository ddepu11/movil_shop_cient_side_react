import styled from 'styled-components';
import React from 'react';

const Hero = ({ title }) => (
  <Wrapper>
    <div className="w-960">
      <h1>Home / {title}</h1>
    </div>
  </Wrapper>
);

const Wrapper = styled.main`
  background: #555;
  padding: 40px 0;
  color: white;
  .w-960 {
    h1 {
      font-size: 2em;
      letter-spacing: 2px;
      font-weight: 300;
    }
  }
`;

export default Hero;
