/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** イヴのデータ型 */
var Eve = function () {
	this.jobs = [
	  new Job("イヴ", "eve", "Eve/Eve.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Eve/icon", "url"),
      new Active("覚醒", "Awaking", "00_awaking.png"),
	    
	  ]),

	  new Job("コードエキゾチック/コードネメシス", "cn", "Eve/CodeNemesis.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Eve/icon", "url"),
	    new Active(),
	    
	  ]),

	  new Job("コードアーキテクチャー/コードエンプレス", "cep", "Eve/CodeEmpress.png", [
//		new Active("name", "id", frame, hit, adframe, "tips", "Eve/icon", "url"),
			new Active(),
	    
	  ]),

	  new Job("コードエレクトラ/コードバトルセラフ", "cbs", "Eve/BattleSeraph.png", [
//		new Active("name", "id", frame, hit, adframe, "tips", "Eve/icon", "url"),
			new Active(),
	    
	  ]),
	  
	];
};

Eve.prototype = new Chara;

var targetChara = new Eve();