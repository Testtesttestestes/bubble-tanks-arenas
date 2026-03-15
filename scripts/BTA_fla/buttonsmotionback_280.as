package BTA_fla
{
   import adobe.utils.*;
   import fl.motion.AnimatorFactory3D;
   import fl.motion.MotionBase;
   import flash.accessibility.*;
   import flash.desktop.*;
   import flash.display.*;
   import flash.errors.*;
   import flash.events.*;
   import flash.external.*;
   import flash.filters.*;
   import flash.geom.*;
   import flash.media.*;
   import flash.net.*;
   import flash.printing.*;
   import flash.profiler.*;
   import flash.sampler.*;
   import flash.system.*;
   import flash.text.*;
   import flash.text.engine.*;
   import flash.ui.*;
   import flash.utils.*;
   import flash.xml.*;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol1091")]
   public dynamic class buttonsmotionback_280 extends MovieClip
   {
      
      public var btnSortByName_mc:MovieClip;
      
      public var ____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_:Vector.<Number>;
      
      public var btnSortByClass_mc:MovieClip;
      
      public var btnSortByGuns_mc:MovieClip;
      
      public var __animFactory_btnSortByBubbles_mcExport3D1:AnimatorFactory3D;
      
      public var __motion_btnSortByBubbles_mcExport3D1:MotionBase;
      
      public var btnSortByAuthor_mc:MovieClip;
      
      public var btnSortByBubbles_mc:MovieClip;
      
      public function buttonsmotionback_280()
      {
         super();
         addFrameScript(9,this.frame10);
         if(this.__motion_btnSortByBubbles_mcExport3D1 == null)
         {
            this.__motion_btnSortByBubbles_mcExport3D1 = new MotionBase();
            this.__motion_btnSortByBubbles_mcExport3D1.duration = 1;
            this.__motion_btnSortByBubbles_mcExport3D1.overrideTargetTransform();
            this.__motion_btnSortByBubbles_mcExport3D1.addPropertyArray("blendMode",["normal"]);
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_ = new Vector.<Number>(16);
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_[0] = 1;
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_[1] = 0;
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_[2] = 0;
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_[3] = 0;
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_[4] = 0;
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_[5] = 1;
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_[6] = 0;
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_[7] = 0;
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_[8] = 0;
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_[9] = 0;
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_[10] = 1;
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_[11] = 0;
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_[12] = 0;
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_[13] = 54.200001;
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_[14] = 0;
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_[15] = 1;
            this.__motion_btnSortByBubbles_mcExport3D1.addPropertyArray("matrix3D",new Array(new Matrix3D(this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_)));
            this.__animFactory_btnSortByBubbles_mcExport3D1 = new AnimatorFactory3D(this.__motion_btnSortByBubbles_mcExport3D1);
            this.__animFactory_btnSortByBubbles_mcExport3D1.sceneName = "buttons motion back";
            this.__animFactory_btnSortByBubbles_mcExport3D1.addTargetInfo(this,"btnSortByBubbles_mc",0,true,9,true,null);
         }
      }
      
      internal function frame10() : *
      {
         stop();
      }
   }
}

