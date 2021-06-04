import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <Wrapper>
    <div className="f_upper flex">
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
        <input type="email" id="news_letter" placeholder="Enter your email" />
        <button type="button">Join</button>
      </div>
    </div>

    <div className="fotter_fw">
      <div className="f_lover flex">
        <div className="left">
          <p>
            &copy;{new Date().getFullYear()} MovilShop LTD - Proud Supporter of
            Humenkindness{' '}
          </p>
        </div>
        <div className="right">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Security</span>
        </div>
      </div>
    </div>
  </Wrapper>
);

const Wrapper = styled.footer`
  background-color: #c7c7c7;
  padding: 00px 0px;
  .f_upper {
    justify-content: space-around;
    width: 1200px;
    margin: auto;
    padding: 50px 0px;

    .left {
      width: 60%;
      justify-content: space-between;
      .c {
        h2 {
          margin-bottom: 14px;
          color: #555;
        }
        h3 {
          margin-bottom: 8px;
          color: #333;
          font-weight: 500;
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
  .fotter_fw {
    background-color: #555;
    padding: 20px 0;
  }
  .f_lover {
    justify-content: space-between;
    width: 1200px;
    margin: auto;
    color: white;
    .left {
      p {
        font-size: 1.1em;
        letter-spacing: 1px;
      }
    }
    .right {
      span {
        margin-left: 15px;
        font-size: 1em;
      }
    }
  }
`;

export default Footer;
