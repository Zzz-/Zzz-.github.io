/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** レイヴンのデータ型 */
var Raven = function () {
	this.jobs = [
	  new Job("レイヴン", "raven", "Raven/Raven.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Raven/icon", "url"),
      new Active("覚醒", "Awaking", "00_awaking.png"),
      new Active("パワーアサルト", "Power Assault", "Raven/Raven04_Power Assault.png"),
      new Active("アースブレイク", "Earth Breaker", "Raven/Raven05_Earth Breaker.png"),
      new Active("マキシマムキャノン", "Maximum Cannon", "Raven/Raven02_Maximum Cannon.png"),
      new Active("キャノンブレード", "Cannon Blade", "Raven/Raven03_Cannon Blade.png"),
      new Active("セブンバースト", "Seven Burst", "Raven/Raven06_Seven Burst.png"),
	  ]),

	  new Job("オーバーテイカー/レックレスフィスト", "rf", "Raven/RecklessFist.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Raven/icon", "url"),
			new Active("ヴァルキリーズジャベリン", "Valkyrie's Javelin", "Raven/Raven10_Valkyries Javelin.png"),
			new Active("チャージドボルト―ヘッジホッグ", "Charged Bolt – Hedgehog", "Raven/Raven08_Charged Bolt.png"),
			new Active("チャージドボルト―ブラッディソーンズ", "Charged Bolt - Bloody Thorns", "Raven/Raven08a_Charged Bolt.png"),
			new Active("ガーディアンストライク", "Guardian Strike", "Raven/Raven11_Guardian Strike.png"),
			new Active("ニュークリア", "Nuclear", "Raven/Raven12_Nuclear.png"),
			new Active("ワイルドチャージ", "Wild Charge", "Raven/Raven14_Wild Charge.png"),
			new Active("アークエネミー", "Arch-Enemy", "Raven/Raven09_Arch-Enemy.png"),
			new Active("エックスクラッシュ", "X Crash", "Raven/Raven13_X Crash.png"),
			new Active("インフェルナルアームズ", "Infernal Arms", 73, 1, 0, "", "Raven/RavenHA01_Infernal Arms.png", "yNCkre8FKhQ"),
	  ]),

	  new Job("ソードテイカー/ブレードマスター", "bm", "Raven/BladeMaster.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Raven/icon", "url"),
      new Active("バーサーカーブレード", "Berserker Blade", "Raven/Raven15_Berserker Blade.png"),
      new Active("ショックウェーブ－ディバイダ－", "Shockwave – Divider", "Raven/Raven17_Shockwave.png"),
      new Active("ショックウェーブ－カッター", "Shockwave – Cutter", "Raven/Raven17a_Shockwave.png"),
      new Active("ハイパーソニックスタッブ", "Hypersonic Stab", "Raven/Raven19_Hypersonic Stab.png"),
      new Active("ブラッディエクセル", "Bloody Accel", "Raven/Raven18_Bloody Accel.png"),
      new Active("ウルフファング", "Wolf Fang", "Raven/Raven20_Wolf Fang.png"),
      new Active("フライングインパクト", "Flying Impact", 48, 1, 0, "", "Raven/Raven16_Flying Impact.png", "FC7hZo0odtA"),
      new Active("ギガドライブ－リミッター", "Giga Drive – Limiter", 53, 0, 0, "", "Raven/Raven21_Giga Drive.png", "qWMxjpuhNnY"),
      new Active("ギガドライブ－サイズミックトレモール", "Giga Drive - Seismic Tremor", 52, 0, 0, "", "Raven/Raven21a_Giga Drive.png", "WqcYg3BxTo4"),
      new Active("エクストリームブレード", "Extreme Blade", "Raven/RavenHA02_Extreme Blade.png"),
	  ]),

	  new Job("ウェポンテイカー/ベテランコマンダー", "vc", "Raven/VeteranCommander.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Raven/icon", "url"),
			new Active("バースティングブレイド", "Bursting Blade", "Raven/Raven22_Bursting Blade.png"),
			new Active("ハープーンスピア", "Harpoon Spear", "Raven/Raven24_Harpoon Spear.png"),
			new Active("リボルバーキャノン－OP弾", "Revolver Cannon - Original Piercing Ammo", "Raven/Raven23_Revolver Cannon.png"),
			new Active("リボルバーキャノン－HE弾", "Revolver Cannon - High Explosion Ammo", "Raven/Raven23a_Revolver Cannon.png"),
			new Active("ヘルファイアガトリング", "Hellfire Gatling", "Raven/Raven26_Hellfire Gatling.png"),
			new Active("ギガプロミネンス", "Giga Prominence", "Raven/Raven25_Giga Prominence.png"),
			new Active("デッドリーレイド", "Deadly Raid", "Raven/Raven27_Deadly Raid.png"),
			new Active("イグニッションクロウ－ナパーム", "Ignition Crow – Napalm", 121, 2, 27, "", "Raven/Raven28a_Ignition Crow.png", "LMzQVpfCAjY"),
			new Active("(オーバーヒート)", "Ignition Crow – Napalm_Over Heat", -41, 2, 0, "", "Raven/Raven28a_Ignition Crow.png", "51ADY64iKH8"),
			new Active("イグニッションクロウ－インシノレーション", "Ignition Crow – Incineration", 120, 0, 27, "", "Raven/Raven28_Ignition Crow.png", "bo0nRmQKkRE"),
			new Active("(オーバーヒート)", "Ignition Crow – Incineration_Over Heat", 121, 0, 0, "", "Raven/Raven28_Ignition Crow.png", "bkeIF1qAHGw"),
			new Active("バーニングバスター", "Burning Burster", 90, 1, 0, "", "Raven/RavenHA03_Burning Burster.png", "DD5VDfJFQo8"),
	  ]),
	  
	];
};

Raven.prototype = new Chara;

var targetChara = new Raven();