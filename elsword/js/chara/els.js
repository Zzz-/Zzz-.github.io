/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** エルスのデータ型 */
var Els = function () {
	this.jobs = [
	  new Job("エルス", "els", "Els/Els.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Els/icon", "url"),
	    new Active("覚醒", "Awaking", 78, -1, 19, "", "00_awaking.png", "HKFSOAyyNuM"),
	    new Active("フレイムガイザー", "Flame Geyser", 41, 1, 0, "", "Els/Els04_Flame Geyser.png", "4pJIh7C-63o"),
	    new Active("フェータルフューリー", "Fatal Fury", 37, 1, 0, "", "Els/Els03_Fatal Fury.png", "awiQ-odE2HE"),
	    new Active("メガスラッシュ", "Mega Slash", 36, 0, 0, "", "Els/Els02_Mega Slash.png", "tFxIqjmfK0M"),
	    new Active("アサルトスラッシュ", "Assault Slash", 36, 1, 0, "", "Els/Els05_Assault Slash.png", "k4-FDUQLiUQ"),
	    new Active("アンリミテッドブレード", "Unlimited Blade", 23, 1, 0, "", "Els/Els07_Unlimited Blade.png", "6o-zRskSVGc"),
	    new Active("トリプルガイザー", "Triple Geyser", 41, 1, 0, "", "Els/Els06_Triple Geyser.png", "HuvvT4LD-mM"),
	  ]),

	  new Job("マジックナイト/ルーンスレイヤー", "rs", "Els/RuneSlayer.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Els/icon", "url"),
	    new Active("ウィンドブレード", "Wind Blade", 35, 0, 0, "", "Els/Els08_Wind Blade.png", "y2kjWHrCsBA"),
	    new Active("ライジングスラッシュ", "Rising Slash", 37, 1, 0, "", "Els/Els09_Rising Slash.png", "1bpl_JMRIyQ"),
	    new Active("ライジングウェーブ", "Rising Wave", 35, 0, 0, "", "Els/Els29_Rising Wave.png", "RzAIVuIRRwU"),
	    new Active("ソードファイア", "Sword Fire", 72, 0, 0, "", "Els/Els10_Sword Fire.png", "rtlQaFbSq3o"),
	    new Active("フェニックスタロン", "Phoenix Talon", 28, 1, 0, "2回暗転スキル", "Els/Els12_Phoenix Talon.png", "KEtB6395ov4"),
	    new Active("(2回目の暗転)", "Phoenix Talon", 73, 2, 0, "合間39F", "Els/Els12_Phoenix Talon.png", ""),
	    new Active("スプラッシュエクスプロージョン", "Splash Explosion", 37, 1, 0, "", "Els/Els13_Splash Explosion.png", "r5aSi2W7V2o"),
	    new Active("ストームブレード", "Storm Blade", 37, 1, 0, "", "Els/Els11_Storm Blade.png", "3n3snQiqxdk"),
	    new Active("ルナブレード", "Luna Blade", 84, 2, 0, "", "Els/Els14_Luna Blade.png", "pmWucRkQ9UQ"),
	    new Active("シャイニングルーンバスター", "Shining Rune Buster", 55, 1, 0, "", "Els/ElsHA01_Shining Rune Buster.png", "GCm6AJhLnuY"),
	  ]),

	  new Job("ソードナイト/ロードナイト", "lk", "Els/LordKnight.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Els/icon", "url"),
	    new Active("エアスラッシュ", "Air Slash", 36, 1, 0, "", "Els/Els15_Air Slash.png", "fX3OmDb74Qs"),
	    new Active("スパイラルブラスト", "Spiral Blast", 24, 1, 0, "", "Els/Els16_Spiral Blast.png", "J4-bOS847hM"),
	    new Active("ダブルスラッシュ", "Double Slash", 29, 2, 0, "2回暗転スキル", "Els/Els18_Double Slash.png", "9kYMRlMB8NM"),
	    new Active("(2回目の暗転)", "Double Slash", 61, 1, 0, "合間47F", "Els/Els18_Double Slash.png", ""),
	    new Active("アルマゲドンブレード", "Armageddon Blade", 102, 2, 0, "", "Els/Els19_Armageddon Blade.png", "k1cDJZzGS9Q"),
	    new Active("ソニックブレイド", "Sonic Blade", 54, 2, 3, "", "Els/Els20_Sonic Blade.png", "U9Dc5TE6TmU"),
	    new Active("ウインドミル", "Windmill", 37, 1, 0, "", "Els/Els17_Windmill.png", "X458x86g8p8"),
	    new Active("サンドストーム", "Sandstorm", 61, 1, 1, "", "Els/Els21_Sandstorm.png", "LjlqaNtv6go"),
	    new Active("ギガンティックスラッシュ", "Gigantic Slash", 42, 1, 0, "", "Els/ElsHA02_Gigantic Slash.png", "adBxI1s8-ns"),
	  ]),

	  new Job("シースナイト/インフィニティソード", "is", "Els/InfinitySword.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Els/icon", "url"),
			new Active("ソードフォール", "Sword Fall", 147, 2, 56, "", "Els/Els23_Sword Fall.png", "pvYM7c9yiFg"),
			new Active("ファイナルストライク", "Final Strike", 59, 1, 0, "", "Els/Els25_Final Strike.png", "03zto6qhr-w"),
			new Active("ファントムソード", "Phantom Sword", 102, 2, 0, "", "Els/Els26a_Phantom Sword.png", "aDh6q7PldKc"),
			new Active("クレセントカット", "Crescent Cut", 59, 1, 0, "", "Els/Els22_Crescent Cut.png", "sG9gkLQ7TPI"),
			new Active("ソードブラスティング", "Sword Blasting", 60, 1, 0, "", "Els/Els27_Sword Blasting.png", "Mpu9dNLPC6Q"),
			new Active("レイジカッター", "Rage Cutter", 55, 0, 0, "", "Els/Els28_Rage Cutter.png", "trcDFJfsnzY"),
			new Active("メイルストームレイジ", "Maelstrom Rage", 60, 2, 0, "", "Els/Els24_Maelstrom Rage.png", "vl4_2h1MPdQ"),
			new Active("ブレードレイン", "Blade Rain", 148, 1, 0, "", "Els/ElsHA03_Blade Rain.png", "5Ob1WgqOYFc"),
	  ]),
	  
	];
};

Els.prototype = new Chara;

var targetChara = new Els();