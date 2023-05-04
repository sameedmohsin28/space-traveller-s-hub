import missionsAPIMock from './Mocks/Mission_API_Mock';

describe('Test API fetching', () => {
  test('Fetches API correctly', () => {
    const fetchAPITest = missionsAPIMock();
    expect(fetchAPITest).toEqual([
      {
        id: 1,
        name: 'mock mission',
      },
    ]);
  });
});
