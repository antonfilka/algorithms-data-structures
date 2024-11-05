const PromiseAll = (promises: string | any[]): Promise<any[]> => {
  const results: any[] = [];
  let count = 0;

  return new Promise((res, rej) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((result) => {
          results[i] = result;
          count++;
          if (count === promises.length) return res(results);
        })
        .catch((error) => {
          rej(error);
        });
    }
  });
};

const pr1 = Promise.resolve(1);
const pr2 = Promise.resolve(2);
const pr3 = Promise.resolve(3);

PromiseAll([0, pr1, 1, pr2, pr3, 4]).then(console.log);
