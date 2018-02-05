import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += ` has-error`;
  }

  return (
    <div className={wrapperClass}>
      <div className="mdl-textfield mdl-js-textfield">
        <input
          type="text"
          name={name}
          className="mdl-textfield__input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
        {error && <div className="alert alert-danger">{error}</div>}
        <label htmlFor={name}>{label}</label>
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
