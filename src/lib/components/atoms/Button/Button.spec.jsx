import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

const setup = (text) => {
    const { getByTestId } = render(<Button>{text}</Button>);

    return { getByTestId };
};

describe('<Button />', () => {
    it('Should render Button component', () => {
        const { getByTestId } = setup('Any Text Here');
        expect(getByTestId('button-atom')).toBeDefined();
    });
});
