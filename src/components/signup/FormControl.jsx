import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormControl = ({
  inputValue,
  handleInput,
  id,
  placeholder,
  refObj,
  type,
  name,
  label,
}) => (
  <Wrapper>
    <div className="fc_top">
      <label htmlFor={id}>{label}</label>
      <span className="must"> *</span>
    </div>

    <input
      value={inputValue}
      onChange={handleInput}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
    />
    <p ref={refObj} className="message" />
  </Wrapper>
);

FormControl.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  refObj: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .gender_heading {
    font-size: 1.3em;
    color: #222;
    font-weight: 400;
    margin-bottom: 8px;
  }
  .gender {
    width: 60%;
    div {
      justify-content: space-between;
      padding-bottom: 2px;
      label {
        padding: 0px 0;
        font-size: 1.2em;
      }
    }
  }
  p {
    font-size: 1.3em;
    padding: 0px 0px 10px;
    color: #222;
  }
  .fc_top {
    padding: 8px 0;
    .must {
      color: red;
      font-size: 1.2em;
    }
    label {
      font-size: 1.3em;
      color: #222;
    }
  }

  input {
    background: #e2dcdc;
    padding: 10px 5px;
    border-radius: 5px;
    font-size: 1.1em;
    width: 65%;
  }

  .dp-label {
    width: 70%;
    padding: 12px 0px 12px 3px;
    border: 1px solid #a7a7a7;
    font-size: 0.8em;
    position: relative;
    color: #535353;
    background: #fff;
    border-radius: 0.25rem;
    box-shadow: inset 0 0.2rem 0.4rem #cacaca;
    .browse_btn {
      background: #c9c3c3;
      color: #303030;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      display: grid;
      place-items: center;
      padding: 0 20px;
    }
  }
  .dp-label:hover {
    box-shadow: inset 0 0.2rem 0.4rem #b4b4b4;

    .browse_btn {
      color: #c9c3c3;
      background: #303030;
    }
  }
  .dp {
    display: none;
  }

  .message.error {
    color: red;
    font-size: 1.2em;
  }

  .message.success {
    color: green;
    font-size: 1.2em;
  }
`;

export default FormControl;
