/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** レナのデータ型 */
var Rena = function () {
	this.jobs = [
	  new Job("レナ", "rena", "Rena/Rena.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Rena/icon", "url"),
      new Active("覚醒", "Awaking", 96, -1, 27, "", "00_awaking.png", "C-kNxMnfj2I"),
      new Active("マルチプルスティンガー", "Multiple Stinger", 41, 0, 0, "", "Rena/Rena05_Multiple Stinger.png", "FApP7XPzx0o"),
      new Active("アサルトキック", "Assault Kick", 36, 1, 0, "", "Rena/Rena04_Assault Kick.png", "JhvBgrct-rE"),
      new Active("レールスティンガー", "Rail Stinger", 36, 2, 0, "", "Rena/Rena02_Rail Stinger.png", "C-kNxMnfj2I"),
      new Active("パーフェクトストーム", "Perfect Storm", 36, 1, 0, "", "Rena/Rena03_Perfect Storm.png", "flaQhS8RmIE"),
      new Active("フェニックスストライク", "Phoenix Strike", 36, 1, 0, "密着のみHIT", "Rena/Rena06_Phoenix Strike.png", "ZvW_t38nbkw"),
      new Active("エアロトルネード", "Aero Tornado", 36, 0, 0, "", "Rena/Rena07_Aero Tornado.png", "yNmJDdWA4CY"),
	  ]),

	  new Job("コンバットレンジャー/ウィンドスニーカー", "ws", "Rena/WindSneaker.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Rena/icon", "url"),
      new Active("スピニングキック", "Spinning Kick", 37, 1, 0, "", "Rena/Rena08_Spinning Kick.png", "Cq1dcgvtB9A"),
      new Active("クレセントキック", "Crescent Kick", 37, 1, 0, "", "Rena/Rena09_Crescent Kick.png", "ka8FitqVGRc"),
      new Active("ダイブキックボミング", "Dive Kick Bombing", 36, 1, 0, "", "Rena/Rena11_Dive Kick Bombing.png", "0BaA6qUSxqo"),
      new Active("バイオレントアタック", "Violent Attack", 29, 1, 0, "最初の蹴り上げのみ", "Rena/Rena12_Violent Attack.png", "C3RVK5uLHiU"),
      new Active("スライドダブルキック", "Slide Double Kick", 36, 1, 0, "", "Rena/Rena13_Slide Double Kick.png", "07pVGt53Ls4"),
      new Active("シャープフォール", "Sharp Fall", 60, 2, 0, "低空時のデータ", "Rena/Rena10_Sharp Fall.png", "NgBll2dKzDQ"),
      new Active("アイレリンナ－ニンフ", "Arielinna – Nymph", 42, -1, 0, "", "Rena/Rena14_Airelinna.png", "rXvsupWvQNA"),
      new Active("アイレリンナ－シルフ", "Arielinna – Sylph", 41, -1, 0, "", "Rena/Rena14a_Airelinna.png", "QHqjWaJJkpg"),
      new Active("スパイラルストライク", "Spiral Strike", 90, 1, 0, "最後の蹴りまで約8秒", "Rena/RenaHA01_Spiral Strike.png", "cCThnXfD2PM"),
	  ]),

	  new Job("スナイピングレンジャー/グランドアーチャー", "ga", "Rena/GrandArcher.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Rena/icon", "url"),
      new Active("ハミングウィンド", "Humming Wind", 36, 0, 0, "", "Rena/Rena15_Humming Wind.png", "RIIZKmc5ows"),
      new Active("ガイドアロー", "Guide Arrow", 35, 0, 0, "", "Rena/Rena16_Guide Arrow.png", "NTQAFhR9RSw"),
      new Active("クレイジーショット", "Crazy Shot", 85, 1, 0, "", "Rena/Rena19_Crazy Shot.png", "S2sj0FCBA_k"),
      new Active("グングニル", "Gungnir", 222, 2, 0, "", "Rena/Rena18_Gungnir.png", "QJPQc3D9Pf4"),
      new Active("グングニル(キャンセル)", "Gungnir_cancel", 221, 2, 35, "攻撃HIT時に発動", "Rena/Rena18_Gungnir.png", "TxjiMyuy6hI"),
      new Active("エアロストレイフ", "Aero-Strafe", 96, 2, 15, "", "Rena/Rena21_Aero-Strafe.png", "YMe3OMK1j1U"),
      new Active("ウィンドブラスト", "Wind Blast", 85, 2, 0, "", "Rena/Rena29_Wind Blast.png", "4wME2w5xyVo"),
      new Active("ウインドワード", "Wind Wall", 57, 2, 0, "", "Rena/Rena17_Wind Wall.png", "qM2cj2qrRxQ"),
      new Active("フリージングアロー－スティング", "Freezing Arrow – Sting", 37, 2, 0, "3キャラ分まで", "Rena/Rena20_Freezing Arrow.png", "kerSKYBKToY"),
      new Active("フリージングアロー－ドリズル", "Freezing Arrow – Drizzle", 36, 2, 0, "画面端まで", "Rena/Rena20a_Freezing Arrow.png", "XMTopt88JnM"),
      new Active("シューターディスティニー", "Shooter Destiny", 90, 1, 0, "", "Rena/RenaHA02_Shooter Destiny.png", "KSWOK7LWKMY"),
	  ]),

	  new Job("トラッピングレンジャー/ナイトウォッチャー", "nw", "Rena/NightWatcher.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Rena/icon", "url"),
      new Active("イヴォーク", "Evoke", 90, 2, 5, "", "Rena/Rena22_Evoke.png", "hrplLMYjVd8"),
      new Active("フェイタリティー", "Fatality", 39, 2, 0, "", "Rena/Rena24_Fatality.png", "btAj128QDd8"),
      new Active("コールオブルーイン", "Call of Ruin", 49, 1, 0, "", "Rena/Rena25_Call of Ruin.png", "3IA0wOcpRhg"),
      new Active("カルマ", "Karma", 126, 1, 0, "", "Rena/Rena26_Karma.png", "Fv-XQBCu8yU"),
      new Active("トラッピングアロー－バスター", "Trapping Arrow – Buster", 89, 2, 4, "", "Rena/Rena23_Trapping Arrow.png", "TYgWscsdoBA"),
      new Active("トラッピングアロー－ボンゴス", "Trapping Arrow – Fungus", 88, 2, 3, "", "Rena/Rena23a_Trapping Arrow.png", "5oG90iRZVnA"),
      new Active("フューリアスインゲージ", "Furious Engage", 36, 1, 0, "", "Rena/Rena27_Furious Engage.png", "-tDA9T3p4VY"),
      new Active("グライディングストライク", "Gliding Strike", 47, 0, 0, "", "Rena/Rena28_Gliding Strike.png", "V5A-BsSUvMc"),
      new Active("イノセント", "Innocent", 73, 1, 0, "", "Rena/RenaHA03_Innocent.png", "NveAycjiSnU"),
	  ]),
	  
	];
};

Rena.prototype = new Chara;

var targetChara = new Rena();