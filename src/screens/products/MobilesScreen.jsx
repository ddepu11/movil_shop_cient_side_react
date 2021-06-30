import React from 'react';
import styled from 'styled-components';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';
// import Product from '../../components/Product';
// import Mobile from '../../components/Mobile';

import FiltersScreen from './FiltersScreen';
import Hero from '../../components/Hero';

const ProductsScreen = () => (
  <>
    <Hero title="products" />
    <Wrapper className="w-960">
      <FiltersScreen />

      <section className="display_products">
        <header className="header flex">
          <h2>1200 products found</h2>

          <div className="sort_by">
            <label htmlFor="sort">Sort By: </label>
            <select name="sort_by" id="sort">
              <option value="">Price (lowest)</option>
              <option value="">Price (heighest)</option>
              <option value="">Name (A - Z)</option>
              <option value="">Name (Z - A)</option>
            </select>
          </div>
          <div className="view_by flex">
            <span>View</span>
            <button type="button">
              <BsGrid3X3Gap />
            </button>
            <button type="button">
              <AiOutlineUnorderedList />
            </button>
          </div>
        </header>
        {/* <Mobile /> */}
        {/* <Product /> */}
      </section>
    </Wrapper>
  </>
);

const Wrapper = styled.main`
  padding: 40px 6px;
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 20px;

  .display_products {
    position: sticky;
    top: 5rem;
    .header {
      justify-content: space-between;
      margin-bottom: 20px;
      h2 {
        font-size: 1.2em;
        letter-spacing: 1px;
        text-transform: capitalize;
        font-weight: 500;
      }
      .sort_by {
        h2 {
          font-size: 1.1em;
        }
        select {
          padding: 5px 10px;
        }
      }
      .view_by {
        width: 15%;
        justify-content: space-between;
        span {
          font-size: 1.1em;
          align-self: flex-start;
        }
        button {
          background: transparent;
          font-size: 1.2em;
        }
      }
    }
  }
`;

export default ProductsScreen;
