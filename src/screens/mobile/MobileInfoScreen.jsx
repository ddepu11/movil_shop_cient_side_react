import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const MobileInfoScreen = () => {
  const {
    mobile: {
      title,
      price,
      os,
      brand,
      internalMemory,
      ram,
      camera,
      battery,
      processor,
      sellerInfo,
    },
  } = useSelector((state) => state.mobile);

  return (
    <Wrapper>
      <h1 className="title">{title}</h1>
      <span className="price">&#8377; {price} </span>

      <div className="specification flex">
        <h1>Specifications:</h1>

        <div className="spec flex">
          <h5>Operating System:</h5>
          <span>{os}</span>
        </div>

        <div className="spec flex">
          <h5>Brand:</h5>
          <span>{brand}</span>
        </div>

        <div className="spec flex">
          <h5>Internal Memory:</h5>
          <span>{internalMemory} GB</span>
        </div>

        <div className="spec flex">
          <h5>Ram:</h5>
          <span>{ram} GB</span>
        </div>

        <div className="spec flex">
          <h5>Camera:</h5>
          <span>{camera} MP</span>
        </div>

        <div className="spec flex">
          <h5>Processor:</h5>
          <span>{processor} GHz</span>
        </div>

        <div className="spec flex">
          <h5>Battery:</h5>
          <span>{battery} Mah</span>
        </div>

        <div className="spec flex">
          <h5>Sold By:</h5>
          <span>
            {sellerInfo.name} {sellerInfo.email} Mah
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  padding: 0 20px;

  .title {
    font-size: 2em;
    letter-spacing: 2px;
    color: #222;
    margin-bottom: 15px;
  }

  .price {
    color: #313131;
    font-size: 1.5em;
  }

  .specification {
    padding: 30px 0 0;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-size: 1.3em;
      letter-spacing: 2px;
      color: #222;
      margin-bottom: 16px;
    }

    .spec {
      width: 60%;
      margin-bottom: 15px;
      justify-content: space-between;

      h5 {
        font-size: 1em;
        color: #646464;
        letter-spacing: 1px;
      }

      span {
        font-weight: bold;
        color: #505050;
        width: 30%;
        letter-spacing: 1px;
      }
    }
  }
`;

export default MobileInfoScreen;
