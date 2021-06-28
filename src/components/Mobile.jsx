import React from 'react';
import styled from 'styled-components';

const Mobile = () => {
  console.log('Mobile');

  return (
    <Wrapper className="flex">
      <div className="mobile_pic">
        <img src="https://i.pravatar.cc/300" alt="as" />
      </div>

      <div className="mobile_info flex">
        <div className="left">
          <div>
            <h1>Redmi Note 10</h1>
          </div>
          <ul>
            <li>- &nbsp;&nbsp;Android Operating System</li>
            <li>- &nbsp;&nbsp;128GB Internal Storage</li>
            <li>- &nbsp;&nbsp;4GB Ram</li>
            <li>- &nbsp;&nbsp;64 mp camera</li>
            <li>- &nbsp;&nbsp;2.6 GHz processor</li>
            <li>- &nbsp;&nbsp;6000mah</li>
          </ul>
        </div>

        <div className="right">
          <h1>10,999 &#8377;</h1>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px 20px;
  justify-content: space-between;
  gap: 0 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  margin-bottom: 15px;

  .mobile_pic {
    width: 170px;
    height: 208px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  .mobile_info {
    justify-content: space-between;
    align-self: flex-start;
    width: 100%;
    padding: 0px 0px 0 25px;

    .left {
      h1 {
        font-size: 1.5em;
        letter-spacing: 2px;
        color: #333;
      }

      ul {
        padding: 12px 0 0;
        li {
          padding: 0 0 8px;
          color: #444;
          letter-spacing: 1px;
        }
      }
    }
    .right {
      align-self: flex-start;
      color: #444;
      letter-spacing: 1.1px;
      font-size: 1.2em;
    }
  }
`;

export default Mobile;
