/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** イヴのデータ型 */
var Eve = function () {
	this.jobs = [
	  new Job("イヴ", "eve", "Eve/Eve.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Eve/icon", "url"),
      new Active("覚醒", "Awaking", 89, -1, 31, "", "00_awaking.png", "05Lf8xf-Kis"),
      new Active("ディメンションリンク－ブレーダー", "Dimension Link – Blader", 103, 1, 10, "", "Eve/Eve05_Dimension Link Blader.png", "EKigrq6oP3Q"),
      new Active("ディメンションリンク－セントリー", "Dimension Link – Sentry", 61, 2, 0, "", "Eve/Eve03_Dimension Link.png", "Fwp6Ijop3RU"),
      new Active("イリュージョンストライク", "Illusion Strike", 48, 1, 0, "", "Eve/Eve02_Illusion Strike.png", "Cpi-stnMcwc"),
      new Active("イリュージョンスティンガー", "Illusion Stinger", 47, 1, 0, "", "Eve/Eve04_Illusion Stinger.png", "nicjYfgTBzk"),
      new Active("ディメンションリンク－ガーディアン", "Dimension Link – Guardian", 101, 1, 0, "", "Eve/Eve07_Dimension Link Guardian.png", "8SC4_JXNjls"),
      new Active("ジェネレートブラックホール", "Generator Black Hole", 0, 0, 0, "暗転無し", "Eve/Eve06_Generate Black Hole.png", "zOrNtDzlM-g"),
	  ]),

	  new Job("コードエキゾチック/コードネメシス", "cn", "Eve/CodeNemesis.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Eve/icon", "url"),
	    new Active("エクスプロージョンインパクト", "Explosion Impact", 85, 1, 0, "", "Eve/Eve09_Explosion Impact.png", "YiISsAVFC60"),
	    new Active("ホーネットスティング－エクスプロージョン", "Hornet Sting – Explosion", 47, 2, 0, "", "Eve/Eve08_Hornet Sting.png", "Ks_VmsBFCE4"),
	    new Active("ホーネットスティング－シェイフトチャージ", "Hornet Sting - Shaped Charge", 48, 2, 0, "", "Eve/Eve08a_Hornet Sting.png", "iYYM0Z9Wp0c"),
	    new Active("クイーンズスローン", "Queen's Throne", 89, 2, 0, "", "Eve/Eve11_Queen's Throne.png", "Dj5bClYdip4"),
	    new Active("ジャンクブレイク", "Junk Break", 83, 1, 0, "", "Eve/Eve12_Junk Break.png", "uQuPS7OrkOQ"),
	    new Active("アトミックブラスター－プラズマ", "Atomic Blaster - Plasma Gun", 60, 1, 0, "", "Eve/Eve13_Atomic Blaster.png", "7dXXia1MbDw"),
	    new Active("アトミックブラスター－ソニック", "Atomic Blaster - Sonic Gun", 60, 1, 0, "", "Eve/Eve13a_Atomic Blaster.png", "mvSAwigX8HY"),
	    new Active("アトミックシールド", "Atomic Shield", 139, -1, 29, "", "Eve/Eve14_Atomic Shield.png", "GFlvouh_gsA"),
	    new Active("アイアンスクラップス", "Iron Scraps", 60, 1, 0, "", "Eve/Eve10_Iron Scraps.png", "Cqfje3Av_oQ"),
	    new Active("アサルトスピア－ジャッジメント", "Assault Spear – Judgement", 155, 2, 33, "", "Eve/Eve21a_Assault Spear.png", "EqDSBJx1h7k"),
	    new Active("ルナティックスカッド", "Lunatic Scud", 179, 1, 0, "ナソードスピアの時", "Eve/EveHA01_Lunatic Scud.png", "85dr9np_k5I"),
	  ]),

	  new Job("コードアーキテクチャー/コードエンプレス", "cep", "Eve/CodeEmpress.png", [
//		new Active("name", "id", frame, hit, adframe, "tips", "Eve/icon", "url"),
			new Active("ソニックウェーブ", "Sonic Wave", 78, 1, 0, "", "Eve/Eve16_Sonic Wave.png", "dgOU81e2O8A"),
			new Active("ジェノサイドリッパー", "Genocide Ripper", 61, 1, 0, "", "Eve/Eve19_Genocide Ripper.png", "sgjy2nLH8a0"),
			new Active("ヘヴンズフィスト－プレッシャー", "Heaven's Fist – Pressure", 99, 2, 0, "", "Eve/Eve18_Heaven's Fist.png", "sJRpUrExyss"),
			new Active("ヘヴンズフィスト－スイーパー", "Heaven's Fist – Sweeper", 101, 1, 0, "", "Eve/Eve18a_Heaven's Fist.png", "Ax0w7VutAlc"),
			new Active("サーフィスカッティング", "Surface Cutting", 61, 1, 0, "", "Eve/Eve15_Surface Cutting.png", "D7nh1AZb0i0"),
			new Active("エレクトロニックフィールド", "Electronic Field", 78, 1, 0, "", "Eve/Eve20_Electronic Field.png", "WFpqexU0WzU"),
			new Active("アサルトスピア－バスター", "Assault Spear – Burster", 154, 2, 12, "", "Eve/Eve21_Assault Spear.png", "t8Vqj9RJTYE"),
			new Active("アサルトスピア－バスター(覚醒)", "Assault Spear – Burster (Awake)", 154, 2, 0, "硬直が40F増える", "Eve/Eve21_Assault Spear.png", "4-OnUS8XbDc"),
			new Active("スペースレンチ", "Space Wrench", 59, 1, 0, "", "Eve/Eve17_Space Wrench.png", "9_UKXVFIck4"),
			new Active("コード:サンダーボルト", "Code:Thunderbolt", 102, 2, 0, "", "Eve/EveHA02_Code Thunderbolt.png", "tHRIKAYiglg"),
	  ]),

	  new Job("コードエレクトラ/コードバトルセラフ", "cbs", "Eve/BattleSeraph.png", [
//		new Active("name", "id", frame, hit, adframe, "tips", "Eve/icon", "url"),
			new Active("パーティクルレイ", "Particle Ray", 36, 1, 0, "", "Eve/Eve22_Particle Ray.png", "r-jlm5clPLU"),
			new Active("スイープローリング－オーバーチャージ", "Sweep Rolling - Over Charge", 90, 1, 0, "", "Eve/Eve23_Sweep Rolling.png", "cwtHYttWFAI"),
			new Active("スイープローリング－トライバルカン", "Sweep Rolling - Tri Vulcan", 90, 1, 0, "", "Eve/Eve23a_Sweep Rolling.png", "Hmcz-vfi9S0"),
			new Active("フォトンフレア", "Photon Flare", 61, 2, 0, "", "Eve/Eve24_Photon Flare.png", "OGFSqBlX088"),
			new Active("リニアディバイダー", "Linear Divider", 55, 1, 0, "", "Eve/Eve29_Linear Divider.png", "rf89CZM5mE8"),
			new Active("ギガストリーム", "Giga Stream", 61, 1, 0, "", "Eve/Eve26_Giga Stream.png", "WhreasXc8nM"),
			new Active("エネルギーニードル", "Energy Needles", 90, 0, 0, "", "Eve/Eve27_Energy Needles.png", "KwS3I0vJj_o"),
			new Active("サウザンドスター", "Thousand Star", 148, 2, 43, "HITは使用時ののけぞり", "Eve/Eve25_Thousand Star.png", "5XgVx5kzqnA"),
			new Active("エナジェティックハート", "Energetic Heart", 132, -1, 20, "", "Eve/Eve28_Energetic Heart.png", "1877O2ju2qQ"),
			new Active("サイキックアーティラリー", "Psychic Artillery", 31, 0, 0, "停止前153F(2.54s)", "Eve/EveHA03_Psychic Artillery.png", "2X_6maVCG-A"),
	  ]),
	  
	];
};

Eve.prototype = new Chara;

var targetChara = new Eve();