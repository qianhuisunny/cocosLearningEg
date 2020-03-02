"use strict";
cc._RF.push(module, 'bdb458kLPpJxJi4DX7NH/Om', 'StoryPiece');
// scene/story/StoryPiece.js

"use strict";

var StoryAudioMgr = require("StoryAudioMgr");cc.Class({ extends: require("Observer"), editor: CC_EDITOR && { executeInEditMode: !1, playOnFocus: !1, menu: "A-StoryMaster/StoryPiece" }, properties: { _menuNode: null, _storyTalk: null, pieceItem: { default: null, visible: !1 } }, _getMsgList: function _getMsgList() {
    return [cc.StoryMaster.Msg.PieceShowOptions, cc.StoryMaster.Msg.OnPieceTalkOver, cc.StoryMaster.Msg.UserTouch];
  }, _onMsg: function _onMsg(e, t) {
    e === cc.StoryMaster.Msg.PieceShowOptions ? (cc.ObserverMgr.dispatchMsg(cc.StoryMaster.Msg.OnEnableGlobalTouch, !1), this._menuNode.active = !0) : e === cc.StoryMaster.Msg.OnPieceTalkOver ? cc.ObserverMgr.dispatchMsg(cc.StoryMaster.Msg.OnGoNextPiece, this.pieceItem) : e === cc.StoryMaster.Msg.UserTouch && (this._storyTalk ? this._storyTalk.onUserTouch() : this._menuNode || cc.ObserverMgr.dispatchMsg(cc.StoryMaster.Msg.OnGoNextPiece, this.pieceItem));
  },
  onLoad: function onLoad() {
    this._initMsg();var e = this.node.children;for (var t = 0; t < e.length; t++) {
      var s = e[t],
          r = s.getComponent("StoryOptionBox");null === this._menuNode && r && (this._menuNode = s);var o = s.getComponent("StoryTalk");null === this._storyTalk && o && (this._storyTalk = o);
    }this._storyTalk ? this._menuNode && (this._menuNode.active = !1) : this._menuNode && (cc.ObserverMgr.dispatchMsg(cc.StoryMaster.Msg.OnEnableGlobalTouch, !1), this._menuNode.active = !0);
  },
  start: function start() {
    this._menuNode && cc.ObserverMgr.dispatchMsg(cc.StoryMaster.Msg.PieceHasOptions, null);
  }
});

cc._RF.pop();