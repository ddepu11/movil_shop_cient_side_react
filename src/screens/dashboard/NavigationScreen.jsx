import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FcAddDatabase } from 'react-icons/fc';
import { BiSpreadsheet } from 'react-icons/bi';

const NavigationScreen = () => (
  <Wrapper>
    <ul className="flex">
      <li>
        <Link to="/" className="flex">
          <span> Add a product</span>
          <FcAddDatabase fontSize="1.2em" />
        </Link>
      </li>
      <li>
        <Link to="/" className="flex">
          <span>All Products</span>
          <BiSpreadsheet fontSize="1.2em" />
        </Link>
      </li>
    </ul>
  </Wrapper>
);

const Wrapper = styled.section`
  grid-area: n;
  padding: 0px 0;
  ul {
    flex-direction: column;
    align-items: flex-start;
    li {
      padding: 0px 0 20px;
      a {
        padding: 5px 15px;
        font-size: 1.2em;
        background: #1956c5;
        color: white;
        border-radius: 5px;
        span {
          margin-right: 8px;
        }
      }
    }
  }
`;

export default NavigationScreen;
