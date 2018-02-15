import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './styles';

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  return (
    <div>
      <div>
        <Input
          className={name}
          type="text"
          name={name}
          placeholder={label}
          value={value}
          onChange={onChange}
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
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
