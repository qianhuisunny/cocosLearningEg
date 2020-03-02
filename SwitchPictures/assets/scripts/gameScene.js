

cc.Class({
    extends: cc.Component,

    properties: {
        bg:{
            default:null,
            type:cc.Sprite,
        }
    },


    start () {
        this.addTouchEvent();
        console.log("started");


    },
    
/*     addTouchEvent(){
        this.node.on(cc.Node.EventType.TOUCH_START,function(){

        },this);

        this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(){

        },this);

        this.node.on(cc.Node.EventType.TOUCH_END,function(){

        },this);


    } */

    addTouchEvent(){
        var self = this;
        this.node.on(cc.Node.EventType.TOUCH_START,function(){

        });
        this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(){

        });
        this.node.on(cc.Node.EventType.TOUCH_END,function(){

        });


    },
    
    setSkinBgTexture(node,skinType){
        this.loadRes("jigsaw-07"+skinType, cc.SpriteFrame, function(frame){
            node.SpriteFrame = frame;
        });

    },

    //get resources
    loadRes(url,type,callback){
        if(err){
            return;
        }
        cc.loader.loadRes(url,type,function(err,res){
            if(err){
                console.log("---------" + err);
                return;
            }
            if(callback){
                console.log("---------" + res);
                callback(res);
            }
        }
        )

    },

    
});
