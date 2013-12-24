/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** アラのデータ型 */
var Ara = function () {
	this.jobs = [
	  new Job("アラ", "ara", "Ara/Ara.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Ara/icon", "url"),
	    new Active("覚醒", "Awaking", "00_awaking.png"),
	    
	  ]),

	  new Job("小仙/帝釈天", "sd", "Ara/SakraDevanam.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Ara/icon", "url"),
	    new Active(),
	    
	  ]),
	  
	];
};

Ara.prototype = new Chara;

var targetChara = new Ara();