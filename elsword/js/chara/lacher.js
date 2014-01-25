/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** ラシェのデータ型 */
var Lacher = function () {
	this.jobs = [
	  new Job("ラシェ", "lacher", "Lacher/Lacher.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Lacher/icon", "url"),
      new Active("覚醒", "Awaking", 113, -1, 32, "", "00_awaking.png", "f--nn2Whhz8"),
      new Active("ルナティックブロウ", "Lunatic Blow", 41, 1, 0, "", "Lacher/Lacher04_Lunatic Blow.png", "jgxq2mu84xQ"),
      new Active("ブルータルスウィング", "Brutal Swing", 40, 1, 0, "", "Lacher/Lacher02_Brutal Swing.png", "Q7POyeSiOqI"),
      new Active("スケアチェイス", "Scare Chase", 114, 2, 0, "", "Lacher/Lacher03_Scare Chase.png", "9kdbSYfs_Wk"),
      new Active("ディトネイション", "Detonation", 63, 1, 0, "", "Lacher/Lacher05_Detonation.png", "xN_p_XwKp0s"),
      new Active("ギガンティックインパクト", "Gigantic Impact", 120, 2, 0, "", "Lacher/Lacher06_Gigantic Impact.png", "72WveKad6aQ"),
      new Active("アケルダマ", "Aceldama", 184, 1, 0, "", "Lacher/Lacher07_Aceldama.png", "6tXG9DB_gR0"),
	  ]),

	  new Job("シューティングガーディアン/デッドリーチェイサー", "dc", "Lacher/DeadlyChaser.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Lacher/icon", "url"),
			new Active("デュアルバスター", "Dual Buster", 29, 1, 0, "", "Lacher/Lacher08_Dual Buster.png", "SPry4TFtiNo"),
			new Active("ヘビーレールガン", "Heavy Railgun", 29, 0, 0, "", "Lacher/Lacher09_Heavy Railgun.png", "CO-kKJtEFKU"),
			new Active("シューティングスター", "Shooting Star", 154, 2, 0, "2回目も含めた合計の時間", "Lacher/Lacher12_Shooting Star.png", "xBzBTp0oBDE"),
			new Active("(2回目の暗転)", "Shooting Star", 96, 2, 0, "", "Lacher/Lacher12_Shooting Star.png", ""),
			new Active("アーティラリーストライク－クァンタムバリスタ", "Artillery Strike - Quantum Ballista", 76, 0, 0, "", "Lacher/Lacher14a_Artillery Strike.png", "H5-qiTQT2MM"),
			new Active("シャープシューターシンドローム", "Sharpshooter Syndrome", 67, 1, 0, "", "Lacher/Lacher11_Sharpshooter Syndrome.png", "Jv5-VfbhAew"),
			new Active("コメットクラッシャー", "Comet Crasher", 70, 1, 0, "", "Lacher/Lacher10_Comet Crasher.png", "XJFVfRWskCg"),
			new Active("バレットブリッツ", "Bullet Blitz", 81, 1, 22, "", "Lacher/Lacher13_Bullet Blitz.png", "roNt1lF0h0s"),
			new Active("アウトレイジストライク", "Outrage Strike", 179, 1, 0, "", "Lacher/LacherHA01_Outrage Strike.png", "5TynF3602A0"),
	  ]),

	  new Job("フューリーガーディアン/アイアンパラディン", "ip", "Lacher/IronPaladin.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Lacher/icon", "url"),
			new Active("スチールエッジ", "Steel Edge", 60, 1, 0, "", "Lacher/Lacher15_Steel Edge.png", "eiym0NibEV0"),
			new Active("パンデモニウム－フィア", "Pandemonium – Fear", 66, 2, 0, "", "Lacher/Lacher17a_Pandemonium.png", "gic52_f1mSM"),
			new Active("パンデモニウム－カオス", "Pandemonium – Chaos", 67, 2, 0, "", "Lacher/Lacher17_Pandemonium.png", "BlmJ49ESS3Q"),
			new Active("ルナティックフューリー", "Lunatic Fury", 114, 1, 0, "", "Lacher/Lacher18_Lunatic Fury.png", "OlwrD-uaI_Y"),
			new Active("カラドボルグペイン", "Pain of Caladbolg", 66, 2, 0, "", "Lacher/Lacher19_Pain of Caladbolg.png", "-a4jnjTMcCA"),
			new Active("バーストウルフ", "Burst Wolf", 84, 2, 0, "", "Lacher/Lacher20_Burst Wolf.png", "jul_UCBpprI"),
			new Active("アイアンハウリング", "Iron Howling", 69, 0, 0, "", "Lacher/Lacher16_Iron Howling.png", "bbij-xW4HtM"),
			new Active("ワンダーウォール", "Wonder Wall", 51, 0, 0, "TTのものと同じ", "Lacher/Lacher22_Wonder Wall.png", "i3PAdOO47KI"),
			new Active("ランドデモリッシャー－ヘビーアームズ", "Land Demolisher - Heavy Arms", 125, 2, 18, "", "Lacher/Lacher21_Land Demolisher.png", "kxuQlV6nFMQ"),
			new Active("ランドデモリッシャー－アースクエイク", "Land Demolisher – Earthquake", 126, 1, 0, "", "Lacher/Lacher21a_Land Demolisher.png", "OXy1GvD0zvk"),
			new Active("ドゥームストライク", "Doom Strike", 134, 1, 0, "2回暗転スキル", "Lacher/LacherHA02_Doom Strike.png", "aT0w3JcJFLQ"),
			new Active("(2回目の暗転)", "Doom Strike", 241, 2, 114, "猶予98F", "Lacher/LacherHA02_Doom Strike.png", ""),
	  ]),

	  new Job("シェリングガーディアン/タクティカルトルーパー", "tt", "Lacher/TacticalTrooper.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Lacher/icon", "url"),
			new Active("ビッグバンストリーム", "Big Bang Stream", 66, 2, 0, "", "Lacher/Lacher24_Big Bang Stream.png", "BrDFn0jx-S0"),
			new Active("キャノンストライク", "Cannon Strike", 42, 1, 0, "", "Lacher/Lacher27_Cannon Strike.png", "hAVQFxA35oc"),
			new Active("カオスキャノン", "Chaos Cannon", 114, 1, 0, "", "Lacher/Lacher25_Chaos Cannon.png", "Q0GsVfeMgyw"),
			new Active("カーペットボミング", "Carpet Bombing", 120, 0, 28, "", "Lacher/Lacher26_Carpet Bombing.png", "unE_9JilLt8"),
			new Active("タクティカルフィールド－インドゥランス", "Tactical Field – Endurance", 113, 2, 31, "", "Lacher/Lacher28_Tactical Field.png", "hVq-khe-Lb8"),
			new Active("タクティカルフィールド－レイド", "Tactical Field – Raid", 113, 2, 30, "", "Lacher/Lacher28a_Tactical Field.png", "y_ha9WDfkEs"),
			new Active("ワンダーウォール", "Wonder Wall", 51, 0, 0, "IPのものと同じ", "Lacher/Lacher22_Wonder Wall.png", "i3PAdOO47KI"),
			new Active("ドレッドチェイス", "Dread Chase", 115, 1, 0, "", "Lacher/Lacher23_Dread Chase.png", "P_jJUz6Sf88"),
			new Active("アーティラリーストライク－アートシャワー", "Artillery Strike - Missile Shower", 77, 0, 0, "", "Lacher/Lacher14_Artillery Strike.png", "qvRlWk-OMeg"),
			new Active("サテライトレイン", "Satellite Rain", 107, 0, 0, "", "Lacher/LacherHA03_Satellite Rain.png", "YHeyx4eQMr4"),
	  ]),
	  
	];
};

Lacher.prototype = new Chara;

var targetChara = new Lacher();