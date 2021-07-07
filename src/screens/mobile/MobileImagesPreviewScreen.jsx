import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import Button from '../../components/Button';

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

  const history = useHistory();
  const handleAddToCart = () => {
    history.push('/cart');
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

      <div className="buttons flex">
        <Button
          bgColor="#e49c00"
          color="#ffffff"
          pt="15px"
          pb="15px"
          pr="30px"
          pl="30px"
          mr="15px"
          fs="1em"
          handleClick={handleAddToCart}
        >
          <div className="flex">
            <FiShoppingCart fontSize="1.15em" />
            <span>Add to Cart</span>
          </div>
        </Button>

        <Button
          bgColor="#f14c00"
          color="#fff7f7"
          pt="15px"
          pb="15px"
          pr="30px"
          pl="30px"
          fs="1em"
        >
          <div className="flex">
            <AiTwotoneThunderbolt fontSize="1.15em" />
            <span>Buy Now</span>
          </div>
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  flex-direction: column;
  border: 1px dashed #d1d1d1;
  /* border: 1px dashed red; */
  align-self: flex-start;
  padding: 15px 0 5px;

  .previews {
    width: 100%;
    align-items: flex-start;

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

  .buttons {
    padding: 30px 0 0;

    div {
      span {
        text-transform: uppercase;
        margin-left: 10px;
        font-weight: bold;
        letter-spacing: 0.9px;
      }
    }
  }
`;

export default MobileImagesPreviewScreen;
