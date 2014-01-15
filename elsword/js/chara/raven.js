/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** レイヴンのデータ型 */
var Raven = function () {
	this.jobs = [
	  new Job("レイヴン", "raven", "Raven/Raven.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Raven/icon", "url"),
      new Active("覚醒", "Awaking", "00_awaking.png"),
	    
	  ]),

	  new Job("オーバーテイカー/レックレスフィスト", "rf", "Raven/RecklessFist.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Raven/icon", "url"),
      new Active("インフェルナルアームズ", "Infernal Arms", 73, 1, 0, "", "Raven/RavenHA01_Infernal Arms.png", "yNCkre8FKhQ"),
     
	  ]),

	  new Job("ソードテイカー/ブレードマスター", "bm", "Raven/BladeMaster.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Raven/icon", "url"),
      new Active(),
	    
	  ]),

	  new Job("ウェポンテイカー/ベテランコマンダー", "vc", "Raven/VeteranCommander.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Raven/icon", "url"),
      new Active("バーニングバスター", "Burning Burster", 90, 1, 0, "", "Raven/RavenHA03_Burning Burster.png", "DD5VDfJFQo8"),
	    
	  ]),
	  
	];
};

Raven.prototype = new Chara;

var targetChara = new Raven();