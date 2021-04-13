import React from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart, AiFillSetting } from "react-icons/ai";
import { FiRefreshCcw } from "react-icons/fi";

const Services = () => {
  return (
    <Wrapper className="w-960">
      <h1>Company Services</h1>
      <div className="grid">
        <div className="service">
          <div className="s_logo">
            <AiOutlineShoppingCart />
          </div>
          <h1>Service One</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut, aperiam?
          </p>
        </div>
        <div className="service">
          <div className="s_logo">
            <AiFillSetting />
          </div>
          <h1>Service One</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut, aperiam?
          </p>
        </div>
        <div className="service">
          <div className="s_logo">
            <FiRefreshCcw />
          </div>
          <h1>Service One</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut, aperiam?
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  padding: 10px 0 40px;

  h1 {
    padding: 10px;
    font-size: 2.5em;
    letter-spacing: 2px;
    margin-bottom: 60px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 250px));
    gap: 80px;
  }

  .service {
    width: 250px;
    padding: 70px 20px;
    position: relative;
    border-radius: 5px;
    background: #c7c7c7;
    .s_logo {
      position: absolute;
      top: -40px;
      left: 0;
      transform: translateX(80px);
      width: 80px;
      height: 80px;
      background: #cae6f8;
      border-radius: 50%;
      display: grid;
      place-content: center;
      font-size: 2em;
    }
    h1 {
      font-size: 1.5em;
      letter-spacing: 2px;
      margin-bottom: 10px;
    }
  }
`;

export default Services;
