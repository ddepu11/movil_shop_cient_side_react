import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const AdminDashboardNavigationScreen = () => (
  <Wrapper>
    <ul className="nav_inner_div flex">
      <li>
        <Link to="/admin-dashboard/mobiles">
          <Button
            pt="5px"
            pb="5px"
            pl="20px"
            pr="20px"
            fs="1em"
            bSh="rgba(3, 102, 214, 0.3) 0px 0px 0px 2px"
            bgColor="transparent"
            color="var(--little-dark-color)"
            borderRadius="2px"
          >
            Mobiles
          </Button>
        </Link>
      </li>

      <li>
        <Link to="/admin-dashboard/users">
          <Button
            pt="5px"
            pb="5px"
            pl="20px"
            pr="20px"
            fs="1em"
            bSh="rgba(3, 102, 214, 0.3) 0px 0px 0px 2px"
            bgColor="transparent"
            color="var(--little-dark-color)"
            borderRadius="2px"
          >
            Users
          </Button>
        </Link>
      </li>

      <li>
        <Link to="/admin-dashboard/sellers">
          <Button
            pt="5px"
            pb="5px"
            pl="20px"
            pr="20px"
            fs="1em"
            bSh="rgba(3, 102, 214, 0.3) 0px 0px 0px 2px"
            bgColor="transparent"
            color="var(--little-dark-color)"
            borderRadius="2px"
          >
            Sellers
          </Button>
        </Link>
      </li>
    </ul>
  </Wrapper>
);

const Wrapper = styled.nav`
  padding: 10px 0 15px;

  .nav_inner_div {
    justify-content: flex-start;

    li {
      margin-right: 22px;
    }
  }
`;

export default AdminDashboardNavigationScreen;
