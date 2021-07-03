import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Loading from '../../components/Loading';
import Mobile from '../../components/Mobile';

const ListViewScreen = () => {
  const { mobiles, mobileLoading } = useSelector((state) => state.mobile);

  if (mobileLoading) {
    return <Loading />;
  }

  return (
    <Wrapper className="flex">
      {mobiles.map((mobile) => {
        const {
          _id,
          pictures,
          ram,
          camera,
          title,
          price,
          os,
          processor,
          battery,
          internalMemory,
          brand,
          colors,
          sellerInfo: { id, sellerName, sellerEmail },
        } = mobile;

        return (
          <Mobile
            key={_id}
            pictures={pictures}
            ram={ram}
            camera={camera}
            title={title}
            price={price}
            os={os}
            processor={processor}
            battery={battery}
            internalMemory={internalMemory}
            userId={id}
            brand={brand}
            colors={colors}
            handlingUpdate={0}
            usedFor="list"
            sellerName={sellerName}
            sellerEmail={sellerEmail}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  border: 1px solid red;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px 0;
`;

export default ListViewScreen;
