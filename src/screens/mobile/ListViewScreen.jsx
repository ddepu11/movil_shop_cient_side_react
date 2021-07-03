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
    <Wrapper>
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
          sellerInfo: { id },
        } = mobile;

        return (
          <Mobile
            key={_id}
            imgSrc={pictures[0]}
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
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  border: 1px solid red;
`;

export default ListViewScreen;
