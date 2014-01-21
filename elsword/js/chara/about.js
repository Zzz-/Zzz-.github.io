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
	    new Active("フェイトスペース", "Fate Space", 60, 1, 0, "", "Aisha/AishaHA03_Fate Space.png", "w5MLlXdKX2g"),
	    new Active("ドゥームストライク", "Doom Strike", 131, 1, 0, "2回暗転スキル", "Lacher/LacherHA02_Doom Strike.png", ""),
	    new Active("(2回目の暗転)", "Doom Strike", 242, 2, 96, "猶予89F", "Lacher/LacherHA02_Doom Strike.png", ""),
	    new Active("ラシェのデータ", "Lacher", 0, -1, 0, "9件更新", "Lacher/Lacher.png"),
	    new Active("エレメンタルストーム", "Elemental Storm", 89, 1, 0, "", "Aisha/AishaHA01_Elemental Storm.png", "cLfsXFCwPBo"),
	    new Active("覇気天衝－千手華", "Thousand Blossoms", 96, 1, 0, "", "Ara/AraHA01_Thousand Blossoms.png", "huS3buJR31M"),
	    new Active("レナのデータ", "Rena", 0, -1, 0, "26件更新", "Rena/Rena.png"),
	    new Active("アビスアンゴル", "Abyss Angkor", 132, 0, 0, "吸引開始まで", "Aisha/AishaHA02_Abyss Angkor.png", "IIAanrKtI8Q"),
	    new Active("ライジングウェーブ", "Rising Wave", 35, 0, 0, "", "Els/Els29_Rising Wave.png", "RzAIVuIRRwU"),
	    new Active("シャイニングルーンバスター", "Shining Rune Buster", 67, 1, 0, "動画募集中", "Els/ElsHA01_Shining Rune Buster.png", ""),
	    new Active("アイスストーム", "Ice Storm", 36, 1, 0, "", "Aisha/Aisha29_Ice Storm.png", "LgUnqUXFVMw"),
	    new Active("チェーンライトニング", "Chain Lightning", 35, 1, 0, "", "Aisha/Aisha30_Chain Lightning.png", "jgjTd_fdJHs"),
	    new Active("ファントムブリージング－ダークホール", "Phantom Breathing - Dark Hole", 61, 2, 0, "", "Aisha/Aisha21a_Phantom Breathing.png", "osH6n1nDCOE"),
	    new Active("ウィンドブラスト", "Wind Blast", 85, 2, 0, "", "Rena/Rena29_Wind Blast.png", "4wME2w5xyVo"),
	    new Active("アークエネミー", "Arch-Enemy", 84, -1, 10, "", "Raven/Raven09_Arch-Enemy.png", "74qkt14CJUU"),
	    new Active("エクストリームブレード", "Extreme Blade", 71, 1, 0, "", "Raven/RavenHA02_Extreme Blade.png", "vqskSsyx8vI"),
	    new Active("リニアディバイダー", "Linear Divider", 55, 0, 0, "", "Eve/Eve29_Linear Divider.png", "rf89CZM5mE8"),
	    new Active("サイキックアーティラリー", "Psychic Artillery", 31, 0, 0, "停止前153F(2.54s)", "Eve/EveHA03_Psychic Artillery.png", "2X_6maVCG-A"),
	  ]),
	  
	];
};

About.prototype = new Chara;

var targetChara = new About();