import React from 'react';
import PropTypes from 'prop-types';
import UserIcon from './user.svg';
import LogoutIcon from './logout.svg';
import './IconButton.scss';

const IconButton = ({
    img,
    path,
    children,
    className,
}) => (
    <div
        className={`icon-button-container ${className}`}
    >
        <img src={img === 'profile' ? UserIcon : LogoutIcon} alt="icon-button-icon" height="24" />
        <a
            href={path}
            data-testid="icon-button-atom"
        >
            {children}
        </a>
    </div>
);

IconButton.propTypes = {
    img: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    className: PropTypes.object,
};

export default IconButton;
