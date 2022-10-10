function deepClone(target, map = new WeakMap()) {
  // 如果是基本数据类型
  if (typeof target !== "object") return target;

  if (map.has(target)) return map.get(target); // 解决循环引用问题

  const res = Array.isArray(target) ? [] : {};
  map.set(target, res);

  for (const key in target) {
    res[key] = deepClone(target[key], map);
  }
  return res;
}