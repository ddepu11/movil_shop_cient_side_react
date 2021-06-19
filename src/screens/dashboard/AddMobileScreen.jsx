import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { IoTrashBin } from 'react-icons/io5';
import { AiOutlineFileAdd } from 'react-icons/ai';
import Button from '../../components/Button';
import FormControl from '../../components/FormControl';
import { sendNotification } from '../../actions/notificationActions';
import setValidationMessage from '../../utils/setValidationMessage';
import clearAllSetTimeOut from '../../utils/clearAllSetTimeOut';

const AddMobileScreen = () => {
  const setTimeOutId = useRef(0);

  useEffect(() => {
    console.log('');
    return () => clearAllSetTimeOut(setTimeOutId);
  }, []);

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
    colors: '',
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
  // const colorsMessageRefTag = useRef(null);

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

  const validateMovileForm = () => {
    const {
      title,
      price,
      brand,
      internalMemory,
      ram,
      os,
      battery,
      processor,
      camera,
      files,
    } = mobileInfo;

    if (!title) {
      setValidationMessage(
        titleMessageRefTag,
        'text field cant be empty!!!',
        'error',
        setTimeOutId
      );
    }

    if (!price) {
      setValidationMessage(
        priceMessageRefTag,
        'price field cant be empty!!!',
        'error',
        setTimeOutId
      );
    }

    if (!brand) {
      setValidationMessage(
        brandMessageRefTag,
        'brand field cant be empty!!!',
        'error',
        setTimeOutId
      );
    }

    if (!internalMemory) {
      setValidationMessage(
        internalMemoryMessageRefTag,
        'Internal memory field cant be empty!!!',
        'error',
        setTimeOutId
      );
    }

    if (!ram) {
      setValidationMessage(
        ramMessageRefTag,
        'ram field cant be empty!!!',
        'error',
        setTimeOutId
      );
    }

    if (!os) {
      setValidationMessage(
        osMessageRefTag,
        'os field cant be empty!!!',
        'error',
        setTimeOutId
      );
    }

    if (!battery) {
      setValidationMessage(
        batteryMessageRefTag,
        'battery field cant be empty!!!',
        'error',
        setTimeOutId
      );
    }

    if (!processor) {
      setValidationMessage(
        processorMessageRefTag,
        'processor field cant be empty!!!',
        'error',
        setTimeOutId
      );
    }

    if (!camera) {
      setValidationMessage(
        cameraMessageRefTag,
        'camera field cant be empty!!!',
        'error',
        setTimeOutId
      );
    }

    if (files.length === 0) {
      setValidationMessage(
        imageUploadValidationMessageTag,
        'please select atleast 1 image file',
        'error',
        setTimeOutId
      );
    }
  };

  const handleSubmit = () => {
    validateMovileForm();
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
            label="Internal Memory"
            refObj={internalMemoryMessageRefTag}
          />
        </div>
        <div className="row flex">
          <FormControl
            inputValue={mobileInfo.os}
            type="string"
            id="os"
            handleInput={handleInput}
            placeholder="OS of mobile"
            name="os"
            label="os"
            refObj={osMessageRefTag}
          />
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
              borderRadius="5px"
              bgColor="rgb(32, 145, 60)"
              color="white"
              width="40%"
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
        /* border: 1px solid red; */
        .upload_images {
          flex-direction: column;
          align-items: flex-start;
          transform: translateY(-11px);

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
                /* font-weight: bold; */
                letter-spacing: 0.1px;
              }
            }

            .file_msg {
              align-self: flex-start;
            }

            .message.error {
              color: red;
              font-size: 1.2em;
            }

            .message.success {
              color: green;
              font-size: 1.2em;
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
        padding: 0 0px 0 100px;
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
