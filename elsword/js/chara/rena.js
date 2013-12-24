/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** レナのデータ型 */
var Rena = function () {
	this.jobs = [
	  new Job("レナ", "rena", "Rena/Rena.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Rena/icon", "url"),
      new Active("覚醒", "Awaking", "00_awaking.png"),
	    
	  ]),

	  new Job("コンバットレンジャー/ウィンドスニーカー", "ws", "Rena/WindSneaker.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Rena/icon", "url"),
      new Active(),
	    
	  ]),

	  new Job("スナイピングレンジャー/グランドアーチャー", "ga", "Rena/GrandArcher.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Rena/icon", "url"),
      new Active(),
	    
	  ]),

	  new Job("トラッピングレンジャー/ナイトウォッチャー", "nw", "Rena/NightWatcher.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Rena/icon", "url"),
      new Active(),
	    
	  ]),
	  
	];
};

Rena.prototype = new Chara;

var targetChara = new Rena();