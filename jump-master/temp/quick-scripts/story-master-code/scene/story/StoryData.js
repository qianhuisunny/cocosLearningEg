(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/story-master-code/scene/story/StoryData.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '72aef5yKXtE/bc2AB03D5ss', 'StoryData', __filename);
// scene/story/StoryData.js

"use strict";

var StoryConfig = require("StoryConfig");module.exports = { serializePlotArray: [], getUnitPiecePrefab: function getUnitPiecePrefab() {
    var e = StoryConfig.file.init.data;if (e.unit) {
      var t = StoryConfig.file.piece.data;for (var i in t) {
        var l = t[i];for (var _t = 0; _t < l.length; _t++) {
          var r = l[_t];if (r.id === e.unit) return { piece: i, item: r };
        }
      }return null;
    }return null;
  },
  getBeganPrefab: function getBeganPrefab() {
    var e = StoryConfig.file.plot.data[0].piece;return this.getPieceDataByID(e)[0];
  },
  getBeganPlot: function getBeganPlot() {
    return StoryConfig.file.plot.data[0];
  }, getNextPlotData: function getNextPlotData(e) {
    for (var t = 0; t < this.serializePlotArray.length; t++) {
      if (this.serializePlotArray[t].id === e) return t === this.serializePlotArray.length - 1 ? null : this._findValidPiece(t + 1);
    }return null;
  },
  _findValidPiece: function _findValidPiece(e) {
    for (var t = e; t < this.serializePlotArray.length; t++) {
      var _e = this.serializePlotArray[t],
          i = this.getPieceDataByID(_e.piece);if (i && i.length > 0) return _e;
    }return null;
  },
  serializePlot: function serializePlot() {
    var e = [],
        t = StoryConfig.file.plot.data;for (var i = 0; i < t.length; i++) {
      var l = t[i];this._serializePlot(l, e);
    }this.serializePlotArray = e;
  },
  _serializePlot: function _serializePlot(e, t) {
    t.push({ id: e.id, name: e.name, piece: e.piece });for (var i = 0; i < e.children.length; i++) {
      this._serializePlot(e.children[i], t);
    }
  },
  getPlotDataByPieceID: function getPlotDataByPieceID(e) {
    for (var t = 0; t < this.serializePlotArray.length; t++) {
      var i = this.serializePlotArray[t];if (i.piece === e) return i;
    }return null;
  },
  getPlotDataByID: function getPlotDataByID(e) {
    for (var t = 0; t < this.serializePlotArray.length; t++) {
      var i = this.serializePlotArray[t];if (i.id === e) return i;
    }return null;
  },
  getPieceDataByPlotID: function getPieceDataByPlotID(e) {
    var t = this.getPlotDataByID(e);if (t) {
      return this.getPieceDataByID(t.piece);
    }return null;
  },
  getPieceDataByID: function getPieceDataByID(e) {
    var t = StoryConfig.file.piece.data;for (var i in t) {
      var l = t[i];if (i === e) return l;
    }return null;
  },
  getNextPieceItemByPrefabID: function getNextPieceItemByPrefabID(e) {
    var t = StoryConfig.file.piece.data;for (var i in t) {
      var l = t[i];for (var _t2 = 0; _t2 < l.length; _t2++) {
        if (l[_t2].id === e) return _t2 + 1 >= l.length ? null : l[_t2 + 1];
      }
    }return null;
  },
  getNextPieceItemByKeyAndPrefab: function getNextPieceItemByKeyAndPrefab(e, t) {
    var i = StoryConfig.file.piece.data;if (i && i[e]) {
      var l = i[e];for (var _e2 = 0; _e2 < l.length; _e2++) {
        if (l[_e2].id === t) return _e2 + 1 >= l.length ? null : l[_e2 + 1];
      }
    }
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
        //# sourceMappingURL=StoryData.js.map
        