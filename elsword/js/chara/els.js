/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** エルスのデータ型 */
var Els = function () {
	this.jobs = [
	  new Job("エルス", "els", "Els/Els.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Els/icon", "url"),
	    new Active("覚醒", "Awaking", 78, -1, 19, "", "00_awaking.png", "HKFSOAyyNuM"),
	    new Active("フレイムガイザー", "FlameGeyser", "Els/Els04_Flame Geyser.png"),
	    new Active("フェータルフューリー", "FatalFury", 37, 1, 0, "", "Els/Els03_Fatal Fury.png", "awiQ-odE2HE"),
	    new Active("メガスラッシュ", "MegaSlash", 36, 0, 0, "", "Els/Els02_Mega Slash.png", "tFxIqjmfK0M"),
	    new Active("アサルトスラッシュ", "Assault Slash", "Els/Els05_Assault Slash.png"),
	    new Active("アンリミテッドブレード", "Unlimited Blade", "Els/Els07_Unlimited Blade.png"),
	    new Active("トリプルガイザー", "Triple Geyser", "Els/Els06_Triple Geyser.png"),
	  ]),

	  new Job("マジックナイト/ルーンスレイヤー", "rs", "Els/RuneSlayer.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Els/icon", "url"),
	    new Active("ウィンドブレード", "Wind Blade", "Els/Els08_Wind Blade.png"),
	    new Active("ライジングスラッシュ", "Rising Slash", "Els/Els09_Rising Slash.png"),
	    new Active("ライジングウェーブ", "Rising Wave", "Els/Els29_Rising Wave.png"),
	    new Active("ソードファイア", "Sword Fire", "Els/Els10_Sword Fire.png"),
	    new Active("フェニックスタロン", "Phoenix Talon", "Els/Els12_Phoenix Talon.png"),
	    new Active("(2回目の暗転)", "Phoenix Talon", "Els/Els12_Phoenix Talon.png"),
	    new Active("スプラッシュエクスプロージョン", "Splash Explosion", "Els/Els13_Splash Explosion.png"),
	    new Active("ストームブレード", "Storm Blade", "Els/Els11_Storm Blade.png"),
	    new Active("ルナブレード", "Luna Blade", "Els/Els14_Luna Blade.png"),
	    new Active("シャイニングルーンバスター", "Shining Rune Buster", "Els/ElsHA01_Shining Rune Buster.png"),	    
	  ]),

	  new Job("ソードナイト/ロードナイト", "lk", "Els/LordKnight.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Els/icon", "url"),
	    new Active("エアスラッシュ", "AirSlash", "Els/Els15_Air Slash.png"),
	    new Active("スパイラルブラスト", "Spiral Blast", "Els/Els16_Spiral Blast.png"),
	    new Active("ダブルスラッシュ", "Double Slash", "Els/Els18_Double Slash.png"),
	    new Active("アルマゲドンブレード", "Armageddon Blade", "Els/Els19_Armageddon Blade.png"),
	    new Active("ソニックブレイド", "Sonic Blade", "Els/Els20_Sonic Blade.png"),
	    new Active("ウインドミル", "Windmill", "Els/Els17_Windmill.png"),
	    new Active("サンドストーム", "Sandstorm", 61, 1, 1, "", "Els/Els21_Sandstorm.png", "LjlqaNtv6go"),
	    new Active("ギガンティックスラッシュ", "Gigantic Slash", "Els/ElsHA02_Gigantic Slash.png"),	
	  ]),

	  new Job("シースナイト/インフィニティソード", "is", "Els/InfinitySword.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Els/icon", "url"),
			new Active("ソードフォール", "Sword Fall", "Els/Els23_Sword Fall.png"),
			new Active("ファイナルストライク", "Final Strike", "Els/Els25_Final Strike.png"),
			new Active("ファントムソード", "Phantom Sword", "Els/Els26_Phantom Sword.png"),
			new Active("クレセントカット", "Crescent Cut", "Els/Els22_Crescent Cut.png"),
			new Active("ソードブラスティング", "Sword Blasting", "Els/Els27_Sword Blasting.png"),
			new Active("レイジカッター", "Rage Cutter", "Els/Els28_Rage Cutter.png"),
			new Active("メイルストームレイジ", "Maelstrom Rage", "Els/Els24_Maelstrom Rage.png"),
			new Active("ブレードレイン", "Blade Rain", "Els/ElsHA03_Blade Rain.png"),
	  ]),
	  
	];
};

Els.prototype = new Chara;

var targetChara = new Els();