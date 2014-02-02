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
	    new Active("イヴのデータ", "Eve", 0, -1, 0, "更新完了", "Eve/Eve.png"),
	    new Active("レイヴンのデータ", "Raven", 0, -1, 0, "更新完了", "Raven/Raven.png"),
	    new Active("エルスのデータ", "Els", 0, -1, 0, "更新完了", "Els/Els.png"),
	    new Active("アラのデータ", "Ara", 0, -1, 0, "15個更新", "Ara/Ara.png"),
	    new Active("アイシャのデータ", "Aisha", 0, -1, 0, "残り1つ以外更新", "Aisha/Aisha.png"),
	    new Active("狼牙四式:狼の牙", "Wolf Stance 4: Wolf Fang", 45, 1, 0, "", "Ara/Ara16_Wolf Fang.png", "1wORdpyUR6E"),
	    new Active("連環獄", "Infernal Circle", 45, 1, 0, "", "Ara/Ara17_Infernal Circle.png", "GWftp2Mx1u8"),
	    new Active("狼牙奥義:極砕", "Secret Wolf Arts: Killing Howl", 80, 1, 0, "連携中の暗転は全て途切れる", "Ara/AraEx03_Killing Howl.png", "MoqFc-V2rE4"),
	    new Active("羅刹一式:吸魂", "Rakshasa Stance 1:Finger Bullet", 30, 0, 0, "", "Ara/Ara15_Finger Bullet.png", "SgCW50Y3HDQ"),
	    new Active("ラシェのデータ", "Lacher", 0, -1, 0, "更新完了", "Lacher/Lacher.png"),
	  ]),
	  
	];
};

About.prototype = new Chara;

var targetChara = new About();