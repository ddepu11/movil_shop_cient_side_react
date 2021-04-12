import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./assests/logo.svg";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav_top flex">
        <div className="contact">
          <ul className="flex">
            <li>
              <span>8268116588</span>
            </li>
            <li>
              <span>movilshop@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="links">
          <ul className="flex">
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/log-in">LogIn</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav_bottom">
        <img src={logo} alt="" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  max-width: 960px;
  margin: 0 auto;
  .nav_top {
    justify-content: space-between;
    padding: 30px 5px;

    .contact {
      width: 30%;
    }
    .contact ul,
    .links ul {
      justify-content: space-between;
    }

    .links {
      width: 15%;
    }
  }
`;

export default Navbar;
