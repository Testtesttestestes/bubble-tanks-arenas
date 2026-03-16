// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: BTA_fla

export class buttonsmotionback_280 extends MovieClip{
      
      public btnSortByName_mc: MovieClip;
      public ____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_: Array<Number>;
      public btnSortByClass_mc: MovieClip;
      public btnSortByGuns_mc: MovieClip;
      public __animFactory_btnSortByBubbles_mcExport3D1: AnimatorFactory3D;
      public __motion_btnSortByBubbles_mcExport3D1: MotionBase;
      public btnSortByAuthor_mc: MovieClip;
      public btnSortByBubbles_mc: MovieClip;
      constructor(){
         super();
         addFrameScript(9,this.frame10);
         if(this.__motion_btnSortByBubbles_mcExport3D1 == null)
         {
            this.__motion_btnSortByBubbles_mcExport3D1 = new MotionBase();
            this.__motion_btnSortByBubbles_mcExport3D1.duration = 1;
            this.__motion_btnSortByBubbles_mcExport3D1.overrideTargetTransform();
            this.__motion_btnSortByBubbles_mcExport3D1.addPropertyArray("blendMode",["normal"]);
            this.____motion_btnSortByBubbles_mcExport3D1_mat3DVec_9_ = new Array<Number>(16);
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
            this.__animFactory_btnSortByBubbles_mcExport3D1.addTargetInfo(this,"this.btnSortByBubbles_mc",0,true,9,true,null);
         }
      }
      
      public frame10(): any
      {
         this.stop();
      }
   }
