import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Star from '../../atoms/Star';

const StarsInRow = ({ stars }) => {
    const [filledStars, setFilledStars] = useState([]);
    const [notFilledStars, setNotFilledStars] = useState([]);

    useEffect(() => {
        setFilledStars(Array(stars).fill(<Star isFilled />));
        setNotFilledStars(Array(5 - stars).fill(<Star />));
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {filledStars.map((filled) => filled)}
            {notFilledStars.map((notFilled) => notFilled)}
        </>
    );
};

StarsInRow.propTypes = {
    stars: PropTypes.number,
};

export default StarsInRow;
