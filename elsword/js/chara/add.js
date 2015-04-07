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
	    new Active("クイックシルバーアクセル", "Quicksilver Accel", 44, 2, 0, "追加コマンド無し", "Add/Add13_Quicksilver Accel.png", "m2WdSIf0tCY"),
	    new Active("クイックシルバーフレンジ", "Quicksilver Frenzy", 89, 2, 0, "", "Add/Add14_Quicksilver Frenzy.png", "EUnTrUGrjmk"),
	    new Active("ダストアナトミー", "Dust Anatomy", "Add/Add15_Dust Anatomy.png"),
	    new Active("サイキックストーム", "Psychic Storm", 90, 1, 0, "", "Add/Add16_Psychic Storm.png", "1WGX3JiHvN8"),
	    new Active("ドゥームズデイ", "Dooms Day", 90, 1, 0, "", "Add/AddHA01_Dooms Day.png", "JvXDKfYW0y8"),
		]),

	  new Job("アークトレーサー/マスターマインド", "mm", "Add/MasterMind.png", [
//	new Active("name", "id", frame, hit, adframe, "tips", "Elesis/icon", "url"),
	    new Active("インストール－ドローンアクティベーター", "Install - Drone Activator", 89, 2, 31, "", "Add/Add17_Install - Drone Activator.png", "4INoZHRlX5k"),
	    new Active("EMPショック", "EMP Shock", 90, 2, 0, "", "Add/Add08_EMP Shock.png", "3rDRXZAziMw"),
	    new Active("パンツァーバスター", "Panzer Buster", 89, 2, 0, "", "Add/Add18_Panzer Buster.png", "aCy4WdYpdL0"),
	    new Active("サイオニックジェネレーター", "Psionic Generator", 118, 0, 7, "", "Add/Add19_Psionic Generator.png", "Aqt2MJl4h68"),
	    new Active("ファントムシーカー", "Phantom Seeker", 86, 1, 0, "", "Add/Add20_Phantom Seeker.png", "TVqaWsBhz8I"),
	    new Active("インストール－パルスガトリング", "Install - Pulse Gatling", 48, 1, 0, "", "Add/Add21_Install - Pulse Gatling.png", "byykYVB62d8"),
	    new Active("インストール－シューティングチェイサー", "Install - Shooting Chaser", 74, 0, 11, "", "Add/Add22_Install - Shooting Chaser.png", "XbwFibx-qlc"),
	    new Active("インストール－アルティメットフューリー", "Install - Ultimate Fury", 106, 1, 8, "", "Add/Add23_Install - Ultimate Fury.png", "mpSDYM0PrjQ"),
	    new Active("インストール－スターフォール", "Install - Starfall", 107, 0, 2, "", "Add/Add24_Install - Starfall.png", "Q36iXvEgjyM"),
	    new Active("アポカリプス", "Apocalypse", 118, 1, 3, "", "Add/AddHA02_Apocalypse.png", "-vV47GcpI7g"),
		]),

	  new Job("タイムトレーサー/ディアボリックエスパー", "de", "Add/DiabolicEsper.png", [
//	new Active("name", "id", frame, hit, adframe, "tips", "Elesis/icon", "url"),
	    new Active("ヴォイドインパクト", "Void Impact", 79, 1, 0, "", "Add/Add25_Void Impact.png", "gyYYyVPXoNc"),
	    new Active("EMPショック", "EMP Shock", 90, 2, 0, "", "Add/Add08_EMP Shock.png", "3rDRXZAziMw"),
	    new Active("ヴォイドフィールド", "Void Field", 77, 1, 0, "", "Add/Add26_Void Field.png", "UMCnRX9ClSM"),
	    new Active("マキシマムストライク", "Maximum Strike", 126, 2, 42, "", "Add/Add27_Maximum Strike.png", "DTkKLOlEFTA"),
	    new Active("スターダストシャワー", "Stardust Shower", 5, 0, 0, "", "Add/Add28_Stardust Shower.png", "mFdYus-o8g0"),
	    new Active("リバースサークル", "Reverse Circle", 59, 1, 4, "", "Add/Add29_Reverse Circle.png", "Z4vrFUyAK-A"),
	    new Active("リバーススティグマ", "Reverse Stigma", 24, 2, 0, "", "Add/Add30_Reverse Stigma.png", "6aMG0tKkwLw"),
	    new Active("ムーンライトラプソディー", "Moonlight Rhapsody", 54, 1, 0, "", "Add/Add31_Moonlight Rhapsody.png", "iYFC9IOV65w"),
	    new Active("グラビティーバスター", "Gravity Buster", 78, 1, 0, "", "Add/Add32_Gravity Buster.png", "AsFH4eRK5Jg"),
	    new Active("パラノイア", "Paranoia", 106, 1, 0, "", "Add/AddHA03_Paranoia.png", "1zNEaiA0YYk"),
		]),

	];
};

Add.prototype = new Chara;

var targetChara = new Add();