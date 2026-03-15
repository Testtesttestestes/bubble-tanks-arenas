// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_2{
      
      private static instance: class_2;
      private static mRef: class_79;
      private static var_255: boolean = false;
      private static var_230: boolean = false;
      public var_48: any[];
      public var_83: any[];
      public var_12: any[];
      public var_172: any[];
      private var_102: number;
      public arrClassData: any[];
      public var_50: any[];
      public var_569: any[];
      private var_104: number;
      public var_62: any[];
      public var_551: number;
      constructor(){
         super();
         if(!var_255)
         {
            throw new Error("Error: Use GameObjectLibrary.getInstance() method!");
         }
         this.var_551 = 1;
         this.var_83 = new Array();
         this.var_569 = new Array();
         this.var_50 = new Array();
         this.var_62 = new Array();
         this.var_48 = new Array();
         this.var_12 = new Array();
         this.var_172 = new Array();
         this.arrClassData = new Array();
         this.var_102 = -1;
         this.var_104 = 0;
         this.method_714();
      }
      
      public static method_592(param1: class_79): any
      {
         if(!var_230)
         {
            mRef = param1;
            var_230 = true;
         }
      }
      
      public static method_64(): class_79
      {
         if(var_230)
         {
            return mRef;
         }
         return null;
      }
      
      public static getInstance(): class_2
      {
         if(!instance)
         {
            var_255 = true;
            instance = new class_2();
            var_255 = false;
         }
         return instance;
      }
      
      public method_714(): void
      {
         this.arrClassData.push({
            "intClass":1,
            "intArmor":1,
            "intSpeed":1
         });
         this.arrClassData.push({
            "intClass":2,
            "intArmor":1.1,
            "intSpeed":0.9
         });
         this.arrClassData.push({
            "intClass":3,
            "intArmor":1.2,
            "intSpeed":0.8
         });
         this.arrClassData.push({
            "intClass":4,
            "intArmor":2,
            "intSpeed":0.45
         });
         this.arrClassData.push({
            "intClass":5,
            "intArmor":2.5,
            "intSpeed":0.4
         });
         this.arrClassData.push({
            "intClass":6,
            "intArmor":3,
            "intSpeed":0.3
         });
         this.var_83.push({
            "intObjID":1001,
            "strName":"Small Bubble",
            "strPluralName":"Small Bubbles",
            "strShortName":"SB\'s",
            "claType":class_67,
            "intBubbleCost":1,
            "intGunCost":0,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"",
            "strSummaryText":"",
            "strFlavorText":"Small Bubble knows he\'s small, but that doesn\'t make him any less important.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_83.push({
            "intObjID":1002,
            "strName":"Medium Bubble",
            "strPluralName":"Medium Bubbles",
            "strShortName":"MB\'s",
            "claType":class_65,
            "intBubbleCost":1,
            "intGunCost":0,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"",
            "strSummaryText":"",
            "strFlavorText":"The Medium Bubble instanceof very similar to the Small Bubble, but slightly larger.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_83.push({
            "intObjID":1003,
            "strName":"Large Bubble",
            "strPluralName":"Large Bubbles",
            "strShortName":"LB\'s",
            "claType":class_63,
            "intBubbleCost":2,
            "intGunCost":0,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"",
            "strSummaryText":"",
            "strFlavorText":"Large Bubble\'s increased size makes him a vital part of large tanks.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_83.push({
            "intObjID":1004,
            "strName":"Huge Bubble",
            "strPluralName":"Huge Bubbles",
            "strShortName":"HB\'s",
            "claType":class_64,
            "intBubbleCost":3,
            "intGunCost":0,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"",
            "strSummaryText":"",
            "strFlavorText":"Huge Bubble\'s size instanceof kinda too big, however for some tanks it instanceof acceptable.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_83.push({
            "intObjID":1005,
            "strName":"Huge Base Bubble",
            "strPluralName":"Huge Base Bubbles",
            "strShortName":"HBB\'s",
            "claType":class_62,
            "intBubbleCost":1,
            "intGunCost":0,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"",
            "strSummaryText":"",
            "strFlavorText":"A large Stationary Bubble with a lower Bubble Cost, good place to add weapons too.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_50.push({
            "intObjID":2001,
            "strName":"Basic Cannon",
            "strPluralName":"Basic Cannons",
            "strShortName":"BC\'s",
            "claType":AGunBasicCannon,
            "intBubbleCost":1,
            "intGunCost":1,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"Damage: 1",
            "strSummaryText":"Your standard weapon.",
            "strFlavorText":"The Basic Cannon instanceof unwavering its determination to smite enemies.  It may not look like much, but it gets the job done.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_50.push({
            "intObjID":2002,
            "strName":"Heavy Cannon",
            "strPluralName":"Heavy Cannons",
            "strShortName":"HC\'s",
            "claType":AGunBigCannon,
            "intBubbleCost":3,
            "intGunCost":2,
            "intClassCost":2,
            "blnLower":false,
            "strDamageText":"Damage: 3",
            "strSummaryText":"Slower recharge rate but deals heavier damage.",
            "strFlavorText":"Please use responsibly.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_50.push({
            "intObjID":2003,
            "strName":"Machine Gun",
            "strPluralName":"Machine Guns",
            "strShortName":"MG\'s",
            "claType":class_142,
            "intBubbleCost":2,
            "intGunCost":2,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"Damage: 1",
            "strSummaryText":"Fires bullets at twice the rate of the Basic Cannon.",
            "strFlavorText":"What\'s different about the machine gun that makes it fire faster and where do these bubble bullets come from anyway?  The world may never know.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_50.push({
            "intObjID":2004,
            "strName":"Super Machine Gun",
            "strPluralName":"Super Machine Guns",
            "strShortName":"SMG\'s",
            "claType":class_140,
            "intBubbleCost":2,
            "intGunCost":3,
            "intClassCost":3,
            "blnLower":true,
            "strDamageText":"Damage: 2",
            "strSummaryText":"Double the damage of a standard Machine Gun.",
            "strFlavorText":"The Super Machine Gun takes bubble machine guns to a whole new level.  Did we mention that it\'s super?",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_50.push({
            "intObjID":2005,
            "strName":"Dual Large MG",
            "strPluralName":"Duel Large MG\'s",
            "strShortName":"DLMG\'s",
            "claType":class_139,
            "intBubbleCost":3,
            "intGunCost":4,
            "intClassCost":4,
            "blnLower":false,
            "strDamageText":"Damage: 3 per bullet",
            "strSummaryText":"Fires 2 heavy bullets side by side at rapid speed.",
            "strFlavorText":"The Duel Large Machine Gun instanceof so powerful that many people don\'t believe it even exists!  A weapon of legend, we think you\'ll like having it on your tank.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_50.push({
            "intObjID":2006,
            "strName":"2 Parallel",
            "strPluralName":"2 Parallels",
            "strShortName":"2P\'s",
            "claType":AGun2Parallel,
            "intBubbleCost":3,
            "intGunCost":2,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"Damage: 1 per bullet",
            "strSummaryText":"Fires 2 bullets side by side.",
            "strFlavorText":"The 2 Parallel instanceof an awesome weapon with its 2 focused bullets.  Honestly, what CAN\'T it do? \"Fire 3 bullets,\" says 3 Parallel.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_50.push({
            "intObjID":2007,
            "strName":"3 Spread",
            "strPluralName":"3 Spreads",
            "strShortName":"3S\'s",
            "claType":AGun3ShotSpread,
            "intBubbleCost":3,
            "intGunCost":2,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"Damage: 1 per bullet",
            "strSummaryText":"Fires 3 bullets in 3 directions.",
            "strFlavorText":"\"You know what\'s better than firing one bullet? Firing THREE bullets!\" says 3 Spread despite the other weapons criticizing his lack of focus.  We\'ll let you be the judge.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_50.push({
            "intObjID":2008,
            "strName":"5 Spread",
            "strPluralName":"5 Spreads",
            "strShortName":"5S\'s",
            "claType":AGun5ShotSpread,
            "intBubbleCost":3,
            "intGunCost":3,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"Damage: 2 per bullet",
            "strSummaryText":"Fires 5 bullets in 5 directions",
            "strFlavorText":"The 5 Spread makes aiming a thing of the past.  Just point anywhere and hold the mouse button, the screen will be layered in bullets going everywhere.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_50.push({
            "intObjID":2009,
            "strName":"Pierce Cannon",
            "strPluralName":"Pierce Cannons",
            "strShortName":"PC\'s",
            "claType":class_144,
            "intBubbleCost":2,
            "intClassCost":3,
            "blnLower":true,
            "intGunCost":3,
            "strDamageText":"Damage: 5",
            "strSummaryText":"Slow refire rate, but the bullets can pass through multiple enemies.",
            "strFlavorText":"You may think that the damage caused by a bubble bullet would pop said bubble bullet, but you would be wrong. The Piercing Bullets just keep going.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_50.push({
            "intObjID":2010,
            "strName":"Exploding Pierce Cannon",
            "strPluralName":"Exploding Pierce Cannons",
            "strShortName":"EPC\'s",
            "claType":class_145,
            "intBubbleCost":3,
            "intGunCost":5,
            "intClassCost":2,
            "blnLower":true,
            "strDamageText":"Damage: 15",
            "strSummaryText":"Fires bullets that pass through enemies, exploding on each impact.",
            "strFlavorText":"Making your bullets explode on impact seems like such a good idea, you\'d wonder why every weapon didn\'t do it.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_50.push({
            "intObjID":2011,
            "strName":"Leech Cannon",
            "strPluralName":"Leech Cannons",
            "strShortName":"LC\'s",
            "claType":class_141,
            "intBubbleCost":2,
            "intGunCost":4,
            "intClassCost":3,
            "blnLower":true,
            "strDamageText":"Damage: 2",
            "strSummaryText":"Fires bullets that give you life whenever they damage the enemy.",
            "strFlavorText":"The Leech Cannon believes health points are something to be shared, mostly when those health points belong to other tanks.  He\'s so greedy.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_50.push({
            "intObjID":2012,
            "strName":"Bullet Buster",
            "strPluralName":"Bullet Busters",
            "strShortName":"BB\'s",
            "claType":class_138,
            "intBubbleCost":3,
            "intGunCost":1,
            "intClassCost":4,
            "blnLower":false,
            "strDamageText":"Special: Deflects enemy bullets.",
            "strSummaryText":"Enemy bullets stick to BB shells, allowing you to push them away from you.",
            "strFlavorText":"Bullet Buster instanceof a lover, not a fighter.  Says Bullet Buster: \"We\'re just a bunch of bubbles anyways, what\'s with all the violence?\"",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_50.push({
            "intObjID":2013,
            "strName":"Auto Cannon",
            "strPluralName":"Basic Cannons",
            "strShortName":"BC\'s",
            "claType":AGunAutoCannon,
            "intBubbleCost":1,
            "intGunCost":1,
            "intClassCost":5,
            "blnLower":false,
            "strDamageText":"Damage: 1",
            "strSummaryText":"Basic Cannon that auto targets and fires.",
            "strFlavorText":"If you want something done right, let another gun do it.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_50.push({
            "intObjID":2014,
            "strName":"Mega Cannon",
            "strPluralName":"Mega Cannons",
            "strShortName":"MGC\'s",
            "claType":AGunMegaCannon,
            "intBubbleCost":3,
            "intGunCost":1,
            "intClassCost":4,
            "blnLower":false,
            "strDamageText":"Damage: 4",
            "strSummaryText":"A Heavy Cannon designed for huge tanks.",
            "strFlavorText":"You must be 46 inches tall to use Mega Cannon.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_62.push({
            "intObjID":3001,
            "strName":"Sticky Burst",
            "strPluralName":"Sticky Bursts",
            "strShortName":"STB\'s",
            "claType":class_148,
            "intBubbleCost":3,
            "intGunCost":2,
            "intClassCost":3,
            "blnLower":false,
            "strDamageText":"Special: Bullets slow enemies.",
            "strSummaryText":"Fires a ring of sticky bullets.",
            "strFlavorText":"Sticky bubbles?  I guess it makes more sense than bubbles that explode on impact.  And this gun makes LOTS of sticky bubbles.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_62.push({
            "intObjID":3002,
            "strName":"Stun Burst",
            "strPluralName":"Stun Bursts",
            "strShortName":"SUB\'s",
            "claType":class_149,
            "intBubbleCost":4,
            "intGunCost":2,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"Special: Stuns units for 2 seconds.",
            "strSummaryText":"Nearby enemies are stunned and cannot move or attack.",
            "strFlavorText":"Do Bubble Tanks have brains?  Maybe they have drivers?  Not sure, but somehow this weapon instanceof able to stun those tanks really well.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_62.push({
            "intObjID":3003,
            "strName":"Area Burst",
            "strPluralName":"Area Bursts",
            "strShortName":"AB\'s",
            "claType":class_137,
            "intBubbleCost":3,
            "intGunCost":3,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"Damage: 25",
            "strSummaryText":"Deals damage to surrounding nearby tanks.",
            "strFlavorText":"For those who want an up close and personal battle and are looking for that more intimate fighting, the Area Burst instanceof for you.  Just fly into a group of enemies and let loose.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_62.push({
            "intObjID":3004,
            "strName":"Area Burst Cannon",
            "strPluralName":"Area Bursts",
            "strShortName":"ABC\'s",
            "claType":AGunAreaBurstCannon,
            "intBubbleCost":3,
            "intGunCost":4,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"Damage: 50 / 30",
            "strSummaryText":"Fires bullets that explode dealing damage to an area.",
            "strFlavorText":"You don\'t have to be a really good aim to hit enemies with the Area Burst Cannon.  Just get the general area right.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_62.push({
            "intObjID":3005,
            "strName":"Star Burst",
            "strPluralName":"Star Bursts",
            "strShortName":"SB\'s",
            "claType":class_147,
            "intBubbleCost":3,
            "intGunCost":3,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"Damage: 15 at first, then 5 per pierce bullet.",
            "strSummaryText":"A powerful bullet that explodes releasing a ring of piercing bullets.",
            "strFlavorText":"It\'s so pretty...",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_62.push({
            "intObjID":3006,
            "strName":"Drone Converter",
            "strPluralName":"Drone Converters",
            "strShortName":"DC\'s",
            "claType":AGunConversion,
            "intBubbleCost":5,
            "intGunCost":4,
            "intClassCost":4,
            "blnLower":false,
            "strDamageText":"Special: Converts all drones.",
            "strSummaryText":"Converts all drones to your control.",
            "strFlavorText":"Something about the Drone Converter just makes enemy drones want to die for you instead of their past master.  Not sure why they feel the need to kamikaze in the first place.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_62.push({
            "intObjID":3008,
            "strName":"Massive Cannon",
            "strPluralName":"Massive Cannons",
            "strShortName":"MC\'s",
            "claType":class_143,
            "intBubbleCost":3,
            "intGunCost":3,
            "intClassCost":5,
            "blnLower":false,
            "strDamageText":"Damage: 100",
            "strSummaryText":"A massive weapon that can obliterate enemies.",
            "strFlavorText":"This instanceof the gun all other Bubble Tanks weapons aspire to be.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_62.push({
            "intObjID":3009,
            "strName":"Seekers",
            "strPluralName":"Seekers",
            "strShortName":"SC\'s",
            "claType":class_146,
            "intBubbleCost":2,
            "intGunCost":2,
            "intClassCost":3,
            "blnLower":true,
            "strDamageText":"Damage: 10",
            "strSummaryText":"Fires seekers which hunt enemies",
            "strFlavorText":"These little guys can smell your fear",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_62.push({
            "intObjID":3010,
            "strName":"Shield",
            "strPluralName":"Shield",
            "strShortName":"SD\'s",
            "claType":AGunShield,
            "intBubbleCost":2,
            "intGunCost":2,
            "intClassCost":0,
            "blnLower":true,
            "strDamageText":"Special: Brief invulnerability.",
            "strSummaryText":"Allows you to become invincible for a short time.",
            "strFlavorText":"Ha ha! You can\'t hit me!",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_62.push({
            "intObjID":3011,
            "strName":"Teleport Before",
            "strPluralName":"Teleport Befores",
            "strShortName":"TPB\'s",
            "claType":class_152,
            "intBubbleCost":2,
            "intGunCost":3,
            "intClassCost":3,
            "blnLower":true,
            "strDamageText":"Special: Teleports.",
            "strSummaryText":"Teleports to mouse location before executing weapon fires.",
            "strFlavorText":"The Teleport Before jumps the gun and gets things done.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_62.push({
            "intObjID":3012,
            "strName":"Teleport After",
            "strPluralName":"Teleport Afters",
            "strShortName":"TPA\'s",
            "claType":class_151,
            "intBubbleCost":2,
            "intGunCost":3,
            "intClassCost":3,
            "blnLower":true,
            "strDamageText":"Special: Teleports.",
            "strSummaryText":"Teleports to mouse location after executing weapon fires.",
            "strFlavorText":"The Teleport After allows all other secondary weapons to finish their business before making the leap.  It\'s rude to interrupt.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_48.push({
            "intObjID":4001,
            "strName":"Basic Cannon",
            "strPluralName":"Basic Cannons",
            "strShortName":"BC\'s",
            "claType":EGunEnemyCannon,
            "intBubbleCost":2,
            "intGunCost":1,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"Damage: 1",
            "strSummaryText":"Your standard enemy weapon.",
            "strFlavorText":"This instanceof the standard gun on most bad guys. Looks simple, but when facing a few enemies with this guy it can get tough quick.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_48.push({
            "intObjID":4002,
            "strName":"Seekers",
            "strPluralName":"Seekers",
            "strShortName":"S\'s",
            "claType":EGunBasicSeekers,
            "intBubbleCost":3,
            "intGunCost":2,
            "intClassCost":2,
            "blnLower":false,
            "strDamageText":"Damage: 2",
            "strSummaryText":"Emmits drones which seek out the target to explode.",
            "strFlavorText":"Bubblefields don\'t offer many good hiding places.  If you\'re still alive, seekers will find you to put an end to that.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_48.push({
            "intObjID":4003,
            "strName":"Enemy Spawner",
            "strPluralName":"EnemySpawners",
            "strShortName":"ES\'s",
            "claType":class_153,
            "intBubbleCost":8,
            "intGunCost":3,
            "intClassCost":3,
            "blnLower":false,
            "strDamageText":"Special: Spawns enemies.",
            "strSummaryText":"Creates new small fighter enemies.",
            "strFlavorText":"Taking up the family business of attacking tanks instanceof fine and good, but Enemy Spawner would love to have at least one kid be a doctor.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_48.push({
            "intObjID":4004,
            "strName":"3 Spread",
            "strPluralName":"3 Spreads",
            "strShortName":"3S\'s",
            "claType":EGun3ShotSpread,
            "intBubbleCost":3,
            "intGunCost":3,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"Damage: 2 per bullet",
            "strSummaryText":"Fires 3 bullets in 3 directions.",
            "strFlavorText":"Getting away from 3 Spread can be difficult.  Me?  I\'ve moved out of town and changed my name.  You can\'t ever be too safe.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_48.push({
            "intObjID":4005,
            "strName":"3 Parallel",
            "strPluralName":"3 Parallels",
            "strShortName":"3P\'s",
            "claType":EGun3ShotPar,
            "intBubbleCost":2,
            "intGunCost":3,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"Damage: 1 per bullet",
            "strSummaryText":"Fires 3 bullets side by side.",
            "strFlavorText":"This weapon instanceof great for kids not ready for the 5 Parallel experience yet.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_48.push({
            "intObjID":4006,
            "strName":"5 Parallel",
            "strPluralName":"5 Parallels",
            "strShortName":"5P\'s",
            "claType":EGun5ShotPar,
            "intBubbleCost":3,
            "intGunCost":4,
            "intClassCost":2,
            "blnLower":false,
            "strDamageText":"Damage: 1 per bullet",
            "strSummaryText":"Fires 5 bullets side by side.",
            "strFlavorText":"It took 7 Hero Interactive interns to decide that gluing 5 basic cannons side by side was going to be awesome.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_48.push({
            "intObjID":4007,
            "strName":"5 Spread",
            "strPluralName":"5 Spreads",
            "strShortName":"5S\'s",
            "claType":EGun5ShotSpread,
            "intBubbleCost":3,
            "intGunCost":6,
            "intClassCost":2,
            "blnLower":false,
            "strDamageText":"Damage: 2 per bullet",
            "strSummaryText":"Fires 5 bullets in 5 directions.",
            "strFlavorText":"Some critics wonder why we never went further to create the 7 Spread. You\'re looking into the future, but I\'m afrad the technology for 7 Spread simply doesn\'t exist yet.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_48.push({
            "intObjID":4008,
            "strName":"360 Spread",
            "strPluralName":"360 Spreads",
            "strShortName":"360S\'s",
            "claType":EGun350Spread,
            "intBubbleCost":4,
            "intGunCost":4,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"Damage: 2 per bullet",
            "strSummaryText":"Fires bullets in 360 degrees.",
            "strFlavorText":"Don\'t hate on the 360\'s general lack of aiming skill. 4 out of 5 dentists agree: this gun instanceof going to hit you.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_48.push({
            "intObjID":4009,
            "strName":"Mine Dropper",
            "strPluralName":"Mine Droppers",
            "strShortName":"MD\'s",
            "claType":class_156,
            "intBubbleCost":5,
            "intGunCost":1,
            "intClassCost":2,
            "blnLower":false,
            "strDamageText":"Damage: 10",
            "strSummaryText":"Drops immobile mines.",
            "strFlavorText":"Most bullets are wasted and die when they miss their target and exit the Bubblefield, mines have decided to wait, sit still, and contemplate their existince until you hit them.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_48.push({
            "intObjID":4011,
            "strName":"Sticky Gun",
            "strPluralName":"Sticky Gun",
            "strShortName":"SG\'s",
            "claType":class_161,
            "intBubbleCost":3,
            "intGunCost":2,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"Special: Slows target.",
            "strSummaryText":"Fires sticky bullets which slow down their target briefly.",
            "strFlavorText":"What makes these bullets so sticky?  You don\'t wanna know.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_48.push({
            "intObjID":4012,
            "strName":"Sapper Drone",
            "strPluralName":"Sapper Drones",
            "strShortName":"SD\'s",
            "claType":class_159,
            "intBubbleCost":5,
            "intGunCost":4,
            "intClassCost":3,
            "blnLower":false,
            "strDamageText":"Damage: 3 / 2",
            "strSummaryText":"These drones seek out a target, damage it, then return a portion of life to their creator.",
            "strFlavorText":"The neighborhood has really gotten rough since Sapper Drones came to town. Says the Sapper: \"Hey your life looks good can I hold it?\"",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_48.push({
            "intObjID":4013,
            "strName":"Seeker Carrier",
            "strPluralName":"Seeker Carriers",
            "strShortName":"SC\'s",
            "claType":class_160,
            "intBubbleCost":4,
            "intGunCost":1,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"Damage: 2 per Drone (6 Drones)",
            "strSummaryText":"Pops when hit by Avatar fire, sends Seeker Drones your way.",
            "strFlavorText":"We\'ve always wondered what sort of dark little secrets were inside of those big yellow bubbles. \"Shoot it.  You know you want to.\" says the Carrier.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_48.push({
            "intObjID":4015,
            "strName":"Rotating Machine Gun",
            "strPluralName":"Rotating Machine Guns",
            "strShortName":"RMG\'s",
            "claType":class_158,
            "intBubbleCost":5,
            "intGunCost":7,
            "intClassCost":2,
            "blnLower":false,
            "strDamageText":"Damage: 4 per bullet",
            "strSummaryText":"Shoots many powerful bullets in a circle.",
            "strFlavorText":"Don\'t mock the fact that this weapon freaks out and shoots everywhere, this instanceof the gun that makes many BTA players break down and cry.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_48.push({
            "intObjID":4016,
            "strName":"Heavy Cannon",
            "strPluralName":"Heavy Cannons",
            "strShortName":"HC\'s",
            "claType":EGunEnemyBigCannon,
            "intBubbleCost":3,
            "intGunCost":2,
            "intClassCost":2,
            "blnLower":false,
            "strDamageText":"Damage: 4",
            "strSummaryText":"Fires bigger, slower, more damaging bullets.",
            "strFlavorText":"Making more destructive bubble weapons instanceof a careful and precise science few can comprehend.  This gun shoots bigger bullets!",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_48.push({
            "intObjID":4017,
            "strName":"Machine Gun",
            "strPluralName":"Machine Gun",
            "strShortName":"MG\'s",
            "claType":class_162,
            "intBubbleCost":2,
            "intGunCost":6,
            "intClassCost":0,
            "blnLower":false,
            "strDamageText":"Damage: 2 per bullet",
            "strSummaryText":"Fires many bullets in rapid succession.",
            "strFlavorText":"The Machine Gun just realized that if you keep holding down the trigger, the bullets keep flying out.  I hope he keeps this secret to himself.",
            "intLocked":1,
            "blnAfford":true
         });
         this.var_12.push("f5d7d1c34cc5ff88721eb1d743393279307811e81ff1ae6a3cb56e191af70ec5dee2e53805569c1e501599a2b2ca9582b9d88e23de9039c80ffde5b26a5e0e69444ec7877d978a08216f7c70abc92b69cdef090ab1fe22f581f07921f9561aadadfd6a8f3e2f82c47663a56502296e534ce48c6d01374b8b0c3528500fdbf57024f75656272f795d017c006637cda14b805bd6481544011e594f7c2d05aa40ccbb85bd8f8631b27d488e5d923abd670a88144237dab50e8a669de70cdb896b0171309e");
         this.var_12.push("aae6f5c49bc95ee7fe4e615cde5401ecfbd1f4f13ee4ecad7891d022dd8048771237c6a646c233bb915f39ea47cc6826804aae34dc4a74fc393b937f9105ce9ca1c17ee9ac2b27317104e83f0af7838a25f9127d6737631f979f2b0edfd6489fa6e8aa36a3c3cb7cbbec3f74f72d805979f3dde74e5338abbdad07110b7fbcac74fefb6731527595c41939288ae2bf892a5e300f7b2d254e90a7f67cde160703a892d32cf841a11d130377fabfaaf4db6509767a64d6810a139cbfdf9ca9456e0a7bbccb6741c13a9fb0a5e8635c6c094ab867");
         this.var_12.push("4b7c2e7756a96d3fde5f801d24a7249d711be645fdce0259e1927c8835a8975f22ea5fe1300cbb875f14f4895922239cf459b2ed84f868413141deed0d7cb0f3a3030bdff5ff5319d2172d6ebb29fb0bbadeeae657d8b4ff126859866e759976002c772cb926e6a3366f5063cdeca0b3eeb30a6b64029f380b2bb360c5629cc696404950610fc64a0c607e676f4d755bf073e89effeb453533a8933a417ab9d53b6d488d43b065634266b86068e61902408de392ff4a40cac5029a43717b0c2386c6a0f28e013d4b35cd95ec5bfadbe709b54327598f1f244248ece54b8e228b33cc8f82535a06f395ed89f738834942c8741916c302a992553edd6b78cdde4e6ade79bfc2a7304bd28c886dfe243d78cee03257d44fd06caeb4ebd50fe8da7ccca2a4");
         this.var_12.push("62ca0dfbdee43130a7471027be712adf62b8339a3814aec08772eb6821001198d84096515d70fc422727dd76feb455f28db9a20637a576c8bb12f92b2bfab80761d67aa5a6451817eef6d5ab7530b854a3ff2c4cda0d12f3d57055c79f8c9ca7a5d3a6f10509895e9fe8feed0ec35b71abe4e1476e8397afadeb00fc7c39f1509097dc8dd841864fc4d616dc2c0d851053b915f89b50083741e0756b13c80dc6a62cd48c6a355446e68cc8c4dede5968c3f5ab74b4dac02bb34ac65720a781a41e5d18e0d860b8e4aba8fc41477d33a7e6904b879fd5fd16fb3f10b60d8a0dfc36251ce751dafa50a9dded719b224538ca7ae37288eab132247f6b8b26ff4f6f4dce021e1677c505a0d9a4757133e4090f4bf5e6d816084be2d6de5daad94459a736aa9cd61c6e8e4d10912d1ae92e613658e72dad43bf1cd2750c82770037d66fce77a8c78b58857ea39059bb543675d8d93bb6d5aa252c79d6ad3b35172d8274a671f5a47486a429ae11445fa2a8311b1cff299814bfef3d202784b2f18a487510b86654c5ab58cb0d6e86d2baead4a1c1f1f7b0529c9d7140f5e602ce1f05961c00bdd807d0fe0d363fa25903b42c0e8e735e3f0c801dc7b73098c8c8eac79d334b389944a1aa053e21632c806a3613e3d5d3ba60c5ab67c312197a6de75c686b9e");
         this.var_12.push("1209d2c2035c2059b5f712fc2b18947a5f0c505260302b677095d175377328b98845ab4d9b3eb901ff608c96a51c86b3799744b2162d22062c00ee43514e4294f17b61686b61b2fba9b9af5b2de905db8e3d50a4e811f9b2583093f8940b44adb3906e55306ff5c2c38285ea21b55b83bc4fba0b2c0a12e3e735913b0d9f0e1ddefc9b72d9672a7de88798618a126fdeebf894663e3d233436b5b9f0a5dc31c9d1e159af21b8bf86256b06beb4f3a2b3a856ce3e9a8e324236c0da6886dee941204ac4dfda9349481cdc38a7fa42196b7137b5d8d30a3cdd67fa9f74e014b05636f4a78b05df2445ee560e96c00f6592af7a67cc683b816eeb1250c328e2312cfa70fc905e775dc913caa7536677c54c526a17c71cbd594709034b9a8a71a94dc0dc28c27854e763ab37c7f2575fb7ff614e1d72d3a1d661e2eaed1e4efce94b8ea07f9609686fdc2ac742d35ba017965231743a794cbc504ec3180bf8b32d3dade223");
         this.var_12.push("eeced3a765afe9e7f71eed1ee420ee31165abbb490c25e9c4e75b9903b1dee90f9fac24684d2910bb1494c508976d72730b942b0947f813b87c0ba67923765e7f9c676d82316ec2cbc2cb755e5b73b692ce711fb5e8954aa9056ff35891931190e5860c67c310cee7cc22d94cda1655e768b4cee8583f82ad0cc81169d9be76f5f10a40e8a27f14d7192040d643972a17a1e68e85f19802faf6f74a045e3e58f16a5656107386bf2f42ffb1632bd5a1122c0a40e8a27f14d7192040d643972a17a1fb24efd863e9544cc4437a5945a25ba598097b1dc1c8281fb76547726535b775fd7b9a36669f480972cde1b775409127deede9158ef0dd508aa5cca1caff9c4a43b1559783fc267d853fce45bb81ab859b6");
         this.var_12.push("cd3d8dffbe2263ff3aedcd33372e672212576d71bd31b425bd6ce81730b6b5f170a8d8352874b768b95ac6bd3b7bff0b466ddf15cef7480179f46f70a70981f9834f7ddd6d7435eb59fd3a4e64a341b2bedd14e75e3313dff1b8150c818a410b8c383e4c368b10cf693a4f69bf1f3be091e12b4cbd1227640b71f2f2e70a818fa16bc479c2b59f7243e893729b164342a55e1f78d8522cbecec29302da9841dfc3662e249096eb25ed16edc50e67f9c222c336b30ad3011dd7f72aa44562119bec50444f5b5018257c1e78bc5c03b4250aac7a35de42cac7628310d8811e62d296e96c18c95edf11b401620f85696aa2122211bc0e3c9155ff6166b3dad8f0e4c1505f4001a75ff42683240bbd442ee839cfd9d73f26401a844c353a2d6711d15c132c95e9a7893538954d260b4b5c674bb29d293f684fc259e334dc800cf49daa096e6030e90c4806ed2cc90996a0bef15c4ed470870dc9ff8efe230a8542a2e831dcb52c4bf82b98b2d9c5158f174831d79b2255c4419c89c8d9694173bf8a64ac824c8aaecf97f222aa2f4713787fb11d8015902e2b5ee91f9afeb5f4bc971c75de");
         this.var_12.push("9921d60ab47f4c4a05ebb07c9dbbb9e4b9022acee42b3a5410a68a600cfdd2fea942d9cb5b2148cc807f73bde8d69a396eaa1fe2cc73123d936959dd0f93c4a2b8c6cb82d6be8260a6988bb4e28fe42004c378740fd75ead99d1ba3f17037def69216bc64e6ac1b01d2bb04d7b2228c6ced5e6baabc7cba0c73aa2063524544cd0dc2b7c726c5c58ac2dfd05bb1d1cb8805331cbba42defa68977390ad2dff76b8c7712560e696fe9dc7a0e4c771023dd22cd01577861308f2d75fe5c3721cc2063cbf3dc898531a9830e9248859b58ff20f3359deef6492891547432eaccce4a15d3061446845e41738c1ba8d77085844394b8798186087bf75dc94e7557e3d876ee1c8f0614692567b99f3332a812035c25bf15d94246cc022c2229e526183a013ea4868654c9dd97264fe4ff737f137ea8dc3d2b3428fead1bbef7a7218d2eef81502af35b867ff01cee6ad12c2b6f2f36dc915cc2b40cfad7f9b158c309d7dc1d42c7e5e50174f3ece11c426568465809b590ed11344fdd0ccb0a508a0ae63bb8eefb4045399cbf544095dacbc0477a48a");
         this.var_12.push("aa6545a42497319d9f8df75c785cb06acb0af4e406817d8a684ad982bd062f680e8f54b3bdbbb1d360f6d469e5cd59a612d70990af4500b11d61ac3b6c00a43b8f2af44d1d171842647fbeb6db129c1559a114258f2822f31301be19446e83012f78ee3bb7255bfa18756cafcc8f0db40f6a9a28aca1b7adb71a92051e5612c61015f097aff22f9ab65ccfab81608d0b8aedb203a847aa7e0465c43c8232b72eac122730af43797a7b74f2c06fd65949ca8e607a24430083412edf721dc233880e39f5c01bed715d3ef3d563317671e8a32a05ff5ecd192a37446ccdfe11fa0360b45f7e4ec252ef4ccf38493fee4286fb213b3df0d088862061411d2b81ef7e6be421f89ced917457f4a52b32fd3fbf0fe693566734c732d9c9a625ef23a9c311488288f3bdf75ce1a6a712ed5feafa0911a21ea70eb33920f29961fae42d811ddcbe54f0d36437dd3ff4f1fe8d43565a249188ed9d7e43713273d483018909c1c9778c046c44823d45fa8d40e516f25625187658c5d50ee9592493d3af491c30a59c13d436c79dcee546764fedf1fd26a9b5");
         this.var_12.push("382f1f75d89033ddd12638560d838803b7c01bdcdd3dae00f32b2af43a011f24e356ec13786bd970a0a3109a7479e08efd5626b63d4225f57c0ce85f65c20485826a5a3ebbb5f0c138cdb3dc37424a56aece98d74b6f5453a40028a8e2f59444424d997c67b91f8ba2b7cbb481dd62d584bdd882f3b205a3573bce7e97703aa3b9f8cb4c6ab753c5cf3e8e96e4d0c6b394c2e4bb31c07e334f739cc9606a371484e94dd5b8dc6a28ea8c388e772c2a9a6f3fc9a75bdb19046e36a8778610b0170ab4c60a7c5661329f988d4f8e484cd8ccb741bee83ebbee0568abfd0154e7858393038481abf7ad8672d61ba5c6688c2ffd822935aa3c8ea5ee1b547168004ff2c511ddcd0e41e9f0609615f8bf6df80930b26331a76347d578e295c6ad48d58fba348d8b10f01793d8fdac0c870c286baff0c3d12056c3c39bc20a6c58be59f159bf368b9ffeeb81e359f103e0185a70c111152f132e8c1277a108e9eeb82208ea71db1f0c52a6466083e3b1f1bd07a09e6fdd0689bdd5225ab6708deda5d3b24ce692cfc4d7ee2b9ba40d9fd5da5c9855715667944698ad5226cb69adc3b43d092e00c1cbf76a88da0c3252cbb7d5050b8505a528ed52869797d888f30662cd9ba4fb9891d67c4949de0b6873557c57ec9fe4c874288a3f04bf2818fc343db48702aca6f112bb1c03276bb9357905a3cf9ed9e61bd2cc5871a99acde520e7b4a8362ad7e21cde8e0df4b0112cc73e2aa42dc7ccaa9ef1a309c5c2b64e1acda8c82d9d8934baef8fc9e1c9c2fda2caf9701b1b570e17d5fcfc1de555d1c7e026ed609b09185efc116f174d7b48183966ea7c6351f58095ac98542baaa36e920b04dfb95ba5fc2e1574c27c409f580c0dae6cee86cd775dfbcd6b1b5c5777daa32dd3299feb86d82096a9519405dc7ab7f25ae8f3e85f172fcf6382fe8ac3c9ced3f511145713ab9486e58bcf7e10fda5402a137669372a5f830ee996efc841818528e9953613c4393f67b1a89099caa4be811ccc4c4aeae603420ab7f71c6af3aa8d");
         this.var_12.push("89a1482d12c6aa3f88a2514e847709a288a19b42481604fc1420af2206b6e35b5a864a8b6b23f66ad251fd79802f8ee380e30a857fffaf5458b332b4537709c6937ffbb3f17424dd70ed757f400a6d71df4231207615e34b7c579f2e29888a7b08133509bc4e10a6dc5da8ad8f53330ccbb97f4af0f21aba8d2e45bb8d57d898022231207615e34b7c579f2e29888a7b08122fd83c4e5c602c0608a7f54f1db513891aed8d62148d779192e1f728a4aec6b231207615e34b7c579f2e29888a7b0819004d4e61e9dc8ab635aca149f5d2460088a5b1a54d395b42dfce6d71678b404fdfe9567d310489e1eb0574def97697391a9ac4f8035398aa02cc4c31c3678136b7cd29045c219bf9c01c7fa08f6397da4ef39192b62d351b52fb3df79b9a5cca34cd7325dc43d7e84aa22a6798d9f37af6878cc830b43621c1f4dfdd05dc93fc58402b6ed6ed0ce96bf4ae93a4a1b1f59c93c597c2279e4dfff3dca534ea79874ec2c8afa3ab2f79fcac1f38f17185685d3bc8a1bfa662378f20d20767ebee1caa839795c917cf1edf06ee62a730968af1e054c7f44fee00546e98ce9bbd2f46b7e89049e972daa74b8d303350ea2606837688977d562bd37f625735e3b5ddc9762af5c148b99e1ddce5206c910bbc6da7b0ac1cbada5200ee0e26cfe9cc2d703610d72d7fa10a9d4756dbb4f7ea5b9dca432f4987f804e575f53260592c7f759c93c597c2279e4dfff3dca534ea798bbca56813bd20e0d4474aca754972dddd44baa232bfc22baa47b32414a1d6361db20e869ea079441bfed6ee899134459562");
         this.var_12.push("f292a9106c1df7c0ddd582d62f42b27f38aff9205ec137edae53506b76dcc48b36fa8a781bd5fa390073b08ac4885b08c668b37c0a63ac6789d7b88d856a9382a53dcfcd420938a4b6e6631a099c67e5b2e43fea91cd60cd52f3698c09bdc24a74b438494b033dfbedd4d36e2429081bc48b1d6fe10455cf3ab9621696cb150ffb9293880bb105d8bce3135570979aa8ca2f40a0768a4740ef6f17f2f4883994896f3accc024bcf5cad84a057f2d7fb540a05293d2e449ee865977ac1d922d3ae27749a106f9b99af39bf3ed41439d0b5f6a41053f84ee3ea7dec51af0fb09a25380a534215f8368e61a0c57be93d51a27c583926308cb11a12caa28ddbbce83bd7c26e47b7bdd106f1fd9b29c328c366b92fb871ee40ceeed9843ad1c358a2a64752a427223d7293226b3d688731cb7afb38e32cf2cac16c2dd900ea257f31467e9a25ebcca03dce1eb64080da81a37cdc48b6836b45245bdc391c3ee1b5c3c10ef5ffee3855f88cdec63207e20c967d80fdceaef326dcd5632210d682abdaddc52808f2adc84d432484fd2b6f9743a8962fb7ce433b6ee7f42ae8516f7941cefeaf8e6069536af4a9a6144a5b2b48cce87b7e63a52b2453b6a1d85f5fc628922a9d4");
         this.var_12.push("f6902cf7a844f73a0446ce335c9d09051ffdfa00130c89dffb65e2b8dae78b7f7cd1583790fb98425fceb86f6112ca396614b3f731d2c07abc6a5aad4c905c542863c9815e17fdc56391e628cf74e2a49b0c8a0665db06a96d1374b8b6a4cbdb3cca4f0d1b1b39eefb15efce02f10cd9fde21afee9bc0afec3c2b2b50025296e6fd6fcf7e619a76570296624ea326db8e15f0d7c796d035154b8d5f8cf826194db7a728b560936b39cc7db483334848b075c7cc3c33fb3201d7b94d3ee42d96911241c45a1e8d0e00e223f9dd6ca47a018c0e50d2f508ce96b6a1712aba619ea10564ad104427ac695dad3fb7c33f41c97a942d8a34e3a9e3108ca203267dcc16ed051c7cf4f8aba8f2ecfe68512c2d310eebe13543c36c51c1be3c2d0eb9814527117659de031781d159f4053d4e5a21cf3f2442f8c9135770580040c5837121bdae01e4bd6965676c66ce207b3942bc8c59e87ce9c57064749794d5a7e5dc0d072cbbe0ec05107f41f74c4747d0d7f179ce40652a1b06c38e4b7ee7e276ae43810689639f9aba91e6888c80bf5dd01a98f669814f76c28465eee9c55516416a6e3e72304678e4cf06af17fea44be2e6d98047d293b66744e19df1e7d2a052436153696d218605e652a91f0ac557934b46b38ac9ad568425a3b8ae68b123d5829a39bc644d242397413d5aab28d9466cc0567dd1c43ac4e9c271b9d01e4538c89d9152473dddd4fdcafdbc12fe814c15399a808c3505723f4610ca1ddd94644d94f6c65441cf8cbb3608e39a7ea83d0fca7a0974e31451810284d33d64adb59fb6173ff8dca4e8063834eb3d83dafbf23a0806466283a046b6d3656f358c68f39dbd8e9d994e0935ff0d195e45e23db575f1d02d5275179f38595ebbe25c7f5a497f57243ef7f264df004e4934db35f7c5f5bcc3d4c9171e68bf0d531a18404a20dd500f5dc644ae0074b3b90254fc3198aeca05652acc02a1e8fc1bb65aef50b22d1c573800b5111959251c4deb15519aa571ad34b749e295b68f7eeab0c15958188618f61202f0caffc2cdcba9a05381298dc30cd690a65f2cc6d1adcfa513eb19f");
         this.var_12.push("51bd1297e4d7f3e2e6c1261b0ccff06fdae067f126bfb48e53328a90d8f9b9c47a6f81f476165e7a08daeca4d0c6aa6e22548b3ef52ddc305a0cc6dd0cdbf9012892d74e318f5f48bf6c4d3b9b88532fc28c15dd4b5e7ade735ac6f805140888baef68cc432133950e10519389f040da2d143266e53a6be0c6ed9d57c3f2864a1da8ae2245affe8255d6f37a722037b4559c0c98a7159d2afae74cc3277290052feb2ca48c8ca939fd49835db6e76352f09ed5307f377361159d2f92d35da8db86ee73e084fc3bd16b6103580ed0a5b422f5bd04da1e7d62c46b8b5e9fa97c63ea4a9527c6b8da4daea671374550691dbebee1880621ce3a00db205dc673faf7803a9ef3c5be66f796b718994f281487b0849ea314c22fff0a6b479f98e36490c4e45c0970e0e82a9581684c4f66bce58863280009d0e504fc3a7ae032a567f53fcecdaaf91e6c32ba5a49470026e252be0e2079c6d6616549892b26eb4a0320f402ff6f0cd816aeefeff545721eb29d633f42f1c521903de419fae73b7ab056796212f67ef15f144b2880ba273d8d4996125547354f1f97fb0cf5a51da255a24bbf0dd38e7806a000fb55dcfdd72b75512cb485f33e219a409bd2d4224a6f792be461424aa6f685424f60f29ac5ab4ce1e49ea314c22fff0a6b479f98e36490c4e1ebdc51c645ee30c290f2362437feb4fafdf8b3462aa24392872e215531e6e8570b43340ffc77bcb5582a614401e0df97c2b084a6c881e97ee5b3870cac5bbd158491c6fd99dfd7775bbe12901afc2d345ca9f7ac62639a7ea94a26b6aba0ede750b7d34b8489910351aa340f711cd56c38fbbdecd7fdc3fb254b98e8ba5754b45ca9f7ac62639a7ea94a26b6aba0edeb5f17c5ac7d5c31c8a8b39b5234eeb699ba40a4fd6c7fc063dff06f88c237db835a925e511531dcd3e29a004505a968dc67111997c5026470f8e7da36fa85eca403f728b0e86f10fefddf8bdd0f8105390b3aa7888a6059878471c0243138f054c9257149a7a48b53dc1942c28fc6270484cd3a610a5ea66953c10d1e998bfc1225782082cd15007b5f822166e2981d35d44456573674050792d828e959008fec7a9517315b9aa3dfa5d57e218bdd13a398ee2348bd50ad96661e745ddd9e15bf356e4665d2bf1fdea3e8c75e2496429b32cb2230a0443a3e3d55aaec907b00cf561b8028bd440cf0763565a8342dd8eb5b08fd2bc299ba1a1a717b6a8d19a8016e0d23d7b0a1035454278f2432aac9850571a4f2cca8ed49d166aba983e136ad1027712e544f0e538f30be6a46c6da3cf64da9fdc29acafdb853d6397a1c06cc37a33a4975bb5a812f0bdc638e97a6aca9b4fb27145d29fc16e615c2e2ddf431009543e673faf7a54630799b9bde6eb190d3f08bbbee7a8dbb43120dac945186e62cf0584e815a38ffb80eb68da8916bf0f623fa5a4b5ec093b9bfb3abc5c230c1bd263235311375487948ade9d7919a66ebacca105b8112cf2a8ee7570da7a83b");
         this.var_12.push("3db03fe5a4b87832656565e3ff170c1cb017a3d4a0676fafeb99e8e64d9df0efabebd5927cd6b20489ff7f669b907f63dc40b743d37e71539fee5a02373f2ac250667e705100b778cf99ea0a5d5b0cdad566eb6bf0d9f24f46a4a5a68e521d300638910540399a4010ec022c6d0f666dcaa5d2395072a3088472914d7f1a9fc8ccfd7eb5856e6857283fca35828e13af9922e3a06b7ee5e2bc1c9fb82218f8a38e2ec6825bd35a2684d8a188f41b082fc8e4a9d50e7640fea8d0182fb8711526ece05ec8301cb7f5a73345975deefff1da4c2a73e6d377679555145e83fe54b239495c142d941d745a529c442cf0b20b411316be265a52b81276e757cae082ff07509e2c3646c3c462882eeb6fa9ed7f984e0d32b946096bc2e126aa458e2d80047c10f00b8cdb1b633bd8cca61b20c771186310b84a15f25a425b9398ec210b812f7b0387bb6bfe41f4b442f5019afdee149c84029045143f4adfea83b8f3b8f35165727332bd12a68dbe9033ddbb83f66ca2ca99496159eb3f4872b24d1f67c25fe7");
         this.var_12.push("969794ac471ba2f46dc04d111a28ed48dc9ac758f4576cd2f28e96b0180aaf899562dbd5e77189dbbc124328f29df82aa459a4c84e5f733bf77028d88ab803925e43fdda9fcdb00defecc01ab72d51aa4c32087dba434ed32f62b80746c69a95a8d8601e8fad2d272f389c2198ca422942c0db987016149a133cf07376a291ec31f4dd19e31d875cee0f2d4afe7fdc846f10009ca2c2bc6e66defe15b40fc16461bbf737869cdf9c334e8245d1546e3bff9e6862ad6ae5daec8089e68c38f2733089050aa972054b075c878bd7b65b33882170ba682cb1bd60625d6ceed0d8789bd677da18feac00f091ef37bbc5f5d888379a1b32d685c7d5c03166b3cd7abab1281c1b9ffe9b021c6da036f8e1ec3ee425741f6d779ef7fe5834f844320942f12b2995bea2e5f0f384c3516f362e10fb222488357cc402b3e16b68d0f15a37904ccdde09f2b48a0df3e9d5dffbf7642037515921bb489e47d0b37a5b004935825e2a8a5373f431c8975ee678d878d3e8e8472aa3d8b4d0ce04e8ae274db7621ddf0e93338af6336d9716876777d9cd22aa07e7b542cfd935ad3cdce0e979b343bdbc5cfcda0d889a670be5ce07124838d96babb74ed4f7314a5c39a247b27ad659e27d5274d66b518a18c427f9e19aa7c13c5921842653f7210bb068492906f01b916149373769e9f5a4ae6641c1aea96902267e3508128975f36c55286ab64f72def731d8d42061bd7cadeb719f092f183e537324bfed58ce5b8ef6690f591bb98a3cbf03e08815c6ffbfc0705ed755201d78df8f66e2ff699d8c7c1bef6b68a402cb0743b4fee4fe40b06c4b64a2216d35");
         this.var_12.push("ec3ff247498abee1e1efc9718772c9e797fefc079c7a6c7cd43ba185e7cf2cc84d995c656b4319e79e0a2d73d7edd8592910d7c5edad9d22e6253831806ef5a511a5f0770d141d49956612da7458544b54392213b07f66a35a175a5981655d658ab51a27c03e9e3424ce152895dfac5078d8063c0b4dee0aa0a32220ed1040b4c8a38bd4bc388c1fc1dd5c0e2f95d2d7333d77cfd488123ed211faea08e596710f88e8dae0df64a41fe896a432a51adf0db300c9423ad79af6d5cec18241b447973fa664e87b09f6e42078d6e9b922b806d2a223fb04d2ada6a8e092825de980d9ee64dc3243684f14f469f49b5bdf888fb4c04266c2a4cf79632dc0048b2758b391be5ce6ca17cc7b6fcc0eca2e264474153a704482f95f75680a373db573f3590e8a28fa7c5bbe48969b705065b817a115c75528ab5087cfcf29effae546cbb47ac4910cda998ecb3fb7b45d48903e27318715613fdc24fbb0510c6cd69ebfb786e1a9253dd211db258288bb1d6e2870e254");
         this.var_12.push("e7192ae5f20b2d93b400e40094877a9c8f11dfdf598c9b5c1974a1da6043aaa0dfece5a78e4413ad69f5086050b40a5ec96ade5ea44a104c51b21e42a4a4961e207fc2fb98e5d1d3c2ab1879d997afe83e737973b41dcda835583324d24448549d91426071a15062c06395e4413120b511491ed09f9035e1dc0d61c27346fac376e12867c2ba1848b8014d8b5293a820c168cd389d47a9cad4831fcd0f2a44be4dddab854908188a1cc1a1f4bd2e3e1baaa8928fca237f2c3ffeb595842cb4d7ac1a11eb8df1898451c87e3566f72da3d257de8f88ac487021779ea9acb9b5b92cff9c77a176a577f192cd204e2778ee6bb8b24cbcc6b22a7c8a3f35ee6d28ab4751fd84a555f394c2d81eaae3536ecc2cf47b13c1350fdfb22917c47e7775dec8bf1c3ab2a2e9be7a2bac4db5b119f6dc28a1aaf8ba894f5cc8b7e785c9fb1282e91b1fc809dfa931e82635e830d1a3e9a0e052c7ed28d17c78c820474e0fe4f343f01f955971f9b8b84db5156ff00669d2a5fbb4002af993b409df5f2c5f2a2437381378c8c5f9f22c78ad8d3bfa277744fb3310aacd60ddfd386417b5cef2f20d28f3c4d35973535f8ec5baf1689208e56595bea27996606d50af4183868f3f6f62");
         this.var_12.push("7f58220a827fcea42a67e4c3306c3aafd917c82a5d792cd45a297f5fa49788aa2030baf050c23d6ddb6eea78cb2c201aef40df312e1631d202cc21504c221aa5f711f2f1ffb65e6bc0881d13d36520743888abb1eac82e0c9d7f9fc7150aa502d025cc6754969e55ee56221201a8aabc46b910c2e86d3781b1d18437c181995e089710cb3753cd60e79e3be93b6ed9ef828b5c0d143990117e251581b743beedaa5848df7a3b841421c8369a73f0522a3946cd4c87604f4f69eaa65a2e58271edbafc0b4290367b0d10733a13eb02c14fc7f1f41e2653efb2dd3c14d0a1fd2872bbcb0e5d697c1cb3adcbf5837c0a4f5f977debfca58ef3b0880854005bc40cdc4ae466904c0e7d47735ddada9311a4587389a04a035554a95d8462bde31d565a4b6f839d53d4e29bddf06f3f668c8f9fd05e8f48fc11dde002299b8db1b56382e2eb48c39cc0ddba60cf82b100081a28375d60e82ef4c92dc5a3b95c62562bc6f2d4bf180c6f18445df0c8e13f6fc26f5810a56ef34e03c101d41b1749c8820cf23ada0da8eadbf2a0ef7533f64d1b17862731f44c56d7c7fa8d3f39050186232326f312348d7759bc063102d9b34e2cb2d58d8a27dc02394d9d140a5f0d04bd2dffa25f19b20b221bb97a0ee5726549769842b662d0a7a4933468ec4e6c5ca6cc8df2415d10f91ef570f785e4f1ac205f2700517088aebbd2046062c320a2156f96704569f10f9f2fb8d1fe361524f0ce511cf436931596359e423ae9feaff3a34e1f323c24ad2a0ac42fad0f1750d62d75a8e6516f17a7c7735374694ade7b36511cf436931596359e423ae9feaff3a390a9ebd61b48334c6482d0a7726e1cba2ae7775adfb1f4d8d6c96da4b44d71630b000d41f9a33b1cc873642f6449b2625f0a1b4b35612a17904beb4a5cb2edd85a87f8861a094385b9ff7fc9855aa1169f5a4f8125af99a88f27e37d240a9ee62452e93a6d8cfe43e25bf4dbde389b27c712cb2958ab00d8caa2401fcb63b81696e642d8fd0cf8ef5d571c8bbc9ee7e7121032f919cd71f0f9f1c01982d7c1dbf2876488a5885a98742bc6b1b86f4cad7ad85a199037ec3f34ee81bd3eafcd672984676ebad60b4a9dd42f1bcb5e31e891ecbc12bb4edde24390736035f7f2f8c89eff5aa8bb649af0531d46a917c26d1ac8f91936a6681d90b62c786957ba92f35a4a2cf114d29c72e4db406184038696d78708abd8d30f336b7efbfa9a1f6021a725aff9ec99c76c3b42dfdbcd5b721ca12e7ad795afcd4bdd1d60c60e86d82cb7b36b7cb967351763134b2ea088e57b3a82dee7dac9028718a4608063605fdadd61a1e5a187e368fe961a085032613e8");
         this.var_12.push("944d82f70b7423d1359ae0c4fc37a9b1ea656dbbe3130d9e1058721788717c88386a0b6a50c56fc3dbf71638c0c7b16ad78801524cd1490903db81d7852a2478c33d78c6b71eea5d21a54a577da4bb59cca8a03012265da8411d05e8b5a046325606bde46db2eb5c5386900f7e4cf69a0afa847764c41031d1867477e6c266676d560818b642fa0480f5803df28e1c4f72f31dbf2b2b938fa3cbb6b927ca01cd11969d0881db0b4ee5ca45d91490a01c723521cee14818295a330aa2b69a759d32c7038989c242c54387d6fc47ca453e0ca85cdf9f669e0eddc6de335c084aff17abb60d3a94cfdacdf77b3da10204e712520af0958bcd8ecd2f46242b355c4fa64dcc3a3e6b1e84e7ee651edc843bbf2451904b3aee9ddcd29bad573685c174f2191abebb2b1f4555d9fc38180830c13fba46788dae558915602b54d94dca9513d8d390fa72acd7c9ec68efdc194f30e9f7a58df4c4e524bfe578dbd63672a72657c41c2e73f4a7504f4c357dd94129de79a99be730abf32836255bf0ee9c050e058a6db1452f6e26d0ad719ad7c74757378c844fded45b30756a53165d3e40e7e89dd0f71febc86af372a23c0e95aab2137a5a210faef36abe2e441fef419d0b930a6a20dfe75edf1266dbb388301b5a079941d87a62c331e27731647f23550a229c88b846f5f607dce93ada9cf2721b2972f76bb0748e180c6d31055d2b619e30b37d41f0362775b9ec834ae355afb7de4195e40f8fbb0a8c63baa6dabd14dc36cf92c8c3a73713ca022db70168ca90117eb7c8a1c5d33f6914fcc4116e37ca58b9f9b75152ef6286eadf009b0cf55d74750778ce44cfd935673db3f1dc50392bf944cb76167c95d91635e1054389f76ffe3e7e3faffe1bf9468d4b550840330d7154eb63fcf6d3b0ab669f541c6e6b21775e64488cbcdcb757f6afeda4f24796cfd84275bc28b048672c556fa55e7706c38d569fbaaee0f65299c5e878b43bd83abca57e196e389307f96b3b7d41d947a30a6ee13362362df382b797be3a44a27a397ee7fab1fac1e47a1a257bc8b690ace79488d2e74723cb480b151fa0a336f1e859147cd40533c6fd3298344a44730beb0b25521ccb50d35f33fc442eba19aaf6e2e6ebe28d3891e7fe75d659e77ff6631abd64236b18bd1f1ffa129f4ad582585803739e3b67a076fea1cfb30389f477deeec6d20a5adc2bb91afa7c0827f9f45c512680af2c56d4960ab6a035a93474843511bee510919f445716c0fdab9446dbdc020c2295b4a07b74830fc9c59b152aaa3440c3f2bf5388a1aba7c7d9795d94b3ef9beec776b6646fdea84458934cbad6a035f28401db6c63c01f5dfb2736f30795173d1766690b7cdb7086b80f4633b856b1128aac17829b92e625bf71e1dd2323335f99b2b68655af6283560775f12d191a9f4a5e9a3d458e77ad2328a735ca7c4fd5f32285afcbd557d0bdb20e1af419d31b5b068206adca54d0f10cf082e01b9dfb4632cb2f641ff5f10f84fabbce0f0ec01a58cdc2d5a61c648646");
         this.var_12.push("7174b8b53a28b0a27bbc04ded0d22b0d2f145c1511d8ae24a181849e898ab6dbe6a2cb3614008fac2f1abb07d0c98eda0b87a21d425e3e6421b70bcdff85c45d43356ccd1048c573882d58d6d063ad6cafd439aad7825635bf0599544f8c0fcbbef40ec845b6285fcba8324fd29c3ca3e55bbb95fe4024bcc2a2c81890649ccb53ca8385d9b986af243cea2e0804da7cf9461377c1c86810b5a6cafbad27a8f730431396b9a2206e7a500dc1d45c099d824dfdd84fc0ea1870ca422a9a9f1ee33fd7e672a0fa60ec2e318f522403bfc6aa0e57949b830b827cde4d65ffe9420232fdfdd84fc0ea1870ca422a9a9f1ee33fd567b8f38dc097717594e976e258dc0bf936c3dccf627d5179c397e049b00440edeede82d28eb364763d3a2ed17294330cb5945b464273c2d6f908e141ec9b159120cb102e58cfbdc408135e8e1b42474b0084e766a13f57228a3aaf06801657ee7c8a7d65bd8421de5b0088a6161c6ffc941fadb16c0c8862ec138125446ed5fae7b4034808cfa13f3cbbb9da0fcaa94173cfa9ec9ddeeabaaa5d93d93ae46651fedd988571d8a7959e28fae957696ec99ec7d8fe68323bd424ef510c369b9788142bc8f53a29a3b299e426e4a837c496cc39a187b266cf08c6e8c46c87298477496ca190c174c380d9da3e3201363457128fb2a855615b628f8fa9641786bb218a237ddeee319f5be686fe60ec4a26edd6a2e39faf0b9c469449b7d79f2cf958829764e10a2e48c9ded675914bea3342f0fe2e9419128d35ea6c1bfb4a0e5e88ba44b20edd729c794c91e6539ccbd4faa72d20bd2e7a5034b31fddfbe7788b817bc880acba0c596fc39c510395d4edabb90c147d8d56dfe9eba73848ea4188a74a58c72807c463210c162a70db1e42b9c6cabe3b16a6f4f53c173a89721ab549389b29e91cbb5f4a709eda12b8f1ad545cb967f8827137dff690b534664257cdd5562010d48c385c0ecba6abeb70f920d18b6945deea2e2052d5b9c25a6cbacfc659ea8cc2c30d9ff6eeab49e15888f30d736e38658e2c7613d3f13934f0677bdd9ad42c539a54ab8f520afb707532ef1401eeacaea5e319855bd25ee96c63d9eee6d28ef2e905355dd105d37d91ceb763bc14a299f55d46e65fb3f6db2b76b19a9182dec3a020769ececd2fc6166064e59d156b5e17e912dc0ba792a941ff6d3d9f4b429440f1dc84e781b20817f807b169571533ffb9a83321b8486c3fcd8e4454eb0c08f4285800484c20fce44f7cc51b86c56942b86f409f14a17d687975159273e91a7d30da5fd874833f02f424b9e28be19a5ce97c90093180475047fac3f953ad1b5e8b35c3dabf7f431c2a8f4b99468a44f71ab51159e7920fdb6e7044bf8e0d8ad77f9490100de02710ec1e5a812fabf55f0a7ceea34a62dbae724f67adf33cf34617599f5dc97c302ffa2327ba9aee51a13b441efbb53ac7cda38ea86e06d81831fb8d2fc11d7fcd323a09b2b672a2afae573dc1d665a3c6ef77f918c28790ab104f7d358b3298995e162a34e1f27353a1ff5ba19a74912c3ec0d3bd6f67b3b9232a91536557e36b305d57f1e5f04c7ce322e9233c74732c4a623f2a171d70233867f72f738e0bc7a23f26120b651c8290fa34547c84487840f4764792b361f104903c42aad97c72e278a7e278a9c81541045074efcabfffeeca8e97c05f1d781cf718d58b6ccce5c8d6d5bbce89a4e02b9eb1373efe530808ce547bcb8797bda285efb0fc0779b1650ec7e4cad63e1087aa816c0aa0e0352b128110");
         this.var_12.push("358421a205fa4fa06bebafc900be7a9c948be83d26ffedd66abdf8f483631002ad94e497b43f34c3daa6468a6cac56564f96b033373ebe66a02dcd72685df607230581e32e7c5ece9f851dd4835a0fd5222e6092c082699c78d7ea513658e55c5e7313c27d6e27071ab85caf4b2a0867bf6f8ff9ce5f3e783b370a6780c4671bb0116bbdd38165435dc51501660d45454cd2cb79dc9a34b560816b3bbd2efe2375735af0e3f63b3265004796f694fa6e31b99d3263a867ac7e73547f2fbc9b0be932224d23545ab676b1faa965451e8588502c359a35f762cc3300c510a1afc6e0f66551c74fb225426adc2c0e5d6608845a73a16c81a60686b98d6601ad4cba8e71124de2ca9101cdeb9d874c787ceaf4c334ef2ea295dbeedbb22ae663bb7335fcfd14eb9e376c15a245ca182d4ae2f29b730028cd132a9579d6fc73c0bd8c55da5013071cc22212c28f67542512607fcde75c4fac41a3e6be86d9c4b081f20c62b4ff55834e706afa49e8f38b240ea8b7b01880e2f939ebea4bb18d038ecc3850f0805f66269bd60e6f70cec574ef8cc7ca384a48df236a757b1c95454144c19f5d3496ad153f50d798ef41ec8c9fc45fd1071926b43c77017c37d2d44df44b139ca9781f6c2d7502972cf88e3fc26c831fe0e593971a99542700f0f5a40654fe14ea009aa48d5a28f4fbfc82e96af6350aca022130c5ae45a71536101f1e44f5de5810b43702ecfd61fe7ca52bcfea019e75ec7033a3ecf1f1b9dd0bbf0f7bacbbe1d943f9e550074503ce24a86be61c7b65533737eb87dcc0245f3eac2ba1915834c4cc3ca6d3a9c2be26b5c27cbc5bcc23b140a4a6421a5cddf7c946fca5a12294e7943c7596876678a141fe807c54d3a622b63da8a40cdb221d5768bfa7307250bb8057d0611570c5a235dac9cb25aa883f44ffba69bd0bc389435bede0e8addd794b30023b48618a5fb520ddf77501ef0917fb55229c1d1a45fdae180e6d3f8ba522f949aca7d4f2bd43dbac45f760c3de9c62246802f97250d2e3b19111112e373786a1c74963a576f59e37447b1ed386055aa94661eb34186e9becb46adfb20da927aac217f1c769fc69b244db0908145cffec85085b2f9aeff59d58f7d61baf5634a7573b10318b3e7d0a1f73cf9d178cd19e08522706ddcc14edc6510b63e2a087685bc257693e6e58bf77b92e233c81259f1b86f6a87cd068e4cf9152ce42c677f43e319cddc38eed550a8bed75ffbc08f134724cd7f51571b58e99f11392e861f07b740794fec52cd2e99976d85dda42cca9d5b60e9d2df938f3c709e76cd2410f6185e72851a4159010321a6eff3fb873ba67efb52c205ae1d952e802230310429bf48f0b61cfc0c3dae5447f190d71a517ce2b7abcbd4bb28561124de2ca9101cdeb9d874c787ceaf4ce676f96b416d4f5af0f9c4e7254d57ba9e0a3c20377cbf5781d01c364befc535b95a44a3886737f27df6c6378c4d7be191a6edd3bd12fcadb23097c60efc04794348b44afe439fc8a1a046937ed29fc047ac2d9ccdb9a0095b0af741569d3e7b0ca8e6146909c0c90c018dda4a0324eaa69e53c8e9c7eeded3cca1227134cfa2112c26af61a73e550ca94b39f7ed8ad06e69c9e72d7b06b33e324104380a5f25e08751efa8c3057220e63891d5ca43e3b226d40321eeea66d67263f016c31ee36b36016e7d78bb08aa034dd13c36e5c8b86bee9cc022c0f411a58045f76166eca120dfe3f86f8622334e854312f3b804b94ad4800cfb54792aeddd1a49cb4cbaf41a25a2d55400e3201aa0a14cd2e02b2d6bbfcb8027e03033d07d1642a7e0ef940d3cdf41ce01efe19d4bbef77ef184361da1bdd310f28ce39741eaecef69e211a98797430ab101151e6fe747efa9dc6e1d48dd6131696999ec020e0793c5ffc7f2fc46dfa7c6ad86f39afff6724878a27394448842b4a083d3fab48c4112572db314748b80f9d93794d1ebce8b14467104202c12c3097f41fd065c48c2e60fe320eb043bae08fa1e6bc61a86cd9bdf30360203f49a37417bd745ab89f370a955fe12d12317133f9e2384a5dcdd3a6e931716a692e50a8bd1a203df4911fc6b3b2c98ec6f9c133070660589fd8e5baefc5cc82ae49357d9dfd00066c523ba511f7fe20606390f8829e39cf02f1c1ce3770fa2bac2cf7d6a44c9b107afdfa5c6eccb0ec312680bc2e9734939f2a5b4871f7fe20606390f8829e39cf02f1c1ce3d1a7972f38e9104a6973bc6b784cc6ab2b37b5b5bb87625aa8e0ad4e3624987342d8c0c94f3d5eedb4a948971aadddd52a1878ba5b16736f0dc643705f4a188e5a4672080ecf05dbc65f8c397b08f4498029aef03dcb8e165fe4d379291343bde0fb124fa03a1b2849ec05a334da08fb84bbd0f587104d46e07f619f011004226fdda3d845b68c62419c4b814acda65f50bff69e661e1ab7ffe2954f27c01b10ea44ff83dc1b42994eedd34f8a3b525b26a56eb46c72d3dab68c8674f9b2a1c099cc260dbbc5a45f2d67b30ef8479dc07628cbff5db11b12cb31e3f4c1344ae0e2a4837a72d856b115cb65b78dc116485605f5e6438ba029a7efc0ac58ebd201390947e7c60902d3e1751cd1eb5ac153dd99632f08d73fb6158ac2f3c8bcbd341b5ee65dbd708cd625a4e8eda37acb0c390947e7c60902d3e1751cd1eb5ac153a3b2579c100e65086fb7638141bced8f91f70217a4c6d47edb61f7b0f8fcc34ec10b8744c1f5452bdcc4f340efc9673eef21f21122ca74b79a64bbb93c415e3ec878d53b7f3716747eccf19aece0c2e716a14b4616977e3a307553d3d687e4631307036cb2005e2fe90bfb99d1944ba288582120a37d19ca78b659ef6dc65e3848c649c86b5475f81b60f85c09cedc385d186f88eb96ca2dcc2dce480b929da8d5b2600e6f5db4a0424b4aed5ede63e17c18d69980a88607536d82c73856e119ec4c418cf1efa51710e548d0d91ab37b931cdef105bd1b972ef1ee69bb19783256abc1183b3a3d365dce5f2879c7ac02661b04da84b93d618b5f2031c8352c6bf3b16df5313ccefaf97f4492d4622ae89b564016cb1cf453f52ba4ab001056f76711202edab576fd304293fafce6da576289af12167b027bc3e17a191f2660f8f0fd64cae514221cfc29428fc20aa33a36e92e5d32cc734b130b207b8e789aa9ca903b99f22234917c1d53148489c4e2907ab1b5910b94f43aa702021c5634efa52b70b68e754167e3aba19e0f48989fcedc50633253e6aa1b62be4f7d6acb1bedfd6de085ed9cd28013a29072babc51d2e865bb1f842002f2a0ce2425491418d0b790bfbc10dd3af32d5a0d18c6ed6f988");
         this.var_12.push("e7be5aee1e67a58fe2dcee1b42d327158ac1a5c6e07c423d8c88e15af93e8049e5144e19b7ad702751e84c7882aa31ee1c9cf03d482d15df9b214aea395cf9dd5ed463f98a4a6ea8ef775e41db3b847e1470553b13697ea2284caaea2c1622e673396788b5b80178099871c926b41f76d3433979e77dd871df58a7e8e0c854f4f9c5b1173c4996f24547903bb5061fc2694f05baa9d13cb4c4616b9bac25baa7c0da9c8ff41bdd6198a0a151f4de2603325dcb8b91e574b0d84481ca60ad8c5dd1283a10de4076159cd4441b614e9cc8459f76ccbb79462ae986dba5a9222c1b74b4462f9f87732d8391bc842ab985e4f7d952574d0436f2eda66ffa48bd09151dc292d7f123b359f04cc1271b9a58a069be192c9408a8c3fbb50e95369e31ec0fb20dad203434240a1e5205b9134efc1778627002f0e6aadffd068ed76b40f6bec008a0ea4bbe6fa9bff9a3c6a0f604c46d04dc7e3d1f63a77c0e2ac1b572703797a74c85133d088f7f99ee5dd26c60bf76031ff54992f50db097e6d2f262a5011bc69ee82238a9bed89378414e13c960faca693696e1005628073960b77e01fbad19851f5f9746b95578aed2cb5877c4cc5665d237267c1dfec6ca0e5e5166db09a9f51476903bf979ec67d0175963ca3ea906289f7aeda9b67cdfc491edfb8fd22e69dd9f8f32376ab83d57175663b2e103c19d5023871a53d2fa5b66c5f3e5a7d97f8b995c993b306cddcbea8ef688f365");
         this.var_12.push("f253a3a4e59bdb23362b5091531422d159630c32e4114591df6ba0d8530620837e0d8d0c0669c67d3c4f97f5ccccf56c1b8035c0017d9fa9bd595c9a317acfa8e74d82fbe38b6a16b409a069678826de5a9de08a4b257c516cc6a13f063e0733179348404ce2ce8952c1598982c5991aa4539259021cb1cedba831eccf739d79fc310a6cada58eb2a68ad6b5d49e3b4bc51c4ff8fe6d4afc53048c69c1e5a42aa0e9744eb5706ad12e503b13742e887561bd6296b72e364099b5a1ec1e75f06ed327f6b80de814dd9001e19b5616ee89719c9ee9f688de73902db6c64901159c6faa8d3e1e99ee8d8d7ea891673ad0efb987f632deb854541dde72d843a3124290a59077942cef1e643c635db28824a18387e621c73044eeb46084085399807bcaf5097824f84348e3edd4ef84bcc0d4d386456879be061dd21a55691efa3ffb210acbc58a1d2041e4222789aa03936468766cd8605cb789c77e4f9ca1b6621f4b9e5411cebeb1778f94911cc0e415ae51b84ccb44d5380e67641603baac34949474b913477cb6fcf82e494c616bbb462309f4e296a9fd70dd18498e1174995ac3550d1399cd77f570ae01c56a1e59ab5925ba9fdb8303af4b8e2e75e6dfdab3ccf006ece2fee8ffaaccbfcd16b61e205b776b8f7c1ff5ce71d7f85815dd4294d28c7222df2f087d474a8c61ee5cedb88174ee26eecc144ceac2208599a44635ad14305aa71dd76dc89089d3514de4a02388f30e7050f4006eec3fc97efc1668c2cba05c84b9f995a363f9a2da225bd20be3b0d2e67d2b81aefaf75e2ed0ecbea97c4ce411ae592f463b13e9713a8239940fce4decf63fb70d501b2c621a1a0ad7b61996dbf2dcb90172fa1415342b68926112");
         this.var_12.push("558aac04c0a55c98849cad844ed270d11411d863a9cadb3800259267f31555c0674cf459e76bf528b600ca96f83990caccc74a3dc90bfc7c502125cacda4be8f94cf0ad4ac96a64929c553f1cbfd4685de6d47c416867630dad7460efc1b6cc32c2d443d6132624df2770763e26f733b5837abd4a76c6837de52d0736ed9fa315bc5fe3086ff059d8f9fdd3b07c389696e6a7dedcc97c11e3be084983aafc7e85f085383578d41b15b5cfed3542d37ff50c5fe3086ff059d8f9fdd3b07c389696e66fb34d953842f66ae7ae6e9175184fb5a302359503f10751c3447830b896410bf6ce97db7274a0ac764c364f65f2fa04329e7954949b71da04fc90c078371b22c66272e09a414910a5897e9ba3300d86ba3cc7331dbecfea1408add5f83700247a7473466b30b65d379d81b5eee0d0dd384db8c706b5742bca4a193147adbfc6ba3cc7331dbecfea1408add5f8370024bc472bd3c2677f29e99a4eb5d4136b912e440074f67fc5995bdfa6ed99bfa2a5fe3b2c68a01fa0938a07eed5c721723cb38ae921b4248689203ff75d3ab225232171d801d0cee991c5a36f6e23cfb38c8cfefbde2d3a5b2ce68c19d045226b6f3ae2f5f1fbf6a31baeff453b1c3753be53fdf1b7bc92829b839d569ac5fa5e5e42d7dc09d3e727d1de2e174e5cc09ad796b35982aaeb2299c53cee91c57d4790a04096e2c1c656d618bd242326cb5a5b8c1d22e5a9a1fa2f627ecd34b8c0624496976d8b33dd3ebf04ae30222d47ae513644def2bda32abe21b6d0df148617b48622011a3abf23950b658d9fcf79401a955c8de7cf025bf888c27a5f90ca2103a263c26ee67ec01642efd492bb6b2790d17b6b7f3f32ec6a08b1f7c6a3de9be5ed263a743587523a197f8f7d23aefa17a30fb6884fa4c688cf6c3569ebe6ac1c6945fee376d60ee90f1cf5ae062d0213ec755473acd652126170b40866dbff76b378fcb4da2e029c409bec82487603758485fecf09fe85ff4a4975c04e54a4f5e4b4e745da7094a27ac7d18dee1fe32826b");
         this.var_12.push("f9bf4a26e894ad0f2849afecd4223228c5babbe6d31474e118cf218f43dd8653eb37bfd77200354bd60d8c8feaf4894bfe325f1f0a4e429a05d7ce0af5c649563383f955518b0500143c38faa816bd3a0f41984d733abf0f2154cbfff04fd646e84a1f36313927399a2154baa2d283db3e71ad59c4ad5a29893a156e927d599d3e147d68a48e8013d980862016b5e3d2ea58d1d7d79cf6651d55a9ab64d14ca9c9de93d7054777abe3c97b9d12fe2debafdfb03cdebb87480cffc75914af21b9a0cf5eaa479c00391f918bebb2bf4cfbf20659f20cfff8e15de409ece0085688b2f4aeba84645839c96324157863a33c886ecf7156509b85d596c4afc0d790ba1b89c46127f3f1975d672039fbe2e0da9e8f64c947008e30ebb10e76201752d012500670b0c7352e1fa109b4366802d25556c2c2af12e4868cf4406e90a1fe06140d81f2f0e32a467c8784637e62098b5f4285f6f6eb70d9fcb6271117c1f2a7d61295d30922ecbebe940b4ec511c52bd3713d7ace13611bc748ecf98e0db136808f3e9e3efb8375ce75a5e4fb9eb2cb0f134ae3b7cb4b3d2aea61fdda6c6d246170d345a1d529af255e5e5538df242afadfaa7248f1b859cc3a9fa8d0e055baf5f67067b7b6ec33fba86ec6c005813b5cf5ca986b404baf8cde28d46684fa298d9724cc12bc77907962121a8a2ed167adb8ac06188ee53b40b0fc3237fbf325095609e47155f483d5360d51ae6219666aaaaeca969fa30b665057a7d1cfa5dc89b2156e582a349a021028f4005af581ffe4d9288f79b815ddac6e044e0559134e712d0148e6bc14e243e32c32801c5e1813f9fb9c6419510d16f17b93c6a73ec7b28804647fbc5b1c50a6437ad4d46909e526d67d490dbd9556bdf5dabec86606fb276254b3324381d8cb364b6728518efa28aea98fea8dbf2563ac6734f2495540aa");
         this.var_12.push("33c5a046d230dd9a3c04a4847e20d15e9de8efa36dd471c5e3972bb736c20bf20cb02ebf79ba9a9b276dc0d6efb852fc94cce3a1ebc19042bfd4b4e3f6b4d868d3d4c9838fcd71202eac39b0e5e2683be1b770ce67cec991102d76a308351ffe351eedefea739b84940feff0d7ebcb71f533a23ac6c6523ae35d30d58e2c6c8fee11cd539098d54f128c434ffd053418b7fa67");
         this.var_12.push("7eedde94ad5a5445dbf0427fe9a0ca9e7676b17959738aaf02b7a85386dd3bc5bb99fad2ce75517493f24ad93d3806c99ce18e5990ca2cc5f3b71cf86d54c8a81be0026ed548c3d77695c42475092454449a2feb36c372d3cda742be2d5f0c06cb139fbcc95136958ddba4150c3c0a2ec0b1eac6c716577b2bad197d5b19927f8cc3845c34fa17d85b3536e69363dc2601efd77d24f4a9d844c5e33136e175cfbc4b591d58bb3b3f010835867f57f9d99e31227ad527e1b3452339be32c0259419eebe");
         this.var_12.push("ca7b424e1b0fd446d94029b2297285b9c2fccfbc39512dac6e4476c0bc4c17f767e5af4e150ddb86ea0512f8cd5ab74c1efec9798c32097f223e484a32be4c204d60aed046f92e286218dfd8d379383bb07dd73e8f62725c84b80d760faac2e747d9ab2cbb2817dec7bf08661807fad12b0e6d0c4d3eea349cd8ad26070ac91e69a1dfcb9c3c2b6b5e41d3e3a4e6f00277d42511980547f05d4a178912a073e4b139d5a85e5c05872299a14dcc768255cb8f09cadb9100b683fa8d2e05126d5b9372304378be47e13e713d6f9310f169fcc79771290a91c4fa78fa6903a5a09c581cd25422ee2f378af56f0d9d7af2e1c418b6");
         this.var_12.push("13029444f1e227b9a590740efe83cbb95295dc48c6b60467492643bc1c5654e83fc8273941110490e46f3f4561102068c24896b32c7b497cb315ef8eed7375381d86d967fe0a28162dd7ad36ae332ed28efeaf0aa94fa3c824c84e0876d62e99f563634a8b6f22b53e441acb5ac3f0022edd4f697d280076158c8f142bec0ec61769e483ed216d9cec31f8c556d42fb1d1a31768ae908e32fea2d8ad10dfda27e36c1461e5b24d5096661bb630ed04ccadb02cd6b0d160e182a27dc54bfb029ef4d922cf23ae83032b7e6c904bf13e5a2c78b688d1b50a7f8d9b392fff6c7cf6b8bc6f3206978798d90a8fc84f7b53401d3e9748dc2ef2e47c90ab1aa3c35d76f85d29756f26b18db2cab7c642a575e632af34");
         this.var_12.push("7e4f65066ce77575421f0668f6bbf51ec3fd706b41516eb2f5c568c81543fa65ce6f522ff1a9a90c3fc023be7d41f8ee2b8a681ba03f482088a17be8e41c5593764a785a76f90f18ffd06895e913f9a154cf0cf2147398c3c1611a2eec16c6619a70656aa6924923e18688e2d98b2a27e26eaefde3d366bca04e16917d895cc74cb641d98b94b0eab928062da9b50b9d307de6700e41a0490f5406b1b0043de2a6e855c2f8cd21aaa51e10fd317c6a79b8790301932020fc10fcf3573e189757d03dfad3f04c77d52ef2622020081988739fd37e2188a5f63731bf5783027717206a074103d92ccd85d282a7ede44df277d208b2864028d58546cf8a31928327e2d5cb94cb44eeaff9af3364eb038bbd52c52f9668e2644d19657709979ad6bfa8b20674ee7ecf017f5c3572706d3e4fd55496ab7872b61ae71e20bc3e533365acf405");
         this.var_12.push("dd3f1800d674fb1a397d5f29b26f7935e19bb3165532b276ce891da4e3729ddc5890adcc5bbbcd22ca5181ebefe7e07cf2716b9320f2db8d9ad58c7ee6cc1ee2725905a04547eedd995a4cee0f76467e7ac9ae069c1a6682d7a2338c4770e95120c8d49b492e350f5135480b78a2888a3540fb091df4c9387a219add35cf1ba8cefb30cec5d78fd1289aa45c0d63aa5074e46d53721de9512436d41531be9f43d7e9186a02230b20e644419e3c7c4bc23eab5530afb90fd5c35000d9e63b584f738ea00409815eeb8d8bc3e5f268899f856a99a417ecb5d74c07be73e95245b8e95b75");
         this.var_12.push("672c54dff30136df26d7de36c4b79a7f82cceada872b9ec88b281d47bc738e3683a17ee9b700e551ec57468e62941536c55e6c89812e91295510bccda03b651838aa665de89136614b43053d5101eb76e19aa93ef98e34f29603c94899fd2164aba54991e7b8d70117f57d84e872e6e6b9d789d1350d073b78daa292ea70537a828aa93ef98e34f29603c94899fd2164aba6e707df634a280de181b4245b3fd2d1dcf63f3df8960d0000bad2b7c5bc71192b352a67f3a2f2c2ac4be9e8bed14c64d87b7f2b4de8bbe65c72bb4e43b4d446217d89bfbf495dc1c0dea4b62181f2d7a26730b7042e0bf54c7e705524e515eabc2a08a63b71da60cff31a9e0fdc10b28a207c3cd38e7ada6472efeea1cd49381592449e28796ad96c676fe5c26cb6ea69169015b1b68c12bbab4642742940744b3ed4e7aa1dcad0f7f0c3b55f5023e94c77d25743258986f0feeb7a23431ade2726");
         this.var_12.push("e8296e64da49e8d4cd9dd6179878949f461a5352821aabb90b00f415965c9d3bb0682afd21e444d761222b7b35a199faf7e4bc4bf94670f123e77e83a8966e59482431ee5a020987e6bad20ed4745f1c8cc3f3721ec5a6a9e8ef559afea7ab1372bf980be072c1aa144e119716702373091793e0d0d8f280720b193e7a10887aa80b6edf84c85bcd222a4bbda7b8473e55e5b4d7f9253ca4b6b0b50787080664f14adffcaa0ef240797d1edb5ecc7530a12db01b95149dfa8b7d6e14515e9839fb0772a34312fafa96ffbd8dbb7d6f15dee88be11d066adb85fb0517a1b33d81136a5be09d37df883d908f7d2151242dd1fd89166ea4fb52b3f7c821f04bd626d75d6a3b926b6ed88512495d31cff19bfdc8136e1ab480cbebe358c71b9d8af76bd804ebabc5cdff853c2cddaef99ee57ed0a4226e84466bb6c498f5e338d2319c3a23");
         this.var_12.push("449c41bd321075680ec78013d6b079f227c51fb2f2715d0210250210da221ae8638db2c6fae473ec51f80d11c10dc81dcc286e9a73cc6f31f9d93f14a805c63bc6ca0e0e49a27d10a53e926699e4e054f32d56df3118daebfddc014db413f11b1efd61ce130701eaed83e9b13f3ecd3a7121a225dc9f9c0ec0aa87882f2fc638837eb0586f9aa45972a40e8a4764790247c78950e5273c3faac764f44ae21cf0c770584d0aa80b43bbffeea2d543f5f91ba03f6788748504ee2dba5414f0add6681ca3330467b3ed84eafa9097e72acdb032d613ad259ce369c3d50b746931949c80444eded836396ccb6d8614c048f3ef65c1566a74cc963f4cb76c64a461e5461a240d9a15b15967936f5c584792945986cd047a703de2b9ca5085992b24717030d1e0563fff84c77845b8013a17ef2d09b6c67c8b5b8037a25fc9d4b3ad2c623230a32b989b6d49f0b428197af9ca9f73c5b99fa5f8629ac2589052f72100140eea188758e7754f15167b41a35de143299b");
         this.var_12.push("35524f3bb6a9ba96b9988eda3926896cc1b8d9cb25e3d436c249350e1e39297f8c02f8b149dd170aee07280aa6c9e297e5a12a26c7bb6442e86fe3628bd0a71504a710e96d2a544bd5a49adb131c0330bfa086fd1bc9c1e95d3b76e765790dd6f755079a15ee52d5b0eb0f907e275437728cf44556c73b196dd4f410aa6a114ea03f5db5c57d785334b42ccee91eb2e21c8593f8b1afa935b652d19b043ec40a9cd17516f950da716382e2d36961266b2b2b207a5bc82b350efa15fab1048b10135b42a9d4e7537e5f84d47607825ad07dfb9e6f3a583659d5a85643ec3cde8c6cd412dd1031ee4f1d1471e10bd5a4d0e7e51bbde20319eb18d3a3a3456d4c9eb98f7b1d6efa013fe89d31314d2c57539de724aa65744ea5eafdf3b409e3e1c28abd40050abf56524517c5deab3c6247c9c2c397ac4a65b5e30dda78f5c04bed34c09c7a3e7d0cc63039ea0de8146ce45b65a410a5e400cf5f296d542015f8e7e67d69b29a75cbcf5b2a223aacd4642b6362f79afb4b50b7cd3e320cb7e12ed7cd6e818889691d9c25c4e80fd00381703bdd1104da1a70372abf5a7f5b9af9e0688c12a2a859bb586ae2787072a41192edd515c5fa802bba7ef12b49b824aabf48b04232d8743a1bf6dfa436d6278081620236456914e820b711687b69c7753af7312e");
         this.var_12.push("94727f5466dde2bf347cb9933161cff60265835dcd745d37f2dd08b6d852005141d212a81573cf18a4b49d1c30d27299801510ab8fa46b72c91a7d3a88f6dfb078a502d4f052521478e85e0d2542ecc536b92f359d040d319edf22d9e7d2603f8698876689ae99570bd005c53abe0c57181173a6b095778fa5c5bfd18d5dbb1a79613bd0da756457daa11b60571be53052a72555e7b21322de8e2a8f8f5218beb4ed5d8f637ac17725ffec32fd9107783aa4622d01d619256a6f8b56efffb3bf51a7213bb0b4099bb2153e6f139217b9db42c0f3b53dbf1c3677a2f80ace4cbd8688ddc20101f73009a1268bc638e32a28b966ce2bbb88a012b27bf842eac04b98601e26e4b2c71f115fe87ec735a49650ba4a07fb4a4fd61b0fc9bb5da414e64923d5df4684b299d4cddb2c10852fd45a3c2f69178fa2f78949458574fdd204ece263562ced7c94035f314e501cd955c3d498ea29381b4b0efbce1b802cd5d7175bd35699ba73d6ae8d0e141c5cd5c80c397a4db929b6b2c0d2afd11ad5a8ce1492ebc99169461a278bddd70426b700241c264dcfc10b2db8f2a87d380aea58256c9c");
         this.var_12.push("aef6abf6c062807bc0af008bf02a772e34d0cdbf224873d6c1e3985cdd89d7fb8a21f106e552f1e9534b666e832c50f91ddb640bcb07a94e38b48533f689c713cfd96ecd4b739ba9d69ee20ba6c168c6f3c273abc42321778ebe06cbc786cf13dd2f5fb972db639147f195023358a2c8df68db5e8127d34c7ebac36ab4326d5d7566f8d65498e52260a3abb212ed79f7c63cc83b9370bdabbf9c823be747fbb65902be9983653ec17920440b11b24fa5916eead1a9d5db4a0c05afe99cff29acaa490ebf442949337086379f800af22b283d950f3f02d989c1c19df34170f75da8c5d7373d496fd9717e1015fbf4363c8f84e395a04462ba4af2e20d4faff25618b005f52a2ceb7abedec7c33608e0c9d2328ccdd5a50ffefd56a4890871eee5c0d0c59a3293ac71b36ae0bb7b8f7e2ffb4b37f261eb1d762bae1c9e691a9bd4b6771e3b3ea19b3dbe45e2257feb386e460a549a3085d853afaeaee449ae1303528655fbb307890f1db5e7bb2d2576dfe55117e0a51dd4fdc951962836db74c44c6364");
         this.var_12.push("799b2cb076c0cb2c595a971b55ed35079e4e019d69cd94d9e77f89e9202967d740781ce3192ada4c688deab043429c48ed90dc9f85f2a663f051a2b1dd3792cb1809dd1b60ac0cb24a4ead2eea030e46809462ba7baa6eba1b5349c897999589a497d111fbfa114266c2b7ab01d292155d9b1f7d015372bfe6bb88480dda9d42ab27853d672f2707dc810c9bb4e43fabdefd5bd9d8a30f73fbb4989f82c9a0ed9340a5898686a56df217173824dfd1ccfe1e0c1ec065051d4f11c5862aa5d763646de9e1062e8c5a20edfe73e4f1581e4d273993b8046be29f86b58923b2b7935017130b7bc00c5f8736bdcfb02b279efd47009558511994cc47c80909499db20cdcc555d4dc5b2ed65108a7de66b5550281d17891246a187c824e08a56573b850b2e71c1461e98b37caa41cf5d43ed275edc67c5aebcd69cd33a4f3c62e2d27be8182fa1f7d92d33d0d95356438ce79040b3c63ccff8f0308f23d3e4c1c65a98829501ad6e6afcedd4db00d86b5f7a7ff664ae3cf131bda27a9f8ea7485c34760a9441a93e3925360aa56041960f0d7ba89619a07156cccb627372e9fec45f888dc3a1c8bf117f8f1c1170042edf2d494412a3318b9b1a6c29f81c21d8867c79a38ff657fbb0f67d00a99029aa810b71b5c4eb727e56efd92688586efcfa4d05c58a253e53de46d96b5062e5de9b3738696693eba791713f96d88bc646d42eae233bfc3e5e698505c19f4484dac745519e96f");
         this.var_12.push("5ce3ab87994ec6c292ea7bb848502407d820d7c950cde8ad11cded9eda699ee89fa5da4ee2db1519316ceb6ff10a5b76e0a46fc2c3deed95f2fb58a355b2b892dc6c137c79dd2725a817c19a3a6ce95185003093a8a73bee8d13da22bc379aee1a2cd8c5d63d6d487dcbd9c1d848f7f45d7b2bceb625be8e179d09f9594065fe6a4a7c38ed65b56a01ff1659195cf506afaccee92d58748579df0fd0c3aa76895ef554dddf10f7be669af5105c0a6bf35f05906a766e5c12e2c512d52a3a77b9498ae5245dbc50b4518975819eb9af38668a1f93e9a276bafc210de2da08ab555b67b62fc912d8036658e41a733dd0a5d19f8022eaf448999df2bc2f1b46fcb596c9babe1ae4f59f81bf4287289c3f356662f29f6fd4ccf2794c0ae3ee55fd205ee79365c324c8beb11386ab7970850951f4eee12d3d1bf76ddb6da7c6dc0a7dfb7b0d8c43aa9bd291570145eb3d57f57c5c19b0f4d0f166b601504b499edd925a1069c0003c63c33137d08df0868e097f27c9f6634eb16a0d615817c0917fb24756cfa0d6334f5cebe4279751f4c7ccf79069c0003c63c33137d08df0868e097f2429385d42c76420ddc4a85fd64898f16fb8b399cd869eb01dab663bd204adaf73dcdc8ab232421f986d4269956e022c9000083abe2e0b6c761c81e4ccbdc882295288827feeb136995e45aa4846af613f354ec4f246941a3113734c85dd4f8cbcc60d323d819fced0c26577d92865addb46a11d95a790c4a89b7b9fa1c7873611756687f47307a378e1344f5a10753c3bdbc3d9d1cd0d2970f17b2f558093138f096549cc2f7145bfa9c1a48c9c3420a625ba2e10eb522dcb2cd9a3516ac5b4a2083e65bd73586519e44094f73b3127363b52705b09bf103b9e3b4366365d1435b9");
         this.var_12.push("759267f9004cb1748c8dac068d948e5aa0df96004d31ddba5a84ea9863f4a4885d9fb5d2236bb72b7a1012aacc1032815cea272a6b67583c821cbd964430b1c7ffb05f051c1fb59243d65cada604d6adb25dd59b4af88dea5c16f5e6311f25d52bf758a6111b862e230359395e43dd9d52ca094af9ab9dd92ae5e50c04f647aa59dc98ab4e593052092c9cf9663875508bcd91a565f3292c183b9d9e8f9f04062ec215ef6a09e98b7997922e7522dbeb531a4f9a057e4639d9fa1a9ec7cee7a0865b9c4c4a64c968572553b9a24de0c756ac9d0961d92d3eb833d2ceb719f588973314458286e434ed9d9ff383b120ba90519f5bae5148c7b68fee892653a882cfd9893bb76d8fb7175c29039dbbc4c8f83d310e32f21dd9c3b293729d4456673c58d60c6513cd806fbccc596ab3111ebe498a8fb18dd02d5d46ed9066b30915029f70b9d57f524d90518a80879f36f89cc72e2500c14c3186bdabab07eb9146597996c14151dbdae8adf11d2ef475b95dfb6f288bcfc0ea53e39e321c095eb8cf15e71fc8547961080217104b9ada57635c335b6c6cd8570de9feb5282331f4402759a22e1e37c45b07c03056d9774a98f810d07ecfdc1e089ffb3a729991a6f3adc312118577be2a9ba5e43714a5dda4d37c4009d448eba4eea2f836d0bd51c08b837c58cdb17cdaf07b1026a895ca7c35181a4990a85793eeed0e04273e5c9c8afe536f7a9db107b6d2d6d932a043bb8a58d22a93bae091f0efcd6e7c4ffe97e14c568234136382c1b208f49c5ac8326691");
         this.var_12.push("c1e76827138cd9d7417306960cb695eb979c1de607f85f4cbfff61319cf83660a3db2e200fcd7967d518f95631cecca9ef1d21944e524ff2751bc843e01fa9bcf2809039ce28f823bcc24b90d3218a172dd61c6a52809c0b8c05e90f3228240d9ee2cf5b12fff0950234d50ead76e3e1be18cc1087bf0602adbe076f66aaf600bcf50361de05a0d7b91c2805371321e37ebb54c321325c25705165cbcc1cb8a4d3de843d5cd2feb794ed315cb05f0475132916f281968920f3e12d1d5088e1bec999374863ccd0ae5f0781e9d152a037e66bdb2892a460f4ee83981c15ac138ac59c849c32c3be78de58905903b489e46ab09334062b923aa9fa23804112b6b22d470cfb5eafbb7e072cda084a9c2d11b8a69366f868e6b0fe6dd1a8ad61c1e61632cec0a8bcc6623412c35225810e3cbafe89c625eb6eae0dfc2207d64b4bb788ba8c9ced910f7655e910dd6c359cad73e2cec0a8bcc6623412c35225810e3cbaf0186feefb4a70812d74dd80986fb0447f1381a0e2f3f352fe602a6ccc26b56471a25aade654d6441958370a0954eaf6d51b7798f523f13a66f2d002b72e8f35c9a053772253a7ae1f523cfd5f567a00c2c27db89264d389b278b6b414f9d15ccf79ba911745df553d0b94a3ad4651ba1429ce7cee95b4a120abeb2b4587e5e258faff0ec0dcb96d66801463e79c4ac4cc56ba5fd1d7e4681d96f17b9a0275d724879455a1c42630455961d5424874badd6de0dffc71a3e59b84d9ea278e62f730969b39408ebfc0f9e728ef2aa3a0139d67");
         this.var_12.push("867e95f2afb1dcb75719358798324fe43a4f723f43cd0a07ba157e7b7abb3ebf571cd1d0d3d593ddaae4488c832f64dcb54d4e72c5fca091a537907b0680691aaece9256dc65b75ca99ebb5d09527ef221d34e11b4b269e7f69adbbf575904c1c53afd17d5c5b3a592e3ea78eb87ba4f36ce66b05dceabc55a86f75676e0f48cb77f59250b5f159e02053e7831635527d321207b0c1688317a72c0db55bffdf9b99d3c73caf2b6f4dc93d75afecf270bd15fb3fbe7f42a624c6a57ca7ed4c5a26dafaefbdfb12a1cadfacfc63dd8f2c06b744edce5b88df7a943f1b80e3f552ee5b5a22633501f52c664e0e0bd9c8c7fc7c5bbc8157b718255a002c8381fe51378742a934ab929f21c6ceafee7d85717817f49c86e31ad057197dcd37278a5d1d1d5dfc0361d37ac303e614d1502407a99c7ef45041860e587d9233a525b42303d8c54912cbdebefa4b9f6581ffb9216d4b4465bf7319a93c05f0c514b2e5f587d9f05e99338399d719c3b89bdad673981349d2763615c6158d491bd8546bee35e5fae1b4541c88e02e8d6bd4184222ea497ffb5e1809834e463af0a7f8ba1df3f69225d29d775f69d8eb92eb894ae8b0832b3542ea5c1528ec9e9b1c5f18c8b73c4854eb494850304852cbc81d12b83f16e446baf6e9fb7b9881c898b6750ef3f4be503acf034c2a3dcbfdde505aa1b65da3b356fb96fbb18753d9eb10063d51a266e90cf9d62a7c0d7c6c9c3984a8fa0c9f1394d994cffe8359ae9a7c090ca014703beb98a61e64e3f2b4ed35554789db1bc8d425e2d116ffd1f32f3f35069bbe62cef33b0c11ecceef4a9e12f9e199c2eededbff63f1a6142d0ddda07b518d8524736e59a55694a68ea93acb4fde4d1235669c9516b71685425fc4555ea770c47054db86fcc94ddb57602e6d19e0549ab85");
         this.var_12.push("24c49f7ffe3766fe16c93ee6392335a0c66e7474c070e9d02488fd583a3a00b4d041ec923f7ad8b0095da1a7ce1d6cbaf84d4e925bdba278927562d7a4cdf255bc9c0d6de0e0aa20821ab46c37f49afe11c4275d66a897f006e12802a4abcf3e3df671ae0a495a77c3f4b600097aa492440a9668e535d1ff4f7aaec436dd529fddf50f8633049836ba79d29d5358e3a645de7c23399c61995baab685e80ac613f389e2c194a867488e7e2d3efb0bd7465d63a3c88bd8586dcb2cb542c169768f530c22d843befaaf5ab94ed39c72cbba02182e9a4326f21e5fc37187c3fd6dbc8aea1b42791825f22761af11138644830717d7b71be87742f9511d0467ea061ef6b2d35b0e1154aa9d6cfe0550eb3d8ab68553b768a67e82ec4f61a19c0169561d57d5129b02b162d37f7c34c422fb1b0c2f710e154f8d2029d2e0424129e153be6ab1143dcdb910ea61b4c52b8a9d1a386f742ad2e46aad8db3c7f27a0d707703125bad3b0719b8be35fa7c4434ee75ac117a0f19ef9c2b6054ccd13b7b32ea1146094cb45d24f93fba1fb4cd358b892ff0695b4f696df396062412d0b687514ea0ee34a774c8e2970dc9a3a2eb714cf8dfc8ceb1003e330b6a6ef689bf0c6fd5d10b82c2c2168d518ddc13a998e45dd9bd1c7026b68f1018e6b90b9bc247c9fc2dab30d88fe5876867747c0202512048dcdd462325b2c4a8c9cf0497ac8cfb1769d1e8d91479e3d5d087f15a5f0e6f43432f92494da8775fb47cd174142518f2e30247ad96dfe41d933e3285cade54303ce81b10664f6a4ce5c20d6aebf64271ed94c83461111bab7fd380418dc7b0f0e4725da714586c9fa5e7394f5eb84236e2f9a9aa94b145ce40447b496c1e035142bc");
         this.var_12.push("ac1fbac7a6f6d7e646e8f375a480c6992d873228844c49a6728f24d60ececec275581ce3ff283a9f3f9dee50bd1fdea96c9c801775ee1652fc221147da8dc9c3546df5eb69c8fbe71e1786fbd76263b12022e24f8de84f53438deab669a57309b3c9eccd7fd113ffca76adcf08e81c90a78fb5398f63847ec84e287a3781e056807557468a98a3224b476e932e4d36af8cd55e85e9a2a24ee6aa2398ce123a51228c6dddcb5fe681f2303cb3e9b21792c4f49407be4b6a21b178002b46995c47b935e8fde0c30e36fdcffd3c688524e9a7c4fba4e5972f95e729271c1140a21454ed120ee1d4137b6da25fc649245075bc7f1bfd3799f6a098f4604097cd58ddf6207edb1f1770d7db7be34e50fe070497e7594118a3738d5121df02b7c8b34af8b882f7f86e40634dc9ead53aec564bb916d8da864c73b0cbada137e6c38b904354d2ec5f3023e638e6f8051a1c1107ee0f8f28ed193f774f0b55f02ca85ee6277d54d31ba4e6cec041d257dc60c3672de47e2dd622e6eb4a5c447058c226bb933aaf95db29f6c24957700a25ef7cc8f0c92a299ad872b665a2746b08f302701095528fd0d02b92b395f770442b1edfc65d2c31aa516e61ff9b771f09e24e574faf8f20df827f67690e1c965e4e723cba35f4f4240bcac4032fcf0a66e0ad43a52eecd95506dc72e165974ccc44d9bf4eb4a9adb64f39a217d0247ecb982757da5621a3263e5db058125e9c3fe8434c1598d1ea85c4731422cba80757bc712cf4ee677ab2a9a701c11f49a7d0dda51da2d74e7a3f8810f459e44d67be71393db6f0ae355385eb65104e7917a0014f50f0f729f934606653b5abe834aaf175d50a9c6e48a890e5326659148d123fc179f9287ca83df9de8c33c453eebd3600baea2f9b08d416fe11a465aafe3629612af662c6d818eda33a61dc5feb9fe168af6beb77");
         this.var_12.push("23f7e7ee6e0e092a8b01fd146ca8b66015936c8379f0a1a528b9bf78d7468d3165c81d965540c2eec26d5e5bece31c236b9e018a41d3ad241007ad5ae0d268b5c0001746f6b0dd9ec61bb4eef8f7446f3d06ab03f67a091412a65e17b06636e2bd91baead85c766f2ae8896c8a8be4c3e41c6af594f843958c954aed9f7a1e84659be4240323347a8e72db502f7c7c023c30d8c16f293765b2385e9b62fdb81afd897006d9e8be3e8099cda78db127ed25fbe4240323347a8e72db502f7c7c023c314db48e625e28d68d66872bdad96ed11b1bb3a168d3fc71fabe751204ece415ddfc0347e5a9fda5ec490c719b93573545b266201176a5f15ce8f140b5356726d1ffa943a39a86d85239053ec3f6a5353a4baeb954611b290742bdcb9f45d74fe30ba4ab1cf11d1e3d40917f6746bcde36f2803fd77173f25b2b68a20e05af297b72a674f0b0653eed85a22a00f6a192d30ba4ab1cf11d1e3d40917f6746bcde32af575db565ffc19c28e23b7877c2666e79235f642b7cc599937ba76309fb04bbbc07042c546b714118aa9f24054f9bcf2ee91358cea01977989a093ddd8e4f98e22e89475678a29b40505744717f5f8b3ddae076cc5114dc1857cfefdcd7ed988bfc3b5f6b13e26ee9919cfe3fc150fdf7c6b1533a6ed4022cabee7e901154755f6660407f11fd45044e3eb0e50a61ebc1a2e4ca9ea4c3d396464b8940d6fe00d98ba8cdadf476f300f16c9ce0d9e87f56062ae3680ce8cb2589cb3f64944f53ca40a85042ec38ae14fea053f7dc9e9a8d1f74e814d2759b49ebccbb2c9340fd85d00031b48cc75ab07354a7acae8e615c56ed3c774a641d90a27ea6fa1765c8e09ca41067f113dc1514c78d3936f474a893addf7d3e865f2aaedb4f18e02c8282ae027fc2c475d4446272239000c14544b1aaf13d44ac88ef8ee7302d612ade762a5276f8df2a74f74cba5c67eb9e7d5fb0d343180127186dc05c29d43c68db2f7b7c461a93eb8d1e3bd381c62852b72ebf798e8f5fdc85008e667ea72608110042bef1173be447ff7d4a41c167ac8dfbf025dc91fee031249f12de777885272a");
         this.var_12.push("1c78d59a40d8c5f0f13ae546303542d09f676d3a276ffc6bfbc496001120d8077890d0a0a81b279b6648998746473b6b278c1d94eac8d7a6ee8c8eda346700fb190b4045af6ec63a7e4db0305bb358c7c83a11cc73dc38d5155decb56988093146dff04adf0c55a36a7626b7bff45ae8c369099c50237f02110732c83402cccc17afde012f0d40c6d6e5c5cf586cd724c757ed471c394e81fa963c61d61c7ae1c89cd65c6806ad71d628c5c4c04e103994fd435941ed0fea6e6800412adbeaab2ee8d467eeff6141e159e31bebb77bc6135cd81108d3914bbc75eb387bb56809d8a3890aa4299055c9bf90acca5006f2b587c5965657eba5a951abf22ab7115b4be9237be6f9d801fd6918d010b273aa0f289bd750b152026b467ad7a0e31cc41a61617eb69d665fb4832df46400f1994199237be6f9d801fd6918d010b273aa0f208230317a90ba7ba277ca34f68ec689ffe2663dc1bd0abe483cefc064c73d9a1c5ae735d0f579fcd6793dfdf48caee8e3c8f4c2f43bae0ca9325024909a93335287c016ff6ec9e4eb97fa85cc747b7782fad18091fa52cd7189fb8b915de229054fa160c70f5f31cd1cccca7ac5ccdf1e753747d0bd7b38afac07d693a65a43897949d778457821bbb8822803c09946c9a44137d5243ece86e0c44a3394292e3ff066d73717b6749951ade60106e808b2e668ae58d4dfc09a3a60e37b42991ae616e494df09756e881b8749870fcb83ee491cb6b382678f1bd5c7e27e3096c4ff0211c0afb0caf3120ed441470af1042d0781a80ccd6e1c822c83020a407e83e5c8a98f205a1385bf7281b49885b39ae3a243fcf1f0a40ff02aef16670e26848da7047bc246bdbc4d6bd4e7031ef5717e0387614735839fa84cc8239c028bf96a57d7b8b1dc27d01ac3635f3173aff10c5a33aade57b1a9b9d50c78b9f53cca9d74696989850a0d7c5db8514120e6e05e983fb5b7bb843050e6b3688a4f82d6abbe3826ab973b0b2809c4d138b6b84763b751e335f6ac54a89f98e13b59626f5640bd28c20ca4aa0f295768441e702683ed5247c483361d9ba6cb238822cca6aad8e56c350fb735830da71f5392a399326bf32020240355ca7c6610a2ecefd0b42f82cbc7929aa6e950fc82a1dcbd7eb24208163b05196b7177c689986c1fe86724d278e4b734e415fa80cbf8348089c6b4fe8095f6e3b6e0e64105b55575ba0c7719a29e00caf8d4448ee021321577b88bba3c2334e917618220408cdab688ad3f4c44583f9012f5671b5a56fa37bb55a6fa3e538031ba3b7a56410badee4a2c4c187a112d00a3c2535a0c03b7ca504f0a8ebf38c970de9cb13eb1f939d88edd81f09721cc3a32900fb40e7726647e0fd37ef41572158bbb464a55a00b9c91d3c72fb5e5496cd2e80cf71a44aa7f5d06ce");
         this.var_12.push("bac5e5b81b7f6bfc9485ed4e0ec401b30e711a8b04512ef41d8af1429950cce2ce30f5e3bca85612dd25e343f869d1fd5e1dfa75b23a5bddfb89862e6b68d42134aa107cf67328b627614c34455c37f69d82d274aae0737e45af339b7f624ae062392da9000bd8ea237f1e170baab8d421c3380f9b3c89ff092835ed61ac6ea40cfc0d4dfabed53dcafb3d1bebce38a0122d906ebc5d2133170877582e3125616cd2c035d09ae7fb6839c93d91924e3a8d976ae04197485e56c99db08b1ff9dee2859479179dbee8f7d89a0853f81043745376141f893c68888bbc58dfa5e5e86b4e2fce610a2c46efe11a4338f9bab95e0983c03a79d3f3a5e1893a786007bc24eb62c7b08964624ddaae618aa97a777e34dfafb739449da78775048adff73b87394f6916f17f69f56386dd56ef8be2b59a0b76ee5cafa7f9c5d4e96a7d91c5b5cbbe790c77b923875d26fdb6a5ab0f07ab889508d74cd91c38faf209eaf2a95eccc47d3ce177a58af8707232e429177c354f9656b566040713479a89b409915e3dfe5967b96bef62c3a8df677faf9dff0cb19f433fc250479b0a2dd15bf112fe4a7c70a68a07a4d114d1dcc46a74a0b720bf67f2e3df47bc6075da3add5100832302446abee982968592150d9ea0e4956416246bf75ab35dbe69adb6649d1d70283680b2763798ee19b572fc7cc7b21da071d060d118171f4f44fea3000ee08df45103e921ea7fa66248cfcb2746c9d34130e063444d1d098ac0ca5b5f3df03752812d6f0ba1770b96caaea0a6c9d23fe25c4dc90db6c8818c114a87340f1d868b81f8d5a93f5f0da10503fbb040fc66c8b5");
         this.var_12.push("960c984b10ebc532f97a39f4f81089892eef9d24433d0d55192f6823134a596df9ff95a36607d7f3d01f1c219de8e55eb02de46cd6fd16f870200d175a66272e457d6dbc250a8b3b70b1302c3f8c60433e5a63940d20183932afbb6398c605032c6a064fc3cb3559bbe0ada311dd4b0024809c3fa411957de02316498cae7d89110c0d316311dcd9ed81fc7a450e595f2210e13a1c4e1f15d43a4c6f5f17ea9f7f81d044b3c09bd0abb60dd241a7c9235b6b95d3885d27660d884835f3fdb4cdeb1f486f4785cb90c7a46c321d7c37f890d52aff85b7e3e517bea018a98c4eda60c882fbdbd5c91d7e76057c00621d781aa662abe7354b7b7b94f1ec854f03297babd9c5fa7614a983b6b8fc8ebad90f6a282741df67b0fbdeea7bb3f999f0e92cb0c730f4bd6955c28d3efbb72b6f64696a19187fd9d59ed17b1d4783807f605e49b3f13a3b80d4e33f0000cd98eba1f414495ecf6e6d656ea463f434773864cc0c99931479b8dd8af0e41c5bde34b48f199d650b3c392680854476d06ead59cb8acbbe5aa980a58a371fb2f482432a7244c5c6967a6b549fcfc71d091eec2fe45f3bf0aca4f9b49ce65975ed35f833381cd225b4354833e325ca4caeb60693ef35195ccd32f32f5264512bd4a94f2a80af3bf0aca4f9b49ce65975ed35f83338133ff7f7f69b4990751a7492024bf83734be9a3b6c420527ca57f81dd3da20d9570b0744e39a0ab68652ac78fb5669e033e524d9668302fffcdc2a418340339d708dee256756544a787f454fc4121f42b7c69469fdf7ad4499675d165f2ebafefe89c19237a2a73a4b4e331f684cdab9d42bf6149f0f9029273afa5c2ffcbe19e32effc649edbf51b3829aacf72e083954c43941260078e67e7622523f3c601ec96764a15c0ff29e2ec6d1d15af339152a756665720d155bb22d4001070f7c6d18fa2fae1219645c495c3fe0f42693f63b06fc98093b40a443e4ff6846826a717dbc2481a50c1f9a2b9765870ad8b31294a4693d2c80892baa3059b51d1696f27da4375b32ed03eab5dfb4c4c902f958d7326842a278e5ed0d9e44446ae6677df58c401140772f4622a5daba521a09791a93a282a2cebf9c9b36a7a819e2f65475940654c8f37c97e725c9686db8bc0beb5eff985311d3ddc1272fe7b87236b7482cf81ce3d761cbe31fdef38cdb8d8c97110425fb131ee433ef95dc4a6720cf615a11e66b7352734f9739c938b5da507c508d3ab50c26c922cfcce3c948604036747beb48f5f50516779f7eec5eeeb5f8284b139ae44211d755efcd1bcdc0d5ae7da1b62933367136379cb6095bcf747edafcfcea9db12f81db2d4561ea77acf1a5e414ac12b9aa05214c9088a266a507a1577d40527c109142be14f7defaffb166715d83923d31af8eb0dff7619c4080241f44551ac8a2457ebd45cceebb25919a6f86172260482a527013c0feff7688a1c73fa31f570c64df6f40f69ff78d40eb8107821737484365306952bc7d029accf8daa47647aa154a2cecda71255f331baaadc84f7c95d743b4100ea50fd14cf233c9d70c772284f8be879b0bcead311ede59b71e8cba33709772bde485002b204d82db1f9b14bffb5dcc3c7906cc8c546e3d01a6a5600b60b681e4dd18f50a001a1022eaaf4384f62fa96104dd5217a3b9bb615367580d2a035024e436f25066ab0e2d625cbeff209fa9faf0ecc0f3b0");
         this.var_12.push("4c24ef0fc7401d3275516b62fdb963b5704488c8a04b06c7ec65a59af9bf58cf7b55a12a7f9e4758fada4afa67999d8cf2eae0cce7ff3b7d347057740a77dfc4ac347e5bd42be9befdbf1833c269af8bb36311867f2cf498bfdf845664a48fb19233390931fde1f5233918f2be8c74b271e5424b196fa0d5994a3a8b9f32fb42a53c44828c2515255c47c75da3b461e2b23fbaf8a49739bce8d9ecf4fa138ce1c3eff82caa75f9a3c7c728e752cc5c722307e2ab6b1311f087452ad9e1a260cbedf0d6b0d40081d6f0d7e8274f5fe04b8af17ee31a3d144f9d97f7abd0d66c89d45ecd1665715e8a62f1bfbfc46a2112224b8fc9e5e27a40ac8b67dbf2e6b3489f3826aa9d06c0023735dae578279732544adb9d8b557d56de269ba148b90855b0d88292c58be0ffcb1f34b802bc3e3c5c4d8e96b77211bc89dad330c52b98a67e8104c89a4e66f7affd670456edf40a710ffe5fb5fc5fe28709464c5e45956ee55ac2ccd277e45a8328d12b002086a365513b266438acaabd16cd087b7724428abf8ef1b1a5e7fc7d335df253170031d1e48b9af9a35f14758945b400c8932915dae71e7d8e6430d493cf9cdef7fdd51846e81b04fb3e923f57bfbe988471e3e904243e7a2726575a9f1fa6928379406c32d95d157b587920fd91f5f034314d80ba3c1bc10c7d4bdbd2d8ca6b8f6b75f5c8dced19e6c520c144d92b431644b8e60aaf558049828c8e831559add09bcb6637aeb33e2ffd1c891f05c5f2a3d2caefe0d22ad4c8d8104a43091dffdcf81d212940fdcd0ef2a05f124cd1413fc97944a02ac89d49e255776e06f2c19ac7f57a931e0597211445397acc9e5fd03bdd55706e183a4a4ed68427ecfc77f74ea5088afb21f782ae34608205b68a4a0fb4b2fdb8f1519efbeece691edec6f7366d8aa4e500f531765e88b2d71dfcf2c590858b400035cb41a6ce8cacd2cf7fae1a504d0648817ab19b542e93aab0eb7e43797228e951c501cc3721c4714257fe01d33189f62f40ab7016f037532306d0f3e6d57a61a6b74201c790fc2e3fdd8679f86610019590dee60fe0196aa907845b40dbd45285bc2b9b2b85618ab6b76001a1586ec0e1f19e8b179b60ee39276f84189383eca541cba2734e89694ffe386ac5950b9ec4dcc2f5022c815a2107dc2d3180d425aa3cf11d6ce5bd8a6e2b9fd8a03c4c205b9d7be1cd8adf3528bb7e5b82f2b67ea1b90f5e2a08d998020e0d55abac69336119f9705172efabded2ced4f4cd3adf1d54087825782b1c26a14546d744b1a1d74346bae6a8fe999e1b0f148ffd18b9cf8d2fcc0856d86bc99e46096bd20d");
         this.var_12.push("dcb2d9733c5d894329fef137315ddff77492fa6d94e8bc92edceead6252f849663fd019b6de579cb4d75e6412260a499a385ed86138d88058b93eeb8422cfd1f32246c206df32ccb2e0fafe5c863d95ecd065eefd2ff383698853a6d3eecc0d123de90aae903815c0d876a1d2e5f0a2d5e6dff553662c6d9e59424b4851aa205bc72598fc1f3299e9f697cf0ac9e31dd43c4ed3449ca8a1c494ddcba7f5b9217075170d045df20f0ecc9a9f45953dc7e634e755227afb11d7096b185fe91cc68144dd8b8b58ce968796272af411be4f4b649846f991b1ae2181568aa1dc11186dc450a189cafadf4363dc4830ade5188e2e3a60fa6e2b0dc3e8f186bbdc6491d534c6363d4e640bfd8836dab81ae2503e7b889916fcf0f063c3d70508ecf9985c87b24d50c3a43fa3dcb0abfddce5d2696ccc9b7489e27aa0e14b4949f4168011e8a21ef28377f72418e8e572598e4c04f46155de7d89fe9b7768bbb38bf4357a91c7c808f1cb670c1478719616a9a7c1436fb9b31215d6434ad513f2ab1a6455cf6ccc60759b0b64c12a4f5856ebad24fd6ad2ba573d8d19cf52203866cd986eb889d3b87c653488bf340628f52d11719b5f8d74e9a7c6a49bcc75c56d7b78746fa4251e233c86751cc3ceac08276668df1697c8dda6029aa98d48faa4fffb883e777d5aba5e146571db4ecd45d9e3c8f9d16e11d3438c3100a20ba4c730b2947fc57353e2e104b8916ddf2378d0af35998eba979c1d4856e18a693ad108a4c4c41c6a206f385ea008de1b5125db2ecdf30d0368b355d82b58869e430e24bb84a5a7ce0a97dccd5b50e87c91881327f93a7eb19c75879e5194c58ea1fe80b56b1a0aad04c91f3be606c4033e0adf3d96cdfd3ccfcf694a70565012e8b56c56a1a66c426e95ceaa03eb2760b5af13fc058d9b4");
         this.var_12.push("98a399e471a3c6fa0ef98a48e979b6a58673aecd7feb4c3349455c451450574b7231813eaf1fd6febda54f235e2842aa3e70e5f0e72cd757f8c7c6a3a1adb3127135f6957d088004f3ac11628573a9593b03a3d9a3a6b6a0e149ec87ab2894d5d4a44e7a53fa0b0f8eeed7d9a2201b529769e0aecee710fe3c3f68fa413cfd44e456696fd570152afd8e4927967dc1e9385cd785c79aca54f04619b5ca433693498174735b4bf25d1583b1448c673ddfb7a47bebca3867ef676be24063f8c97140de90e51197e480471bc34a02beda268d40d63393aee0eae4ca76b35a8dfa3228a069c9f4d5b7e7f43a3942d4c197733658b69a83b7b0d797de636dd26462ba452c40199e5e4548c6ad50a38ace4ae1abb97251906719b7edd477f5cc6aae93a5265c62aa721b16fac27ae84059d3f600afca7a5d9ab8adb0749d3005bd864ca8a672af73e88378d67c81adef0045d4b01136c1c03387ce7ccb82097f43810189c7a9ad25e3df6e47d341f27e30a189c0a88b7ffb0bfa3d52c39836f57958ebd38965406dd348de4321f8c7e7853ec4ea64d226bf3a80af4b3056c138db1c13378b26db77161df764b1b8b8ddde868f97d3acd2449c047f6c617fa2d1f9d00980aab5184085ed481e2bc1c0ea7a3ff21e84e1033a2a962f46ec7d0bf0cd9e7abae12c9f5bc0929521ef9ea009e48ca0237ee89ce995f74b8b3a8d71ecf8939f13284d2201d059e1748370e264fb71112affc466c633b5ce5f7d7262c821dd77e0eb8fa0945b11af35dd639159af68eb1116a29b607ac44940dcc26b64b63d3393bdab997d8e51a26c36cff3e2a00e29a7cd2454f88c35fb33bbb226a91763650591b22653273db7ab0cd12fc9437285d7f1804688616ff71b79389409cae7cd7906a949633f39d9c10e02cab3178cdb260d6c29846d7af4ec09957af9e31922d45c193e17ed875d03d6691a45dd0b3c43f1826eb658e20ecd230022a3a95c2ad62ab138122c8685d97e2a26a72e4348921d61bd8557f207ddaf90ea20e7592a0efd7a8b8852dba53f8673c5134f1bcddbda5d295cc149745289f0ba241a650a50b477");
         this.var_12.push("fdeb5d52cdebfe55aba4be0989867a71b505d2a4ea5505eb09df0c1a89243ac3e6b71efa3258cadc77ad79f358489d3558c6adca7faacf789bbb383e92c07bcb95aa0bff1b391ff6a9090199e450b1b132c2d70c18ee0fd1c1b1f928b99f68e0db9b8848948d6905d579d9b6046a88639eacaf0a6c44d3ea81b4353ab300716ee155b4a59cc0c87d2d21e6c3e37f07d3530db993385d4346268df99990b7151e497a0158e4d840edba519adf1a54bc131c7870ca4ad150ee984e962f5b1ffa7b11cc3b0d01b0988a9378170a61b865f66d7e43221f394cc6da19bb744f8919b5c0f155f41fe2189583a23b9b2d2dfc0e3408aa4b98c912912373c8b14a0ca51c321ab78ddd40edfb0a5d8b97731fd573d982a9774797198efbff7e37b168ba8b766d3db56c6399bf9f8984639a177b81cbc4b8026672d6109022a69754148cfdb4bbc1ba97d0a4bff60b05c5e16e149dbc206fee0d860736883c57a858c784daf112cf32c7441d6a59d66448c0d8a127f3fb326671331d4c00c94ef01aefdfd2c08baa350d1aa0a3ddd0539e93425db669b90e2df05bdab9f759db07854956a2d08263b1910ba57fab9bf333ae49cd3848e9c730a6bb62ff845abe61fa2f42f6fe64be7a02a2f75eb73ec6d732bfadbe0c75b40b301d83990c6f56b6f4bbba21aa30ef560bc7d66724d733678407d4333bf51fc3a7fdebbffd73ae8b70217fe835eadb2a669992e52fc5ad18eb887d9d205e353a36a8f4ff42c1aa7aa91e8ea23c96bd1bb769daf9a2b15c6f1d8431f14a6e97f342fd87b378cb2382b6fe1f162521043ed696a10ceb90e34dd27659e32e36bd1bb769daf9a2b15c6f1d8431f14a68131704cc40c98e88d5bb281cdbf45521a4d16e6a2f822ff2284b6b0651cfce4eec7314fec6c2cd73f1ecc22b284fcc022f7de130ce7b953d85bbd542c866371a3ade91bee7a141e485d0f2035e17379d6be861924bba2a784dae229bf89fa0671445a7f75bcff31aa1438f7de42bafff26dc2b056340e9b7b36c599748ebaa10d8f0ad814236939f9831e6ac84e54f44e1abd9f836fea9c7118f8db0e69bef80ab4628fd5e55737ae2a809397db7eaa76ad03ce7cf167720d8e0a7f56dd6868f01256529e1aea588fb23081850575d4c161a562e0669e5a2eb333f241440ad72f882fc8dc6a4a931eb84aa08587656539c7b34c0fb87deb30dd96a68909ba2effe8398feabb2fdd4a7777fb6723511e96fb91f26b5b15a0e45afbf36a80fb89cd9fd2e087b8a46fef7d962bb91a1fe0cdafce8a48fd2468070f6b633e34a326801d540c3a60e0d1277f16e89504a7ce10b69eb5256484919136a775699f32125582a52053a9f023300903c6fbc6dd31112fe83d93339359f6311cefbd9f5dcc9a60add1e13b7ea8817c814a2fd1025d32e95968a1ded3ba8d3782c7943853578cdf038245024a40b74fde7e53c8a7b92a366c1529ed54405b1892bc370a1d366865d7da117b925b578c89a332491abb594");
         this.var_12.push("9a791cc5e55007ffe17d2c6df39a23814463462b7cb37c976d75fa1836e86768a91b2d4070475b6eebe01bfb7053d2b8e976793b63977f2023b00d6d694afb4d6e341bdb6a90ce8cd66b77d41ac78ebaacbaa95720ab0493a213c4c5f5c18604caa81249757daabcfd06075e16e71d922e195265208191d3fb22323419419b5cf6bf1776f0749094599d4a10941ab51f340b6ca38d1336f2621f266aa691529a4f6e399a8a987898a165de738eb4d9af3d9aff55c3682520533a50487dd6ac1079cbc7f2f4e9e249600519d6fdbc14362efb499f0349957f8a4ce2b8db0e42784d14be493ac2c9c3d305857142502c5a4d4ee1f1e86f2039df3717c3f78e06c57a06a49e2f945707e5c32346441bc981d172c16335877d206a8c835d8084185cdb3a9ac1d95c555cf8f69cf3e8a7d1a95f230b0333ea0238a61135aea5c96bfc62c222ebd7f1e233de3b59de53ca1a6dd1af917fcbe2210eedbf25fa09657c5feb9e607141638624dac03e9dda4e73b2e5d5c553dba6a80cdb0d91e02316789356bfdc62280a38554dc36e5bdf756817564aec3904a42428410a60653ea64493dfd01ab79caacc0a457fcc2761e6915f1c6b6525525a505d5a0ac79db879d40c0bb8625009f6de3c4ba223e1003278d12715fbb28f79fa702c43765873b8d28d4a2b7dc4642044513e968a54f592f7878636c14da7ff2db4f53b2fc9694aa603b6f621fd687d8396ae19f8d0dfa9e68290655e369d2874290e278c9c1828f41f3b4689679e2029fb64ae01098662294c4d5c6d0924aa14e1212bd24b656e94a5d74f3efad14d0e98b016c591b75fc349995c51c7f148e1217155c393ae93d884147bfc31a5ac506248e0499d9842097dbaca932b2b893ef48d871f190da7dc56b825a1b3f9b4e471f703468d76677bc17b4b431a059a4926eddb54f9fa5e7d402bf13f700b07cfcf2975bdbc79143ba0a3938be88c57a9257a4213121d423dda8c36d9c5b96fa6a0830597a7774a8c0b954ca7");
         this.var_12.push("4669151ae554a17316ed3740e4c45df053f34f8cc98b2aaf26b520c7a8e937e7cbc8b76c68f1febefd9b29b62c83db9ae4608d9480911a9780d13ed362fc6c111c0d1183594c124bbbf9cca974da412b51550e80fc071fe78461e84d5ce024de6f2ef513015257216b6f389cbfbe4613b95859ea9562df57522e7ece0f4c9e0ce907dbcaed4e0b53a8427f3036c77ffc9def1f341c37079ba62a9913f4fad9ce92de0585eaf64872760981b7b30905c973429e7eb93f3ef145c5d9f2f9aed9cf6db489dd4cde4500249fcf220d841643534e9f0b2edf17c7bb9c83555544cae9bf91a9398e10ca4d60e330260081cbd50755d491a3e477d959240cb2e4d3e372416829d82f7a457abea11b04e551d710622387fd7ddc1ea393678a3e89daf1ce87067716bbb15405828f36138da7c617a39a3cb68c10cb429325b8c8325ad9a4aacb6fcac90f1a6393c119479ab918c7862c5f20301a8b4efd42cc9142a11f49bce502c3d43c133af1e89e5177773fa9ba294228e88245a65ee1eb62dd76958a430cc1584df894a9717c09f6ea144d4b639d1a411faa455ac97094413804c315e287614c7d46770a58eaf0baa7bb44a66220479435c6bc6d3bd78bda3cc4a327297ee5d394d00ff71890e9dfe490c5a5da906ad34fdc9919cda164f68f039ada326587e8183e2e20cdede0e4e1f06d14a6e7e2");
         this.var_12.push("96ba8ee7ed76cf8da1db2386aaabdb473b079aef958b7ed2388da83bfac8188ac226b3fd76cdebbafa2b55defa5dac2ccea24253387151775a2c77d747be210ff9dd20ac2eaeb5a56e99cdedf1e4c1380f320da0a1f31b52ac2642f46b8eb9a88ab39ed21396c2d325cd7e44676706a3a350b2ced40c0bcb0569d4e3ef55196abdda57a95bbf6d0e78fc5353476caa9d868dc556be2104c0959564a85f556b77e2c3a45247a129a50925f6f4289fdccf7577a72d5da2edbc3e503b85fbafd3d7d437dd9a6750aa464f3bd56873048a4cabd4dc4b459ab7af96c6df198a3b520f22a5b8b269e7abc6571c5515ba48dbe8cc0e78f35cedba380ea77539534b114e60bea9ccd239685707656f72ff18af21af5e7c78ba9cadfa77c059926020f9ce472b7ff9bb5cbe1b6dd99a2d4ab79fda62ae0632bbb5d02786f4559855606ef42aee4ccc50a6290631c8cbac0d331a8575e719083623e9e0c157cc7ae464e8fde7ecd917494cf86d9c30819987b3215f2c3bede8e905dafd3fe546e96af89d20ff15d4cc04d837b55327c2ad8c2ffce59b4f1e80818f32ba79746dec18e8ff39f33c8ba8567cccbdcc43533c70d7a109043ab5829fc0dba3c5837f945ebb20d1b9f0374a14c44031937eb594a52d7ffd1fb64ad42a2c63113d907ad8941f4b94b8044ad625e6d2e92cc0e2c65af7032d6f7cb4eda137f5089f50dfdb6e38cb54f0cc61411edbcfd9b7590f96195537746c6cadf2909313160c98d18f6143e2357945f6a99dd274d6c19c0bf76d0ccfbb06bf6e35d508699ff55733834bcebdc4794c75bc45b530e68914b25f34fb397275be73e7c9350a2ade9a1a6e0d7d9823d29077c803236e8b8a46e9f523c3a91cf15d15b16a6f70806258a54f5049f538d4bbd713e07d111019c9eefb6bf0cf7c69f5573f49e76d8aaa371486e2ef2230a02b4f0569b1b13232c10a67e89f83165166d04394132c58d339219f1f29950f8a2598024cea49d50d7129d6c83974057bd1e5c3748bf02354a0123f97af8abf552a0ed85f561ce19e3c3e3451a2310b9f739a34401ebf75bdd754c06a72fbd61dd133a71f32d195b0f15b238ca345842e22aea724b8374f8353eb11d317173bd9f155a25ddacb19ddf95d0eb2e28bf3099cf4d9c76dca9046f8e990f0a0ddec7b37024c26ab733380d374cdf24d8a04e950f42ffe09159d2c10f45ff0065b107d19fb329ba3a222f3d4a568d2641b41a63a77c7f8c6a3d5026d4a19b6945eae90d4adb004dbc28535f3418edc6c25a19fc0ebca139c1dab7f1eccd5e22a2e98200e3e88c4e573301f847e03b7e3f15c8ce954674d5e7a3281a008c85369f0d468e85813ed7f8b17cee82524931c798654fd30c0510b22adb2e3fdda711eead28df3bd882e915709cacb2412cbab9a5aee4e024ecc4adcec156cd7193ce37fbaa234860a8be24020ceea64aa385a4b2c6cd1ef7c6b7d071d16841fd8351677178fc15f249ed5acc3bdba83be72c4e9b9054947c2210772310e3c892530bcc6da667387a237cf1097f89c95ba9bba4d16d4bfaae776cad6d8fbf3c227544e7835a970e84b682250a2050a47ba9f7e98bab481e3347ceca5e6d6a023eae616a9ec8e4c19");
         this.var_12.push("fc7c32649492679abdc4bc453f6e6035e3a9ad69c172f23db05d603323f64a73c3047cc479fd78a6d3808b34a27ae52d630d60443ac496cc95b120d250f019cb3d3ad3562654eae867c6f4cd414ac5e61b880c9b62aa81351a52904a5e108d6b46b9793db2f3e3c647af02d6c02c54f909bf9a8b48544edcf57d594d7f2fb7ec445e390bab9a7c76bcd86e52890a1e5374eb2f80d60dc69fc0c6b718e5ee1b0ae64aea1896fd52bea57efef4abaf78e2eccd7b0d4c1f57197e9d0b24554b3f68774b5b71ffe0ddc11fca80eb1c1b9852e49554f3afe869f8fa887af502fea4dd660289e0ef316ad2287b98a9ea4ae3e5584abf234f6f49fec615280a5f1aa0f9b839bf8b6dc853d4d5cff387edf8b2e6825fcb404eae5880f189cb2a162bf5681a1cd4c7d9653dd413d1ccf59abe7aa040a65c76beab616129314fa5625ff7802bfb4c4fa341904569d85cd7c1bca4f34a49e706bc7310efe7ca15e0de2e5d5e1157225e9160f9f16042dcfd3e79dba1d7c0ab507e745e94170c706e24fa807682446d4c67e849b28b539fe82965e5ac82f99c25cf4a38fcaffc507ea10c57dcdc1b5072f86a4788f83553ed893279f9680dc3f3e782d0994b256efc070578b0a5e657bb9aef8caa84c88a75d16214a632275cdbeac0d6c1e45521807325bc2d28621d90a9ee63cb2ce2c2b6442fa1bb989b4346ec361ee42b83042536ab5a5361800f890fd411f1e02bce6cc5e46901624a6ce339e5b433322340132ba314f7efcaae93a66a2a00cb0fdba71f37517dc0555e");
         this.var_12.push("20e01684617050699106ba40ed57f30cc5f0808b5373b29b0bd56dca96437bdca6bd16ca73a3c2216f483501cbd3c7ba53b896cd48a450a961519ff15cc57b8f6423cb320b95c753c903083b5b4b37cc07bcbdc58ef6d6167f11f0417c8c38c09596e7def847d0a97f59088b9c6556cebb78cc7223304eafc8dcc9f6b1d61f6b43b549ce4e3a5950591a15a7f4f84bf116decd61f2f9e9abd62c1890b0875f5d29371b7868aead067acbc947cf5a4aa0fe941eeaba7875a1c15f48c4649a4393309d72dd2581eb9756af1c2822c00424641aef2c7b9fd0c41d4cd6ba7fe9a7f02b13cf25ec45307f4fc66468d592bd7c0faded0c970fd0750e03b4b2e958ad5917c994df3d133d5f2f8a05ec3120f8d887f17ff106060f60ac37e51a8560ab8d1ec60ab1a2b9c466b133e9a7f5552a5c7c746f2903497dd78af493fcf3c08d970ac0214c2ecaa369b90319e165a4ef1d9ae4fe4737932f9911c7accd979c9f0d68ebebf61034837bce1c1cdb50767326a27b8d4203a253a77a2bb03549575455b063eda8528baaa40b8e9cdf7b1bdc6dfcf5b58dc0a7c7a6d62cd4e017a84b3b3e090a2a8c87856885d5165c115dc6da654a1e67f73c0604d01eaa1ace7eec974d6c1880e54ea5788d2ed766606618eaffbfdb8fc10ed389d7b040d627294e842c4f1ac38c2c7ee7410ff4f3767617747080a1f1f463edbd43f991448b9ae32f9641957a779be0d5b6c26a81e152972ab4f308956616fe011370fe89d8e4cb43345292a7d6d42b3876f8eb13cb93a10058b40b542188e3c21bf97144bbbef2c5b84261313177c08c04b29cee115a455512965143b92f34ed69e9b447a21b35850d2062cda96ecac275e1ab191579059a0436703a3d1350be63a7ab306459d67af286663cd53b27343395d69d89433c51682569c3147e0c3d39c2c141fbbb697853c771250e76f0f31c388e136a4a6812214431c45077884bd0ad52c8e5871d80232f08f8c175c47068753c4dbfb360d94a1825066cc082db0444fd253f1384cf1d24797f203a3404d0297bacdf5a3d6e88cb9d600ccee7c83471cdbcab9bd711519baff377b4deb7383ca5221e01a615e6f1ae3f0045c8ce3a88b667817b0a5a02d3bafafbce50426fe19d544bce8f88c42c2f48af4fc69e2b0d4dcbab20141f2073b9ce1a1dbef0c6bc3c32d1608f91ac5a63363f306028b21f73f92a4f31a2091d9b57fc11aefd7420f95a95dd45ad80b6bb80af184b7356872f3cb4fb49e9f8140fd9e0873d9bc3d373c32ceeab76c2096220233c4b78a10710cd8db94e5edaf86fdc140ec43ac220e97ede12ccf9669822a97f736131fed792aeb42a616e3c3b5639efc3ffa8d8999e9265cd64cb79f8c07a1fde5c2ac515b13a4b6eff008baf03ad83aca94d606bbc4cda1449aae063356facc42964a4aaece225789acfcb9ea7eb48cd3a04ca9421126ba8cd5646d3f5be82d4e6ec24a0e84081eb17c243e2eb35e4c419fcd69ade081f3d4e72550f1163ba92531635057dce8607a5d5c9b9eb97e4098716d6cc075e042f67198f5fae2bedcf257cf0176579c96f27e2a09a5ff504bd920b66d2ff807a03eac14daa5c");
         this.var_12.push("3dadf95bc36336131bf885c30a16b2485aaa62a2b5761f7d400183ac5fbb14b726c6a770d2ea536358f91e13aa15d0414285b3371860304c93480fdac5ff1b3c4989fdb3438ee62915e1f33fb7875d5f0292e2e6d2128cba0e51e8bcd5b5be122679c7ec9702dc8e31efbe6d04d68592d6181fcff308ec93a057637d72998285be04672ca96276640992bb95e846fdc1dae5b59f412d328956618bde9148888dc720badf42eb9364fb321b0268b4416be07774a08dfdddae24fd2995d6109dca7a231fc24d9c951560adad7181e0e29405cc7146af97f0a67b4c5eb0a70f18e9fc026fd6e5344156e62d4dfb2cf1c8b85ce8f0c3e94c26afef9b65ff7f5e3d29a882f4a6d27ac66c8ecd624201e11500d7a0ee51dc9362642b8e0469d73f62dc8697cb382fb9bcfb8a076589df6462758cc05bc037b8ae0859746dae95455836660a953196379d42d431a5b0ea0dd5811079b7313ebc92f2e1ba72f2d65bb858a98a5aacd7e49f4f8294fb9e687281100ef6d3b83e3df6613cced56914934c544cb854fba2e7ff4cc60d672c47e136ff04dbfcb261a39daf49f6963f89d17c12eb35973ae3f69162e0ac156a334292112a4d87f32dcf761f152a74295a65e9ec1108eddd4797f73822e1ecd430fc4fcb8d7e8abc80bbf1c513f46699a1929fdb1591175fc23ffa6fdf21f3741615fb53f710cc54f4db40387c517ae3f115ec9a3e59bad72354a0108085a358d156b9c98ebbb89f77a39d16abfd9b784e814d68db7412874fd354de078c54d88eb25997713219d94eca465b343a680383a95cba2dfaf57536d57b9f6892c689d5320f2f68ccabf3f66635b4dc74e58582317c679a901580ba7ba1acee4306b03e365683118d7bb27074695d08fac452dc13e43a546d1197a215a5cc064ecc1c899aca8394cb32bb455a10528b10c8920838a6d820f9f350147c89d4d6f73dcff351a50894a31d05799e06a499447af22469a8eccc02525837fccec1e837ebed2fc202f7b366b8918cc7fb73df26b980f6adbce68d20e93ce59553d63ed3da019d4779f28ef5dcf40566531fb5879d80798ccf36c9c74042e9e5c35b7e19d59d0fb08c69a8e64a2301671e5989c5d531a1107c3c965cda218e380353c0c9dd0d963560a98ed4b80003f83ff4d46abb6f0d325d4a59b9e5c0cad62cd3107bbc4b8bd3c236b1389b3e84f93b3c526976e7079f057e3036cb66b2764b066e26ba85789e6dd96fe7b55d5b6dc108313f85c0c62479add4265dd9f18889a4643f225ee604ac5f9131aec5448ea43e0f20196a1b74e6d4d74f207be90ac9c9ce62dbd7485ab35fe8ac087320774456ba4922f30bb4781c68817d38dfa6806abac8705e600c4f7c2e69d91bf3ba3c3195636f48ad34ccf988941a8ffd97ef5a7384256dec282faf91f1627f61b5e53ded04a95521690fe1dd233006219e6dd43ab1dc4af4ad108864521b3445610457bb1165c941d3f43e1da5703bb0dfd74fb7df9be5a36a1ce355480ebaf0dcb96657f549dd70a85dd4ca5d86426d5646c97b9b5f75ad8b68c0f753645cfe2147563c4114fc220f92ea8c39ba0972abf5df442bb8d73bbf81891046bd5796a3137743d1149c8537e9331b0794cd6efc3c81aa96935dc0343f3edd5168d974dd97b323328e997715f4f885107df1e3a35b57d74da7c6d0a9964ef75be03bbf96ef1a31f64312e15b1baeba7af42144cda79b9eb432a415c4baaef4bc88aea9833ffe6d27aaa6f39f533e085acd0fe2cd57dbc4b5062dc5cd8e243128c9");
         this.var_12.push("e001c9bf0005d6e0d0f2e2e298c58014186f38efca05d84bef72a8996652fd0f4982aee740e606498de9d0f0e1af84b16c753d9e73c0632845f0271ab5eae60a2d88945631b3ed09c27030debd8fa9b6e6d3814b634614f78ce71eac7b16113dedfb21c3f81b088fae5a700975a8e358f74eb2e79f32b9eacc7d6e7fbd9674505b5f41d7133c0ce2bad9091b549b033d892e1f6095feb87db5431a24061b3802bafeb2e79f32b9eacc7d6e7fbd9674505b5d76a5e4e8f740e2f14af47b556eb32065289e1d41f4b719722fd3bd7d412ddee773d2f9c8cbef01490bc2c7899281454192866110a283757771c44bb1bbc9f0be613ba89dcf7d2d511bdbed39c00e3f3e3c3548ca88f569ea3f4272fff2d76671c35688c683a24e2812914c5042e9c0dfff159ab65e06f7b69b42cdc8454d5f338078cd72e02cd5b8d44df7c4fecee012f272ce7a848415b6adbbbed52fbb52f5078bb6fe687276c02946a73de05ec4665fea5e61502e6bfc074745b525265f3181ddb6b7825cd25f32eedd6b05679fab7d66bbb9a4c44a78e83232a694355bd6c952e839c2323a7c5d9ae517145a703ae1cffef7993d99dbefec655d3d816449d6fb120ff25bac10453f38d794411ab28d271ff32e84743e1fe362b552a9de3b9e3d271b0f195059ab19ccaba04c760110d43ebeb4bd5d3ab2d18a66e4366c4575d8434886d36374cc8c43d5ef2b8f45e3e77bbe95fd4e34404e8f86c6f4373bb6f5364703bbf19263f22bc4323eee47db47f9fb3a1f2b435bb752116cb04b38030fc0548df3b5b968232af1195d09c0a77bf9bbfc8af6c8ae2630cb0b45bed06bafba976ef745e83033e50a5fa053d8030fc0548df3b5b968232af1195d09c9fe595ac972a3bdb0cf4b91f1568774a748ba222a2444bb6d777511d93a64e7082e4c3cf778eddc3e49e15d84e3bd3bbd61b549d6fda56b1be728835c4907c164d3ab8cd3f452f6d67ad1bf564d481c9bf288e4b0d7c0da6e4ca33796f4b6e3595ec679e93c1969cbc712ccde08d5efdc9a88990df00bb2bcce28e032a5351befe9ca5971f4c970378e29b90404d2c6e442a7d845144e570d181c5115ea2c8912d0d55ed570551672b8dd364a22c147b4b887ef4d455925c3cf8f210473d427f869336c8073e35836b44b2b8ec3a1c382f1");
         this.var_12.push("f606f1a46c41b4c0bb38467eb415f1e56e395d87241442cbb1a0ca80f9b2d6b9ab9f333572b2c572e94f78d33e4e330f209daee259acb36e0e8ea334874b1b784e88489c4d3bd9eafd74ec014b329db65818fa6a72cf1c1ff95f33a525ead7925edc1b49f9eb9bb188da773087937f94557fd2ba63975ff0fffd1e93d160266a7e2eeff9dd0296dc469f50bd3fa20a36c5bb143aea5f185abae72facd78e9ba847b5291d1c522b5e73e8fb4573179c4357bcc9e4d7638a1e821584cef8e7290df0bc1096f0692d3448a3b8fd84fb7bb79a32f78da02150977969fa40d5902f73e2cd00b72dfd5623dba4f9e18b67c89ab495411abf711a0f14f9a05e1f1d08d8fb331a577089ef463ddc7dc8139dd082ea422c12c8e5b63c4296e99e15edc93e384fbabec20640b1ea6ce7b4c4bebb1cf397bfde73169bc73e71882cd04817bb8fe3a4c1d4cbff32b38bd9c4b82755e7bea0850fbde9642e744a2ddbe2286cd55e47ba41d96f8157b8dd51c5a72f1d51c0796f29261d56f18ff4107ebbff82ca9bfa7dc5ab4fcb2b0aaab40475a2cb826d879750a0d4bfde84edd1a2b403e08fab46e942cd476a1993c5d4cf513354624cc26c28a565c67527ef1fcac623d6adf375c098ef7815d064a4a0a3e3a0f66e49f4a49bdaf176b556a19b79f3eb5f75a42446af51dd8017831e3d9e02c753d11a1d978dfdf19256789eb187ec1bddd4821ae30f70b3581c721b49aaf079987339844d45acaef60629ea33ca86f9abc76d5329191c9072f6ef491c46daeecc801c6638823dcd679ec2cf12cbb5a098fc8c18d233cacc7d3744f70b914e1dad4066f6178b52a99b950519c9f83ce1f6c28be510477a2e5bb905e1ae40135902d4e4701469ae8e5b091ad1f09ff7ce5e38f2eefb8dc533b461b25f4efbec626e8f347e4e4862aad212bdbb3c4fdcc41459de4e25227e9d311111e7ce56a28662548b791f3dd3f0775ece9fb8fd442c452c3205d2929d248e2a7c6ef0a76bda0c56916801be07bae5a04354d3af940b96c8be9e2d93c47a42af8a7183f554aaac1f27e38c2216747c2b8ad6cf5845ecf71a4a03b52857d23116ddfd0db7472f8cfde58189dc82011fe0283c4e221e3043a1e874da5f57bdd7f7cb0fa2b28edf552692467ffcf7dc731a3bfd8978f6c6e2f5013141452352dda774b17f6e025a49e95da3b7804ca452553329f56ad7c2cb132f17c6e9f462941d2454d8a8537d1a333963758418750c543f8eb78cc5368b77de8fcdcab61a1e6e2916993b182ad7e4fface51048eb34ae37baa60eadc4fd97056bc307dd0a7d781239c0e64972b4f940a6d3127bcd080f5e68d5c14ac3256bbe5ae18e6f138c791a4c890e35f51c4a494bf3d83a3cd24973ae750e3d533fef2d8a7c862c1ab7837990060376f6c43573187eaa0308f7f5dd89803077e90ef16f1050b61a882deee87abc568983d80d547f98618cc63c5ac950eca615f3d22a4f1757");
         this.var_12.push("6f3ba744e05e82208d53a236cf1d75258a9786050461821523a0d54074a65db392eb03be9cdc4f1182277a4ca9a5c3daaa7349493d68d6c12cc868793aed96942e11308a11f5978a0c256038bb20d4e3a37b4f834156b2546b1f4799ca8cc8ac0171af5dcc34116bf98b4d3cc0af23908f8d3d4ae82628d28f0aafb116e410c0788c40d6ba9946014c353fe5b83d81c8bbdef5c6a905b22c07892d66a652dc4985bda7aa4333d6ced252735da66326c2f2c44c5da95dd2a0d853ca759d61f64bef2220b4a43f0bb5d811796a811b9cc2463d5cd6667357e5795688cb79520283fd2e80e8cc04941227992a3262e2aa5ca25f4491595f73867f4f8a1aba5a5fd32e46971226ec7c3ab5de69d247cb94b5a0325b0b8c462f6498e69ab7b482dcca40df9f9cf397b124a6d435111cc33893476ff6c872f7ee24077999de7a3fa29d75c03159e59651af8173125f92403b101af5b4c814e74717b9452d2f19746822162cf4680b6a4c4702038aab687adace1ae8fd3ce6ddcafb7ca1c47b269a50c6e65d0ab4a2b992c05c060c2afcb14ddb48da530893238b140efabe4fd8713c1401d36a3c130fac9b9ddc074d0c76491beb00c7e33fc5b90ab9479837d3988227d5224e4861563707b80a82ab4f51dd830092b5615a6ea6bac93ef6d3c21f57caf408a7296c6c46e30359e23657398dc8471d620ed093cf4b78b812e94e289570d1d54820c389b9aead46c7d5ac01f09ee4e7c7f30d7259bfc4601561d486f67688390e0a32ac5cf850d777755ef958c2c20cc0ebed484bb03b63f7365fde41e72c1bb878e3eb3b7ad6074c91671d6b21683840d1156030b0611b7e86fc1bf3b61374db46c8ca7b575bb99fba29cbf2830f957d7d95c1ef244637795dea813b3a697bc96e10acb6ba06701faf34a7a8f120fdaccf73133299635ed7fb103d032c258421506503ae3a891239a4353c715bfe7b5c20f3d38c8d93f08dbdcdf3cd07150a9d6a60a7125d8dd1bc8eb7fa70d47f7c813bd49f3592d474fd97ca866deb9ffaa9fb67bffce1f4c94f3c3a1c43b740b6427900197184baa56d9e714835ee3942f057aab5b8e8a56812639045936f990a8267e26aeaebf16250a298899ec77754f2039303658645ed3210edba41fb9f503743cc78040ffc6c7f4ed2b11b62c01dc6848da43f03da81b4b8216d63329ce5fa2c0fe43457a2c69dbafa416a50d48e450b63739b5a88120d6728dce042891976a7e7ba8185d599d1e2db5b6909cd409609cc8a1c81ceb5de1a4acd7b9c99d3ec664002bf1552b46010fa094d044822c24dffe4416f88e447d9ac2e4f1943dc8ec1ea1d98fd416af33f7ab617dbd4bebefd17633d88ccd67951302971b36d5b569b23d9140cbc7d81a6402e21a0eb37c629b01cfbf6854c4c8caa889b2a478fae6ac4c56517afa356c8ad9ae020c085a1701a4aea0655c4d637ac4cbd340a0027dac110011c4b6784aa5a266e9ed369abb98ea39e65a7079d51d7b6ac7b412471dd10472dd14fbeae576e3de52bf86909dbf11ec6efbe9a67228f05f336fa8ec2c2b2bf34d9a646df1608d3b7a5baebced6ed59da4949a25950db54749999667467d6290abeb814aa35cce0c476ba457e4a861cb0fb0f7f26c31d88e335ce1645424caf82821d8093955bed11e7c5167467d6290abeb814aa35cce0c476ba4f4427084a26e41d12efb01cb4796d2b1933db6a23988f34bc060196b707bdcf235d54f410a203cfc92a39b9b67ab749b463baddc07d6181efaefa22d30af3cd30bd4372a57b260d5b127c9a816b8113cb5d7dee39e831d4f75a3966900d7b23f4995df86e8b4bd5ec2643c08133eafa0952432a3293bbec4d0fc21c9add1de0dfc388ebc3a56c4eafb367c1a91d23638f69c3537fc36fdc0275800c6e799a99c8b2aea909e2f3c3eef7ca6a57d4886c180a1f45b7566166d521eeb7a236f602a8db85b06990175372f9a3fe807122ea2f8f78404bebe495e00d214c13b5fec86a289a39289aa9ea4cbef923b5db3fd5f9f771af368ce2fe645fd5c28f3f2477706f603880c59b4e708090886ca0d809af9bfd3d0472eb3f20ecbdf1a8ff6fcc7178d78331820d072da5c1059d2354ae3ee61186b2b81bfc9a0e058f6deb8a6d6899");
         this.var_12.push("7c2727136da41c2fc65a93dd4cd1bb68ac1552317dbf976f3ae7e5d333058970b996dfe9b6c110f86c8b2c382241001e1c79d1e8b1abf1bdd6f1da9894685c2811e1a4ea45be62db48b3086a5a09f3f2ee3063e10af09666c98cd55cee970ab80baf422f06a01a23d2a2b3ccf4602a5a4b6f08a794daf82a5f661f1c44ad38e42bd6cd30b09fc13ab949a393302bb5bfd7b4d1f797eb98f552d8cee75a82c7a5649bdeff6dd3498f4ea399386c555d0c071f198092800003708ff1c488adf86543a07c7d952a4163cdd1e677439d605e70cb35d5687415411721e4d9579fb39f692fa270813552a19a258b0b06310414f2071587f5816bf19065dd162410b651d3b9c47c92895e37745f35d251b59ed76a3843e688c38e457afccc0322a632d76e52a8313a660ff89c8c7cf3b252a151419140120c7f74f53250e04826a722e06a333741eae1532efecaf3d6812f1b937c5d950b297dd8ad35351ac66b57fcd02ca90a1c351084bfc070255ed955798e7458e957739218c6d0050c4964074653f65354105355e958289c7b0a9c03bb4976e9ace57cea6a4bc91690b6c22cbd914ef4ed487127835cccaeefa0ea3d204227a92bb3b23dfd008c23c75d162d265bf228794694f2cce85c6c0f3a3188ee6e1d34a7b2d46d232d3554b6ed0ae2108b9f11a0a3ae145c720d463832a77a65e7fecf9e566b878cb75dd51b431e5730cca0b1a7ee636ef3c899dc0e74b549bd670f0b47b961b8418e91eeaa62f33dd0c244d05e4b42f7ad4209c95ebdc7344c6e4865ffbd3400f453a9c428bb8b79ae5e53ccc60d5619d820aabc6bb435a1c0824b65b2d33872459ec755687841d166fda9d4213e205807d9516c8e14c55c21eced59673a57d477f91ae1608665b87cee650159cbc6c3758918cba724b8202d814b0647ede0cb691be2f2c8003a365ee334a53eec15023b12ac05fdb8639dfbacd15e6e997d0ad8d1084a2f159dedc55b30df4e38aa0e046a85bc30e65dd17c49fb4a0304cb8a12f4314588caa1d57d1e742e6b1a760228da1d553088e28f67c9516d91");
         this.var_12.push("5d757b41fa9cd127992e01a43d031faf1b167066fa0e60a3b381b8d81c20acc40479e4d507123a0f1266527e635c11b10d64a32a8dcd9b74f9855d315895d3bb93c587c1f5091a1dffffd2c816fdda714d90c58f4deb3e4d0a1300e105a00d1819c154bb0a7e9c1edf1e03e37683bf24e71f747638e6221969878f391413f46392c44261c88b8de74b1ba49d830d90e63d3100691dd8f6e7d83008f56a9d2ef7b2bf7773ef93457421a393b9f67efaf94a234c2a4391d0f6c512dab413a6507c14d2927bcf55daeaa68ccdab845de369e6e367180d23ae057e8fe81f7aedd94fb85ed83fa6fe5a597b9b029e5f60af6cf7c14a8482c14cf658dafba634e7a42de27a4d946803a23326c797b114e66969995127465f5cdacbf938b713a59ecdb51e1428d2020182ca88b28b1ebc2181fa8338952eaf8a081c2dd549bb8dd51c34e18337be3383e1ba362e478ee6b568ae62050cfa6fc3e6fa7a74633536a66f7725692ad0ad74a1b897f87a6424e3b6be06554c21a2027edfdd5b7aeb869ac108b1695026fe915f258ac1bdf94c2f39f05362b77ab786f9de124c0a3a2989f4d8e6e7294797c8242319b65d14da46ea66b2bc6ca12ac55a238c25c4760b02d1d20b60f8ad55307b598976c1ca1d72f57763a3055c98cf507bd54f95e57065ed0f3c4fda1170d0bc511d7ba98ac2cc1a4ce1fee7996e17a2bcb46c1e76dd28ea0521f3055c98cf507bd54f95e57065ed0f3c4b50c5c9cae941251c94af39de401a1d0204bf710231fb74f20da5a67632f97de219dfaf213726bbfd0f31f2f8eb1532573bc49105cdc2dbc441aca2ff01b0af4758fcf21a90d2b581b5de94fffbc4c8ec58994044efc00661550439b9763468da769833af3e4a85ebb824232938b100faf3a33b34644d084aa47cc82c27bc826186be5b8c26c062ffa450bc66b4eb44f1c8da3a735b05adc9bc56cab5ce943c1d45e21a5e754093c4375bb9eda2a5d4327c612e6bc63bad59021a9fe8617ac55fbda7c47f58889713b97ffccee0aaa2beb91e4d8eee5a89ab3d01f0488c261028eaf6ed79b1083752aa5c8fefdd0e2baf5b9acfd5f425bf9445e359619c208a17ab");
         this.var_12.push("377869442b62fb7f0ca83b046217021772f1339f1c788265b176540b5ddec56b7bd4c1d311c80310c7e969e7c723ea828fa9e6c1ed4b4c9d6f1360cc52c9dab4dbe678c4482fd43c259f17682db8133657762d6dcd1bbbaad20230cbe211816c41b4e77409da755667b4a6f868957a124f2ccc4ca4d5ec9f0a3d120be0b7d08e4e233da3b54555c8194c4d77105d97a0d964d6eb8c9f2d087aee9d3df19f4bc1097aa34d12f6a7d5dbe4712fc67780d0f5b7e2611a9f03f98ce843eb390e6597c1ed6f9870433a03a3e1954ce394da546748d1844ea38fb31174887afd1c06914dcdd4e680523047db1ba50256f7fc73a3dabfdb7257c67b9ded158915f4416804c65c559c3e45abec14a02000d843c64516a97c34c08f5e95215ba022ba805abe004af852d41305abec77667704d9a650bf3e5312a0ed2bb13b312688f46f32942c84e270d0aef86697023e37364ccd3d90f4bfab1ac1dff34d4ff364ec54f075b6751262f2bd7d8a8cc3e20a1903cd9e435b2e63f62213ce34747d7a57b3c5f7ac733127832a9acf68d8f2a8d12542869d376f0f50e343debfde000f0ddf56d1b25c7375d3e98077ce9676a9d92ad5df410e8ebe2e833146dc020b026893c0cccd798f2d7ae137322cc6d230a2723feb4cbdde5d5916d565b62c4fbbd4d11089820ad1a7840a610aad107a62d66db38a487b09c7b4cec6ceeebcabe679d15584bcc2e0ea2201aafe1547b015f8eab8e4523fcd631746741394283b266a4e2902402d9f50a54fe3264900b4460f980b4f9be53ca2d49902d95fef6c916953177a7ae14f08803cd3429345ff43fd51b65c6a6aa9ad1b2a052598ec58cadf525476976efa027a62e8dabbeb9f821bb0620e4e1bea6a8b54e2b68105a2801791c208cddf6c35983c808e1596626c03d545cb9cfd1d29203646e60d58a78cb6340dec588af8b52ab59e33af833c3e92a1f22d3dbe562ef5368c36d753b90b3fb256c52049eafb332b357f1aa05ed57daf088e755867fc35451ff8bd1ac662cab6882c3438dc5cc3c7721133c9bf49cbaf22db69639d2b8fd5c08049743790deb3f67691a6dbcd4dce41dbe7c6e487c1e68a7fb225ef0913d889c414f0cada95708c28a5ebd51f0d1123684e79a2b66a8d55dccdecd6a13a61728b5a77359d379db3c31bec153be64cb9ad1c3d1960d018286b3b5f62017ce97a0c7b6e8b319749e1f2ce05eab278df797d4164b7aa219aabb9d3d803483919e612b6cd07a46744d1b7dad80f428ee9256fc7ce5f7775ec848434a82d5ee7646703c8e8cbeea5c08b57fe7a0293f8a64a5190d71823da04bba785b0945286ef6fb4c8c3bff31e3ce5449405e2c3ae6606c216c3deec52be8a410e18213c9257b528b6e15d66320f9ac3b6681f727831640cbbe1c4453150ef67403ff8dfcd6b76f2a9e6aab1cc4e011c87e886cccd5c20ad2e2aac0e1a18e0365b3a88a45eeeb0f1fca4d619c4cc86dab1576182a27d0100b0ef11a424dc759ae37dcd40aaa00115a822c54f9189027c31b5267fe44369e06b227828be88d2686da5b0e47da3a356311728bf167881eeb6dabd55ae9b76de8aad1c26131dd236ae20eaa135fb131edf2308aea8fd46f7405f533bdafb71d178055e2a2f6062025dfe01be11415a66141838ddb626730c093a928074a129866c61940e69cfbf5cf2ac6f4dfac89f4302676f172492cb587000a470bd324d30bab635d344ba6f6778dc53b5370f3be86d9e880d2a18b1bd5e66d8968204ad6c83866079ea05a343c9f98548aeff3ffac9959f31c0a1e89b92c73f7cfe8f2b6da85c3eb8a07a14d3d2135d978918342f696ba97566b83e9bd3269226b56342afead24b6725cd3e355153edff20e1ff6c4eb0eef367e9b4473e71e92b22a699f987b0adbe52874356a93a9c174b60ebae81983a18b9b3733fc6a4b43bfeb92e46275e8b470cb519ac6f0ea9611b3a73cc50c50d23e566c21e040e3f2545784c31a4d2ac802d57f78973494be83789b25e3e489a4936cfba3aee8e1532f718a748612a15d1ecbd90506916025c24fa68df597877230f3871caf09dce24f52d1b2598f2185e272f58d8a48f7a3b056ec0742e653aec842dc754f27f808f3d2fb344a08b65b476ba1df182ea7edd193b99a593f793c14bb9b8ac3f506592e5e2e272a6b28c900b12b1054f4f4deaf0be04e2c5c9d8ac9b35a02cba9825fb0d3be5a4dd6248ce0a7a0a8783c63e7803260451b780347b4b2dded38ed40bf2d55811aa939df25a2a1da31b6b9526b9030466746cbd19a30ad6c2e79a78835434ddafecff7a47149c56c639785d7e3f2bede423dd97ed914dd661f184387b1818e16ecd0d2bd4ccb2557f246902edbe2c9ef03374bfeee9b0cdc5b8facb282d97d181c1b927d07dacb1cd6636da864231a3c54990bbdd6b7e8eb1165161a4ef48e0d0af59de332fb6b3d50de5f465dbf6af51ecaaab21e3dec507d3deb6d27c9418c4794b7775655bc9a45ef413f93b607c06aeccecac05f94fb73b7d7267c09014672473abb84cf56de9aeba60d270061befcce1b625216950ebe429a8fad500739da25fb7178ec69724b48790013e7c843755eff24a7afdf77be455dc936375a1f8d8c564529020593007392dfdbb33c159a573bba49d6762a381de4ae247b6e00172a7cdb4ee04481f6f4f83d4c05ea872183662cf103fa26f5e5bcb8f2a6e653f7fc9d74d76a880c32b189e327a348871e8cceac14cf87b0cdc82a037d32feef3b24a04630e8377c31bbfe2fdbdd831e37e402dae7502003d1efb9e834cbda3b3b81cbf2179584c385fa4375b14ed644e60b7ee2ef49d30ede84493ea0462ee9c7de75b27139318d64631cf74476517672b2a469c5afd8a0309a8bc1e1599fb8052c9ee9e5e8261fce7874b");
         this.var_172.push("");
         this.var_172.push("");
         this.var_172.push("");
         this.var_172.push("");
         this.var_172.push("");
         this.var_172.push("");
         this.var_172.push("");
         this.var_172.push("");
         this.var_172.push("");
         this.var_172.push("");
      }
      
      public method_316(): void
      {
         if(var_230)
         {
            mRef.method_546();
         }
      }
      
      public method_87(param1: number, param2: boolean = false): string
      {
         let var_40: number = param1;
         let var_56: boolean = param2;
         try
         {
            return this.method_71(var_40,var_56).strPluralName;
         }
         catch (e: any)
         {
         }
         return "";
      }
      
      public method_614(param1: number, param2: boolean = false): string
      {
         let var_40: number = param1;
         let var_56: boolean = param2;
         try
         {
            return this.method_71(var_40,var_56).strFlavorText;
         }
         catch (e: any)
         {
         }
         return "";
      }
      
      public method_166(param1: number, param2: boolean = false): number
      {
         let var_40: number = param1;
         let var_56: boolean = param2;
         try
         {
            return this.method_71(var_40,var_56).intBubbleCost;
         }
         catch (e: any)
         {
         }
         return 0;
      }
      
      public method_26(param1: number, param2: boolean = false): string
      {
         let var_40: number = param1;
         let var_56: boolean = param2;
         try
         {
            return this.method_71(var_40,var_56).strShortName;
         }
         catch (e: any)
         {
         }
         return "";
      }
      
      public method_606(param1: number, param2: boolean = false): string
      {
         let var_40: number = param1;
         let var_56: boolean = param2;
         try
         {
            return this.method_71(var_40,var_56).strDamageText;
         }
         catch (e: any)
         {
         }
         return "";
      }
      
      public GetClassData(param1: number): Record<string, any>
      {
         this.arrClassData.push({
            "intClass":6,
            "intArmor":3,
            "intSpeed":0.3
         });
         let _loc2_: number = 0;
         while(_loc2_ < this.arrClassData.length)
         {
            if(this.arrClassData[_loc2_].intClass == param1)
            {
               return {
                  "armor":this.arrClassData[_loc2_].intArmor,
                  "speed":this.arrClassData[_loc2_].intSpeed
               };
            }
            _loc2_++;
         }
         return {
            "armor":1,
            "speed":1
         };
      }
      
      public method_149(param1: number, param2: boolean = false): number
      {
         let var_40: number = param1;
         let var_56: boolean = param2;
         try
         {
            return this.method_71(var_40,var_56).intClassCost;
         }
         catch (e: any)
         {
         }
         return 0;
      }
      
      public method_207(param1: number, param2: boolean = false): number
      {
         let var_40: number = param1;
         let var_56: boolean = param2;
         try
         {
            return this.method_71(var_40,var_56).intGunCost;
         }
         catch (e: any)
         {
         }
         return 0;
      }
      
      public method_535(param1: number, param2: boolean = false): string
      {
         let var_40: number = param1;
         let var_56: boolean = param2;
         try
         {
            return this.method_71(var_40,var_56).strSummaryText;
         }
         catch (e: any)
         {
         }
         return "";
      }
      
      public method_37(param1: number, param2: boolean = false): string
      {
         let var_40: number = param1;
         let var_56: boolean = param2;
         try
         {
            return this.method_71(var_40,var_56).strName;
         }
         catch (e: any)
         {
         }
         return "";
      }
      
      public method_123(param1: number, param2: boolean = false): MovieClip
      {
         let _loc4_: number = 0;
         let _loc3_: MovieClip = null;
         if(param1 != this.var_102)
         {
            this.var_102 = -1;
         }
         if(this.var_102 == -1 || param2 == false)
         {
            if(param1 >= 1000 && param1 <= 1999)
            {
               _loc4_ = 0;
               while(_loc4_ < this.var_83.length)
               {
                  if(param1 == this.var_83[_loc4_].intObjID)
                  {
                     this.var_102 = param1;
                     this.var_104 = _loc4_;
                     return new this.var_83[_loc4_].claType();
                  }
                  _loc4_++;
               }
            }
            if(param1 >= 2000 && param1 <= 2999)
            {
               _loc4_ = 0;
               while(_loc4_ < this.var_50.length)
               {
                  if(param1 == this.var_50[_loc4_].intObjID)
                  {
                     this.var_102 = param1;
                     this.var_104 = _loc4_;
                     return new this.var_50[_loc4_].claType();
                  }
                  _loc4_++;
               }
            }
            if(param1 >= 3000 && param1 <= 3999)
            {
               _loc4_ = 0;
               while(_loc4_ < this.var_62.length)
               {
                  if(param1 == this.var_62[_loc4_].intObjID)
                  {
                     this.var_102 = param1;
                     this.var_104 = _loc4_;
                     return new this.var_62[_loc4_].claType();
                  }
                  _loc4_++;
               }
            }
            if(param1 >= 4000 && param1 <= 4999)
            {
               _loc4_ = 0;
               while(_loc4_ < this.var_48.length)
               {
                  if(param1 == this.var_48[_loc4_].intObjID)
                  {
                     this.var_102 = param1;
                     this.var_104 = _loc4_;
                     return new this.var_48[_loc4_].claType();
                  }
                  _loc4_++;
               }
            }
         }
         else
         {
            if(param1 >= 1000 && param1 <= 1999)
            {
               return new this.var_83[this.var_104].claType();
            }
            if(param1 >= 2000 && param1 <= 2999)
            {
               return new this.var_50[this.var_104].claType();
            }
            if(param1 >= 3000 && param1 <= 3999)
            {
               return new this.var_62[this.var_104].claType();
            }
            if(param1 >= 4000 && param1 <= 4999)
            {
               return new this.var_48[this.var_104].claType();
            }
         }
         this.var_102 = -1;
         return _loc3_;
      }
      
      public GetObjectType(param1: number): number
      {
         return Math.floor(param1 / 1000);
      }
      
      public IsObjectAWeapon(param1: number): boolean
      {
         if(param1 >= 1000 && param1 <= 1999)
         {
            return false;
         }
         return true;
      }
      
      private method_71(param1: number, param2: boolean = false): Record<string, any>
      {
         let _loc4_: number = 0;
         null;
         if(param1 != this.var_102)
         {
            this.var_102 = -1;
         }
         if(this.var_102 == -1 || param2 == false)
         {
            if(param1 >= 1000 && param1 <= 1999)
            {
               _loc4_ = 0;
               while(_loc4_ < this.var_83.length)
               {
                  if(param1 == this.var_83[_loc4_].intObjID)
                  {
                     this.var_102 = param1;
                     this.var_104 = _loc4_;
                     return this.var_83[_loc4_];
                  }
                  _loc4_++;
               }
            }
            if(param1 >= 2000 && param1 <= 2999)
            {
               _loc4_ = 0;
               while(_loc4_ < this.var_50.length)
               {
                  if(param1 == this.var_50[_loc4_].intObjID)
                  {
                     this.var_102 = param1;
                     this.var_104 = _loc4_;
                     return this.var_50[_loc4_];
                  }
                  _loc4_++;
               }
            }
            if(param1 >= 3000 && param1 <= 3999)
            {
               _loc4_ = 0;
               while(_loc4_ < this.var_62.length)
               {
                  if(param1 == this.var_62[_loc4_].intObjID)
                  {
                     this.var_102 = param1;
                     this.var_104 = _loc4_;
                     return this.var_62[_loc4_];
                  }
                  _loc4_++;
               }
            }
            if(param1 >= 4000 && param1 <= 4999)
            {
               _loc4_ = 0;
               while(_loc4_ < this.var_48.length)
               {
                  if(param1 == this.var_48[_loc4_].intObjID)
                  {
                     this.var_102 = param1;
                     this.var_104 = _loc4_;
                     return this.var_48[_loc4_];
                  }
                  _loc4_++;
               }
            }
         }
         else
         {
            if(param1 >= 1000 && param1 <= 1999)
            {
               return this.var_83[this.var_104];
            }
            if(param1 >= 2000 && param1 <= 2999)
            {
               return this.var_50[this.var_104];
            }
            if(param1 >= 3000 && param1 <= 3999)
            {
               return this.var_62[this.var_104];
            }
            if(param1 >= 4000 && param1 <= 4999)
            {
               return this.var_48[this.var_104];
            }
         }
         this.var_102 = -1;
         return null;
      }
      
      public method_240(param1: number, param2: boolean = false): boolean
      {
         let var_40: number = param1;
         let var_56: boolean = param2;
         try
         {
            return this.method_71(var_40,var_56).blnLower;
         }
         catch (e: any)
         {
         }
         return false;
      }
   }
