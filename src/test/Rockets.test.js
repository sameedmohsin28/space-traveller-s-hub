import React from 'react';
import { render } from '@testing-library/react';
import Rockets from './Mocks/Rockets_SectionMock';

describe('Rockets component', () => {
  test('renders a section element with the class name "reservation-wrapper" should be visible', () => {
    const { container } = render(<Rockets />);
    const sectionElement = container.querySelector('.reservation-wrapper');
    expect(sectionElement).toBeVisible();
  });

  test(
    'This div have class name details-container shoul have h2 p and button child',
    () => {
      const { container } = render(<Rockets />);
      const divElement = container.querySelector('.details-container');
      expect(divElement.childNodes).toHaveLength(3);
    },
  );
});
