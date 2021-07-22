import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FcAddDatabase } from 'react-icons/fc';
import { BiSpreadsheet } from 'react-icons/bi';

const DashboardNavigationScreen = () => (
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

  ul {
    gap: 0 20px;
    li {
      width: 100%;
      padding: 0px 0 25px;
      a {
        padding: 5px 15px;
        font-size: 1.2em;
        background: transparent;
        color: #222;
        border-radius: 1px;
        box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
        span {
          margin-right: 8px;
        }
      }
    }
  }

  @media screen and (max-width: 435px) {
    ul {
      gap: 0 8px;

      li {
        padding: 0px 0 25px;

        a {
          padding: 4px 0px;
          font-size: 1em;
          box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 2px;

          span {
            margin-right: 4px;
          }
        }
      }
    }
  }
`;

export default DashboardNavigationScreen;
