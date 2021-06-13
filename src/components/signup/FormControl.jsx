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
  <Wrapper className="form-control">
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

const Wrapper = styled.div``;

export default FormControl;
