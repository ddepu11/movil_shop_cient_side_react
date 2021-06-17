import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { GiBowTieRibbon } from 'react-icons/gi';
import Button from '../../components/Button';

const AsideScreen = () => {
  const { userInfo } = useSelector((state) => state.user);

  const { displayPicture, firstName, lastName, email } = userInfo;

  return (
    <Wrapper className="flex">
      <Button
        pt="6px"
        pb="6px"
        pl="6px"
        pr="6px"
        fs="1.2em"
        color="white"
        bSh="rgba(0, 0, 0, 0.3) 0px 8px 18px, rgba(0, 0, 0, 0.22) 0px 8px 10px"
        bgColor="#0066ff"
        borderRadius="5px"
        cursor="auto"
        width="65%"
      >
        <div className="flex">
          <GiBowTieRibbon />
          <span
            style={{
              color: 'white',
              marginLeft: '12px',
              letterSpacing: '2.5px',
            }}
          >
            SELLER
          </span>
        </div>
      </Button>
      <div className="dp">
        <img src={`dp/${displayPicture}`} alt={firstName} />
      </div>
      <div className="info flex">
        <p>
          {firstName} {lastName}
        </p>
        <span>{email}</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  grid-area: a;
  flex-direction: column;
  justify-content: flex-start;

  button {
    transition: transform 0.5s ease;
  }

  button:hover {
    transform: scale(1.1);
  }

  .dp {
    width: 150px;
    height: 150px;
    margin-top: 15px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .dp::before {
    content: '';
    width: 160px;
    height: 160px;
    background: #332;
  }
  .info {
    padding: 10px 0;
    flex-direction: column;
    p {
      font-size: 1.3em;
      color: #332;
    }
    span {
      padding: 5px 0 0;
      font-size: 1em;
      color: #444;
    }
  }
`;

export default AsideScreen;
