/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** エリシスのデータ型 */
var Elesis = function () {
	this.jobs = [
	  new Job("エリシス", "elesis", "Elesis/Elesis.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Elesis/icon", "url"),
      new Active("覚醒", "Awaking", 84, -1, 22, "", "00_awaking.png", "hCgISsdC2Hc"),
	    new Active("パワーバスター", "Power Burster", 45, 1, 0, "", "Elesis/Elesis02_Power Burster.png", "wRYAMznWEdw"),
	    new Active("ワイルドショック", "Wild Shock", 79, 2, 0, "", "Elesis/Elesis03_Wild Shock.png", "CpMmvvhScyM"),
	    new Active("ソニックアサルト－ステップ", "Sonic Assault – Stab", 72, 2, 0, "", "Elesis/Elesis04a_Sonic Assault.png", "7Bg2qRAluuk"),
	    new Active("ソニックアサルト－スティング", "Sonic Assault – Sting", 72, 2, 0, "", "Elesis/Elesis04b_Sonic Assault.png", "A8kMoq54X1s"),
	    new Active("メガスラッシュ", "Mega Slash", 60, 2, 0, "", "Elesis/Elesis05_Mega Slash.png", "f0A4jntoSZo"),
	    new Active("アンリミテッドブレード", "Unlimited Blade", 39, 1, 0, "", "Elesis/Elesis06_Unlimited Blade.png", "96t_59vzZwk"),
	    new Active("メガバスター", "Mega Burster", 84, 1, 0, "", "Elesis/Elesis07_Mega Burster.png", "DhfGhHdVGII"),

	  ]),

	  new Job("セイバーナイト", "sak", "Elesis/SaberKnight.png", [
//	new Active("name", "id", frame, hit, adframe, "tips", "Elesis/icon", "url"),
	    new Active("クロススラッシュ", "Cross Slash", 29, 1, 0, "", "Elesis/Elesis08_Cross Slash.png", "smT0E1x-k90"),
	    new Active("スパイラルブラスト", "Spiral Blast", 0, 1, 0, "", "Elesis/Elesis09_Spiral Blast.png", "boe4LvysiZ4"),
	    new Active("セイバーエクスティンクション", "Saber – Extinction", 61, 2, 24, "チャージ完了音の時に暗転", "Elesis/Elesis10_Saber Extinction.png", "XA7NsbMvGzg"),
	    new Active("ジャッジメントドライブ", "Sword of Judgement", 51, 2, 0, "2回暗転スキル", "Elesis/Elesis11_Sword of Judgement.png", "LIxQt-8XlrA"),
	    new Active("(2回目の暗転)", "Sword of Judgement", 108, 2, 0, "合間17F", "Elesis/Elesis11_Sword of Judgement.png"),
	    new Active("勝利の剣", "Sword of Victory", "Elesis/Elesis12_Sword of Victory.png"),

		]),

	  new Job("パイロナイト", "pk", "Elesis/PyroKnight.png", [
//	new Active("name", "id", frame, hit, adframe, "tips", "Elesis/icon", "url"),
	    new Active("ソードイラプション", "Sword Eruption", 53, 2, 2, "", "Elesis/Elesis17_Sword Eruption.png", "fJlgV2Dyad8"),
	    new Active("バーストライジング", "Burst Rising", "Elesis/Elesis18_Burst Rising.png"),
	    new Active("バーストウェーブ", "Burst Wave", "Elesis/Elesis19_Burst Wave.png"),
	    new Active("ソードファイア", "Sword Fire", "Elesis/Elesis20_Sword Fire.png"),
	    new Active("インファーナルブレード", "Infernal Blade", "Elesis/Elesis21_Infernal Blade.png"),
	    new Active("エターナルファイア", "Eternal Fire", "Elesis/Elesis22_Eternal Fire.png"),
		]),
	  
	];
};

Elesis.prototype = new Chara;

var targetChara = new Elesis();