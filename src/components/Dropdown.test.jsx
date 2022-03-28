import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders content', () => {
    const dropdownProps = {
        title: 'Title',
        options: [{ code: 0, name: 'name 0' }, { code: 1, name: 'name 1' }],
        onSelect: () => { }
    };

    const component = render(<Dropdown title={dropdownProps.title} options={dropdownProps.options} onSelect={dropdownProps.onSelect} />);

    expect(component.container).toHaveTextContent(dropdownProps.title);
});
