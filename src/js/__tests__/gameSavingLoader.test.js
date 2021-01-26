import GameSavingLoader from '../gameSavingLoader';

test('check the promise',
  async () => {
    const gameSave = await GameSavingLoader.load();
    const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
    expect(gameSave).toEqual(expected);
  });


test('GameSavingLoader error', async () => {
  await expect(Promise.reject(new Error("I can't, I have paws"))).rejects.toThrow("I can't, I have paws");
});
