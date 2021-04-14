import React from "react";
import styled from "styled-components";
import { Hero } from ".";

const Products = () => {
  return (
    <>
      <Hero title="products" />
      <Wrapper className="w-960">Products</Wrapper>
    </>
  );
};

const Wrapper = styled.main``;

export default Products;
