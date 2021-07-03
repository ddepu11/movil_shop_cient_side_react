import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';
// import Product from '../../components/Product';
// import Mobile from '../../components/Mobile';
import { useDispatch } from 'react-redux';
import FiltersScreen from './FiltersScreen';
import Hero from '../../components/Hero';
import GridViewScreen from './GridViewScreen';
import ListViewScreen from './ListViewScreen';
import { listAllMobiles } from '../../actions/mobileActions';

const MobilesScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAllMobiles());
  }, [dispatch]);

  const [filters, setFilters] = useState({
    view: 'grid',
    sortBy: 'lowest',
    search: '',
    brand: 'all',
    star: 'all',
    price: '8000',
    internalMemory: 'all',
    color: 'all',
    movilShopAssured: false,
  });

  const handleButtons = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === 'movilShopAssured') {
      setFilters((prevState) => ({
        ...prevState,
        movilShopAssured: !prevState.movilShopAssured,
      }));
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  return (
    <>
      <Hero title="products" />

      <Wrapper className="w-960">
        <FiltersScreen
          handleInput={handleInput}
          handleButtons={handleButtons}
          filters={filters}
        />

        <section className="display_products">
          <header className="header flex">
            <h2>1200 products found</h2>

            <div className="sort_by">
              <label htmlFor="sort">Sort By: </label>
              <select name="sortBy" id="sort" onChange={handleInput}>
                <option value="lowest">Price (lowest)</option>
                <option value="highest">Price (heighest)</option>
                <option value="a-z">Name (A - Z)</option>
                <option value="z-a">Name (Z - A)</option>
              </select>
            </div>

            <div className="view_by flex">
              <span>View</span>

              <button
                type="button"
                onClick={() => handleButtons('view', 'grid')}
              >
                <BsGrid3X3Gap />
              </button>

              <button
                type="button"
                onClick={() => handleButtons('view', 'list')}
              >
                <AiOutlineUnorderedList />
              </button>
            </div>
          </header>

          {filters.view === 'grid' ? <GridViewScreen /> : <ListViewScreen />}

          {/* <Mobile /> */}
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  padding: 40px 6px;
  display: grid;
  grid-template-columns: 200px 1fr;
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
          font-size: 1.2em;
          padding: 0 0 5px;
        }

        button {
          background: transparent;
          font-size: 1.2em;
        }
      }
    }
  }
`;

export default MobilesScreen;
