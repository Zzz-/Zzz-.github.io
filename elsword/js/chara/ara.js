/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** アラのデータ型 */
var Ara = function () {
	this.jobs = [
	  new Job("アラ", "ara", "Ara/Ara.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Ara/icon", "url"),
	    new Active("覚醒", "Awaking", 89, -1, 21, "", "00_awaking.png", "CwCaym7UuDY"),
	    new Active("烈風旋", "Tempest Dance", 62, 1, 0, "", "Ara/Ara04_Tempest Dance.png", "40DzLUFQvD0"),
	    new Active("狼牙二式:風のくさび", "Wolf Stance 2: Wind Wedge", 56, 1, 0, "", "Ara/Ara02_Wind Wedge.png", "-QhkORXOkLo"),
	    new Active("龍牙二式－穿衣", "Dragon Stance 2: Pulling Thrust", 30, 0, 0, "", "Ara/Ara03_Pulling Pierce.png", "9JHSxFSIrYY"),
	    new Active("影つぼみ", "Shadow Press", 77, 2, 15, "", "Ara/Ara05_Shadow Rising.png", "z_qcY3fBhMg"),
	    new Active("鬼殺三式:影繋ぎ", "Exorcism Stance 3: Shadoweave", 126, 2, 13, "2回暗転スキル", "Ara/Ara06_Shadow Knot.png", "0AJ6PT_afF0"),
	    new Active("(2回目の暗転)", "Exorcism Stance 3: Shadoweave", 59, 2, 13, "", "Ara/Ara06_Shadow Knot_2nd.png", ""),
	    new Active("龍撃破", "Falling Dragon", 100, 2, 0, "", "Ara/Ara07_Falling Dragon.png", "qe2toy07LBE"),
	  ]),

	  new Job("小仙/帝釈天", "sd", "Ara/SakraDevanam.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Ara/icon", "url"),
	    new Active("龍牙三式:八卦掌", "Dragon Stance 3: Eight Trigram Palm", 59, 2, 0, "", "Ara/Ara08_Double Collision.png", "-DnHh9P12ws"),
	    new Active("龍牙四式:月光斬", "Dragon Stance 4: Moonlight Slash", 59, 2, 0, "チャージしない時のみ○", "Ara/Ara09_Moonlight Slash.png", "JhWJiRbgTw8"),
	    new Active("猛虎撃", "Fierce Tiger Strike", 60, 1, 0, "", "Ara/Ara11_White Tiger.png", "Ygr-VwtqcpU"),
	    new Active("龍牙奥義:龍牙爆砕", "Secret Dragon Arts: Blast", 119, 2, 0, "連携中の暗転は全て途切れる", "Ara/AraEx01_Explosive Breaking.png", "GIh3tSL_x44"),
	    new Active("猛虎四式:怒涛", "Tiger Stance 4: Raging Wave", 75, 2, 10, "", "Ara/Ara13_Turbulent Wave.png", "MaZryPb7vuY"),
	    new Active("無双斬", "Matchless Truth", 60, 1, 0, "", "Ara/Ara10_Peerlessness Slash.png", "dB6DmhrzERY"),
	    new Active("制圧:正", "Suppression", 109, 2, 8, "", "Ara/Ara14_Supression.png", "n5SP-hplArc"),
	    new Active("羅刹", "Flying Kite", 74, 1, 0, "", "Ara/Ara12_Swallow Assault.png", "nFHJnWEUq_0"),
	    new Active("猛虎奥義:猛虎破天(単体)", "Secret Tiger Art: Fierce Tiger", 80, 2, 0, "", "Ara/AraEx02_Fierce Tiger.png", "OErim-YHEjI"),
	    new Active("猛虎奥義:猛虎破天(合計)", "Secret Tiger Art: Fierce Tiger (all)", 145, 2, 0, "", "Ara/AraEx02_Fierce Tiger.png", ""),
	    new Active("覇気天衝－千手華", "Heaven's Wrath", 96, 1, 0, "", "Ara/AraHA01_Thousand Blossoms.png", "ZeRFp5Y3EiU"),
	  ]),

	  new Job("小魔/冥王", "yr", "Ara/YamaRaja.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Ara/icon", "url"),
			new Active("羅刹一式:吸魂", "Rakshasa Stance 1: Soul Reaping", 30, 0, 0, "", "Ara/Ara15_Finger Bullet.png", "5dxLGDhHS_4"),
      new Active("狼牙四式:狼の牙", "Wolf Stance 4: Wolf Fang", 45, 1, 0, "", "Ara/Ara16_Wolf Fang.png", "1wORdpyUR6E"),
      new Active("連環獄", "Infernal Circle", 45, 1, 0, "", "Ara/Ara17_Infernal Circle.png", "GWftp2Mx1u8"),
      new Active("羅刹三式:槍刹監獄", "Rakshasa Stance 3: Spear Prison", 71, 1, 0, "", "Ara/Ara18_Spear Prison.png", "0y4emcLOcHM"),
      new Active("氣功波", "Energy Wave", 90, 1, 0, "", "Ara/Ara19_Energy Wave.png", "8ELFq7cCRVs"),
      new Active("狼牙奥義:極砕", "Secret Wolf Arts: Killing Howl", 80, 1, 0, "連携中の暗転は全て途切れる", "Ara/AraEx03_Killing Howl.png", "MoqFc-V2rE4"),
      new Active("羅刹二式:連環掌", "Rakshasa Stance 2: Energy Burst", 44, 1, 2, "", "Ara/Ara20_Energy Burst.png", "I2O9yFvq95A"),
      new Active("羅刹四式:奪命", "Rakshasa Stance 4: Soul Escape", 55, 2, 3, "", "Ara/Ara21_Soul Escape.png", "la-XuRiWkNM"),
	    new Active("制圧:気", "Suppression Energy", 43, 0, 0, "", "Ara/Ara22_Suppression Energy.png", "4iOdP9-k_k0"),
	    new Active("超真空掌", "Energy Void", 77, 1, 0, "", "Ara/Ara23_Energy Void.png", "S0aHFG5AqTY"),
      new Active("羅刹奥義:煉獄(単体)", "Secret Rakshasa Arts: Purgatory", 107, 1, 12, "", "Ara/AraEx04_Purgatory.png", "ti3tKD5x9Po"),
      new Active("羅刹奥義:煉獄(合計)", "Secret Rakshasa Arts: Purgatory (all)", 145, 1, 12, "奪命との合計", "Ara/AraEx04_Purgatory.png", ""),
      new Active("地獄道", "Hell Blast", 60, 0, 0, "", "Ara/AraHA02_Energy Cannon.png", "wDXH-ED2Hdo"),
	  ]),

	  new Job("小妖/修羅", "as", "Ara/Asura.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Ara/icon", "url"),
      new Active("鬼殺二式:鬼神縛", "Exorcism Stance 2: Specter Restraints", 34, 2, 0, "", "Ara/Ara24_Restraints Specter.png", "Bg3KEPGDg8g"),
      new Active("鬼殺四式:断鬼", "Exorcism Stance 4: Darkness Sever", 53, 2, 0, "", "Ara/Ara25_Darkness Sever.png", "wPJ9MuWRO0I"),
      new Active("術式:嵐", "Spell : Storm", 0, 0, 0, "暗転無し", "Ara/Ara26_Specter of Storm.png", "QJRjAu0UtJg"),
      new Active("術式:翔刃", "Spell : Aerial Blades", 89, 2, 24, "", "Ara/Ara27_Specter of Blade.png", "X8XDy3Yce6I"),
      new Active("鬼殺奥義:百鬼夜行(単体)", "Secret Exorcism Arts: Night Parade of One-Hundred Souls", 157, 2, 0, "", "Ara/AraEx05_Hundred Specters.png", "bsD7YtsOxYY"),
      new Active("鬼殺奥義:百鬼夜行(合計)", "Secret Exorcism Arts: Night Parade of One-Hundred Souls (all)", 309, 2, 0, "影繋ぎ以降全て", "Ara/AraEx05_Hundred Specters.png", ""),
      new Active("術式:降妖", "Spell : Necromancy", 41, 2, 0, "", "Ara/Ara28_Necromancy.png", "sFzyPOOF4js"),
      new Active("術式:雷電", "Spell : Thunder", 155, 2, 28, "", "Ara/Ara29_Specter of Thunder.png", "t3RFp3NQJds"),
      new Active("妖狐四式:狐蝕", "Phantom Fox Stance 4: Fox's Meal", 41, 1, 0, "", "Ara/Ara30_Fox's Meal.png", "30FL6-1vhVw"),
      new Active("制圧:鬼", "Suppression Specter", 48, 0, 0, "", "Ara/Ara31_Suppression Specter.png", "n-hQuFcEsNU"),
      new Active("狐火", "Fire Fox", 40, 1, 0, "", "Ara/Ara32_Fire Fox.png", "abKOcyt5P0s"),
      new Active("妖狐奥義:粉砕", "Secret Phantom Fox Arts: Pulverization", 42, 1, 0, "狐蝕から1F途切れる", "Ara/AraEx06_Pulverization.png", "fGG8R_AiQCA"),
      new Active("千年妖狐", "Millennium Fox", 47, 1, 0, "", "Ara/AraHA03_Millennium Fox.png", "8zqRQ0KwlVU"),
	  ]),
	];
};

Ara.prototype = new Chara;

var targetChara = new Ara();