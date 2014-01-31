/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** アラのデータ型 */
var Ara = function () {
	this.jobs = [
	  new Job("アラ", "ara", "Ara/Ara.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Ara/icon", "url"),
	    new Active("覚醒", "Awaking", "00_awaking.png"),
	    new Active("烈風旋", "Tempest Dance", "Ara/Ara04_Tempest Dance.png"),
	    new Active("狼牙二式:風のくさび", "Wolf Stance 2: Wind Wedge", "Ara/Ara02_Wind Wedge.png"),
	    new Active("龍牙二式－穿衣", "Dragon Stance 2: Pulling Pierce", "Ara/Ara03_Pulling Pierce.png"),
	    new Active("影つぼみ", "Shadow Rising", "Ara/Ara05_Shadow Rising.png"),
	    new Active("鬼殺三式:影繋ぎ", "Exorcism 3: Shadow Knot", "Ara/Ara06_Shadow Knot.png"),
	    new Active("(2回目の暗転)", "Exorcism 3: Shadow Knot", "Ara/Ara06_Shadow Knot.png"),
	    new Active("龍撃破", "Falling Dragon", "Ara/Ara07_Falling Dragon.png"),
	  ]),

	  new Job("小仙/帝釈天", "sd", "Ara/SakraDevanam.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Ara/icon", "url"),
	    new Active("龍牙三式:八卦掌", "Dragon Stance 3: Eight Trigram Palm", "Ara/Ara08_Double Collision.png"),
	    new Active("龍牙四式:月光斬", "Dragon Stance 4:Moonlight Slash", "Ara/Ara09_Moonlight Slash.png"),
	    new Active("猛虎撃", "Fierce Tiger Strike", "Ara/Ara11_White Tiger.png"),
	    new Active("龍牙奥義:龍牙爆砕", "Secret Dragon Arts: Blast", "Ara/AraEx01_Explosive Breaking.png"),
	    new Active("猛虎四式:怒涛", "Tiger Stance 4: Raging Wave", "Ara/Ara13_Turbulent Wave.png"),
	    new Active("無双斬", "Matchless Truth", "Ara/Ara10_Peerlessness Slash.png"),
	    new Active("制圧:正", "Suppression", "Ara/Ara14_Supression.png"),
	    new Active("羅刹", "Flying Kite", "Ara/Ara12_Swallow Assault.png"),
	    new Active("猛虎奥義:猛虎破天(単体)", "Secret Tiger Art: Fierce Tiger", "Ara/AraEx02_Fierce Tiger.png"),
	    new Active("猛虎奥義:猛虎破天(合計)", "Secret Tiger Art: Fierce Tiger", "Ara/AraEx02_Fierce Tiger.png"),
	    new Active("覇気天衝－千手華", "Heaven's Rage - Thousand Blossoms", 96, 1, 0, "", "Ara/AraHA01_Thousand Blossoms.png", "huS3buJR31M"),
	  ]),

	  new Job("小魔", "ld", "Ara/LittleDevil.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Ara/icon", "url"),
      new Active("羅刹一式:吸魂", "Rakshasa Stance 1:Finger Bullet", 30, 0, 0, "", "Ara/Ara15_Finger Bullet.png", "SgCW50Y3HDQ"),
      new Active("狼牙四式:狼の牙", "Wolf Stance 4: Wolf Fang", 45, 1, 0, "", "Ara/Ara16_Wolf Fang.png", "1wORdpyUR6E"),
      new Active("連環獄", "Infernal Circle", 45, 1, 0, "", "Ara/Ara17_Infernal Circle.png", "GWftp2Mx1u8"),
      new Active("羅刹三式:槍刹監獄", "Rakshasa Stance 3: Spear Prison", "Ara/Ara18_Spear Prison.png"),
      new Active("氣功波", "Energy Wave", 0, -1, 0, "動画募集中！", "Ara/Ara19_Energy Wave.png", ""),
      new Active("狼牙奥義:極砕", "Secret Wolf Arts: Killing Howl", 80, 1, 0, "連携中の暗転は全て途切れる", "Ara/AraEx03_Killing Howl.png", "MoqFc-V2rE4"),
	  ]),
	];
};

Ara.prototype = new Chara;

var targetChara = new Ara();