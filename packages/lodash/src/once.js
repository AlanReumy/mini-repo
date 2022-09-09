function once(fn) {
  let res;
  let revoked = false;
  return function (...args) {
    if (revoked) return res;

    res = fn(...args);
    revoked = true;
    return res;
  };
}

export default once;
