"use strict";
cc._RF.push(module, 'a18958flXNAQ5o/+voRIY6v', 'ObserverMgr');
// core/ObserverMgr.js

"use strict";

var ObserverMgr = { obsArray: {}, addEventListener: function addEventListener(r, e, t) {
    void 0 === this.obsArray[r] && (this.obsArray[r] = []);for (var s = 0; s < this.obsArray[r].length; s++) {
      var o = this.obsArray[r][s];if (o.func === e && o.ob === t) return;
    }this.obsArray[r].push({ func: e, ob: t });
  }, removeEventListener: function removeEventListener(r, e, t) {
    var s = !1,
        o = this.obsArray[r];if (o) for (var _r = 0; _r < o.length;) {
      var i = o[_r],
          n = i.func,
          l = i.ob;e === n && t === l ? (o.splice(_r, 1), s = !0) : _r++;
    }return s;
  }, removeEventListenerWithObject: function removeEventListenerWithObject(r) {
    for (var e in this.obsArray) {
      var t = this.obsArray[e];for (var _e = 0; _e < t.length;) {
        t[_e].ob === r ? t.splice(_e, 1) : _e++;
      }
    }
  }, cleanAllEventListener: function cleanAllEventListener() {
    this.obsArray = {};
  },
  dispatchMsg: function dispatchMsg(r, e) {
    var t = this.obsArray[r];if (void 0 !== t) for (var s = 0; s < t.length; s++) {
      var o = t[s],
          i = o.func,
          n = o.ob;i && n && i.apply(n, [r, e]);
    }
  } };cc.ObserverMgr = module.exports = ObserverMgr;

cc._RF.pop();