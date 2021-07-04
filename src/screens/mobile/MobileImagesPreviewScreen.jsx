import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const MobileImagesPreviewScreen = () => {
  const {
    mobile: { pictures, title, sellerInfo },
  } = useSelector((state) => state.mobile);

  const [preview, setPreview] = useState('');

  useEffect(() => {
    sellerInfo && setPreview(`/sellers/${sellerInfo.id}/${pictures[0]}`);
  }, [pictures, sellerInfo]);

  const handleHover = (e) => {
    setPreview(e.target.src);
  };

  return (
    <Wrapper className="flex">
      <div className="left-section flex">
        {pictures &&
          pictures.map((p) => (
            <div
              className="small_img"
              key={Math.floor(Math.random() * Date.now())}
            >
              <img
                onMouseEnter={handleHover}
                alt={title}
                src={`/sellers/${sellerInfo.id}/${p}`}
              />
            </div>
          ))}
      </div>

      {preview && (
        <div className="right-sction">
          <img alt="s" src={preview} />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  justify-content: flex-start;
  border: 1px dashed #d1d1d1;

  .left-section {
    flex-direction: column;
    align-items: flex-start;

    .small_img {
      width: 80px;
      height: 80px;
      padding: 5px 1px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      /* transition: all 0.5s ease; */
    }

    .small_img:hover {
      border: 2px solid #0f46dd;
    }
  }

  .right-sction {
    width: 100%;
    height: 480px;
    padding: 10px 0px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export default MobileImagesPreviewScreen;
