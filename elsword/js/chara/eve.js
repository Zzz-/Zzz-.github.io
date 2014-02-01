/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** イヴのデータ型 */
var Eve = function () {
	this.jobs = [
	  new Job("イヴ", "eve", "Eve/Eve.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Eve/icon", "url"),
      new Active("覚醒", "Awaking", 89, -1, 31, "", "00_awaking.png", "05Lf8xf-Kis"),
      new Active("ディメンションリンク－ブレーダー", "Dimension Link – Blader", 103, 1, 10, "", "Eve/Eve05_Dimension Link Blader.png", "EKigrq6oP3Q"),
      new Active("ディメンションリンク－セントリー", "Dimension Link – Sentry", "Eve/Eve03_Dimension Link.png"),
      new Active("イリュージョンストライク", "Illusion Strike", "Eve/Eve02_Illusion Strike.png"),
      new Active("イリュージョンスティンガー", "Illusion Stinger", "Eve/Eve04_Illusion Stinger.png"),
      new Active("ディメンションリンク－ガーディアン", "Dimension Link – Guardian", "Eve/Eve07_Dimension Link Guardian.png"),
      new Active("ジェネレートブラックホール", "Generator Black Hole", "Eve/Eve06_Generate Black Hole.png"),
	  ]),

	  new Job("コードエキゾチック/コードネメシス", "cn", "Eve/CodeNemesis.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Eve/icon", "url"),
	    new Active("エクスプロージョンインパクト", "Explosion Impact", "Eve/Eve09_Explosion Impact.png"),
	    new Active("ホーネットスティング－エクスプロージョン", "Hornet Sting – Explosion", "Eve/Eve08_Hornet Sting.png"),
	    new Active("ホーネットスティング－シェイフトチャージ", "Hornet Sting - Shaped Charge", "Eve/Eve08a_Hornet Sting.png"),
	    new Active("クイーンズスローン", "Queen's Throne", "Eve/Eve11_Queen's Throne.png"),
	    new Active("ジャンクブレイク", "Junk Break", "Eve/Eve12_Junk Break.png"),
	    new Active("アトミックブラスター－プラズマ", "Atomic Blaster - Plasma Gun", "Eve/Eve13_Atomic Blaster.png"),
	    new Active("アトミックブラスター－ソニック", "Atomic Blaster - Sonic Gun", "Eve/Eve13a_Atomic Blaster.png"),
	    new Active("アトミックシールド", "Atomic Shield", 139, -1, 29, "", "Eve/Eve14_Atomic Shield.png", "GFlvouh_gsA"),
	    new Active("アイアンスクラップス", "Iron Scraps", "Eve/Eve10_Iron Scraps.png"),
	    new Active("アサルトスピア－ジャッジメント", "Assault Spear – Judgement", "Eve/Eve21a_Assault Spear.png"),
	    new Active("ルナティックスカッド", "Lunatic Scud", 179, 1, 0, "ナソードスピアの時", "Eve/EveHA01_Lunatic Scud.png", "85dr9np_k5I"),
	  ]),

	  new Job("コードアーキテクチャー/コードエンプレス", "cep", "Eve/CodeEmpress.png", [
//		new Active("name", "id", frame, hit, adframe, "tips", "Eve/icon", "url"),
			new Active("ソニックウェーブ", "Sonic Wave", "Eve/Eve16_Sonic Wave.png"),
			new Active("ジェノサイドリッパー", "Genocide Ripper", "Eve/Eve19_Genocide Ripper.png"),
			new Active("ヘヴンズフィスト－プレッシャー", "Heaven's Fist – Pressure", "Eve/Eve18_Heaven's Fist.png"),
			new Active("ヘヴンズフィスト－スイーパー", "Heaven's Fist – Sweeper", "Eve/Eve18a_Heaven's Fist.png"),
			new Active("サーフィスカッティング", "Surface Cutting", "Eve/Eve15_Surface Cutting.png"),
			new Active("エレクトロニックフィールド", "Electronic Field", "Eve/Eve20_Electronic Field.png"),
			new Active("アサルトスピア－バスター", "Assault Spear – Burster", 154, 2, 12, "", "Eve/Eve21_Assault Spear.png", "t8Vqj9RJTYE"),
			new Active("アサルトスピア－バスター(覚醒)", "Assault Spear – Burster (Awake)", 154, 2, 0, "硬直が40F増える", "Eve/Eve21_Assault Spear.png", "4-OnUS8XbDc"),
			new Active("スペースレンチ", "Space Wrench", "Eve/Eve17_Space Wrench.png"),
			new Active("コード:サンダーボルト", "Code:Thunderbolt", 102, 2, 0, "", "Eve/EveHA02_Code Thunderbolt.png", "tHRIKAYiglg"),
	  ]),

	  new Job("コードエレクトラ/コードバトルセラフ", "cbs", "Eve/BattleSeraph.png", [
//		new Active("name", "id", frame, hit, adframe, "tips", "Eve/icon", "url"),
			new Active("パーティクルレイ", "Particle Ray", "Eve/Eve22_Particle Ray.png"),
			new Active("スイープローリング－オーバーチャージ", "Sweep Rolling - Over Charge", "Eve/Eve23_Sweep Rolling.png"),
			new Active("スイープローリング－トライバルカン", "Sweep Rolling - Tri Vulcan", "Eve/Eve23a_Sweep Rolling.png"),
			new Active("フォトンフレア", "Photon Flare", "Eve/Eve24_Photon Flare.png"),
			new Active("リニアディバイダー", "Linear Divider", 55, 0, 0, "", "Eve/Eve29_Linear Divider.png", "rf89CZM5mE8"),
			new Active("ギガストリーム", "Giga Stream", "Eve/Eve26_Giga Stream.png"),
			new Active("エネルギーニードル", "Energy Needles", "Eve/Eve27_Energy Needles.png"),
			new Active("サウザンドスター", "Thousand Star", 148, 2, 43, "HITは使用時ののけぞり", "Eve/Eve25_Thousand Star.png", "5XgVx5kzqnA"),
			new Active("エナジェティックハート", "Energetic Heart", 132, -1, 20, "", "Eve/Eve28_Energetic Heart.png", "1877O2ju2qQ"),
			new Active("サイキックアーティラリー", "Psychic Artillery", 31, 0, 0, "停止前153F(2.54s)", "Eve/EveHA03_Psychic Artillery.png", "2X_6maVCG-A"),
	  ]),
	  
	];
};

Eve.prototype = new Chara;

var targetChara = new Eve();