"use strict";
cc._RF.push(module, 'd0adaNFRYFCzoEDqsv3eUKo', 'Animation');
// core/Animation.js

"use strict";

var ActionEnum = cc.Enum({ None: 0, FadeIn: 1, FadeOut: 2, Shake: 3, Blink: 4, Scale: 5, Move: 6 }),
    Shake = cc.Enum({ Level1: 1, Level2: 2, Level3: 3, Level4: 4, Level5: 5 });cc.Class({ extends: cc.Component, editor: CC_EDITOR && { playOnFocus: !0, executeInEditMode: !0, menu: "A-StoryMaster/Animation", inspector: "packages://story-master/inspector/Animation.js" }, properties: { action: { default: ActionEnum.None, displayName: "动作", type: ActionEnum, notify: function notify() {}
    }, delayTime: { default: 0, displayName: "延迟时间" }, actionTime: { default: 0, displayName: "动画时长" }, shakeStrength: { default: 1, displayName: "震动强度", type: Shake }, blinkCount: { default: 1, displayName: "闪烁次数" }, scaleSize: { default: 1, displayName: "缩放比例" }, moveBegan: { default: cc.v2(0, 0), displayName: "开始坐标" }, moveEnd: { default: cc.v2(0, 0), displayName: "结束坐标" }, preview: { default: "0", notify: CC_EDITOR && function (t) {
        this._record(), this._runAction();
      } }, _recordData: null }, _record: CC_EDITOR && function () {
    this._recordData = { x: this.node.x, y: this.node.y, opacity: this.node.opacity, active: this.node.active, scaleX: this.node.scaleX, scaleY: this.node.scaleY, rotation: this.node.rotation, width: this.node.width, height: this.node.height };
  }, _recover: CC_EDITOR && function () {
    this.node.stopAllActions(), this._recordData && (this.node.x = this._recordData.x, this.node.y = this._recordData.y, this.node.opacity = this._recordData.opacity, this.node.active = this._recordData.active, this.node.scaleX = this._recordData.scaleX, this.node.scaleY = this._recordData.scaleY, this.node.rotation = this._recordData.rotation, this.node.width = this._recordData.width, this.node.height = this._recordData.height);
  }, onLoad: function onLoad() {
    CC_EDITOR || this._runAction();
  },
  onDestroy: function onDestroy() {
    if (this.action !== ActionEnum.None && this.action === ActionEnum.FadeOut) {
      var t = cc.delayTime(this.delayTime),
          e = cc.fadeOut(this.actionTime),
          i = cc.callFunc(this._actionOver.bind(this)),
          n = cc.sequence([t, e, i]);this.node.stopAllActions(), this.node.runAction(n);
    }
  },
  _runAction: function _runAction() {
    if (this.action !== ActionEnum.None && this.action !== ActionEnum.FadeOut) {
      if (this.actionTime > 0) {
        var t = this._genAct(this.action);if (t) {
          var e = [];this.delayTime > 0 && e.push(cc.delayTime(this.delayTime)), e.push(t), e.push(cc.callFunc(this._actionOver.bind(this)));var i = cc.sequence(e);this.node.runAction(i);
        }
      }
    } else this._actionOver();
  },
  _actionOver: function _actionOver() {
    CC_EDITOR && this._recover && this._recover();
  },
  _genAct: function _genAct(t) {
    var e = null;if (t === ActionEnum.FadeOut) this.node.opacity = 255, e = cc.fadeOut(this.actionTime);else if (t === ActionEnum.FadeIn) this.node.opacity = 0, e = cc.fadeIn(this.actionTime);else if (t === ActionEnum.Shake) {
      var _t = [],
          i = [{ strength: 1, count: 3, max: 10 }, { strength: 2, count: 5, max: 12 }, { strength: 3, count: 7, max: 15 }, { strength: 4, count: 9, max: 20 }, { strength: 5, count: 11, max: 25 }],
          n = 0,
          o = 0;for (var _t2 = 0; _t2 < i.length; _t2++) {
        var _e = i[_t2];if (_e.strength === this.shakeStrength) {
          n = _e.count, o = _e.max;break;
        }
      }var a = .05;n = Math.floor(this.actionTime / a);var c = this.node.getPosition();if (n > 0 && o > 0) {
        for (var _e2 = 0; _e2 < n; _e2++) {
          var _e3 = c.x + this._randomPos(o),
              _i = c.y + this._randomPos(o),
              _n = cc.moveTo(a, cc.v2(_e3, _i));_t.push(_n);
        }e = cc.sequence(_t);
      }
    } else t === ActionEnum.Blink ? e = cc.blink(this.actionTime, this.blinkCount) : t === ActionEnum.Scale ? e = cc.scaleTo(this.actionTime, this.scaleSize) : t === ActionEnum.Move && (this.node.setPosition(this.moveBegan), e = cc.moveTo(this.actionTime, this.moveEnd));return e;
  },
  _randomByMaxValue: function _randomByMaxValue(t) {
    return Math.floor(Math.random() * t);
  }, _randomPos: function _randomPos(t) {
    return this._randomByMaxValue(2) % 2 == 0 ? this._randomByMaxValue(t) : -this._randomByMaxValue(t);
  }
});

cc._RF.pop();