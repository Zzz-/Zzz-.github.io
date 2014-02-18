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
	    new Active("レナのデータ", "Rena", 0, -1, 0, "更新完了", "Rena/Rena.png"),
	    new Active("スパイラルストライク", "Spiral Strike", 90, 1, 0, "最後の蹴りまで約8秒", "Rena/RenaHA01_Spiral Strike.png", "cCThnXfD2PM"),
	    new Active("羅刹二式:連環掌", "Rakshasa Stance 2: Energy Burst", 44, 1, 2, "", "Ara/Ara20_Energy Burst.png", "I2O9yFvq95A"),
	    new Active("羅刹四式:奪命", "Rakshasa Stance 4: Soul Escape", 55, 2, 3, "", "Ara/Ara21_Soul Escape.png", "la-XuRiWkNM"),
	    new Active("羅刹奥義:煉獄(単体)", "Secret Rakshasa Arts: Purgatory", 107, 1, 12, "", "Ara/AraEx04_Purgatory.png", "ti3tKD5x9Po"),
	    new Active("羅刹奥義:煉獄(合計)", "Secret Rakshasa Arts: Purgatory (all)", 145, 1, 12, "奪命との合計", "Ara/AraEx04_Purgatory.png", ""),
	    new Active("氣功波", "Energy Wave", 90, 1, 0, "", "Ara/Ara19_Energy Wave.png", "8ELFq7cCRVs"),
	    new Active("鬼殺三式:影繋ぎ", "Exorcism 3: Shadow Knot", 78, 1, 0, "2回暗転スキル", "Ara/Ara06_Shadow Knot.png", "Bu87tiv3kcc"),
	    new Active("(2回目の暗転)", "Exorcism 3: Shadow Knot", 98, 2, 1, "1Fだけ暗転無し", "Ara/Ara06_Shadow Knot.png", ""),
	    new Active("羅刹三式:槍刹監獄", "Rakshasa Stance 3: Spear Prison", 71, 1, 0, "", "Ara/Ara18_Spear Prison.png", "0y4emcLOcHM"),
	    new Active("イヴのデータ", "Eve", 0, -1, 0, "更新完了", "Eve/Eve.png"),
	    new Active("レイヴンのデータ", "Raven", 0, -1, 0, "更新完了", "Raven/Raven.png"),
	    new Active("エルスのデータ", "Els", 0, -1, 0, "更新完了", "Els/Els.png"),
	    new Active("アラのデータ", "Ara", 0, -1, 0, "15個更新", "Ara/Ara.png"),
	    new Active("アイシャのデータ", "Aisha", 0, -1, 0, "残り1つ以外更新", "Aisha/Aisha.png"),
	    new Active("ラシェのデータ", "Lacher", 0, -1, 0, "更新完了", "Lacher/Lacher.png"),
	  ]),
	  
	];
};

About.prototype = new Chara;

var targetChara = new About();