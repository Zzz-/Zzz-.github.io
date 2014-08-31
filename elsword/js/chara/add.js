/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** エドのデータ型 */
var Add = function () {
	this.jobs = [
	  new Job("エド", "add", "Add/Add.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Elesis/icon", "url"),
			new Active("ヴォイドブレイカー", "Void Breaker", 89, 1, 18, "", "Add/Add02_Void Breaker.png", "PN01a1vVLmI"),
			new Active("パーティクルプリズム", "Particle Prism", 90, 2, 33, "", "Add/Add03_Particle Prism.png", "nApGWFKoGqU"),
			new Active("エナジーブーム", "Energy Boom", 89, 2, 38, "", "Add/Add04_Energy Boom.png", "-su99DXEfVQ"),
			new Active("パーティクルアクセラレーター", "Particle Accelerator", 87, 1, 0, "", "Add/Add05_Particle Accelerator.png", "31ERU9yNh-E"),
			new Active("ニュートロンボム", "Neutron Bomb", 65, 0, 0, "", "Add/Add06_Neutron Bomb.png", "FIx-THNU0rI"),
	  ]),

	  new Job("サイキックトレーサー/ルナティックサイカー", "lp", "Add/LunaticPsyker.png", [
//	new Active("name", "id", frame, hit, adframe, "tips", "Elesis/icon", "url"),
	    new Active("パルスキャノン", "Pulse Cannon", 90, 1, 0, "", "Add/Add07_Pulse Cannon.png", "-ttnSkzmpd4"),
	    new Active("EMPショック", "EMP Shock", 90, 2, 0, "", "Add/Add08_EMP Shock.png", "3rDRXZAziMw"),
	    new Active("クエイクバスター", "Quake Buster", 90, 1, 16, "", "Add/Add09_Quake Buster.png", "ya9VxYs-HbQ"),
	    new Active("ステイシスフィールド", "Statis Field", "Add/Add10_Statis Field.png"),
	    new Active("コンカラー", "Conqueror", 90, 0, 0, "", "Add/Add11_Conqueror.png", "SXhJ3rqbimc"),
	    new Active("コンカラー(覚醒)", "Conqueror (Awake)", 89, 1, 0, "", "Add/Add11_Conqueror.png", "NZRhItBIE8g"),
	    new Active("リバースリアクター", "Reverse Reactor", 89, 2, 31, "", "Add/Add12_Reverse Reactor.png", "LDzKBMakXa4"),
	    new Active("クイックシルバーアクセル", "Quicksilver Accel", "Add/Add13_Quicksilver Accel.png"),
	    new Active("クイックシルバーフレンジ", "Quicksilver Frenzy", 89, 2, 0, "", "Add/Add14_Quicksilver Frenzy.png", "by6UrJKSm9A"),
	    new Active("ダストアナトミー", "Dust Anatomy", "Add/Add15_Dust Anatomy.png"),
	    new Active("サイキックストーム", "Psychic Storm", 90, 1, 0, "", "Add/Add16_Psychic Storm.png", "1WGX3JiHvN8"),
	    new Active("ドゥームズデイ", "Dooms Day", 90, 1, 0, "", "Add/AddHA01_Dooms Day.png", "JvXDKfYW0y8"),
		]),
	  
	];
};

Add.prototype = new Chara;

var targetChara = new Add();