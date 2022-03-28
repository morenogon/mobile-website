import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';
import { MemoryRouter } from 'react-router-dom';

test('renders content', () => {

    const component = render(
        <MemoryRouter>
            <NotFoundPage />
        </MemoryRouter>
    );

    expect(component.container).toHaveTextContent('Page not found. Go back to');
});
