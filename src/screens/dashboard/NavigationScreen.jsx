import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FcAddDatabase } from 'react-icons/fc';
import { BiSpreadsheet } from 'react-icons/bi';

const NavigationScreen = () => (
  <Wrapper>
    <ul className="flex">
      <li>
        <Link to="/dashboard/all-mobiles" className="flex">
          <span>All Mobiles</span>
          <BiSpreadsheet fontSize="1.2em" />
        </Link>
      </li>

      <li>
        <Link to="/dashboard/add-mobile" className="flex">
          <span> Add a mobile</span>
          <FcAddDatabase fontSize="1.2em" />
        </Link>
      </li>
    </ul>
  </Wrapper>
);

const Wrapper = styled.section`
  grid-area: n;
  padding: 15px 0;

  ul {
    flex-direction: column;

    li {
      width: 100%;
      padding: 0px 0 25px;
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
