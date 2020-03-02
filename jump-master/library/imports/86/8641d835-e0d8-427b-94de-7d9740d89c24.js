"use strict";
cc._RF.push(module, '8641dg14NhCe5TefZdA2Jwk', 'StoryGame');
// scene/StoryGame.js

"use strict";

var GameUtil = require("GameUtil"),
    StoryData = require("StoryData"),
    StoryAudioMgr = require("StoryAudioMgr");cc.Class({ extends: require("Observer"), properties: { storyNode: { default: null, displayName: "故事节点", type: cc.Node }, touchNode: { default: null, displayName: "触摸节点", type: cc.Node }, isTest: !1, _piece: null, _pieceData: null, _plotData: null }, _getMsgList: function _getMsgList() {
    return [cc.StoryMaster.Msg.OnGoNextPiece, cc.StoryMaster.Msg.OnJumpNewPlot, cc.StoryMaster.Msg.OnEnableGlobalTouch];
  }, _onMsg: function _onMsg(t, e) {
    if (t === cc.StoryMaster.Msg.OnGoNextPiece) {
      var _t = e.id,
          i = StoryData.getNextPieceItemByKeyAndPrefab(this._plotData.piece, _t);if (i) this.createPiece(i);else {
        var _t2 = StoryData.getNextPlotData(this._plotData.id);if (_t2) {
          this._plotData = _t2;var _e = StoryData.getPieceDataByID(_t2.piece);_e && (this._pieceData = _e, this.createPiece(_e[0]));
        } else this._plotData = null, this._pieceData = null, this._piece = null, StoryAudioMgr.stopAll(), this.touchNode.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
      }
    } else t === cc.StoryMaster.Msg.OnJumpNewPlot ? this._playNewPlot(e) : t === cc.StoryMaster.Msg.OnEnableGlobalTouch && (this.touchNode.active = !!e);
  },
  _onTouchEnd: function _onTouchEnd() {
    cc.ObserverMgr.dispatchMsg(cc.StoryMaster.Msg.UserTouch, null);
  },
  _initTouch: function _initTouch() {
    var t = cc.view.getVisibleSize();this.touchNode.width = t.width, this.touchNode.height = t.height, this.touchNode.active = !0, this.touchNode.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
  },
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(!1), cc.StoryConfig.init(function () {
      this._initMsg(), this.storyNode.destroyAllChildren(), this.touchNode.destroyAllChildren(), this._initTouch(), StoryData.serializePlot(), this.isTest ? this.startWithDebug() : this.startWithNormal();
    }.bind(this));
  },
  _onPieceTips: function _onPieceTips(t) {
    this.storyNode.destroyAllChildren();var e = new cc.Node();e.addComponent(cc.Label).string = t, this.storyNode.addChild(e), this.touchNode.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
  },
  startWithDebug: function startWithDebug() {
    var t = StoryData.getUnitPiecePrefab();if (t) {
      var e = StoryData.getPlotDataByPieceID(t.piece);if (e) {
        this._plotData = e;var i = StoryData.getPieceDataByID(t.piece);i && (this._pieceData = i, this.createPiece(t.item));
      }
    } else this._onPieceTips("未发现要测试的故事");
  },
  startWithNormal: function startWithNormal() {
    var t = StoryData.getBeganPlot();this._playNewPlot(t.id);
  },
  _playNextPiece: function _playNextPiece() {},
  _playNewPlot: function _playNewPlot(t, e) {
    var i = StoryData.getPlotDataByID(t);if (i) {
      this._plotData = i;var _t3 = StoryData.getPieceDataByID(i.piece);_t3 && (this._pieceData = _t3, this.createPiece(_t3[0]));
    }
  },
  createPiece: function createPiece(t) {
    if (t && t.type === cc.StoryMaster.Type.Pieces.Content || void 0 === t.type) {
      var e = t.prefab;e && (e = GameUtil.transformUrl(e), cc.loader.loadRes(e, function (e, i) {
        if (e) ;else {
          cc.ObserverMgr.dispatchMsg(cc.StoryMaster.Msg.OnEnableGlobalTouch, !0), StoryAudioMgr.cleanAudioEffect(), this.storyNode.destroyAllChildren();var _e2 = cc.instantiate(i),
              o = cc.view.getVisibleSize();_e2.x = _e2.y = 0, _e2.width = o.width, _e2.height = o.height, this.storyNode.addChild(_e2);var a = _e2.getComponent("StoryPiece");a && (a.pieceItem = t);
        }
      }.bind(this)));
    } else if (t && t.type === cc.StoryMaster.Type.Pieces.PlotJump) {
      var _e3 = StoryData.getPieceDataByPlotID(t.jump);_e3 && _e3.length > 0 && this._playNewPlot(t.jump);
    }
  },
  start: function start() {}
});

cc._RF.pop();