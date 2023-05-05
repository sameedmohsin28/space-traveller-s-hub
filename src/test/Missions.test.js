import React from 'react';
import { render } from '@testing-library/react';
import MissionsMock from './Mocks/Missions_SectionMock';

describe('Mission component', () => {
  test('renders a section element with class name "table" should be visible', () => {
    const { container } = render(<MissionsMock />);
    const tableElement = container.querySelector('.table');
    expect(tableElement).toBeVisible();
  });

  test('Has 4 child nodes', () => {
    const { container } = render(<MissionsMock />);
    const hasChildNodes = container.querySelector('.tbody-tr');
    expect(hasChildNodes.childNodes).toHaveLength(4);
  });
});
