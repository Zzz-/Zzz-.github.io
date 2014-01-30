/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** アバウトに掲載されているデータ */
var About = function () {
	this.jobs = [
	  new Job("エルス", "sample", "Els/Els.png", [
	    new Active("覚醒", "Awaking", 78, -1, 19, "", "00_awaking.png", "HKFSOAyyNuM"),
	    new Active("フレイムガイザー", "FlameGeyser", "Els/Els04_Flame Geyser.png"),
	    new Active("フェータルフューリー", "FatalFury", 37, 1, 0, "", "Els/Els03_Fatal Fury.png", "awiQ-odE2HE"),
	  ]),

	  new Job("更新履歴", "news", "n_sunny.png", [
	    new Active("狼牙四式:狼の牙", "Wolf Stance 4: Wolf Fang", 45, 1, 0, "", "Ara/Ara16_Wolf Fang.png", "1wORdpyUR6E"),
	    new Active("連環獄", "Infernal Circle", 45, 1, 0, "", "Ara/Ara17_Infernal Circle.png", "GWftp2Mx1u8"),
	    new Active("狼牙奥義:極砕", "Secret Wolf Arts: Killing Howl", 80, 1, 0, "連携中の暗転は全て途切れる", "Ara/AraEx03_Killing Howl.png", "MoqFc-V2rE4"),
	    new Active("アサルトスピア－バスター", "Assault Spear – Burster", 154, 2, 12, "", "Eve/Eve21_Assault Spear.png", "t8Vqj9RJTYE"),
	    new Active("アサルトスピア－バスター(覚醒)", "Assault Spear – Burster (Awake)", 154, 2, 0, "硬直が40F増える", "Eve/Eve21_Assault Spear.png", "4-OnUS8XbDc"),
	    new Active("羅刹一式:吸魂", "Rakshasa Stance 1:Finger Bullet", 30, 0, 0, "", "Ara/Ara15_Finger Bullet.png", "SgCW50Y3HDQ"),
	    new Active("ブレイズステップ", "Blaze Step", 60, 1, 0, "", "Aisha/Aisha12_Blaze Step.png", "mxoNISvfug0"),
	    new Active("ライトニングシャワー", "Lightning Shower", 59, 1, 0, "", "Aisha/Aisha32_Lightning Shower.png", "OEryv5HrmGE"),
	    new Active("パーフェクトストーム", "Perfect Storm", 36, 1, 0, "", "Rena/Rena03_Perfect Storm.png", "flaQhS8RmIE"),
	    new Active("アイレリンナ－ニンフ", "Arielinna – Nymph", 42, -1, 0, "", "Rena/Rena14_Airelinna.png", "rXvsupWvQNA"),
	    new Active("アイレリンナ－シルフ", "Arielinna – Sylph", 41, -1, 0, "", "Rena/Rena14a_Airelinna.png", "QHqjWaJJkpg"),
	    new Active("ラシェのデータ", "Lacher", 0, -1, 0, "更新完了", "Lacher/Lacher.png"),
	    new Active("ディメンションリンク－ブレーダー", "Dimension Link – Blader", 103, 1, 10, "", "Eve/Eve05_Dimension Link Blader.png", "EKigrq6oP3Q"),
	    new Active("ウォーターキャノン", "Water Cannon", 61, 1, 0, "", "Aisha/Aisha31_Water Cannon.png", "FCGUR4F1ztk"),
	  ]),
	  
	];
};

About.prototype = new Chara;

var targetChara = new About();