(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/story-master-code/scene/story/StoryConfig.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '783e27man1Dup0FNKgK7FWN', 'StoryConfig', __filename);
// scene/story/StoryConfig.js

"use strict";

var StoryConfig = { file: { init: { data: [], name: "init" }, piece: { data: [], name: "piece" }, plot: { data: [], name: "plot" } }, _init: !1, _completeCallBack: null, init: function init(t) {
    if (!1 === this._init) {
      this._init = !0, this._completeCallBack = t, this._index = 0, this._totalIndex = 0;for (var _t in this.file) {
        this._totalIndex++;
      }for (var _t2 in this.file) {
        var i = this.file[_t2];this._loadJson(i.name, i);
      }
    } else t && t();
  },
  _loadJson: function _loadJson(t, i) {
    var e = "" + t;cc.loader.loadRes(e, function (t, i, e) {}, function (e, o) {
      this._index++, e || (o ? (i.data = o.json || o, this._onProgress(t), this._index >= this._totalIndex && this._onComplete()) : this._onError(t));
    }.bind(this));
  },
  _onProgress: function _onProgress(t) {},
  _onComplete: function _onComplete() {
    this._completeCallBack && this._completeCallBack();
  },
  _onError: function _onError(t) {}
};cc.StoryConfig = module.exports = StoryConfig;

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
        //# sourceMappingURL=StoryConfig.js.map
        