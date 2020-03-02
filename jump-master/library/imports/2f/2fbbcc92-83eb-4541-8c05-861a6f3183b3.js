"use strict";
cc._RF.push(module, '2fbbcySg+tFQYwFhhpvMYOz', 'StoryAudioMgr');
// scene/story/StoryAudioMgr.js

"use strict";

module.exports = { _allEffectID: [], cleanAudioEffect: function cleanAudioEffect() {
    cc.audioEngine.stopAllEffects();
  },
  stopAll: function stopAll() {
    cc.audioEngine.stopMusic(), cc.audioEngine.stopAllEffects();
  },
  stopMusic: function stopMusic() {
    cc.audioEngine.stopMusic();
  },
  playEffect: function playEffect(c, i) {
    var e = cc.audioEngine.playEffect(c, i);this._allEffectID.push(e);
  },
  playMusic: function playMusic(c, i) {
    cc.audioEngine.playMusic(c, i);
  }
};

cc._RF.pop();