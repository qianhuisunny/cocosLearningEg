"use strict";
cc._RF.push(module, '4feebiWogBAyIuUcB1lWE0u', 'StoryMaster');
// StoryMaster.js

"use strict";

var StoryMaster = { Msg: { OnJumpNewPlot: "StoryMaster_Msg_OnJumpNewPlot", OnPieceTalkOver: "StoryMaster_Msg_OnPieceTalkOver", OnGoNextPiece: "StoryMaster_Msg_OnGoNextPiece", OnEnableGlobalTouch: "StoryMaster_Msg_OnEnableGlobalTouch", PieceHasOptions: "StoryMaster_Msg_PieceHasOptions", PieceShowOptions: "StoryMaster_Msg_PieceShowOptions", UserTouch: "StoryMaster_Msg_UserTouch" }, Type: { Pieces: { Content: 1, PlotJump: 2 } }, GameCfg: { profile: "profile://project/story-master.json", myResDir: "db://assets/my-resources", myTemplateDir: "db://assets/my-template", templateDir: "db://assets/template", plot: { plugin: "db://assets/resources/plot.json", game: "plot.json" }, piece: { plugin: "db://assets/resources/piece.json", prefab: "db://assets/resources/piece", game: "piece.json" }, init: { plugin: "db://assets/resources/init.json", game: "init.json" }, template: { dev: { StoryPiece: "db://assets/code/template/StoryPiece.prefab", StoryTalk: "db://assets/code/template/StoryTalk.prefab", StoryOptions: "db://assets/code/template/StoryOptions.prefab" }, public: { StoryPiece: "db://story-master-code/template/StoryPiece.prefab", StoryTalk: "db://story-master-code/template/StoryTalk.prefab", StoryOptions: "db://story-master-code/template/StoryOptions.prefab" } } } };cc.StoryMaster = module.exports = StoryMaster;

cc._RF.pop();