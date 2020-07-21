import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
    children,
    className,
    onClick,
    disabled,
}) => (
    <button
        data-testid="button-atom"
        className={`${className} ${disabled && 'button-disabled'}`}
        type="button"
        onClick={onClick}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

export default Button;
