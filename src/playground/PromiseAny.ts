const PromiseAny = (promises: string | any[]): Promise<any[]> => {
  let numberOfRejected = 0;

  return new Promise((res, rej) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((result) => {
          res(result);
        })
        .catch(() => {
          numberOfRejected++;
        })
        .finally(() => {
          if (numberOfRejected === promises.length) rej("errors");
        });
    }
  });
};

const pr1 = new Promise((res, rej) => setTimeout(() => res(1), 1000));
const pr2 = new Promise((res, rej) => setTimeout(() => rej(2), 500));
const pr3 = new Promise((res, rej) => setTimeout(() => rej(3), 100));

PromiseAny([pr1, pr2, pr3])
  .then(console.log)
  .catch((error) => console.error(error, "err"));

export {};
