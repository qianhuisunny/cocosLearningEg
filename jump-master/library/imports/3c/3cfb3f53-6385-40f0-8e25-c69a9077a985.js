"use strict";
cc._RF.push(module, '3cfb39TY4VA8I4lxpqQd6mF', 'GameUtil');
// core/GameUtil.js

"use strict";

module.exports = {
  transformUrl: function transformUrl(e) {
    if (e) {
      var r = "db://assets/resources/",
          n = e.indexOf(r),
          t = ".prefab",
          l = e.indexOf(t);if (-1 !== n && -1 !== l) {
        var _n = r.length;return e.substring(_n, l);
      }return null;
    }return null;
  }
};

cc._RF.pop();