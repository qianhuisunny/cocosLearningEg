(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/story-master-code/core/Observer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b4e80bwFI5Cmbppt9+0tpcO', 'Observer', __filename);
// core/Observer.js

"use strict";

var Observer = cc.Class({ extends: cc.Component, _initMsg: function _initMsg() {
    var e = this._getMsgList();if (e) for (var s = 0; s < e.length; s++) {
      var t = e[s];cc.ObserverMgr.addEventListener(t, this._onMsg, this);
    }
  },
  onLoad: function onLoad() {},
  _getMsgList: function _getMsgList() {
    return [];
  }, _onMsg: function _onMsg(e, s) {},
  onDisable: function onDisable() {},
  onEnable: function onEnable() {},
  onDestroy: function onDestroy() {
    cc.ObserverMgr.removeEventListenerWithObject(this);
  }
});cc.Observer = module.exports = Observer;

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
        //# sourceMappingURL=Observer.js.map
        