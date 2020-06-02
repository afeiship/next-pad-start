/*!
 * name: @feizheng/next-pad-start
 * description: Pad start for next.
 * homepage: https://github.com/afeiship/next-pad-start
 * version: 1.0.0
 * date: 2020-06-02T05:09:21.678Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  /*
  @thanks to:
  https://github.com/stevemao/left-pad
  */

  nx.padStart = function (str, len, ch) {
    // convert `str` to `string`
    str = str + '';
    // `len` is the `pad`'s length now
    len = len - str.length;
    // doesn't need to pad
    if (len <= 0) return str;
    // `ch` defaults to `' '`
    if (!ch && ch !== 0) ch = ' ';
    // convert `ch` to `string` cuz it could be a number
    ch = ch + '';
    // `pad` starts with an empty string
    var pad = '';
    // loop
    while (true) {
      // add `ch` to `pad` if `len` is odd
      if (len & 1) pad += ch;
      // divide `len` by 2, ditch the remainder
      len >>= 1;
      // "double" the `ch` so this operation count grows logarithmically on `len`
      // each time `ch` is "doubled", the `len` would need to be "doubled" too
      // similar to finding a value in binary search tree, hence O(log(n))
      if (len) ch += ch;
      // `len` is 0, exit the loop
      else break;
    }
    // pad `str`!
    return pad + str;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.padStart;
  }
})();

//# sourceMappingURL=next-pad-start.js.map
