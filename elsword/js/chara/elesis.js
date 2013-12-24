/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** エリシスのデータ型 */
var Elesis = function () {
	this.jobs = [
	  new Job("エリシス", "elesis", "Elesis/Elesis.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Elesis/icon", "url"),
      new Active("覚醒", "Awaking", "00_awaking.png"),
	    
	  ]),

	  new Job("セイバーナイト", "sak", "Elesis/SaberKnight.png", [
//	new Active("name", "id", frame, hit, adframe, "tips", "Elesis/icon", "url"),
		new Active(),

		]),

	  new Job("パイロナイト", "pk", "Elesis/PyroKnight.png", [
//	new Active("name", "id", frame, hit, adframe, "tips", "Elesis/icon", "url"),
		new Active(),

		]),
	  
	];
};

Elesis.prototype = new Chara;

var targetChara = new Elesis();