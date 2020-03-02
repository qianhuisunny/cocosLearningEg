(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/story-master-code/scene/story/StoryTalk.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '65757LGwZdBcJEd9tHbaPeG', 'StoryTalk', __filename);
// scene/story/StoryTalk.js

"use strict";

var TalkSpeed = cc.Enum({ Slow1: 7, Slow2: 6, Slow3: 5, Normal: 4, Fast1: 3, Fast2: 2, Fast3: 1 }),
    TalkState = cc.Enum({ Running: 1, Waiting: 2, Over: 3 });cc.Class({ extends: require("Observer"), editor: CC_EDITOR && { executeInEditMode: !0, playOnFocus: !0, menu: "A-StoryMaster/StoryTalk", inspector: "packages://story-master/inspector/StoryTalk.js" }, properties: { _bOptions: !1, roleTalkFrame: { default: null, displayName: "对话背景框", type: cc.Node, visible: !1 }, word: { default: null, displayName: "对话内容", type: cc.Label, visible: !1 }, talkSpeed: { default: TalkSpeed.Normal, displayName: "语速", type: TalkSpeed, notify: function notify() {
        this.wordIntervalTime = .05 * this.talkSpeed, this.onWordEffect();
      }
    }, talkWord: { default: "", displayName: "对话", multiline: !0, notify: function notify() {
        this.word.string = this.talkWord, CC_EDITOR && Editor.Ipc.sendToPanel("story-master.piece", "updatePieceTalkWord", this.talkWord);
      }
    }, wordIntervalTime: { tooltip: "每个字符出现的间隔时间", default: .1, displayName: "间隔时间", type: cc.Float, visible: !1 }, preview: { default: "0", notify: CC_EDITOR && function (t) {
        this.onWordEffect();
      } } }, onLoad: function onLoad() {
    CC_EDITOR || (this._initMsg(), this.onWordEffect());
  },
  _getMsgList: function _getMsgList() {
    return [cc.StoryMaster.Msg.PieceHasOptions];
  }, _onMsg: function _onMsg(t, e) {
    t === cc.StoryMaster.Msg.PieceHasOptions && (this._bOptions = !0);
  },
  onUserTouch: function onUserTouch() {
    this.state === TalkState.Running ? this.onTalkFast() : this.state === TalkState.Waiting || this.state === TalkState.Over && (this._bOptions || cc.ObserverMgr.dispatchMsg(cc.StoryMaster.Msg.OnPieceTalkOver, null));
  },
  start: function start() {},
  onTalkFast: function onTalkFast() {
    this.wordIntervalTime = .03, this.unschedule(this._updateWord), this.schedule(this._updateWord, this.wordIntervalTime);
  },
  onWordEffect: function onWordEffect() {
    if (this.word) {
      this.state = TalkState.Running;var t = this.wordIntervalTime;this.index = 0, this.allWord = this.word.string, this.unschedule(this._updateWord), this.schedule(this._updateWord, t), this._updateWord();
    }
  },
  _updateWord: function _updateWord() {
    this._updateWordByIndex(this.index), this.index++, this.index >= this.allWord.length && this.onTalkOver();
  },
  onTalkOver: function onTalkOver() {
    this.state = TalkState.Waiting, this.unschedule(this._updateWord), this.word.string = this.allWord, this.scheduleOnce(function () {
      this.state = TalkState.Over;
    }.bind(this), .3), this._bOptions && cc.ObserverMgr.dispatchMsg(cc.StoryMaster.Msg.PieceShowOptions, null);
  },
  _updateWordByIndex: function _updateWordByIndex(t) {
    if (this.allWord && t < this.allWord.length) {
      var e = this.allWord.slice(0, t);this.word.string = e;
    }
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
        //# sourceMappingURL=StoryTalk.js.map
        