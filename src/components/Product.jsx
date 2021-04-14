import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <Wrapper className="card">
      <Link to={`/products/`}>
        <img src="https://i.pravatar.cc/350" alt="" />
        <div className="info">
          <h2>Product Name</h2>
          <h4>260rs</h4>
          <div className="ava_sold flex">
            <p>Sold: 25</p>
            <p>Available: 25</p>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-direction: column;
  align-items: flex-start;

  text-align: start;
  a {
    color: #333;
  }

  img {
    width: 300px;
    height: 180px;
    object-fit: cover;
  }
  .info {
    width: 100%;
    margin-top: 10px;
    padding: 10px 15px 15px;

    h2 {
      margin-bottom: 12px;
    }
    h4 {
      margin-bottom: 18px;
    }
    .ava_sold {
      justify-content: space-between;
    }
  }
`;

export default Product;
