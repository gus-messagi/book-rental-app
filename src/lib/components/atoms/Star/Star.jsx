import React from 'react';
import PropTypes from 'prop-types';
import StarNotFilled from './star.svg';
import StarFilled from './star-filled.svg';

const Star = ({ isFilled }) => (
    <img
        src={isFilled ? StarFilled : StarNotFilled}
        alt="star"
        width="18"
    />
);

Star.propTypes = {
    isFilled: PropTypes.bool,
};

export default Star;
