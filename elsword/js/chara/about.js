/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** アバウトに掲載されているデータ */
var About = function () {
	this.jobs = [
	  new Job("エルス", "sample", "Els/Els.png", [
	    new Active("覚醒", "Awaking", 78, -1, 19, "", "00_awaking.png", "HKFSOAyyNuM"),
	    new Active("フレイムガイザー", "FlameGeyser", "Els/Els04_Flame Geyser.png"),
	    new Active("フェータルフューリー", "FatalFury", 37, 1, 0, "", "Els/Els03_Fatal Fury.png", "awiQ-odE2HE"),
	  ]),

	  new Job("更新履歴", "news", "", [
	    new Active("サイキックアーティラリー", "Psychic Artillery", 31, 0, 0, "停止前153F(2.54s)", "Eve/EveHA03_Psychic Artillery.png", "2X_6maVCG-A"),
	    new Active("ウインドミル", "Windmill", 37, 1, 0, "", "Els/Els17_Windmill.png", "X458x86g8p8"),
	    new Active("ヘビープレス", "Heavy Press", 38, 1, 0, "", "Aisha/Aisha22_Heavy Press.png", "dwZBD77mmGg"),
	    new Active("インパクトハンマー", "Impact Hammer", 87, 2, 0, "", "Aisha/Aisha27_Impact Hammer.png", "T7vfwFqiFwA"),
	    new Active("スクリュードライバー―トルネード", "Screw Driver – Tornado", 119, 2, 9, "", "Aisha/Aisha28_Screw Driver.png", "dMTyV6I-UnM"),
	    new Active("トラッピングアロー－ボンゴス", "Trapping Arrow – Fungus", 88, 2, 3, "", "Rena/Rena23a_Trapping Arrow.png", "5oG90iRZVnA"),
	    new Active("フューリアスインゲージ", "Furious Engage", 36, 1, 0, "", "Rena/Rena27_Furious Engage.png", "-tDA9T3p4VY"),
      new Active("ギガドライブ－サイズミックトレモール", "Giga Drive - Seismic Tremor", 52, 0, 0, "", "Raven/Raven21a_Giga Drive.png", "WqcYg3BxTo4"),
      new Active("イグニッションクロウ－ナパーム", "Ignition Crow – Napalm", 121, 2, 27, "", "Raven/Raven28a_Ignition Crow.png", "LMzQVpfCAjY"),
			new Active("(オーバーヒート)", "Ignition Crow – Napalm_Over Heat", -41, 2, 0, "", "Raven/Raven28a_Ignition Crow.png", "51ADY64iKH8"),
			new Active("勝利の剣", "Sword of Victory", 90, 2, 0, "", "Elesis/Elesis12_Sword of Victory.png", "1qaDodfwiSM"),
	    new Active("バーストライジング", "Burst Rising", 83, 2, 0, "", "Elesis/Elesis18_Burst Rising.png", "mzQPvQGq1NQ"),
	    new Active("インファーナルブレード", "Infernal Blade", 72, 1, 0, "", "Elesis/Elesis21_Infernal Blade.png", "5xdAC8UPDxY"),
	    new Active("シューターディスティニー", "Shooter Destiny", 90, 1, 0, "", "Rena/RenaHA02_Shooter Destiny.png", "KSWOK7LWKMY"),
	    new Active("イノセント", "Innocent", 73, 1, 0, "", "Rena/RenaHA03_Innocent.png", "NveAycjiSnU"),
	    new Active("ルナティックスカッド", "Lunatic Scud", 179, 1, 0, "ナソードスピアの時", "Eve/EveHA01_Lunatic Scud.png", "85dr9np_k5I"),
	    new Active("コード:サンダーボルト", "Code:Thunderbolt", 102, 2, 0, "", "Eve/EveHA02_Code Thunderbolt.png", "tHRIKAYiglg"),
	    new Active("アウトレイジストライク", "Outrage Strike", 179, 1, 0, "", "Lacher/LacherHA01_Outrage Strike.png", "5TynF3602A0"),
			new Active("エレメンタルストーム", "Elemental Storm", 90, 1, 0, "", "Aisha/AishaHA01_Elemental Storm.png"),
	  ]),
	  
	];
};

About.prototype = new Chara;

var targetChara = new About();