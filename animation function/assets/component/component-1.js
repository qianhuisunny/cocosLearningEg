// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {
    
        ///动作代码
        // this.node.runAction(
        //     cc.moveTo(3,cc.v2(400,200)).easing(cc.easeBackIn(3)),
         
            //cc.rotateTo(1,180),
            //cc.scaleTo(1,2,2),
            //cc.fadeOut(1),
            //sequence顺序  spawn同时  repeat和repeatForever重复
            // cc.spawn(
            //     cc.moveTo(1,cc.v2(100,0)),
            //     cc.rotateTo(1,180),
            //     cc.scaleTo(1,2,2),
            //     //3个参数 调用方法 调用对象 参数值
            //     cc.callFunc(this.callback,this,{hello:"world"})

            
        
    },

    // callback:function(arg,targetNode){
    //     console.log(arg);//{hello:'world'}
    //     console.log(targetNode);

    // }

    // update (dt) {},
});
