import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';

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
      stars,
    },
  } = useSelector((state) => state.mobile);

  const actualStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    if (stars >= index + 1) return <BsStarFill />;

    if (stars >= number) return <BsStarHalf />;

    return <BsStar color="#3333" />;
  });

  return (
    <Wrapper>
      <div className="head flex">
        <h1>{title}</h1>

        <div className="stars">
          {actualStars}
          {/* <BsStarHalf />
          <BsStar /> */}
        </div>
      </div>

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

        {sellerInfo && (
          <div className="spec sold_by flex">
            <h5>Sold By:</h5>
            <span>
              {sellerInfo.name} {sellerInfo.email}
            </span>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  padding: 0 60px;

  .head {
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-size: 2em;
      letter-spacing: 2px;
      color: #424242;
      margin-bottom: 5px;
    }

    .stars {
      color: #cbda00f6;
      padding: 0 0 20px 0px;
      font-size: 1.5em;
    }
    .stars > * {
      margin-right: 5px;
    }
  }

  .price {
    color: #313131;
    font-size: 2em;
  }

  .specification {
    margin-top: 50px;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-size: 1.3em;
      letter-spacing: 2px;
      color: #222;
      margin-bottom: 22px;
    }

    .spec {
      width: 65%;
      margin-bottom: 15px;
      justify-content: space-between;
      /* border: 1px solid red; */

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

    .sold_by {
      border-top: 1px dashed var(--primary-color);
      width: 88%;
      margin-top: 10px;
      padding-top: 10px;

      h5 {
        align-self: flex-start;
      }
      span {
        width: 50%;
      }
    }
  }
`;

export default MobileInfoScreen;
