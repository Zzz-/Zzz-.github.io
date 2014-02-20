/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** アバウトに掲載されているデータ */
var Tips = function () {
	this.jobs = [
	  new Job("ハイパーアクティブのデータ", "ha", "", [
	    new Active("シャイニングルーンバスター", "Shining Rune Buster", 55, 1, 0, "", "Els/ElsHA01_Shining Rune Buster.png", "GCm6AJhLnuY"),
	    new Active("ギガンティックスラッシュ", "Gigantic Slash", 42, 1, 0, "", "Els/ElsHA02_Gigantic Slash.png", "adBxI1s8-ns"),
	    new Active("ブレードレイン", "Blade Rain", 148, 1, 0, "", "Els/ElsHA03_Blade Rain.png", "5Ob1WgqOYFc"),
	    new Active("エレメンタルストーム", "Elemental Storm", 89, 1, 0, "", "Aisha/AishaHA01_Elemental Storm.png", "cLfsXFCwPBo"),
	    new Active("アビスアンゴル", "Abyss Angkor", 132, 0, 0, "吸引開始まで", "Aisha/AishaHA02_Abyss Angkor.png", "IIAanrKtI8Q"),
	    new Active("フェイトスペース", "Fate Space", 60, 1, 0, "", "Aisha/AishaHA03_Fate Space.png", "w5MLlXdKX2g"),
	    new Active("スパイラルストライク", "Spiral Strike", 90, 1, 0, "最後の蹴りまで約8秒", "Rena/RenaHA01_Spiral Strike.png", "cCThnXfD2PM"),
	    new Active("シューターディスティニー", "Shooter Destiny", 90, 1, 0, "", "Rena/RenaHA02_Shooter Destiny.png", "KSWOK7LWKMY"),
	    new Active("イノセント", "Innocent", 73, 1, 0, "", "Rena/RenaHA03_Innocent.png", "NveAycjiSnU"),
	    new Active("インフェルナルアームズ", "Infernal Arms", 73, 1, 0, "", "Raven/RavenHA01_Infernal Arms.png", "yNCkre8FKhQ"),
	    new Active("エクストリームブレード", "Extreme Blade", 71, 1, 0, "", "Raven/RavenHA02_Extreme Blade.png", "vqskSsyx8vI"),
	    new Active("バーニングバスター", "Burning Burster", 90, 1, 0, "", "Raven/RavenHA03_Burning Burster.png", "DD5VDfJFQo8"),
	    new Active("ルナティックスカッド", "Lunatic Scud", 179, 1, 0, "ナソードスピアの時", "Eve/EveHA01_Lunatic Scud.png", "85dr9np_k5I"),
	    new Active("コード:サンダーボルト", "Code:Thunderbolt", 102, 2, 0, "", "Eve/EveHA02_Code Thunderbolt.png", "tHRIKAYiglg"),
	    new Active("サイキックアーティラリー", "Psychic Artillery", 31, 0, 0, "停止前153F(2.54s)", "Eve/EveHA03_Psychic Artillery.png", "2X_6maVCG-A"),
	    new Active("アウトレイジストライク", "Outrage Strike", 179, 1, 0, "", "Lacher/LacherHA01_Outrage Strike.png", "5TynF3602A0"),
	    new Active("ドゥームストライク", "Doom Strike", 134, 1, 0, "2回暗転スキル", "Lacher/LacherHA02_Doom Strike.png", "aT0w3JcJFLQ"),
	    new Active("(2回目の暗転)", "Doom Strike", 241, 2, 114, "合間98F", "Lacher/LacherHA02_Doom Strike.png", ""),
	    new Active("サテライトレイン", "Satellite Rain", 107, 0, 0, "", "Lacher/LacherHA03_Satellite Rain.png", "YHeyx4eQMr4"),
	    new Active("覇気天衝－千手華", "Heaven's Rage - Thousand Blossoms", 96, 1, 0, "", "Ara/AraHA01_Thousand Blossoms.png", "huS3buJR31M"),
	    new Active("地獄道", "Energy Cannon", "Ara/AraHA02_Energy Cannon.png"),
	  ]),

	  new Job("暗転の長いスキル(HA除く)", "top2s", "", [
      new Active("グングニル", "Gungnir", 222, 2, 0, "", "Rena/Rena18_Gungnir.png", "QJPQc3D9Pf4"),
      new Active("アケルダマ", "Aceldama", 184, 1, 0, "", "Lacher/Lacher07_Aceldama.png", "6tXG9DB_gR0"),
      new Active("マジカルメイクアップ", "Magical Makeup", 179, -1, 7, "", "Aisha/Aisha25_Magical Makeup.png", "K-9owFI4JHw"),
      new Active("アサルトスピア－ジャッジメント", "Assault Spear – Judgement", 155, 2, 33, "", "Eve/Eve21a_Assault Spear.png", "EqDSBJx1h7k"),
      new Active("アサルトスピア－バスター", "Assault Spear – Burster", 154, 2, 12, "", "Eve/Eve21_Assault Spear.png", "t8Vqj9RJTYE"),
      new Active("シューティングスター", "Shooting Star", 154, 2, 0, "2回目も含めた合計の時間", "Lacher/Lacher12_Shooting Star.png", "xBzBTp0oBDE"),
      new Active("サウザンドスター", "Thousand Star", 148, 2, 43, "HITは使用時ののけぞり", "Eve/Eve25_Thousand Star.png", "5XgVx5kzqnA"),
      new Active("ソードフォール", "Sword Fall", 147, 2, 56, "", "Els/Els23_Sword Fall.png", "pvYM7c9yiFg"),
      new Active("猛虎奥義:猛虎破天(合計)", "Secret Tiger Art: Fierce Tiger (all)", 145, 2, 0, "", "Ara/AraEx02_Fierce Tiger.png", "OErim-YHEjI"),
      new Active("羅刹奥義:煉獄(合計)", "Secret Rakshasa Arts: Purgatory (all)", 145, 1, 12, "奪命との合計", "Ara/AraEx04_Purgatory.png", "ti3tKD5x9Po"),
      new Active("アトミックシールド", "Atomic Shield", 139, -1, 29, "", "Eve/Eve14_Atomic Shield.png", "GFlvouh_gsA"),
      new Active("ブラッディエクセル", "Bloody Accel", 137, 2, 14, "", "Raven/Raven18_Bloody Accel.png", "WDGVkskKwE0"),
      new Active("エナジェティックハート", "Energetic Heart", 132, -1, 20, "", "Eve/Eve28_Energetic Heart.png", "1877O2ju2qQ"),
      new Active("カルマ", "Karma", 126, 1, 0, "", "Rena/Rena26_Karma.png", "Fv-XQBCu8yU"),
      new Active("ランドデモリッシャー", "Land Demolisher – Heavy Arms", 125, 2, 18, "", "Lacher/Lacher21_Land Demolisher.png", "kxuQlV6nFMQ"),
      new Active("イグニッションクロウ", "Ignition Crow – Incineration", 120, 0, 27, "", "Raven/Raven28_Ignition Crow.png", "or6AyOlcSvc"),
      new Active("ギガンティックインパクト", "Gigantic Impact", 120, 2, 0, "", "Lacher/Lacher06_Gigantic Impact.png", "72WveKad6aQ"),
      new Active("カーペットボミング", "Carpet Bombing", 120, 0, 28, "", "Lacher/Lacher26_Carpet Bombing.png", "unE_9JilLt8"),
      new Active("スーパーノヴァ", "Super Nova", 119, 1, 0, "", "Aisha/Aisha26_Super Nova.png", "qsNAVXt8bfQ"),
      new Active("スクリュードライバー", "Screw Driver – Driller", 119, 2, 25, "", "Aisha/Aisha28a_Screw Driver.png", "IvJU333saMk"),
      new Active("ニュークリア", "Nuclear", 119, 1, 0, "", "Raven/Raven12_Nuclear.png", "rd-alTbjV08"),
      new Active("龍牙奥義:龍牙爆砕", "Secret Dragon Arts: Blast", 119, 2, 0, "連携中の暗転は全て途切れる", "Ara/AraEx01_Explosive Breaking.png", "GIh3tSL_x44"),
    ]),

	  new Job("有利フレーム10F以上のスキル", "advantage", "", [
      new Active("ドゥームストライク", "Doom Strike", 241, 2, 114, "", "Lacher/LacherHA02_Doom Strike.png", "aT0w3JcJFLQ"),
      new Active("ソードフォール", "Sword Fall", 147, 2, 56, "", "Els/Els23_Sword Fall.png", "pvYM7c9yiFg"),
      new Active("サウザンドスター", "Thousand Star", 148, 2, 43, "", "Eve/Eve25_Thousand Star.png", "5XgVx5kzqnA"),
      new Active("グングニル(キャンセル)", "Gungnir_cancel", 221, 2, 35, "攻撃HIT時に発動", "Rena/Rena18_Gungnir.png", "TxjiMyuy6hI"),
      new Active("アサルトスピア－ジャッジメント", "Assault Spear – Judgement", 155, 2, 33, "", "Eve/Eve21a_Assault Spear.png", "EqDSBJx1h7k"),
      new Active("タクティカルフィールド", "Tactical Field – Raid", 113, 2, 30, "", "Lacher/Lacher28a_Tactical Field.png", "y_ha9WDfkEs"),
      new Active("アトミックシールド", "Atomic Shield", 139, -1, 29, "", "Eve/Eve14_Atomic Shield.png", "GFlvouh_gsA"),
      new Active("カーペットボミング", "Carpet Bombing", 120, 0, 28, "", "Lacher/Lacher26_Carpet Bombing.png", "unE_9JilLt8"),
      new Active("イグニッションクロウ", "Ignition Crow – Incineration", 120, 0, 27, "オーバーヒート除く", "Raven/Raven28_Ignition Crow.png", "or6AyOlcSvc"),
      new Active("スクリュードライバー―ドリラー", "Screw Driver – Driller", 119, 2, 25, "", "Aisha/Aisha28a_Screw Driver.png", "IvJU333saMk"),
      new Active("セイバーエクスティンクション", "Saber – Extinction", 61, 2, 24, "即発射のみ", "Elesis/Elesis10_Saber Extinction.png", "XA7NsbMvGzg"),
      new Active("バレットブリッツ", "Bullet Blitz", 81, 1, 22, "", "Lacher/Lacher13_Bullet Blitz.png", "roNt1lF0h0s"),
      new Active("エナジェティックハート", "Energetic Heart", 132, -1, 20, "", "Eve/Eve28_Energetic Heart.png", "1877O2ju2qQ"),
      new Active("ランドデモリッシャー－ヘビーアームズ", "Land Demolisher – Heavy Arms", 125, 2, 18, "", "Lacher/Lacher21_Land Demolisher.png", "kxuQlV6nFMQ"),
      new Active("エアロストレイフ", "Aero-Strafe", 96, 2, 15, "", "Rena/Rena21_Aero-Strafe.png", "YMe3OMK1j1U"),
      new Active("影つぼみ", "Shadow Rising", 77, 2, 15, "", "Ara/Ara05_Shadow Rising.png", "KoTDnAE4wdE"),
      new Active("ブラッディエクセル", "Bloody Accel", 137, 2, 14, "", "Raven/Raven18_Bloody Accel.png", "WDGVkskKwE0"),
      new Active("アサルトスピア－バスター", "Assault Spear – Burster", 154, 2, 12, "覚醒時除く", "Eve/Eve21_Assault Spear.png", "t8Vqj9RJTYE"),
      new Active("羅刹奥義:煉獄", "Secret Rakshasa Arts: Purgatory (all)", 145, 1, 12, "", "Ara/AraEx04_Purgatory.png", "ti3tKD5x9Po"),
      new Active("ディメンションリンク－ブレーダー", "Dimension Link – Blader", 103, 1, 10, "", "Eve/Eve05_Dimension Link Blader.png", "EKigrq6oP3Q"),
      new Active("アークエネミー", "Arch-Enemy", 84, -1, 10, "", "Raven/Raven09_Arch-Enemy.png", "74qkt14CJUU"),
      new Active("猛虎四式:怒涛", "Tiger Stance 4: Raging Wave", 75, 2, 10, "", "Ara/Ara13_Turbulent Wave.png", "MaZryPb7vuY"),
	  ]),
	  
	];
};

Tips.prototype = new Chara;

var targetChara = new Tips();