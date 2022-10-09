promise.all = (promiseArray) => {
  const res = new Array(promiseArray.length);
  let count = 0;
  return new Promise((resolve, reject) => {
    if (promiseArray.length === 0) {
      resolve(res);
    }
    for (let i = 0; i < promiseArray.length; i++) {
      const p = promiseArray[i];
      Promise.resolve(p)
        .then((v) => {
          res[i] = v;
          count++;
          if (count === promiseArray.length) {
            resolve(res);
          }
        })
        .catch((e) => {
          reject(e);
        });
    }
  });
};
