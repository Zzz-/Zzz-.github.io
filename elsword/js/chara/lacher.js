/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** ラシェのデータ型 */
var Lacher = function () {
	this.jobs = [
	  new Job("ラシェ", "lacher", "Lacher/Lacher.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Lacher/icon", "url"),
      new Active("覚醒", "Awaking", "00_awaking.png"),
      new Active("ルナティックブロウ", "Lunatic Blow", "Lacher/Lacher04_Lunatic Blow.png"),
      new Active("ブルータルスウィング", "Brutal Swing", "Lacher/Lacher02_Brutal Swing.png"),
      new Active("スケアチェイス", "Scare Chase", "Lacher/Lacher03_Scare Chase.png"),
      new Active("ディトネイション", "Detonation", "Lacher/Lacher05_Detonation.png"),
      new Active("ギガンティックインパクト", "Gigantic Impact", "Lacher/Lacher06_Gigantic Impact.png"),
      new Active("アケルダマ", "Aceldama", "Lacher/Lacher07_Aceldama.png"),
	  ]),

	  new Job("シューティングガーディアン/デッドリーチェイサー", "dc", "Lacher/DeadlyChaser.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Lacher/icon", "url"),
			new Active("デュアルバスター", "Dual Buster", "Lacher/Lacher08_Dual Buster.png"),
			new Active("ヘビーレールガン", "Heavy Railgun", "Lacher/Lacher09_Heavy Railgun.png"),
			new Active("シューティングスター(累計)", "Shooting Star", "Lacher/Lacher12_Shooting Star.png"),
			new Active("(2回目の暗転)", "Shooting Star", "Lacher/Lacher12_Shooting Star.png"),
			new Active("アーティラリーストライク－クァンタムバリスタ", "Artillery Strike - Quantum Ballista", "Lacher/Lacher14a_Artillery Strike.png"),
			new Active("シャープシューターシンドローム", "Sharpshooter Syndrome", "Lacher/Lacher11_Sharpshooter Syndrome.png"),
			new Active("コメットクラッシャー", "Comet Crasher", "Lacher/Lacher10_Comet Crasher.png"),
			new Active("バレットブリッツ", "Bullet Blitz", "Lacher/Lacher13_Bullet Blitz.png"),
			new Active("アウトレイジストライク", "Outrage Strike", 179, 1, 0, "", "Lacher/LacherHA01_Outrage Strike.png", "5TynF3602A0"),
	  ]),

	  new Job("フューリーガーディアン/アイアンパラディン", "ip", "Lacher/IronPaladin.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Lacher/icon", "url"),
			new Active("スチールエッジ", "Steel Edge", "Lacher/Lacher15_Steel Edge.png"),
			new Active("パンデモニウム－フィア", "Pandemonium – Fear", "Lacher/Lacher17a_Pandemonium.png"),
			new Active("パンデモニウム－カオス", "Pandemonium – Chaos", "Lacher/Lacher17_Pandemonium.png"),
			new Active("ルナティックフューリー", "Lunatic Fury", "Lacher/Lacher18_Lunatic Fury.png"),
			new Active("カラドボルグペイン", "Pain of Caladbolg", "Lacher/Lacher19_Pain of Caladbolg.png"),
			new Active("バーストウルフ", "Burst Wolf", "Lacher/Lacher20_Burst Wolf.png"),
			new Active("アイアンハウリング", "Iron Howling", "Lacher/Lacher16_Iron Howling.png"),
			new Active("ワンダーウォール", "Wonder Wall", "Lacher/Lacher22_Wonder Wall.png"),
			new Active("ランドデモリッシャー－ヘビーアームズ", "Land Demolisher - Heavy Arms", "Lacher/Lacher21_Land Demolisher.png"),
			new Active("ランドデモリッシャー－アースクエイク", "Land Demolisher – Earthquake", "Lacher/Lacher21a_Land Demolisher.png"),
			new Active("ドゥームストライク", "Doom Strike", "Lacher/LacherHA02_Doom Strike.png"),
	  ]),

	  new Job("シェリングガーディアン/タクティカルトルーパー", "tt", "Lacher/TacticalTrooper.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Lacher/icon", "url"),
			new Active("ビッグバンストリーム", "Big Bang Stream", "Lacher/Lacher24_Big Bang Stream.png"),
			new Active("キャノンストライク", "Cannon Strike", "Lacher/Lacher27_Cannon Strike.png"),
			new Active("カオスキャノン", "Chaos Cannon", "Lacher/Lacher25_Chaos Cannon.png"),
			new Active("カーペットボミング", "Carpet Bombing", "Lacher/Lacher26_Carpet Bombing.png"),
			new Active("タクティカルフィールド－インドゥランス", "Tactical Field – Endurance", "Lacher/Lacher28_Tactical Field.png"),
			new Active("タクティカルフィールド－レイド", "Tactical Field – Raid", "Lacher/Lacher28a_Tactical Field.png"),
			new Active("ワンダーウォール", "Wonder Wall", "Lacher/Lacher22_Wonder Wall.png"),
			new Active("ドレッドチェイス", "Dread Chase", "Lacher/Lacher23_Dread Chase.png"),
			new Active("アーティラリーストライク－アートシャワー", "Artillery Strike - Missile Shower", "Lacher/Lacher14_Artillery Strike.png"),
			new Active("サテライトレイン", "Satellite Rain", "Lacher/LacherHA03_Satellite Rain.png"),
	  ]),
	  
	];
};

Lacher.prototype = new Chara;

var targetChara = new Lacher();