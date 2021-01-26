import json from './parser';
import read from './reader';


export default class GameSavingLoader {
  static async load() {
    try {
      const savedGame = await read();
      return json(savedGame);
    } catch (err) {
      throw new Error(err);
    }
  }
}
