const PromiseAllSettled = (promises: string | any[]): Promise<any[]> => {
  const results: any[] = [];
  let count = 0;

  return new Promise((res, rej) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((data) => {
          results[i] = { status: "fulfilled", value: data };
        })
        .catch((error) => {
          results[i] = { status: "rejected", reason: error };
        })
        .finally(() => {
          count++;
          if (count === promises.length) res(results);
        });
    }
  });
};

const pr1 = Promise.resolve(1);
const pr2 = Promise.reject(2);
const pr3 = Promise.resolve(3);

PromiseAllSettled([0, pr1, 1, pr2, pr3, 4]).then(console.log);

export {};
