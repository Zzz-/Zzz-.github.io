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
	    new Active("エドのデータ", "Add", 0, -1, 0, "DEのデータ更新完了(2015/4/8)", "Add/Add.png"),
	    new Active("エリシスのデータ", "Elesis", 0, -1, 0, "CrAを2件更新(2015/4/8)", "Elesis/Elesis.png"),
	    new Active("アポカリプス", "Apocalypse", 118, 1, 3, "", "Add/AddHA02_Apocalypse.png", "-vV47GcpI7g"),
	    new Active("インストール－スターフォール", "Install - Starfall", 107, 0, 2, "", "Add/Add24_Install - Starfall.png", "Q36iXvEgjyM"),
	    new Active("イジェクションバスター", "Ejection Buster", 60, 2, 0, "チャージ開始時に暗転", "Elesis/Elesis28_Ejection Buster.png", "onOteeV5M1Y"),
	    new Active("ブルータルカッター", "Brutal Cutter", 48, 1, 0, "", "Elesis/Elesis27_Brutal Cutter.png", "t0c5gUkt_xg"),
	    new Active("アラのデータ", "Ara", 0, -1, 0, "更新完了", "Ara/Ara.png"),
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