function myInstanceof(instance, parent) {
  if (typeof instance !== 'object' && typeof instance !== 'function') {
    return false
  }
  const proto = Object.getPrototypeOf(instance) || null
  while (true) {
    if (proto === null) {
      return false
    }
    if (proto === parent.prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
}

const obj = {

}

console.log(myInstanceof(obj, Object));

console.log(obj instanceof Object)