import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const Mobile = ({
  imgSrc,
  title,
  os,
  internalMemory,
  ram,
  camera,
  processor,
  battery,
  price,
  userId,
  brand,
  colors,
}) => (
  <Wrapper className="flex">
    <div className="mobile_pic">
      <img
        src={`/sellers/${userId}/${title}_${os}_${price}_${processor}/${imgSrc}`}
        alt={title}
      />
    </div>
    <div className="mobile_info flex">
      <div className="left">
        <div>
          <h1>{title}</h1>
        </div>
        <ul>
          <li>- &nbsp;&nbsp;{brand}</li>
          <li>- &nbsp;&nbsp;{os} operating system</li>
          <li>- &nbsp;&nbsp;{internalMemory}GB Internal Storage</li>
          <li>- &nbsp;&nbsp;{ram}GB Ram</li>
          <li>- &nbsp;&nbsp;{camera} MP Camera</li>
          <li>- &nbsp;&nbsp;{processor} GHz Processor</li>
          <li>- &nbsp;&nbsp;{battery}Mah Battery</li>
        </ul>
      </div>

      <div className="right">
        <h1>{price} &#8377;</h1>
        <div className="colors flex">
          {colors.map((c) => (
            <Button
              key={Math.floor(Math.random() * c.length * 1500)}
              pt="0px"
              pb="0px"
              pl="0px"
              pr="0px"
              borderRadius="50%"
              bgColor={c}
              width="25px"
              height="25px"
              bSh=" rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
              fs="0.8em"
            >
              {' '}
            </Button>
          ))}
        </div>
      </div>
    </div>
  </Wrapper>
);

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
      object-fit: scale-down;
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

Mobile.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  os: PropTypes.string.isRequired,
  internalMemory: PropTypes.number.isRequired,
  ram: PropTypes.string.isRequired,
  camera: PropTypes.string.isRequired,
  processor: PropTypes.string.isRequired,
  battery: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  userId: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
};

export default Mobile;
