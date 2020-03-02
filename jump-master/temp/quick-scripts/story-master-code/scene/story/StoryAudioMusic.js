(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/story-master-code/scene/story/StoryAudioMusic.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1fc99vURVZLEJ9F5NfhEKNK', 'StoryAudioMusic', __filename);
// scene/story/StoryAudioMusic.js

"use strict";

var StoryAudioMgr = require("StoryAudioMgr");cc.Class({ extends: cc.Component, editor: { menu: "A-StoryMaster/StoryAudioMusic" }, properties: { audio: { default: null, displayName: "音乐", type: cc.AudioClip, tooltip: "同一时间只会播放一个音乐" }, delayTime: { default: 0, displayName: "延迟播放(s)", range: [0, 999999], notify: function notify(i) {}
    }, loop: { default: !1, displayName: "是否循环", notify: function notify() {}
    }, isStopOnDestroy: { default: !0, displayName: "结束时暂停" } }, onLoad: function onLoad() {},
  _play: function _play() {
    this.audio && StoryAudioMgr.playMusic(this.audio, this.loop);
  },
  start: function start() {
    this.scheduleOnce(function () {
      this.delayTime <= 0 ? this._play() : this.scheduleOnce(function () {
        this._play();
      }.bind(this), this.delayTime);
    }.bind(this), .1);
  },
  onDestroy: function onDestroy() {
    this.isStopOnDestroy && StoryAudioMgr.stopMusic();
  }
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
        //# sourceMappingURL=StoryAudioMusic.js.map
        