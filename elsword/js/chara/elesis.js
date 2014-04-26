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

	  new Job("セイバーナイト/グランドマスター", "gm", "Elesis/GrandMaster.png", [
//	new Active("name", "id", frame, hit, adframe, "tips", "Elesis/icon", "url"),
	    new Active("クロススラッシュ", "Cross Slash", 29, 1, 0, "", "Elesis/Elesis08_Cross Slash.png", "smT0E1x-k90"),
	    new Active("スパイラルブラスト", "Spiral Blast", 57, 1, 0, "", "Elesis/Elesis09_Spiral Blast.png", "boe4LvysiZ4"),
	    new Active("セイバーエクスティンクション", "Saber – Extinction", 61, 2, 24, "チャージ完了音の時に暗転", "Elesis/Elesis10_Saber Extinction.png", "XA7NsbMvGzg"),
	    new Active("ジャッジメントドライブ", "Sword of Judgement", 51, 2, 0, "2回暗転スキル", "Elesis/Elesis11_Sword of Judgement.png", "LIxQt-8XlrA"),
	    new Active("(2回目の暗転)", "Sword of Judgement", 108, 2, 0, "合間17F", "Elesis/Elesis11_Sword of Judgement.png"),
	    new Active("勝利の剣", "Sword of Victory", 90, 2, 0, "", "Elesis/Elesis12_Sword of Victory.png", "1qaDodfwiSM"),
	    new Active("ソニックブレード", "Sonic Blade", "Elesis/Elesis13_Sonic Blade.png"),
	    new Active("クリティカルダイブ", "Critical Dive", 35, 1, 0, "", "Elesis/Elesis14_Critical Dive.png", "ervG1UqVJ5A"),
	    new Active("ジャガーノートバスター", "Juggernaut Buster", "Elesis/Elesis15_Juggernaut Buster.png"),
	    new Active("ウォープレリュード", "War Prelude", "Elesis/Elesis16_War Prelude.png"),
	    new Active("ソードオブレリクス", "Sword of Relics", "Elesis/ElesisHA01_Sword of Relics.png"),
		]),

	  new Job("パイロナイト/ブレイジングハート", "bh", "Elesis/BlazingHeart.png", [
//	new Active("name", "id", frame, hit, adframe, "tips", "Elesis/icon", "url"),
	    new Active("ソードイラプション", "Sword Eruption", 53, 2, 2, "", "Elesis/Elesis17_Sword Eruption.png", "fJlgV2Dyad8"),
	    new Active("バーストライジング", "Burst Rising", 83, 2, 0, "", "Elesis/Elesis18_Burst Rising.png", "mzQPvQGq1NQ"),
	    new Active("バーストウェーブ", "Burst Wave", 76, 2, 0, "", "Elesis/Elesis19_Burst Wave.png", "ZUMSSYt_XKE"),
	    new Active("ソードファイア", "Sword Fire", 89, 1, 0, "", "Elesis/Elesis20_Sword Fire.png", "bJJ1uViE_nI"),
	    new Active("インファーナルブレード", "Infernal Blade", 72, 1, 0, "", "Elesis/Elesis21_Infernal Blade.png", "5xdAC8UPDxY"),
	    new Active("エターナルファイア", "Eternal Fire", 90, 1, 0, "", "Elesis/Elesis22_Eternal Fire.png", "YWeEuoODHDc"),
	    new Active("スカルディックソード", "Scaldic Sword", 41, 1, 0, "", "Elesis/Elesis23_Scaldic Sword.png", "YxABFh7xhbo"),
	    new Active("ファイアウォール", "Wall of Prominence ", 54, 2, 0, "", "Elesis/Elesis24_Wall of Prominence.png", "ys6IscwpkWE"),
	    new Active("ブレイズウィング", "Blaze Wing", "Elesis/Elesis25_Blaze Wing.png"),
	    new Active("ブレイジングダンス", "Blazing Dance", "Elesis/Elesis26_Blazing Dance.png"),
	    new Active("エンシェントファイア", "Ancient Fire", "Elesis/ElesisHA02_Ancient Fire.png"),
		]),
	  
	];
};

Elesis.prototype = new Chara;

var targetChara = new Elesis();