// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class class_153 extends Weapon{
      
      public emitter1: MovieClip;
      constructor(){
         super();
         intFireRate = 200;
         var_137 = false;
      }
      
      public PartCallTrigger(): void
      {
         let _loc1_: Point = new Point(this.emitter1.x,this.emitter1.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewEnemy("c446a4c3da9051a472a5fa028193a54dfe0de2da29aa297fde1b851ce70512729188225d65fa4e2193e75c9b9411477db2eeada74a67e173c533ccdc83ba4e1cd598df99f30189000efde34aebdbc057a714af9c7cb6ba707d6beb48ab75cee0a2ceada32eaede57cf5c056be487eca5b657166d19b7ca27999bfddac66a395570cbbf4b3ed79ee88b6b76680d30af118c7aa5e99cd0ad266b0f078a30a260c78808ecb7c14f8d5190353660f7875e070e273612af96a723b4774d25fa779a07cda4a47df12ecb3915cae42c078e5a03304b4c3a35bae958ba0989b0a01a8ef990a5bd9f908fc67d66500a1b94d96b674d9afd45e5b6461b87c67e7cdfc3e70ea70e6b8958d56b3cf1d548a8150898d62a26240dfe6e3dfb0a554d7f62c02c3be056533cd1c5f121f6b86b4159f351a84b9e9840b2402d61de270e87064739905fa4d321b44f149f1774be8bfad3231900585c9ffd9975ec820c11e951b3606409cbb2",_loc1_.x,_loc1_.y);
      }
   }
