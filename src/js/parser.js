export default function json(data) {
  return new Promise((resolve, reject) => {
    // эмуляция обработки ArrayBuffer
    setTimeout(() => {
      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
      const error = new Error("I can't, I have paws");
      reject(error);
    }, 500);
  });
}
