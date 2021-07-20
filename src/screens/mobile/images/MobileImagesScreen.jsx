import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MobileCartBuyButtons from './MobileCartBuyButtons';
import MobileImagesScreenLogic from './logic/MobileImagesScreenLogic';
import apiUrl from '../../../api/apiUrl';

const MobileImagesScreen = ({ color }) => {
  const { handleHover, preview, title, pictures, sellerInfo } =
    MobileImagesScreenLogic();

  return (
    <Wrapper className="flex">
      <div className="previews flex">
        <div className="left-section flex">
          {pictures &&
            pictures.map((p) => (
              <div className="small_img" key={p}>
                <img
                  onMouseEnter={handleHover}
                  alt={title}
                  src={`${apiUrl}/sellers/${sellerInfo.id}/${p}`}
                />
              </div>
            ))}
        </div>

        {preview && (
          <div className="right-sction">
            <img alt="mobile_preview" src={preview} />
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
  width: 40%;

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

  @media screen and (max-width: 420px) {
    .previews {
      justify-content: flex-start;

      .left-section {
        .small_img {
          width: 60px;
          height: 70px;
          margin-bottom: 10px;
        }
      }

      .right-sction {
        margin-left: 10px;
        width: 200px;
        height: 470px;
      }
    }
  }
`;

MobileImagesScreen.propTypes = {
  color: PropTypes.string.isRequired,
};

export default MobileImagesScreen;
