import rocketApiMock from './Mocks/Rocket_API_MOCK';

describe('Validation for fetching Rockets', () => {
  test('Data should be fetched successfully', () => {
    // Act
    const data = rocketApiMock();
    // Assert
    expect(data).toEqual([{ id: 1, name: 'ok' }]);
  });
});
