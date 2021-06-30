import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import Button from '../../components/Button';

const FiltersScreen = () => (
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
          <div className="custumer_rating_btns">
            <Button
              bgColor="transparent"
              color="#222"
              borderRadius="1px"
              bSh=""
              pb="5px"
              pt="5px"
              ml="10px"
              width="50%"
            >
              <div className="flex" style={{ justifyContent: 'space-between' }}>
                <span>5</span> <AiFillStar />
                <span>and above</span>
              </div>
            </Button>
            <Button
              bgColor="transparent"
              color="#222"
              borderRadius="1px"
              bSh=""
              pb="5px"
              pt="5px"
              ml="10px"
              width="50%"
            >
              <div className="flex" style={{ justifyContent: 'space-between' }}>
                <span>4</span> <AiFillStar />
                <span>and above</span>
              </div>
            </Button>
            <Button
              bgColor="transparent"
              color="#222"
              borderRadius="1px"
              bSh=""
              pb="5px"
              pt="5px"
              ml="10px"
              width="50%"
            >
              <div className="flex" style={{ justifyContent: 'space-between' }}>
                <span>3</span> <AiFillStar />
                <span>and above</span>
              </div>
            </Button>
            <Button
              bgColor="transparent"
              color="#222"
              borderRadius="1px"
              bSh=""
              pb="5px"
              pt="5px"
              ml="10px"
              width="50%"
            >
              <div className="flex" style={{ justifyContent: 'space-between' }}>
                <span>2</span> <AiFillStar />
                <span>and above</span>
              </div>
            </Button>
            <Button
              bgColor="transparent"
              color="#222"
              borderRadius="1px"
              bSh=""
              pb="5px"
              pt="5px"
              ml="10px"
              width="50%"
            >
              <div className="flex" style={{ justifyContent: 'space-between' }}>
                <span>1</span> <AiFillStar />
                <span>and above</span>
              </div>
            </Button>
          </div>
        </div>

        <div className="form-control">
          <h5>Price</h5>
          <input className="price_input" type="range" min="0" max="4222" />
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
          <div className="internal_storage">
            <input type="radio" id="4gb" name="internal_memory" />
            <label htmlFor="4gb">4gb</label>
          </div>
        </div>
        <div className="form-control">
          <h5>Color</h5>

          <div className="colors flex">
            <Button
              bgColor="transparent"
              color="#333"
              fs="1.2em"
              width="30px"
              height="30px"
              mr="10px"
              bSh=""
              borderRadius="50%"
            >
              All
            </Button>

            <Button
              bgColor="#fa0000e6"
              color="#f8f6f6"
              fs="1.2em"
              width="30px"
              height="30px"
              bSh="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
              borderRadius="50%"
            >
              {' '}
            </Button>
          </div>
        </div>

        <div className="form-control">
          <h5 className="assured">MovilShop Assured</h5>
          <input type="checkbox" />
        </div>

        <Button
          bgColor="#fa0000e6"
          color="#f8f6f6"
          borderRadius="1px"
          fs="1.2em"
          pt="8px"
          pb="8px"
          pr="16px"
          pl="16px"
          mt="10px"
          width="100%"
          bSh="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
        >
          Clear Filter
        </Button>
      </form>
    </div>
  </Wrapper>
);

const Wrapper = styled.aside`
  .filters_div {
    .form-control {
      margin-bottom: 25px;
      .price_input {
        width: 100%;
      }
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
        width: 100%;
      }
      ul {
      }
      ul li {
        padding: 0px 5px 10px;
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
        padding: 0 0px 0 10px;
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

export default FiltersScreen;
