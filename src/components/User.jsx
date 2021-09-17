import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';
import apiUrl from '../api/apiUrl';
import Button from './Button';

const User = ({ i, handleDelete, mobiles, isSeller }) => (
  <Section className="flex">
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
        <p>Registered On:</p>
        <span> {new Date(i.createdAt).toLocaleDateString('en-IN')}</span>
      </div>

      {isSeller === 'NO' && (
        <>
          <div className="row flex">
            <p>No of Orders:</p>
            <span> {i.orders.length}</span>
          </div>

          <div className="row flex">
            <p>Cart items:</p>
            <span> {i.cart.length}</span>
          </div>
        </>
      )}

      {isSeller === 'YES' && (
        <div className="row flex">
          <p>Mobiles:</p>
          <span>
            {' '}
            {mobiles.filter((item) => item.sellerInfo.id === i._id).length}
          </span>
        </div>
      )}
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
        handleClick={handleDelete}
      >
        Remove
      </Button>
    </div>
  </Section>
);

const Section = styled.section`
  padding: 10px 10px;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  margin-bottom: 20px;

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

  @media screen and (max-width: 725px) {
    flex-direction: column;
    margin-bottom: 25px;
    padding: 0px 10px 5px;

    .dp {
      width: 100%;
      height: 400px;
      margin: 10px 0;

      img {
        border-radius: 0%;
      }
    }

    .info {
      width: 100%;
      margin: 15px 0;

      .row {
        padding: 0px 0px 20px;
      }

      p {
        font-size: 1.2em;
      }

      span {
        margin-left: 0px;
      }
    }

    .delete_btn {
      padding: 0px 0;
      width: 100%;

      button {
        width: 100% !important;
        font-size: 1.2em !important;
        padding: 10px 0px !important;
      }
    }
  }

  @media screen and (max-width: 485px) {
    .dp {
      height: 300px;
    }
  }

  @media screen and (max-width: 400px) {
    .info {
      margin: 10px 0;

      .row {
        padding: 0px 0px 15px;
        flex-direction: column;
      }

      p {
        padding: 0px 0px 2px;
      }
    }

    .delete_btn {
      button {
        font-size: 1.1em !important;
        padding: 8px 0px !important;
      }
    }
  }
`;

User.propTypes = {
  i: PropType.object.isRequired,
  handleDelete: PropType.func.isRequired,
  isSeller: PropType.string.isRequired,
  mobiles: PropType.array,
};

User.defaultProps = {
  mobiles: [],
};

export default User;
