import React from 'react';
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
  <div className="form-control">
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
  </div>
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

export default FormControl;
