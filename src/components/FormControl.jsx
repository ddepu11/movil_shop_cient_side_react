import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormControl = ({
  inputValue,
  handleInput,
  id,
  placeholder,
  refObj,
  type,
  name,
  label,
  labelFs,
  inputFs,
  inputW,
  messageFs,
  inputPadding,
  fcPadding,
  fcMargin,
  fcWidth,
}) => (
  <Wrapper
    className="form-control"
    style={{ padding: fcPadding, margin: fcMargin, width: fcWidth }}
  >
    <div className="fc_top">
      <label style={{ fontSize: labelFs }} htmlFor={id}>
        {label}
      </label>
      <span className="must"> *</span>
    </div>

    <input
      style={{ fontSize: inputFs, padding: inputPadding, width: inputW }}
      value={inputValue}
      onChange={handleInput}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
    />

    <p ref={refObj} style={{ fontSize: messageFs }} className="message" />
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
  labelFs: PropTypes.string,
  inputFs: PropTypes.string,
  messageFs: PropTypes.string,
  inputPadding: PropTypes.string,
  fcPadding: PropTypes.string,
  inputW: PropTypes.string,
  fcMargin: PropTypes.string,
  fcWidth: PropTypes.string,
};

FormControl.defaultProps = {
  labelFs: '1.3em',
  inputFs: '1.2em',
  inputW: '100%',
  messageFs: '1.1em',
  inputPadding: '8px 5px',
  fcPadding: '10px 0px  10px',
  fcMargin: 'auto',
  fcWidth: '100%',
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .fc_top {
    padding: 8px 0;

    .must {
      color: red;
      font-size: 1.25em;
    }

    label {
      color: #222;
    }
  }

  input {
    background: #e9ebeb;
    border-radius: 5px;
    color: #5a5a5f;
  }

  .pwd-label {
    justify-content: space-between;
  }

  .message.error {
    color: red;
  }

  .message.success {
    color: green;
  }

  @media screen and (max-width: 700px) {
    input {
      padding: 8px 5px;
      font-size: 8em;
    }
  }

  @media screen and (max-width: 555px) {
    margin-bottom: 20px;

    .fc_top {
      padding: 8px 0;

      .must {
        font-size: 1.2em;
      }

      label {
        font-size: 1.2em;
      }
    }

    .message.error {
      font-size: 1em;
    }

    .message.success {
      font-size: 1em;
    }

    input {
      font-size: 1em !important;
      padding: 5px 5px;
      width: 100% !important;
    }
  }
`;

export default FormControl;
