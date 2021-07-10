import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import MobileCartBuyButtons from './MobileCartBuyButtons';

const MobileImagesScreen = ({ color }) => {
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
      <div className="previews flex">
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
      </div>
      <MobileCartBuyButtons color={color} />
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  flex-direction: column;
  border: 1px dashed #d1d1d1;
  align-self: flex-start;
  padding: 15px 0 5px;

  .previews {
    width: 100%;
    align-items: flex-start;
    gap: 0 20px;

    .left-section {
      flex-direction: column;

      .small_img {
        width: 70px;
        height: 70px;
        margin-bottom: 10px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .small_img:hover {
        border: 2px solid var(--primary-color);
      }
    }

    .right-sction {
      width: 100%;
      height: 480px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;

MobileImagesScreen.propTypes = {
  color: PropTypes.string.isRequired,
};

export default MobileImagesScreen;
