Function.prototype.myApply = function (_this, arr) {
  const fn = this
  _this = (_this === null || _this === undefined) ? window : _this
  _this = Object(_this)
  if (!Array.isArray(arr)) {
    throw new Error("not a array")
  }
  _this.fn = fn
  const res = _this.fn(...arr)
  delete _this.fn
  return res
}
