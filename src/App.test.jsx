import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from "react-router-dom"; // our router

test('renders learn react link', () => {
  render(<MemoryRouter>
    <App />
  </MemoryRouter>)
});
