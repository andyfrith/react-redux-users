import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './styles';

const TextInput = ( {
  name, onChange, placeholder, value, error,
} ) => (
  <div>
    <div>
      <Input
        className={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
    {error && <div className="alert alert-danger">{error}</div>}
  </div>
);

TextInput.defaultProps = {
  error: null,
  placeholder: null,
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default TextInput;
