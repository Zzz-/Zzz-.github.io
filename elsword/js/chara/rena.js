/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** レナのデータ型 */
var Rena = function () {
	this.jobs = [
	  new Job("レナ", "rena", "Rena/Rena.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Rena/icon", "url"),
      new Active("覚醒", "Awaking", "00_awaking.png"),
      new Active("マルチプルスティンガー", "Multiple Stinger", "Rena/Rena05_Multiple Stinger.png"),
      new Active("アサルトキック", "Assault Kick", "Rena/Rena04_Assault Kick.png"),
      new Active("レールスティンガー", "Rail Stinger", "Rena/Rena02_Rail Stinger.png"),
      new Active("パーフェクトストーム", "Perfect Storm", "Rena/Rena03_Perfect Storm.png"),
      new Active("フェニックスストライク", "Phoenix Strike", "Rena/Rena06_Phoenix Strike.png"),
      new Active("エアロトルネード", "Aero Tornado", "Rena/Rena07_Aero Tornado.png"),
	  ]),

	  new Job("コンバットレンジャー/ウィンドスニーカー", "ws", "Rena/WindSneaker.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Rena/icon", "url"),
      new Active("スピニングキック", "Spinning Kick", "Rena/Rena08_Spinning Kick.png"),
      new Active("クレセントキック", "Crescent Kick", "Rena/Rena09_Crescent Kick.png"),
      new Active("ダイブキックボミング", "Dive Kick Bombing", "Rena/Rena11_Dive Kick Bombing.png"),
      new Active("バイオレントアタック", "Violent Attack", "Rena/Rena12_Violent Attack.png"),
      new Active("スライドダブルキック", "Slide Double Kick", "Rena/Rena13_Slide Double Kick.png"),
      new Active("シャープフォール", "Sharp Fall", "Rena/Rena10_Sharp Fall.png"),
      new Active("アイレリンナ－ニンフ", "Arielinna – Nymph", "Rena/Rena14_Airelinna.png"),
      new Active("アイレリンナ－シルフ", "Arielinna – Sylph", "Rena/Rena14a_Airelinna.png"),
      new Active("スパイラルストライク", "Spiral Strike", "Rena/RenaHA01_Spiral Strike.png"),
	  ]),

	  new Job("スナイピングレンジャー/グランドアーチャー", "ga", "Rena/GrandArcher.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Rena/icon", "url"),
      new Active("ハミングウィンド", "Humming Wind", "Rena/Rena15_Humming Wind.png"),
      new Active("ガイドアロー", "Guide Arrow", "Rena/Rena16_Guide Arrow.png"),
      new Active("クレイジーショット", "Crazy Shot", "Rena/Rena19_Crazy Shot.png"),
      new Active("グングニル", "Gungnir", 222, 2, 0, "", "Rena/Rena18_Gungnir.png", "QJPQc3D9Pf4"),
      new Active("グングニル(キャンセル)", "Gungnir_cancel", "Rena/Rena18_Gungnir.png"),
      new Active("エアロストレイフ", "Aero-Strafe", "Rena/Rena21_Aero-Strafe.png"),
      new Active("ウィンドブラスト", "Wind Blast", 85, 2, 0, "", "Rena/Rena29_Wind Blast.png", "4wME2w5xyVo"),
      new Active("ウインドワード", "Wind Wall", "Rena/Rena17_Wind Wall.png"),
      new Active("フリージングアロー－スティング", "Freezing Arrow – Sting", "Rena/Rena20_Freezing Arrow.png"),
      new Active("フリージングアロー－ドリズル", "Freezing Arrow – Drizzle", "Rena/Rena20a_Freezing Arrow.png"),
      new Active("シューターディスティニー", "Shooter Destiny", 90, 1, 0, "", "Rena/RenaHA02_Shooter Destiny.png", "KSWOK7LWKMY"),
	  ]),

	  new Job("トラッピングレンジャー/ナイトウォッチャー", "nw", "Rena/NightWatcher.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Rena/icon", "url"),
      new Active("イヴォーク", "Evoke", "Rena/Rena22_Evoke.png"),
      new Active("フェイタリティー", "Fatality", "Rena/Rena24_Fatality.png"),
      new Active("コールオブルーイン", "Call of Ruin", "Rena/Rena25_Call of Ruin.png"),
      new Active("カルマ", "Karma", "Rena/Rena26_Karma.png"),
      new Active("トラッピングアロー－バスター", "Trapping Arrow – Buster", 89, 2, 4, "", "Rena/Rena23_Trapping Arrow.png", "TYgWscsdoBA"),
      new Active("トラッピングアロー－ボンゴス", "Trapping Arrow – Fungus", 88, 2, 3, "", "Rena/Rena23a_Trapping Arrow.png", "5oG90iRZVnA"),
      new Active("フューリアスインゲージ", "Furious Engage", 36, 1, 0, "", "Rena/Rena27_Furious Engage.png", "-tDA9T3p4VY"),
      new Active("グライディングストライク", "Gliding Strike", "Rena/Rena28_Gliding Strike.png"),
      new Active("イノセント", "Innocent", 73, 1, 0, "", "Rena/RenaHA03_Innocent.png", "NveAycjiSnU"),
	  ]),
	  
	];
};

Rena.prototype = new Chara;

var targetChara = new Rena();