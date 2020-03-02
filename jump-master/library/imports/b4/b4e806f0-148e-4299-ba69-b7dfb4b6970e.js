"use strict";
cc._RF.push(module, 'b4e80bwFI5Cmbppt9+0tpcO', 'Observer');
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