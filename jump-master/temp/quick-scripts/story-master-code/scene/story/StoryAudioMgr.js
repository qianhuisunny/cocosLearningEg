(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/story-master-code/scene/story/StoryAudioMgr.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2fbbcySg+tFQYwFhhpvMYOz', 'StoryAudioMgr', __filename);
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
        //# sourceMappingURL=StoryAudioMgr.js.map
        