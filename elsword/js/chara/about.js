/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** アバウトに掲載されているデータ */
var About = function () {
	this.jobs = [
	  new Job("エルス", "sample", "Els/Els.png", [
	    new Active("覚醒", "Awaking", 78, -1, 19, "", "00_awaking.png", "HKFSOAyyNuM"),
	    new Active("フレイムガイザー", "Flame Geyser", 41, 1, 0, "", "Els/Els04_Flame Geyser.png", "4pJIh7C-63o"),
	    new Active("フェータルフューリー", "Fatal Fury", 37, 1, 0, "", "Els/Els03_Fatal Fury.png", "awiQ-odE2HE"),
	  ]),

	  new Job("更新履歴", "news", "n_sunny.png", [
	    new Active("クリティカルダイブ", "Critical Dive", 35, 1, 0, "", "Elesis/Elesis14_Critical Dive.png", "ervG1UqVJ5A"),
	    new Active("スカルディックソード", "Scaldic Sword", 41, 1, 0, "", "Elesis/Elesis23_Scaldic Sword.png", "YxABFh7xhbo"),
	    new Active("ファイアウォール", "Wall of Prominence ", 54, 2, 0, "", "Elesis/Elesis24_Wall of Prominence.png", "ys6IscwpkWE"),
	    new Active("制圧:気", "Suppression Energy", 43, 0, 0, "", "Ara/Ara22_Suppression Energy.png", "4iOdP9-k_k0"),
	    new Active("超真空掌", "Energy Void", 77, 1, 0, "", "Ara/Ara23_Energy Void.png", "S0aHFG5AqTY"),
	    new Active("アラのデータ", "Ara", 0, -1, 0, "更新完了", "Ara/Ara.png"),
	    new Active("地獄道", "Energy Cannon", 72, 0, 0, "", "Ara/AraHA02_Energy Cannon.png", "lhxKsoe1f80"),
	    new Active("アイシャのデータ", "Aisha", 0, -1, 0, "更新完了", "Aisha/Aisha.png"),
	    new Active("レナのデータ", "Rena", 0, -1, 0, "更新完了", "Rena/Rena.png"),
	    new Active("イヴのデータ", "Eve", 0, -1, 0, "更新完了", "Eve/Eve.png"),
	    new Active("レイヴンのデータ", "Raven", 0, -1, 0, "更新完了", "Raven/Raven.png"),
	    new Active("エルスのデータ", "Els", 0, -1, 0, "更新完了", "Els/Els.png"),
	    new Active("ラシェのデータ", "Lacher", 0, -1, 0, "更新完了", "Lacher/Lacher.png"),
	  ]),
	  
	];
};

About.prototype = new Chara;

var targetChara = new About();