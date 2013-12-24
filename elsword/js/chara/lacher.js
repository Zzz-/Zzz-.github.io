/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** ラシェのデータ型 */
var Lacher = function () {
	this.jobs = [
	  new Job("ラシェ", "lacher", "Lacher/Lacher.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Lacher/icon", "url"),
      new Active("覚醒", "Awaking", "00_awaking.png"),
	    
	  ]),

	  new Job("シューティングガーディアン/デッドリーチェイサー", "dc", "Lacher/DeadlyChaser.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Lacher/icon", "url"),
			new Active(),
	    
	  ]),

	  new Job("フューリーガーディアン/アイアンパラディン", "ip", "Lacher/IronPaladin.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Lacher/icon", "url"),
			new Active(),
	    
	  ]),

	  new Job("シェリングガーディアン/タクティカルトルーパー", "tt", "Lacher/TacticalTrooper.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Lacher/icon", "url"),
			new Active(),
	    
	  ]),
	  
	];
};

Lacher.prototype = new Chara;

var targetChara = new Lacher();