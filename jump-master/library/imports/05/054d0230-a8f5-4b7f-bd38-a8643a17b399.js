"use strict";
cc._RF.push(module, '054d0IwqPVLf704qGQ6F7OZ', 'StoryAudioEffect');
// scene/story/StoryAudioEffect.js

"use strict";

var StoryAudioMgr = require("StoryAudioMgr");cc.Class({ extends: cc.Component, editor: { menu: "A-StoryMaster/StoryAudioEffect" }, properties: { audio: { default: null, displayName: "音效", type: cc.AudioClip, tooltip: "切换情节会关闭之前所有的音效" }, delayTime: { default: 0, displayName: "延迟播放(s)", range: [0, 999999], notify: function notify(i) {}
    }, loop: { default: !1, displayName: "是否循环" } }, onLoad: function onLoad() {},
  _play: function _play() {
    this.audio && StoryAudioMgr.playEffect(this.audio, this.loop);
  },
  start: function start() {
    this.scheduleOnce(function () {
      this.delayTime <= 0 ? this._play() : this.scheduleOnce(function () {
        this._play();
      }.bind(this), this.delayTime);
    }.bind(this), .1);
  }
});

cc._RF.pop();