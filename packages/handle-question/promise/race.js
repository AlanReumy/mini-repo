promise.race = (promiseArray) => {
  return new Promise((resolve, reject) => {
    promiseArray.forEach((p) => {
      Promise.resolve(p)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

