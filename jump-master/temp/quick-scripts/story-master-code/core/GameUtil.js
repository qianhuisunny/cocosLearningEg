(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/story-master-code/core/GameUtil.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3cfb39TY4VA8I4lxpqQd6mF', 'GameUtil', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=GameUtil.js.map
        