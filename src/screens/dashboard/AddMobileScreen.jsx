import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { IoTrashBin } from 'react-icons/io5';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import FormControl from '../../components/FormControl';
import { sendNotification } from '../../actions/notificationActions';
import clearAllSetTimeOut from '../../utils/clearAllSetTimeOut';
import validateMovileForm from '../../utils/validateAddMobileForm';
import { createMobile } from '../../actions/mobileActions';

const AddMobileScreen = () => {
  const history = useHistory();

  const {
    userInfo: { _id },
  } = useSelector((state) => state.user);

  const { mobileSaved } = useSelector((state) => state.mobile);

  const setTimeOutId = useRef(0);

  // Clearing all set timeouts
  useEffect(() => {
    mobileSaved && history.push('/dashboard/all-mobiles');

    return () => clearAllSetTimeOut(setTimeOutId);
  }, [mobileSaved, history]);

  const [mobileInfo, setMobileInfo] = useState({
    title: '',
    price: '',
    brand: '',
    internalMemory: '',
    ram: '',
    os: '',
    battery: '',
    processor: '',
    camera: '',
    colors: [],
    previews: [],
    files: [],
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMobileInfo({ ...mobileInfo, [name]: value });
  };

  const titleMessageRefTag = useRef(null);
  const priceMessageRefTag = useRef(null);
  const brandMessageRefTag = useRef(null);
  const internalMemoryMessageRefTag = useRef(null);
  const ramMessageRefTag = useRef(null);
  const osMessageRefTag = useRef(null);
  const batteryMessageRefTag = useRef(null);
  const processorMessageRefTag = useRef(null);
  const cameraMessageRefTag = useRef(null);
  const imageUploadValidationMessageTag = useRef(null);
  const colorsMessageRefTag = useRef(null);

  const handleMobileImages = (e) => {
    const { previews, files: prevFiles } = mobileInfo;

    const { files } = e.target;
    const pics = Array.from(files);

    previews.length = 0;
    prevFiles.length = 0;

    setMobileInfo({
      ...mobileInfo,
      previews: [...previews],
      files: [...prevFiles],
    });

    pics.forEach(async (el, index) => {
      const fileSRC = URL.createObjectURL(el);

      if (index < 6) {
        setMobileInfo((prevState) => ({
          ...prevState,
          previews: [...prevState.previews, fileSRC],
          files: [...prevState.files, el],
        }));
      }
    });
  };

  const dispatch = useDispatch();

  const addMoreImages = (e) => {
    const { files: prevFiles } = mobileInfo;
    const { files } = e.target;
    let pics = Array.from(files);

    for (let i = 0; i < prevFiles.length; i += 1) {
      pics = pics.filter((el) => el.name !== prevFiles[i].name);
    }

    if (prevFiles.length < 6) {
      pics.forEach((el) => {
        const fileSRC = URL.createObjectURL(el);

        setMobileInfo((prevState) => ({
          ...prevState,
          previews: [...prevState.previews, fileSRC],
          files: [...prevState.files, el],
        }));
      });
    } else {
      console.log('Max 6 can be uploaded');
      dispatch(sendNotification('Cant upload more then 6 images!!!', true));
    }
  };

  // Remove a perticular image
  const removeAPreviewImage = (file, preview) => {
    const newPrev = mobileInfo.previews.filter((el) => el !== preview);
    const newFiles = mobileInfo.files.filter((el) => el.name !== file.name);

    setMobileInfo((prevState) => ({
      ...prevState,
      previews: [...newPrev],
      files: [...newFiles],
    }));

    dispatch(sendNotification(`Removed a preview image!!!`, true));
  };

  // Color Handing
  const mobileColors = ['red', 'white', 'black', '#FFD700', 'grey'];

  const handleColors = (e) => {
    const { value } = e.target.dataset;

    setMobileInfo((prevState) => {
      // if color already exits reomve it
      if (prevState.colors.includes(value)) {
        return {
          ...prevState,
          colors: [...prevState.colors.filter((c) => c !== value)],
        };
      }

      return { ...prevState, colors: [...prevState.colors, value.trim()] };
    });
  };

  const handleSubmit = () => {
    const errorFlag = validateMovileForm(mobileInfo, setTimeOutId, {
      titleMessageRefTag,
      priceMessageRefTag,
      brandMessageRefTag,
      internalMemoryMessageRefTag,
      ramMessageRefTag,
      osMessageRefTag,
      batteryMessageRefTag,
      processorMessageRefTag,
      cameraMessageRefTag,
      imageUploadValidationMessageTag,
      colorsMessageRefTag,
    });

    if (!errorFlag) {
      const formData = new FormData();

      const k = Object.keys(mobileInfo);
      const v = Object.values(mobileInfo);

      formData.append('sellerId', _id);

      for (let i = 0; i < k.length; i += 1) {
        // Exculding previews
        if (k[i] !== 'previews' && k[i] !== 'files') {
          formData.append(k[i].toString().trim(), v[i]);
        }
      }

      mobileInfo.files.forEach((f) => {
        formData.append(`mobilePics`, f);
      });

      dispatch(createMobile(formData, _id));
    }
  };

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
          />
        </div>

        <div className="row flex">
          <div className="form-control">
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
          />

          <div className="form-control">
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

        <div className="row flex">
          <div className="form-control">
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
                  key={Math.floor(Math.random() * Date.now() + e.length)}
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
        </div>

        {mobileInfo.previews.length !== 0 ? (
          <div className="row flex images_preview">
            {mobileInfo.previews.map((e, index) => (
              <div className="img" key={Math.floor(Math.random() * Date.now())}>
                <img src={e} alt={e} />

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

        <div className="row flex">
          <div className="form-control">
            <Button
              pt="10px"
              pb="10px"
              pl="20px"
              pr="20px"
              mt="22px"
              borderRadius="5px"
              bgColor="rgb(32, 145, 60)"
              color="white"
              width="15%"
              handleClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
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
    .row {
      justify-content: space-between;

      .form-control {
        margin-bottom: 20px;

        .os-top,
        .colors_top {
          justify-content: flex-start;

          p {
            padding: 8px 0;
            font-size: 1.3em;
            color: #222;
          }
        }

        .os-middle {
          width: 40%;
          .android {
            padding: 0 0 8px;
          }

          .android,
          .ios {
            justify-content: space-between;
            /* border: 1px solid red; */

            label {
              font-size: 1.05em;
            }

            input {
              width: 10%;
            }
          }
        }

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

        .message.error {
          color: red;
          font-size: 1.2em;
        }

        .message.success {
          color: green;
          font-size: 1.2em;
        }

        padding: 0 0px 0 80px;
        width: 80%;

        input,
        .fc_top {
          width: 80%;
        }
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
        color: #ce3813;
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
        color: #0066ff;
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
`;

export default AddMobileScreen;
