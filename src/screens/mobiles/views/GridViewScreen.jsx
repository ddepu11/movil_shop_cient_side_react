import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Loading from '../../../components/Loading';
import Mobile from '../../../components/Mobile';

const GridViewScreen = () => {
  const { filteredMobile } = useSelector((state) => state.filterMobile);
  const { mobileLoading } = useSelector((state) => state.mobile);

  if (mobileLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {filteredMobile.map((item) => {
        const {
          sellerInfo: { id },
        } = item;

        return (
          <Mobile
            key={item._id}
            mobileId={item._id}
            pictures={item.pictures}
            ram={item.ram}
            camera={item.camera}
            title={item.title}
            price={item.price}
            os={item.os}
            processor={item.processor}
            battery={item.battery}
            internalMemory={item.internalMemory}
            userId={id}
            brand={item.brand}
            colors={item.colors}
            usedFor="grid"
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px 00px;
  padding: 15px 0px 0 15px;

  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 20px 00px;
    padding: 8px 0px 0 10px;

    .mobile_pic {
      height: 130px;
    }
  }
`;

export default GridViewScreen;
