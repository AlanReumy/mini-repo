Function.prototype.myCall = function (_this, ...rest) {
  const fn = this
  _this = (_this === null || _this === undefined) ? window : _this
  // 对基本数据类型的转换
  _this = Object(_this)
  _this.fn = fn
  const res = _this.fn(...rest)
  delete _this.fn
  return res
}