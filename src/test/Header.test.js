import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Components/Header';
// setup done A= Arrange
describe('Validation Test: Header-section', () => {
  test('header tag should be present', () => {
    // A= Act
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const headerElement = screen.getByRole('banner');
    // A = Assert
    expect(headerElement).toBeInTheDocument();
  });
  // test for image
  test('img should be used', () => {
    // A= Act
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const imgElement = screen.getByRole('img');
    // A = Assert
    expect(imgElement).toBeInTheDocument();
  });
  // for heading test
  test('<h1> should be present as heading </h1>', () => {
    // A= Act
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const headElement = screen.getByRole('heading');
    // A = Assert
    expect(headElement).toBeInTheDocument();
  });

  test('Space Traveller\'s Hub : as inner text for heading', () => {
    // A= Act
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const headElement = screen.getByRole('heading');
    // A = Assert
    expect(headElement).toHaveTextContent('Space Traveller\'s Hub');
  });
});
