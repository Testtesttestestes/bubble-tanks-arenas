package com.armorgames.display
{
   import com.armorgames.common.*;
   import com.armorgames.debug.*;
   import flash.display.*;
   import flash.events.*;
   import flash.geom.*;
   import flash.net.*;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol27")]
   public class LoginStatus extends Sprite
   {
      
      public var logIn_mc:MovieClip;
      
      public var loggedIn_mc:MovieClip;
      
      public var loggingIn_mc:MovieClip;
      
      public var logo_mc:MovieClip;
      
      private var _loader:Loader;
      
      public function LoginStatus()
      {
         super();
         this.logIn_mc.mouseEnabled = false;
         this.logIn_mc.mouseChildren = false;
         this.loggingIn_mc.mouseEnabled = false;
         this.loggingIn_mc.mouseChildren = false;
         this.loggedIn_mc.mouseEnabled = false;
         this.loggedIn_mc.mouseChildren = false;
         this.loggedIn_mc.name_txt.mouseEnabled = false;
         this.logo_mc.mouseEnabled = false;
         this.logo_mc.mouseChildren = false;
      }
      
      private function handleAddedToStage(param1:Event) : void
      {
         this.addEventListener(MouseEvent.CLICK,this.handleLoginStatusClick,false,0,true);
      }
      
      private function handleRemovedFromStage(param1:Event) : void
      {
         this.removeEventListener(MouseEvent.CLICK,this.handleLoginStatusClick);
      }
      
      private function handleLoginStatusClick(param1:MouseEvent) : void
      {
      }
      
      public function update(param1:AGUser, param2:Boolean = false) : void
      {
         var _loc3_:ColorTransform = null;
         if(Boolean(param1))
         {
            _loc3_ = new ColorTransform();
            _loc3_.color = 9539985;
            this.logo_mc.transform.colorTransform = _loc3_;
            this.logIn_mc.visible = false;
            this.loggingIn_mc.visible = false;
            this.loggedIn_mc.visible = true;
            this.loggedIn_mc.name_txt.htmlText = HTMLTextUtil.bold(param1.username);
            if(!this._loader)
            {
               this._loader = new Loader();
               this._loader.contentLoaderInfo.addEventListener(Event.COMPLETE,this.handleAvatarLoaded,false,0,true);
               this._loader.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR,this.handleAvatarFailed,false,0,true);
               this._loader.contentLoaderInfo.addEventListener(SecurityErrorEvent.SECURITY_ERROR,this.handleAvatarFailed,false,0,true);
               this._loader.load(new URLRequest(param1.avatar_url));
            }
         }
         else
         {
            this.logo_mc.transform.colorTransform = new ColorTransform();
            this.logIn_mc.visible = !param2;
            this.loggingIn_mc.visible = param2;
            this.loggedIn_mc.visible = false;
            if(Boolean(this._loader))
            {
               if(Boolean(this.loggedIn_mc.thumbnail_mc.contains(this._loader)))
               {
                  this.loggedIn_mc.thumbnail_mc.removeChild(this._loader);
               }
               this._loader.unload();
               this._loader = null;
            }
         }
      }
      
      private function handleAvatarLoaded(param1:Event) : void
      {
         if(!this._loader)
         {
            return;
         }
         var _loc2_:Number = 29 / this._loader.width;
         this.loggedIn_mc.thumbnail_mc.scaleX = this.loggedIn_mc.thumbnail_mc.scaleY = _loc2_;
         this.loggedIn_mc.thumbnail_mc.addChild(this._loader);
      }
      
      private function handleAvatarFailed(param1:SecurityErrorEvent) : void
      {
         DebugUtil.error("Login Status User Avatar failed to load.");
      }
   }
}

