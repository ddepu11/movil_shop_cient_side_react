import React from 'react';
import styled from 'styled-components';
import { IoTrashBin } from 'react-icons/io5';
import { AiOutlineFileAdd } from 'react-icons/ai';
import Button from '../../../components/Button';
import FormControl from '../../../components/FormControl';
import AddMobileScreenLogic from './logic/AddMobileScreenLogic';

const DashboardAddMobileScreen = () => {
  const {
    handleSubmit,
    handleColors,
    mobileColors,
    removeAPreviewImage,
    addMoreImages,
    handleMobileImages,
    handleInput,
    mobileInfo,
    priceMessageRefTag,
    titleMessageRefTag,
    colorsMessageRefTag,
    processorMessageRefTag,
    batteryMessageRefTag,
    ramMessageRefTag,
    imageUploadValidationMessageTag,
    internalMemoryMessageRefTag,
    cameraMessageRefTag,
    osMessageRefTag,
    brandMessageRefTag,
    releaseImageObjectUrl,
  } = AddMobileScreenLogic();

  return (
    <Wrapper>
      <h1>Add a new mobile</h1>

      <div className="form">
        <div className="row flex">
          <FormControl
            inputValue={mobileInfo.title}
            type="text"
            id="title"
            handleInput={handleInput}
            placeholder="Name of mobile"
            name="title"
            label="Title"
            refObj={titleMessageRefTag}
            inputW="85%"
          />

          <FormControl
            inputValue={mobileInfo.price}
            type="number"
            id="price"
            handleInput={handleInput}
            placeholder="Price of mobile"
            name="price"
            label="Price (INR) "
            refObj={priceMessageRefTag}
            inputW="85%"
          />
        </div>

        <div className="row flex">
          <FormControl
            inputValue={mobileInfo.brand}
            type="text"
            id="brand"
            handleInput={handleInput}
            placeholder="Brand of mobile"
            name="brand"
            label="Brand"
            refObj={brandMessageRefTag}
            inputW="85%"
          />

          <FormControl
            inputValue={mobileInfo.internalMemory}
            type="number"
            id="internalMemory"
            handleInput={handleInput}
            placeholder="Internal memory of mobile"
            name="internalMemory"
            label="Internal Memory (GB)"
            refObj={internalMemoryMessageRefTag}
            inputW="85%"
          />
        </div>

        <div className="row flex">
          <div className="os_section">
            <div className="os-top flex">
              <p>Operating System</p>
              <span
                style={{ marginLeft: '5px', color: 'red', fontSize: '1.2em' }}
              >
                *
              </span>
            </div>

            <div className="os-middle">
              <div className="android flex">
                <label htmlFor="android">Android</label>
                <input
                  onChange={handleInput}
                  type="radio"
                  id="android"
                  name="os"
                  value="android"
                />
              </div>

              <div className="ios flex">
                <label htmlFor="ios">IOS</label>
                <input
                  onChange={handleInput}
                  type="radio"
                  name="os"
                  id="ios"
                  value="ios"
                />
              </div>
            </div>

            <p ref={osMessageRefTag} className="message" />
          </div>

          <FormControl
            inputValue={mobileInfo.ram}
            type="number"
            id="ram"
            handleInput={handleInput}
            placeholder="Ram of mobile"
            name="ram"
            label="Ram (GB)"
            refObj={ramMessageRefTag}
            inputW="85%"
          />
        </div>

        <div className="row flex">
          <FormControl
            inputValue={mobileInfo.processor}
            type="number"
            id="processor"
            handleInput={handleInput}
            placeholder="Processor of mobile"
            name="processor"
            label="Processor (GHz)"
            refObj={processorMessageRefTag}
            inputW="85%"
          />
          <FormControl
            inputValue={mobileInfo.camera}
            type="number"
            id="camera"
            handleInput={handleInput}
            placeholder="Camera of mobile"
            name="camera"
            label="Camera (MP)"
            refObj={cameraMessageRefTag}
            inputW="85%"
          />
        </div>

        <div className="row flex">
          <FormControl
            inputValue={mobileInfo.battery}
            type="number"
            id="battery"
            handleInput={handleInput}
            placeholder="Battery of mobile"
            name="battery"
            label="Battery (Mah)"
            refObj={batteryMessageRefTag}
            inputW="85%"
          />

          <div className="upload_images_section">
            <div className="upload_images flex">
              <div className="header flex">
                <p>Upload Images</p>{' '}
                <span
                  style={{
                    color: 'red',
                    fontSize: '1.25em',
                    marginLeft: '10px',
                  }}
                >
                  *
                </span>
              </div>

              <div className="footer flex">
                <label htmlFor="mobile_image">
                  Choose files...<span className="browse_btn">Browse</span>
                </label>
                <input
                  type="file"
                  id="mobile_image"
                  onChange={handleMobileImages}
                  multiple
                  accept=".png, .jpg, .jpeg"
                />
                <p
                  ref={imageUploadValidationMessageTag}
                  className="message file_msg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row color_row flex">
          <div className="color_section">
            <div className="colors_top flex">
              <p>Colors</p>
              <span
                style={{ marginLeft: '5px', color: 'red', fontSize: '1.2em' }}
              >
                *
              </span>
            </div>
            <div className="colors_top">
              {mobileColors.map((e) => (
                <Button
                  key={e}
                  pt="0px"
                  pb="0px"
                  pl="0px"
                  pr="0px"
                  borderRadius="50%"
                  bgColor={e}
                  width="25px"
                  height="25px"
                  color={e === 'white' || e === '#FFD700' ? 'black' : 'white'}
                  mr="20px"
                  bSh=" rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
                  handleClick={handleColors}
                  fs="0.8em"
                  dataVal={e}
                >
                  {mobileInfo.colors.includes(e) ? `✓` : ''}
                </Button>
              ))}
            </div>
            <p ref={colorsMessageRefTag} className="message" />
          </div>

          <div className="submit_btn_div">
            <Button
              pt="10px"
              pb="10px"
              pl="20px"
              pr="20px"
              mt="22px"
              borderRadius="5px"
              bgColor="var(--success-color)"
              color="white"
              width="85%"
              handleClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>

        {mobileInfo.previews.length !== 0 ? (
          <div className="row flex images_preview">
            {mobileInfo.previews.map((e, index) => (
              <div className="img" key={e}>
                <img
                  src={e}
                  alt={`Preview ${index}`}
                  onLoad={releaseImageObjectUrl}
                />

                <IoTrashBin
                  className="remove_img_btn"
                  onClick={() =>
                    removeAPreviewImage(mobileInfo.files[index], e)
                  }
                  type="button"
                />
              </div>
            ))}

            <div className="add_btn">
              <label htmlFor="upload_more">
                <AiOutlineFileAdd className="plus" />
              </label>
              <input
                type="file"
                multiple
                accept=".png, .jpg, .jpeg"
                id="upload_more"
                onChange={addMoreImages}
              />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  h1 {
    text-align: center;
    font-size: 1.5em;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    padding: 6px 0 18px;
  }

  .form {
    margin: 0 auto;
    width: 85%;

    .row {
      justify-content: space-between;
      width: 100%;
      margin-left: 50px;

      .color_section,
      .os_section {
        width: 100%;

        .os-top,
        .colors_top {
          justify-content: flex-start;

          p {
            padding: 8px 0;
            font-size: 1.3em;
            color: #222;
          }
        }

        .message.error {
          color: var(--danger-color);
          font-size: 1.2em;
        }

        .message.success {
          color: var(--success-color);
          font-size: 1.2em;
        }
      }

      .os_section {
        .os-middle {
          width: 40%;

          .android {
            padding: 0 0 8px;
          }

          .android,
          .ios {
            justify-content: space-between;

            label {
              font-size: 1.05em;
            }

            input {
              width: 10%;
            }
          }
        }
      }

      .upload_images_section {
        width: 100%;

        .upload_images {
          flex-direction: column;
          align-items: flex-start;

          .header {
            padding: 8px 0 10px;
            width: 80%;
            justify-content: flex-start;

            p {
              font-size: 1.3em;
              color: #222;
            }
          }

          .footer {
            width: 80%;
            flex-direction: column;

            label {
              width: 100%;
              padding: 11px 0px 11px 3px;
              border: 1px solid #a7a7a7;
              font-size: 0.8em;
              position: relative;
              color: #808080;
              background: #fff;
              border-radius: 0.25rem;
              box-shadow: inset 0 0.2rem 0.4rem #cacaca;

              .browse_btn {
                background: #a8aaaa;
                color: #111;
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                display: grid;
                place-items: center;
                padding: 0 15px;
                font-size: 1.2em;
                letter-spacing: 0.1px;
              }
            }

            .file_msg {
              align-self: flex-start;
              color: var(--danger-color);
              font-size: 1.1em;
            }

            label:hover {
              box-shadow: inset 0 0.2rem 0.4rem #b4b4b4;

              .browse_btn {
                color: #c9c3c3;
                background: #303030;
              }
            }

            input {
              display: none;
            }
          }
        }
      }
    }

    .color_row {
      .submit_btn_div {
        width: 100%;
      }
    }

    .images_preview {
      padding: 20px 00px;
      margin-top: 15px;
      flex-wrap: wrap;
      gap: 1.3rem 25px;
      justify-content: center;
      box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
        rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;

      .img {
        width: 200px;
        height: 200px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
            rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
            rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
          transition: transform 0.5s ease;
        }
        img:hover {
          transform: scale(1.2) translateY(-5px);
        }

        position: relative;
      }

      .remove_img_btn {
        color: var(--danger-color);
        position: absolute;
        background: transparent;
        top: 4px;
        right: 2px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        cursor: pointer;
      }

      .add_btn {
        width: 200px;
        height: 200px;
        display: grid;
        place-items: center;
        font-size: 5em;
        cursor: pointer;
        color: var(--tertiary-color);
        .plus {
          transition: transform 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
        }
        .plus:hover {
          transform: scale(1.8);
        }
        input {
          display: none;
        }
      }
    }
  }

  @media screen and (max-width: 850px) {
    h1 {
      padding: 10px 0 12px;
    }

    .form {
      width: 100%;

      .row {
        margin-left: 30px;
      }

      .images_preview {
        padding: 25px 00px;
        margin-top: 20px;
        gap: 1.5rem 25px;

        .img {
          width: 200px;
          height: 200px;
          img:hover {
            transform: scale(1.2) translateY(-5px);
          }
        }

        .add_btn {
          width: 200px;
          height: 200px;
          display: grid;
          place-items: center;
          font-size: 5em;
          cursor: pointer;
          color: var(--tertiary-color);
          .plus {
            transition: transform 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
          }
          .plus:hover {
            transform: scale(1.8);
          }
          input {
            display: none;
          }
        }
      }
    }
  }

  @media screen and (max-width: 555px) {
    h1 {
      padding: 10px 0;
      letter-spacing: 2px;
    }

    .form {
      width: 100%;

      .row {
        flex-direction: column;
        margin-left: 0px;

        .os_section {
          padding: 10px 0;
          .os-middle {
            width: 40%;
            .android {
              padding: 0 0 8px;
            }

            .android,
            .ios {
              justify-content: space-between;

              label {
                font-size: 1.05em;
              }

              input {
                width: 10%;
              }
            }
          }
        }

        .upload_images_section {
          padding: 10px 0px;
          .upload_images {
            .header {
              padding: 8px 0 10px;
              width: 100%;
              justify-content: flex-start;

              p {
                font-size: 1.3em;
                color: #222;
              }
            }

            .footer {
              width: 100%;

              label {
                width: 100%;
                padding: 11px 0px 11px 3px;
                border: 1px solid #a7a7a7;
                font-size: 0.8em;
                position: relative;
                color: #808080;
                background: #fff;
                border-radius: 0.25rem;
                box-shadow: inset 0 0.2rem 0.4rem #cacaca;

                .browse_btn {
                  background: #a8aaaa;
                  color: #111;
                  position: absolute;
                  right: 0;
                  top: 0;
                  bottom: 0;
                  display: grid;
                  place-items: center;
                  padding: 0 15px;
                  font-size: 1.2em;
                  letter-spacing: 0.1px;
                }
              }

              .file_msg {
                align-self: flex-start;
              }

              label:hover {
                box-shadow: inset 0 0.2rem 0.4rem #b4b4b4;

                .browse_btn {
                  color: #c9c3c3;
                  background: #303030;
                }
              }
            }
          }
        }
      }

      .color_row {
        .color_section {
          padding: 15px 0 10px;
        }
        .submit_btn_div {
          button {
            width: 100% !important;
          }
        }
      }

      .images_preview {
        gap: 1.5rem 10px;
        padding: 10px 10px;

        .img {
          width: 100%;
          height: 400px;

          img:hover {
            transform: scale(1.08) translateY(-3px);
          }
        }

        .add_btn {
          font-size: 4em;
          .plus:hover {
            transform: scale(1.5);
          }
        }
      }
    }
  }

  @media screen and (max-width: 435px) {
    h1 {
      padding: 2px 0;
      letter-spacing: 2px;
      font-size: 1.3em;
    }

    .form {
      .form-control {
        label {
          font-size: 1.2em !important;
        }

        input {
          padding: 6px 4px !important;
        }
      }

      .row {
        .color_section,
        .os_section {
          .os-top,
          .colors_top {
            p {
              font-size: 1.2em;
            }
          }

          .message.error {
            font-size: 1.1em;
          }

          .message.success {
            font-size: 1.1em;
          }
        }

        .upload_images_section {
          .upload_images {
            .header {
              p {
                font-size: 1.2em;
              }
            }
          }
        }
      }

      .color_row {
        .submit_btn_div {
          button {
            padding: 8px 10px !important;
          }
        }
      }
    }
  }
`;

export default DashboardAddMobileScreen;
