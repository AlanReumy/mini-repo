function compact(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("not a Array");
  }

  return arr.filter((ele) => {
    return ele;
  });
}

export default compact;
