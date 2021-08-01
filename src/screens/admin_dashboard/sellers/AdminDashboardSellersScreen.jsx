import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import CircleLoader from '../../../components/CircleLoader';
import apiUrl from '../../../api/apiUrl';
import Button from '../../../components/Button';
import {
  listSeller,
  listMobiles,
  deleteSeller,
} from '../../../actions/adminActions';

const AdminDashboardSellersScreen = () => {
  const { mobiles, sellers, adminLoading } = useSelector(
    (state) => state.admin
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listSeller());

    dispatch(listMobiles());
  }, [dispatch]);

  const handleDeleteSeller = (e) => {
    const { value } = e.target.dataset;

    dispatch(deleteSeller(value));
  };

  if (adminLoading) {
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
    <Wrapper>
      {sellers.length !== 0 ? (
        <h2>All The seller in the system</h2>
      ) : (
        <div className="no_seller">
          <h2>Sorry There are no sellers registered</h2>
        </div>
      )}

      <div className="sellers">
        {sellers.length !== 0 &&
          sellers.map((i) => (
            <section key={i._id} className="flex">
              <div className="dp">
                <img
                  src={`${apiUrl}/dp/${i.displayPicture}`}
                  alt={i.firstName}
                />
              </div>

              <div className="info">
                <div className="row flex">
                  <p>Name:</p>
                  <span>{`${i.firstName} ${i.lastName}`}</span>
                </div>

                <div className="row flex">
                  <p>Email:</p>
                  <span>{i.email}</span>
                </div>

                <div className="row flex">
                  <p>Phone Number:</p>
                  <span>{i.phoneNumber}</span>
                </div>

                <div className="row flex">
                  <p>Gender:</p>
                  <span>{i.gender}</span>
                </div>

                <div className="row flex">
                  <p>Regitered On:</p>
                  <span>
                    {' '}
                    {new Date(i.createdAt).toLocaleDateString('en-IN')}
                  </span>
                </div>

                <div className="row flex">
                  <p>Mobiles:</p>
                  <span>
                    {' '}
                    {
                      mobiles.filter((m) => m.sellerInfo.email === i.email)
                        .length
                    }
                  </span>
                </div>
              </div>

              <div className="delete_btn">
                <Button
                  pt="5px"
                  pb="5px"
                  pl="20px"
                  pr="20px"
                  bgColor="var(--danger-color)"
                  fs="0.8em"
                  dataVal={i._id}
                  handleClick={handleDeleteSeller}
                >
                  Remove
                </Button>
              </div>
            </section>
          ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 10px 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  h2 {
    color: var(--little-dark-color);
    padding: 8px 0 15px;
  }

  .no_seller {
    display: grid;
    place-items: center;
    text-align: center;
    height: 40vh;
    font-size: 1.2em;
    text-transform: capitalize;
  }

  .sellers {
    section {
      padding: 10px 10px;
      justify-content: space-between;
      align-items: flex-start;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
        rgb(209, 213, 219) 0px 0px 0px 1px inset;
      margin-bottom: 15px;
    }

    .dp {
      width: 200px;
      height: 200px;
      align-self: center;

      img {
        object-fit: cover;
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }

    .info {
      width: 50%;

      .row {
        justify-content: space-between;
        align-items: flex-start;
        padding: 0px 0px 14px;
      }

      p {
        font-size: 1.1em;
      }

      span {
        margin-left: 10px;
        font-weight: 600;
        color: var(--little-dark-color);
        letter-spacing: 1px;
      }
    }

    .delete_btn {
      padding: 8px 5px 0 0;
    }
  }
`;

export default AdminDashboardSellersScreen;
