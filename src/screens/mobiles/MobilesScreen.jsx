import React from 'react';
import styled from 'styled-components';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { MdFilterList } from 'react-icons/md';
import FiltersScreen from './FiltersScreen';
import Hero from '../../components/Hero';
import GridViewScreen from './views/GridViewScreen';
import ListViewScreen from './views/ListViewScreen';

import MobileScreenLogic from './logic/MobileScreenLogic';
import CircleLoader from '../../components/CircleLoader';

const MobilesScreen = () => {
  const {
    filteredMobile,
    handleInput,
    handleButtons,
    filters,
    mobileLoading,
    showFilterSideBar,
    filterBarRef,
  } = MobileScreenLogic();

  if (mobileLoading) {
    return (
      <CircleLoader
        bgColor="var(--secondary-color)"
        wrapperH="80vh"
        spW="90px"
        spH="90px"
        cirW="90px"
        cirH="90px"
      />
    );
  }

  return (
    <>
      <Hero title="mobiles" />

      <Wrapper className="w-960 flex">
        <FiltersScreen
          filterBarRef={filterBarRef}
          filters={filters}
          handleButtons={handleButtons}
          handleInput={handleInput}
        />

        <section className="display_products">
          <header className="header flex">
            <MdFilterList className="filter_icon" onClick={showFilterSideBar} />
            <h2>{filteredMobile.length} mobiles found</h2>

            <div className="sort_by">
              <label htmlFor="sort">Sort By: </label>
              <select
                name="sortBy"
                id="sort"
                value={filters.sortBy}
                onChange={handleInput}
              >
                <option value="lowest">Price (lowest)</option>
                <option value="highest">Price (highest)</option>
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
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  padding: 30px 6px;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;

  .display_products {
    width: 78%;
    .header {
      justify-content: space-between;
      margin-bottom: 20px;

      .filter_icon {
        display: none;
      }

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

  @media screen and (max-width: 760px) {
    display: block;
    padding: 15px 6px;

    .display_products {
      width: 100%;

      .header {
        .filter_icon {
          display: block;
          font-size: 1.8em;
          cursor: pointer;
          color: var(--secondary-color);
        }

        h2 {
          font-size: 1em;
          letter-spacing: 0px;
        }

        .sort_by {
          h2 {
            font-size: 0.9em;
          }

          select {
            padding: 2px 5px;
          }
        }

        .view_by {
          width: 20%;

          span {
            font-size: 0.9em;
          }

          button {
            font-size: 1em;
          }
        }
      }
    }

    .show_filter_bar {
      transform: translateX(0%);
    }
  }

  @media screen and (max-width: 520px) {
    .display_products {
      .header {
        .filter_icon {
          font-size: 1.4em;
        }

        h2 {
          font-size: 0.9em;
        }

        .sort_by {
          label {
            display: none;
          }

          select {
            padding: 2px 5px;
            font-size: 0.8em;
          }
        }

        .view_by {
          width: 10%;

          span {
            font-size: 0.9em;
            display: none;
          }

          button {
            font-size: 1em;
          }
        }
      }
    }
  }
`;

export default MobilesScreen;
