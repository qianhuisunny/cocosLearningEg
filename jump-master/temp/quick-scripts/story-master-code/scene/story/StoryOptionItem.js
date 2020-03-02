(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/story-master-code/scene/story/StoryOptionItem.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a44147YfYdDGLqyw82EC3HP', 'StoryOptionItem', __filename);
// scene/story/StoryOptionItem.js

"use strict";

var StoryAudioMgr = require("StoryAudioMgr");cc.Class({ extends: cc.Component, properties: { audio: { default: null, displayName: "按钮声音", type: cc.AudioClip }, menuLabel: cc.Label, menuText: { displayName: "选项文本", default: "选项", notify: function notify() {
        var t = this.node.children;for (var e = 0; e < t.length; e++) {
          var o = t[e].getComponent(cc.Label);o && (o.string = this.menuText);
        }
      }
    }, jumpPlot: { default: "", displayName: "要跳转的新剧情" } }, editor: { menu: "A-StoryMaster/StoryOptionItem", inspector: "packages://story-master/inspector/StoryOptionItem.js" }, onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_END, function () {
      this.audio && StoryAudioMgr.playEffect(this.audio, !1), 0 === this.jumpPlot.length && CC_EDITOR && Editor.warn("该选项并未设置跳转剧情"), cc.ObserverMgr.dispatchMsg(cc.StoryMaster.Msg.OnJumpNewPlot, this.jumpPlot);
    }.bind(this), this);
  },
  start: function start() {}
});

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
        //# sourceMappingURL=StoryOptionItem.js.map
        