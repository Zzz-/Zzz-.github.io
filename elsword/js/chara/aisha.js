/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** アイシャのデータ型 */
var Aisha = function () {
	this.jobs = [
	  new Job("アイシャ", "aisha", "Aisha/Aisha.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Aisha/icon", "url"),
      new Active("覚醒", "Awaking", "00_awaking.png"),
	    
	  ]),

	  new Job("ハイマジシャン/エレメンタルマスター", "em", "Aisha/ElementalMaster.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Aisha/icon", "url"),
	    new Active(),
	    
	  ]),

	  new Job("ダークマジシャン/ヴォイドプリンセス", "vp", "Aisha/VoidPrincess.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Aisha/icon", "url"),
      new Active(),
	    
	  ]),

	  new Job("バトルマジシャン/ディメンションウィッチ", "dw", "Aisha/DimensionWitch.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Aisha/icon", "url"),
      new Active(),
	    
	  ]),
	  
	];
};

Aisha.prototype = new Chara;

var targetChara = new Aisha();