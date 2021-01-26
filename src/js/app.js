import GameSavingLoader from './gameSavingLoader';


(async () => {
  const saving = await GameSavingLoader.load();
  try {
    return (saving);
  } catch (e) {
    return (new Error(`${e} - I can't! I have a paws!`));
  }
})();
