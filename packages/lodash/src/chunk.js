function chunk(arr, size = 1) {
  // not a array
  if (Array.isArray(arr)) {
    throw new Error("not a array");
  }
  const resArr = [];
  // handle size
  size = Math.ceil(size);
  for (let i = 0; i < arr.length; i += size) {
    resArr.push(arr.slice(i, i + size));
  }
  return resArr;
}

export default chunk;
