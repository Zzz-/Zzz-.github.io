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
	    new Active("シューターディスティニー", "Shooter Destiny", 90, 1, 0, "", "Rena/RenaHA02_Shooter Destiny.png", "KSWOK7LWKMY"),
	    new Active("イノセント", "Innocent", 73, 1, 0, "", "Rena/RenaHA03_Innocent.png", "NveAycjiSnU"),
	    new Active("ルナティックスカッド", "Lunatic Scud", 179, 1, 0, "ナソードスピアの時", "Eve/EveHA01_Lunatic Scud.png", "85dr9np_k5I"),
	    new Active("コード:サンダーボルト", "Code:Thunderbolt", 102, 2, 0, "", "Eve/EveHA02_Code Thunderbolt.png", "tHRIKAYiglg"),
	    new Active("サイキックアーティラリー", "Psychic Artillery", 0, 0, 0, "暗転無し", "Eve/EveHA03_Psychic Artillery.png", "xqFOFEyMjLs"),
	    new Active("アウトレイジストライク", "Outrage Strike", 179, 1, 0, "", "Lacher/LacherHA01_Outrage Strike.png", "5TynF3602A0"),
			new Active("エレメンタルストーム", "Elemental Storm", 90, 1, 0, "", "Aisha/AishaHA01_Elemental Storm.png"),
	  ]),
	  
	];
};

About.prototype = new Chara;

var targetChara = new About();