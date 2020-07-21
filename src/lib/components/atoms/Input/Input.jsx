import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({
    type,
    value,
    placeholder,
    onChange,
    className,
}) => (
    <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
    />
);

Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

export default Input;
