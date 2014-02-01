/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** レイヴンのデータ型 */
var Raven = function () {
	this.jobs = [
	  new Job("レイヴン", "raven", "Raven/Raven.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Raven/icon", "url"),
      new Active("覚醒", "Awaking", 89, -1, 24, "", "00_awaking.png", "kNXLg_1Qh2k"),
      new Active("パワーアサルト", "Power Assault", 69, 2, 0, "", "Raven/Raven04_Power Assault.png", "T9n4DSJR4EU"),
      new Active("アースブレイク", "Earth Breaker", 48, 2, 0, "", "Raven/Raven05_Earth Breaker.png", "PUyuOSp_R9s"),
      new Active("マキシマムキャノン", "Maximum Cannon", 48, 1, 0, "", "Raven/Raven02_Maximum Cannon.png", "j4aJ8M1g2QE"),
      new Active("キャノンブレード", "Cannon Blade", 37, 1, 0, "", "Raven/Raven03_Cannon Blade.png", "rVsX8RyJdK8"),
      new Active("セブンバースト", "Seven Burst", 74, 1, 0, "", "Raven/Raven06_Seven Burst.png", "DPwMI8VDXxI"),
	  ]),

	  new Job("オーバーテイカー/レックレスフィスト", "rf", "Raven/RecklessFist.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Raven/icon", "url"),
			new Active("ヴァルキリーズジャベリン", "Valkyrie's Javelin", 60, 1, 0, "", "Raven/Raven10_Valkyries Javelin.png", "u-KKiG5L0jw"),
			new Active("チャージドボルト―ヘッジホッグ", "Charged Bolt – Hedgehog", 42, 1, 0, "", "Raven/Raven08_Charged Bolt.png", "4Dz8R65t5AI"),
			new Active("チャージドボルト―ブラッディソーンズ", "Charged Bolt - Bloody Thorns", 48, 2, 0, "", "Raven/Raven08a_Charged Bolt.png", "u6UD-Re-tw8"),
			new Active("ガーディアンストライク", "Guardian Strike", 73, 1, 0, "", "Raven/Raven11_Guardian Strike.png", "4qJEwBWf_TM"),
			new Active("ニュークリア", "Nuclear", 119, 1, 0, "", "Raven/Raven12_Nuclear.png", "rd-alTbjV08"),
			new Active("ワイルドチャージ", "Wild Charge", 66, 2, 0, "即発射の場合", "Raven/Raven14_Wild Charge.png", "GzxSxerNycQ"),
			new Active("アークエネミー", "Arch-Enemy", 84, -1, 10, "", "Raven/Raven09_Arch-Enemy.png", "74qkt14CJUU"),
			new Active("エックスクラッシュ", "X Crash", 41, 1, 0, "", "Raven/Raven13_X Crash.png", "DB8GzTcjajg"),
			new Active("インフェルナルアームズ", "Infernal Arms", 73, 1, 0, "", "Raven/RavenHA01_Infernal Arms.png", "yNCkre8FKhQ"),
	  ]),

	  new Job("ソードテイカー/ブレードマスター", "bm", "Raven/BladeMaster.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Raven/icon", "url"),
      new Active("バーサーカーブレード", "Berserker Blade", 41, 1, 0, "", "Raven/Raven15_Berserker Blade.png", "jQxRJJ1FojA"),
      new Active("ショックウェーブ－ディバイダ－", "Shockwave – Divider", "Raven/Raven17_Shockwave.png"),
      new Active("ショックウェーブ－カッター", "Shockwave – Cutter", "Raven/Raven17a_Shockwave.png"),
      new Active("ハイパーソニックスタッブ", "Hypersonic Stab", "Raven/Raven19_Hypersonic Stab.png"),
      new Active("ブラッディエクセル", "Bloody Accel", 137, 2, 14, "", "Raven/Raven18_Bloody Accel.png", "WDGVkskKwE0"),
      new Active("ウルフファング", "Wolf Fang", "Raven/Raven20_Wolf Fang.png"),
      new Active("フライングインパクト", "Flying Impact", 48, 1, 0, "", "Raven/Raven16_Flying Impact.png", "FC7hZo0odtA"),
      new Active("ギガドライブ－リミッター", "Giga Drive – Limiter", 53, 0, 0, "", "Raven/Raven21_Giga Drive.png", "qWMxjpuhNnY"),
      new Active("ギガドライブ－サイズミックトレモール", "Giga Drive - Seismic Tremor", 52, 0, 0, "", "Raven/Raven21a_Giga Drive.png", "WqcYg3BxTo4"),
      new Active("エクストリームブレード", "Extreme Blade", 71, 1, 0, "", "Raven/RavenHA02_Extreme Blade.png", "vqskSsyx8vI"),
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
			new Active("(オーバーヒート)", "Ignition Crow – Napalm_Over Heat", 119, 2, 0, "", "Raven/Raven28a_Ignition Crow.png", "51ADY64iKH8"),
			new Active("イグニッションクロウ－インシノレーション", "Ignition Crow – Incineration", 120, 0, 27, "", "Raven/Raven28_Ignition Crow.png", "bo0nRmQKkRE"),
			new Active("(オーバーヒート)", "Ignition Crow – Incineration_Over Heat", 121, 0, 0, "", "Raven/Raven28_Ignition Crow.png", "bkeIF1qAHGw"),
			new Active("バーニングバスター", "Burning Burster", 90, 1, 0, "", "Raven/RavenHA03_Burning Burster.png", "DD5VDfJFQo8"),
	  ]),
	  
	];
};

Raven.prototype = new Chara;

var targetChara = new Raven();