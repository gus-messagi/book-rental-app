import React from 'react';
import { render } from '@testing-library/react';
import IconButton from './IconButton';

const setup = (img, path) => {
    const { getByTestId } = render(<IconButton img={img} path={path}>Text</IconButton>);

    return {
        getByTestId,
    };
};

describe('<IconButton />', () => {
    it('Should render with Profile icon', () => {
        const img = 'Profile';
        const path = '/profile';
        const { getByTestId } = setup(img, path);
        expect(getByTestId('icon-button-atom')).toBeDefined();
    });

    it('Should render with Logout icon', () => {
        const img = 'Logout';
        const path = './logout';
        const { getByTestId } = setup(img, path);
        expect(getByTestId('icon-button-atom')).toBeDefined();
    });
});
