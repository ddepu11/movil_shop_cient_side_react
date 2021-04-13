import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="f_upper flex ">
        <div className="left flex">
          <div className="c">
            <h2>Getting Started</h2>
            <h3>Start Your Campaign</h3>
            <h3>Compaign Guidlines</h3>
            <h3>NPO Registration</h3>
          </div>
          <div className="c">
            <h2>Resources</h2>
            <h3>Spread the Word</h3>
            <h3>Support center</h3>
            <h3>FAQ</h3>
          </div>
          <div className="c">
            <h2>About</h2>
            <h3>Our Ethos</h3>
            <h3>How It Works</h3>
            <h3>Pricing</h3>
          </div>
          <div className="c">
            <h2>Connect Us</h2>
            <h3>Twitter</h3>
            <h3>Instagram</h3>
            <h3>NPO Registration</h3>
          </div>
        </div>
        <div className="right">
          <label htmlFor="news_letter">Join our news letter</label>
          <input type="text" id="news_letter" />
          <button type="btn">Join</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: #c7c7c7;
  padding: 50px 60px;
  .f_upper {
    justify-content: space-around;
    width: 1200px;
    margin: auto;
    .left {
      width: 60%;
      justify-content: space-between;
      .c {
        h2 {
          margin-bottom: 14px;
          color: #333;
        }
        h3 {
          margin-bottom: 5px;
          color: #111;
        }
      }
    }
    .right {
      justify-self: start;
      label {
        display: block;
        font-size: 1em;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #222;
        padding: 5px 0;
      }
      input,
      button {
        padding: 10px 20px;
        font-size: 1.2em;
        color: #333;
      }
    }
  }
`;

export default Footer;
