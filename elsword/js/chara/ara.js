/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** アラのデータ型 */
var Ara = function () {
	this.jobs = [
	  new Job("アラ", "ara", "Ara/Ara.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Ara/icon", "url"),
	    new Active("覚醒", "Awaking", "00_awaking.png"),
	    new Active("烈風旋", "Tempest Dance", "Ara/Ara04_Tempest Dance.png"),
	    new Active("狼牙2式:風のくさび", "Wind Wedge", "Ara/Ara02_Wind Wedge.png"),
	    new Active("龍牙2式‐穿衣", "Pulling Pierce", "Ara/Ara03_Pulling Pierce.png"),
	    new Active("影つぼみ", "Shadow Rising", "Ara/Ara05_Shadow Rising.png"),
	    new Active("鬼殺3式:影繋ぎ", "Shadow Knot", "Ara/Ara06_Shadow Knot.png"),
	    new Active("(2回目の暗転)", "Shadow Knot", "Ara/Ara06_Shadow Knot.png"),
	    new Active("龍撃破", "Falling Dragon", "Ara/Ara07_Falling Dragon.png"),
	  ]),

	  new Job("小仙/帝釈天", "sd", "Ara/SakraDevanam.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Ara/icon", "url"),
	    new Active("龍牙3式:八卦掌", "Double Collision", "Ara/Ara08_Double Collision.png"),
	    new Active("龍牙4式:月光斬", "Moonlight Slash", "Ara/Ara09_Moonlight Slash.png"),
	    new Active("猛虎撃", "White Tiger", "Ara/Ara11_White Tiger.png"),
	    new Active("龍牙奥義:龍牙爆砕", "Explosive Breaking", "Ara/AraEx01_Explosive Breaking.png"),
	    new Active("猛虎四式:怒涛", "Turbulent Wave", "Ara/Ara13_Turbulent Wave.png"),
	    new Active("無双斬", "Peerlessness Slash", "Ara/Ara10_Peerlessness Slash.png"),
	    new Active("制圧:正", "Supression", "Ara/Ara14_Supression.png"),
	    new Active("羅刹", "Swallow Assault", "Ara/Ara12_Swallow Assault.png"),
	    new Active("猛虎奥義:猛虎破天", "Fierce Tiger", "Ara/AraEx02_Fierce Tiger.png"),
	    new Active("猛虎破天(単体)", "Fierce Tiger", "Ara/AraEx02_Fierce Tiger.png"),
	    new Active("覇気天衝－千手華", "Thousand Blossoms", "Ara/AraHA01_Thousand Blossoms.png"),
	  ]),
	  
	];
};

Ara.prototype = new Chara;

var targetChara = new Ara();