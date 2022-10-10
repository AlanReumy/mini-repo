Function.prototype.myBind = function (_this, ...rest) {
  const fn = this
  _this = (_this === undefined || _this === null) ? window : _this
  _this = Object(_this)
  _this.fn = fn
  return function (...otherRest) {
    const res = _this.fn(...rest, ...otherRest)
    delete _this.fn
    return res
  }
}