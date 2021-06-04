import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

const Filters = () => (
  <Wrapper>
    <div className="filters_div">
      <form>
        <div className="form-control">
          <input type="text" className="search" placeholder="search" />
        </div>

        <div className="form-control">
          <h5>Brand</h5>
          <select name="brand" id="brand">
            <option value="all">All</option>
            <option value="">Nokia</option>
            <option value="">Redmi</option>
            <option value="">Oneplus</option>
            <option value="">Realme</option>
            <option value="">Motorola</option>
            <option value="">Oppo</option>
            <option value="">Lenovo</option>
          </select>
        </div>
        <div className="form-control">
          <h5>Customer Ratings</h5>
          <ul>
            <li>
              <button type="button">
                4 <AiFillStar /> and above
              </button>
            </li>
            <li>
              <button type="button">
                3 <AiFillStar /> and above
              </button>
            </li>
            <li>
              <button type="button">
                2 <AiFillStar /> and above
              </button>
            </li>
            <li>
              <button type="button">
                1 <AiFillStar /> and above
              </button>
            </li>
          </ul>
        </div>

        <div className="form-control">
          <h5>Price</h5>
          <input type="range" min="0" max="4222" />
          <p>Range: 0 - 422</p>
        </div>

        <div className="form-control">
          <h5>Internal Memory</h5>
          <div className="internal_storage">
            <input type="radio" id="16gb" name="internal_memory" />
            <label htmlFor="16gb">16gb</label>
          </div>
          <div className="internal_storage">
            <input type="radio" id="8gb" name="internal_memory" />
            <label htmlFor="8gb">8gb</label>
          </div>
        </div>
        <div className="form-control">
          <h5>Color</h5>
          <div className="colors flex">
            <button type="button" className="all_color flex ">
              All
            </button>
            {/* <button type="button" className="c" />

            <button type="button" className="c" />

            <button type="button" className="c" />
            
            <button type="button" className="c" /> */}
          </div>
        </div>
        <div className="form-control">
          <h5 className="assured">MovilShop Assured</h5>
          <input type="checkbox" />
        </div>

        <button type="button" className="clear_filters">
          Clear Filters
        </button>
      </form>
    </div>
  </Wrapper>
);

const Wrapper = styled.aside`
  .filters_div {
    .form-control {
      margin-bottom: 22px;
      h5 {
        font-size: 1.1em;
        margin-bottom: 10px;
        color: rgb(94, 94, 94);
        letter-spacing: 2px;
      }
      .search {
        font-size: 1.2em;
        padding: 5px 10px;
        border: 1px solid rgba(0, 0, 0, 0.35);
        color: #333;
        width: 100%;
      }
      select {
        font-size: 1.1em;
        border: 1px solid rgba(0, 0, 0, 0.35);
        padding: 3px 10px;
      }
      ul {
      }
      ul li {
        padding: 0px 0 10px;
      }
      ul li button {
        font-size: 0.9em;
        background: transparent;
        color: #4d4d4d;
      }
      p {
        color: #474747;
        padding: 5px 0 0;
      }
      .internal_storage {
        margin-bottom: 10px;
        input {
          margin-right: 8px;
        }
        label {
          color: #5a5a5a;
        }
      }
      .colors {
        justify-content: flex-start;

        .all_color {
          font-size: 1.1em;
          background: transparent;
          color: #383737;
          margin-right: 5px;
        }
        .c {
          width: 20px;
          height: 20px;
          background: #125721;
          border-radius: 50%;
          margin: 0 5px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .assured {
        display: inline;
        margin-right: 10px;
      }
    }
    .clear_filters {
      padding: 5px 10px;
      display: block;
      width: 50%;
      margin: 0 auto;
      font-size: 1.2em;
      margin-top: 30px;
      background: #222;
      color: white;
    }
  }
`;

export default Filters;
