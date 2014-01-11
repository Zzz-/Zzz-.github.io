/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** エルスのデータ型 */
var Els = function () {
	this.jobs = [
	  new Job("エルス", "els", "Els/Els.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Els/icon", "url"),
	    new Active("覚醒", "Awaking", 78, -1, 19, "", "00_awaking.png", "HKFSOAyyNuM"),
	    new Active("フレイムガイザー", "FlameGeyser", "Els/Els04_Flame Geyser.png"),
	    new Active("フェータルフューリー", "FatalFury", 37, 1, 0, "", "Els/Els03_Fatal Fury.png", "awiQ-odE2HE"),
	    new Active("メガスラッシュ", "MegaSlash", 36, 0, 0, "", "Els/Els02_Mega Slash.png", "tFxIqjmfK0M"),
	    
	  ]),

	  new Job("マジックナイト/ルーンスレイヤー", "rs", "Els/RuneSlayer.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Els/icon", "url"),
	    new Active("ウィンドブレード", "WindBlade", 79, -1, 21, "", "Els/Els08_Wind Blade.png", "url"),
	    new Active("ライジングスラッシュ", "RisingSlash", 53, 1, 0, "", "Els/Els09_Rising Slash.png", "url"),
	    
	  ]),

	  new Job("ソードナイト/ロードナイト", "lk", "Els/LordKnight.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Els/icon", "url"),
	    new Active("エアスラッシュ", "AirSlash", "Els/Els15_Air Slash.png"),
	    new Active("スパイラルブラスト", "SpiralBlast", "Els/Els16_Spiral Blast.png"),
	    new Active("サンドストーム", "Sandstorm", 61, 1, 1, "", "Els/Els21_Sandstorm.png", "LjlqaNtv6go"),
	    new Active(),
	    
	  ]),

	  new Job("シースナイト/インフィニティソード", "is", "Els/InfinitySword.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Els/icon", "url"),
	    new Active(),
	    
	  ]),
	  
	];
};

Els.prototype = new Chara;

var targetChara = new Els();