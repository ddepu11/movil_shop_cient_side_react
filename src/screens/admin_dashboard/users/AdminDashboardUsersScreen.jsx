import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { listUsers } from '../../../actions/adminActions';
import apiUrl from '../../../api/apiUrl';
import Button from '../../../components/Button';
import CircleLoader from '../../../components/CircleLoader';

const AdminDashboardUsersScreen = () => {
  const dispatch = useDispatch();

  const { users, adminLoading } = useSelector((state) => state.admin);

  useEffect(() => {
    users.length === 0 && dispatch(listUsers());
  }, [dispatch, users]);

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
      {users.map((i) => (
        <section key={i._id} className="flex">
          <div className="dp">
            <img src={`${apiUrl}/dp/${i.displayPicture}`} alt={i.firstName} />
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
              <span> {new Date(i.createdAt).toLocaleDateString('en-IN')}</span>
            </div>

            <div className="row flex">
              <p>No of Orders:</p>
              <span> {i.orders.length}</span>
            </div>

            <div className="row flex">
              <p>Cart items:</p>
              <span> {i.cart.length}</span>
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
            >
              Remove
            </Button>
          </div>
        </section>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 10px 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

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
`;

export default AdminDashboardUsersScreen;
