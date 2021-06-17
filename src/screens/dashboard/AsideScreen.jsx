import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import { GiBowTieRibbon } from 'react-icons/gi';
// import Button from '../../components/Button';

const AsideScreen = () => {
  const { userInfo } = useSelector((state) => state.user);

  const { displayPicture, firstName, lastName, email } = userInfo;

  return (
    <Wrapper className="flex">
      {/* <Button
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
      </Button> */}
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
    width: 180px;
    height: 180px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
      box-shadow: rgba(35, 185, 255, 0.56) 10px 5px 80px 20px;
      transition: transform 1s ease-out;
    }

    img:hover {
      transform: scale(1.4);
    }

    position: relative;
  }

  .dp::before {
    content: '';
    position: absolute;
    z-index: -1;
    height: 103%;
    width: 103%;
    top: -2px;
    left: -2px;
    border-radius: 50%;
    background: #18e999;
    animation: round 3s linear 2s infinite;
  }

  @keyframes round {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.07);
    }

    100% {
      transform: scale(1);
    }
  }

  .info {
    padding: 10px 0;
    flex-direction: column;
    width: 100%;
    p {
      margin-top: 14px;
      font-size: 1.6em;
      letter-spacing: 6px;
      color: #444;
      font-weight: bold;
      text-transform: uppercase;
    }

    span {
      padding: 8px 0 0;
      font-size: 1em;
      color: #444;
    }
  }
`;

export default AsideScreen;
