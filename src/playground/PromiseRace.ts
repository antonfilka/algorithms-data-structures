const PromiseRace = (promises: string | any[]): Promise<any[]> => {
  return new Promise((res, rej) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((result) => {
          res(result);
        })
        .catch((error) => {
          rej(error);
        });
    }
  });
};

const pr1 = new Promise((res) => setTimeout(() => res(1), 1000));
const pr2 = new Promise((res) => setTimeout(() => res(2), 500));
const pr3 = new Promise((res, rej) => setTimeout(() => res(3), 100));

PromiseRace([pr1, pr2, pr3])
  .then(console.log)
  .catch((error) => console.error(error, "err"));

export {};
