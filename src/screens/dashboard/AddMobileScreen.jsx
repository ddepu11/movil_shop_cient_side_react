import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import FormControl from '../../components/FormControl';

const AddMobileScreen = () => {
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
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMobileInfo({ ...mobileInfo, [name]: value });
  };

  const handleSubmit = () => {
    console.log(mobileInfo);
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
  // const colorsMessageRefTag = useRef(null);

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
            type="text"
            id="price"
            handleInput={handleInput}
            placeholder="Price of mobile"
            name="price"
            label="Price"
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
            type="text"
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
            type="string"
            id="ram"
            handleInput={handleInput}
            placeholder="Ram of mobile"
            name="ram"
            label="Ram"
            refObj={ramMessageRefTag}
          />
        </div>
        <div className="row flex">
          <FormControl
            inputValue={mobileInfo.processor}
            type="string"
            id="processor"
            handleInput={handleInput}
            placeholder="Processor of mobile"
            name="processor"
            label="Processor"
            refObj={processorMessageRefTag}
          />
          <FormControl
            inputValue={mobileInfo.camera}
            type="string"
            id="camera"
            handleInput={handleInput}
            placeholder="Camera of mobile"
            name="camera"
            label="camera"
            refObj={cameraMessageRefTag}
          />
        </div>

        <div className="row flex">
          <FormControl
            inputValue={mobileInfo.battery}
            type="string"
            id="battery"
            handleInput={handleInput}
            placeholder="Battery of mobile"
            name="battery"
            label="Battery"
            refObj={batteryMessageRefTag}
          />

          <div className="form-control">f</div>
        </div>
        {/* Colors */}
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
        padding: 0 0px 0 100px;
        width: 80%;

        input,
        .fc_top {
          width: 80%;
        }
      }
    }
  }
`;

export default AddMobileScreen;
