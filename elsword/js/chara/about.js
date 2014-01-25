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
	    new Active("ラシェのデータ", "Lacher", 0, -1, 0, "更新完了", "Lacher/Lacher.png"),
	    new Active("ディメンションリンク－ブレーダー", "Dimension Link – Blader", 103, 1, 10, "", "Eve/Eve05_Dimension Link Blader.png", "EKigrq6oP3Q"),
	    new Active("ウォーターキャノン", "Water Cannon", 61, 1, 0, "", "Aisha/Aisha31_Water Cannon.png", "FCGUR4F1ztk"),
	    new Active("ライトニングシャワー", "Lightning Shower", 60, 1, 0, "", "Aisha/Aisha32_Lightning Shower.png", "ipHyIAyLewM"),
	    new Active("シャイニングルーンバスター", "Shining Rune Buster", 67, 1, 0, "", "Els/ElsHA01_Shining Rune Buster.png", "GCm6AJhLnuY"),
	    new Active("ギガンティックスラッシュ", "Gigantic Slash", 42, 1, 0, "", "Els/ElsHA02_Gigantic Slash.png", "adBxI1s8-ns"),
			new Active("ブレードレイン", "Blade Rain", 148, 1, 0, "", "Els/ElsHA03_Blade Rain.png", "5Ob1WgqOYFc"),
	    new Active("フェイトスペース", "Fate Space", 60, 1, 0, "", "Aisha/AishaHA03_Fate Space.png", "w5MLlXdKX2g"),
	    new Active("エレメンタルストーム", "Elemental Storm", 89, 1, 0, "", "Aisha/AishaHA01_Elemental Storm.png", "cLfsXFCwPBo"),
	    new Active("覇気天衝－千手華", "Thousand Blossoms", 96, 1, 0, "", "Ara/AraHA01_Thousand Blossoms.png", "huS3buJR31M"),
	    new Active("レナのデータ", "Rena", 0, -1, 0, "26件更新", "Rena/Rena.png"),
	    new Active("アビスアンゴル", "Abyss Angkor", 132, 0, 0, "吸引開始まで", "Aisha/AishaHA02_Abyss Angkor.png", "IIAanrKtI8Q"),
	  ]),
	  
	];
};

About.prototype = new Chara;

var targetChara = new About();