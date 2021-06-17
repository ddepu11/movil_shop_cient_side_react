import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { GiBowTieRibbon } from 'react-icons/gi';
import Button from '../../components/Button';

const AsideScreen = () => {
  const { userInfo } = useSelector((state) => state.user);

  console.log(userInfo);
  const { displayPicture, firstName, lastName } = userInfo;

  return (
    <Wrapper className="flex">
      <Button
        pt="6px"
        pb="6px"
        pl="6px"
        pr="6px"
        fs="1.2em"
        color="white"
        bSh="rgba(0, 0, 0, 0.3) 0px 10px 20px, rgba(0, 0, 0, 0.22) 0px 10px 12px"
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
      <div className="info">
        <p>
          {firstName} {lastName}
        </p>
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
`;

export default AsideScreen;
