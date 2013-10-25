var QuestList = function() {
	this.normal = [
	    new Area("旅立ちの塔", [
	        new Quest("塔の入り口", 3, 35), new Quest("旅立ちの間", 3, 55),
	        new Quest("最初の試練", 5, 85),
	    ]),
	    new Area("火のダンジョン", [
	        new Quest("紅玉の坑道", 3, 60), new Quest("紅玉の守り手", 3, 100),
	        new Quest("坑道の猛龍", 5, 200),
	    ]),
	    new Area("火のダンジョン(B)", [
	        new Quest("紅玉の坑道(B)", 2, 60), new Quest("紅玉の守り手(B)", 2, 100),
	        new Quest("坑道の猛龍(B)", 3, 200),
	    ]),
	    new Area("水のダンジョン", [
	        new Quest("蒼玉の洞穴", 3, 60), new Quest("蒼玉の守り手", 3, 100),
	        new Quest("洞窟の主", 5, 200),
	    ]),
	    new Area("水のダンジョン(B)", [
	        new Quest("蒼玉の洞穴(B)", 2, 60), new Quest("蒼玉の守り手(B)", 2, 100),
	        new Quest("洞窟の主(B)", 3, 200),
	    ]),
	    new Area("木のダンジョン", [
	        new Quest("翠玉の森", 3, 120), new Quest("翠玉の守り手", 3, 115),
	        new Quest("森の守護龍", 5, 225),
	    ]),
	    new Area("木のダンジョン(B)", [
	        new Quest("翠玉の森(B)", 2, 120), new Quest("翠玉の守り手(B)", 2, 115),
	        new Quest("森の守護龍(B)", 3, 225),
	    ]),
	    new Area("光のダンジョン", [
	        new Quest("黄玉の迷宮", 3, 100), new Quest("黄玉の守り手", 3, 160),
	        new Quest("迷宮の怪鳥", 5, 300),
	    ]),
	    new Area("光のダンジョン(B)", [
	        new Quest("黄玉の迷宮(B)", 2, 100), new Quest("黄玉の守り手(B)", 2, 160),
	        new Quest("迷宮の怪鳥(B)", 3, 300),
	    ]),
	    new Area("闇のダンジョン", [
	        new Quest("紫水晶の洞穴", 3, 100), new Quest("紫色の殺戮兵器", 3, 160),
	        new Quest("死を呼ぶ月の龍", 5, 330),
	    ]),
	    new Area("闇のダンジョン(B)", [
	        new Quest("紫水晶の洞穴(B)", 2, 100), new Quest("紫色の殺戮兵器(B)", 2, 160),
	        new Quest("死を呼ぶ月の龍(B)", 3, 330),
	    ]),
	    new Area("試練の塔", [
	        new Quest("試練の始まり", 3, 220), new Quest("２対の兵器", 3, 280),
	        new Quest("立ちふさがる者", 5, 390),
	    ]),
	    new Area("試練の塔(B)", [
	        new Quest("試練の始まり(B)", 2, 220), new Quest("２対の兵器(B)", 2, 280),
	        new Quest("立ちふさがる者(B)", 3, 390),
	    ]),

	    new Area("ウルカヌ火山", [
	        new Quest("火口入り口", 5, 350), new Quest("炎の番人", 5, 450),
	        new Quest("赤き龍", 5, 500), new Quest("炎の蛇女", 5, 750),
	        new Quest("火山龍現る", 5, 792),
	    ]),
	    new Area("ネプトゥ氷河", [
	        new Quest("凍える風", 5, 364), new Quest("氷の番人", 5, 686),
	        new Quest("水面に潜む影", 5, 460), new Quest("人魚達の宴", 5, 704),
	        new Quest("氷河の極光龍", 5, 768),
	    ]),
	    new Area("ディメテル樹林", [
	        new Quest("木々のざわめき", 5, 390), new Quest("大樹の番人", 5, 700),
	        new Quest("貧食の緑龍", 5, 700), new Quest("妖花の誘い", 5, 750),
	        new Quest("目覚めた地底龍", 5, 800),
	    ]),
	    new Area("聖者の墓", [
	        new Quest("巨大墓地の地下", 5, 435), new Quest("機械仕掛けの墓守", 5, 757),
	        new Quest("白き賢龍", 5, 632), new Quest("天からの使い", 5, 861),
	        new Quest("聖者の守護龍", 5, 1053),
	    ]),
	    new Area("プルトゥ渓谷", [
	        new Quest("谷底の洞窟", 5, 475), new Quest("徘徊する殺人機", 5, 748),
	        new Quest("暗闇にうごめく影", 5, 613), new Quest("夢魔のささやき", 5, 1059),
	        new Quest("深淵の魔龍", 5, 1000),
	    ]),
	    new Area("巨人の塔", [
	        new Quest("塔へと続く道", 5, 468), new Quest("巨人の門", 5, 843),
	        new Quest("塔の番龍", 5, 1380), new Quest("巨大なる近衛兵", 5, 954),
	        new Quest("巨人の怒り", 7, 1489),
	    ]),
	    new Area("巨人の塔(B)", [
	        new Quest("塔へと続く道(B)", 3, 468), new Quest("巨人の門(B)", 3, 843),
	        new Quest("塔の番龍(B)", 3, 1380), new Quest("巨大なる近衛兵(B)", 3, 954),
	        new Quest("巨人の怒り(B)", 4, 1489),
	    ]),

	    new Area("ネルヴァ灼熱林", [
	        new Quest("灼熱並道", 7, 1437), new Quest("火を祀る蛇", 7, 1408),
	        new Quest("炎の龍達", 7, 1728), new Quest("火を纏う戦士", 7, 1600),
	        new Quest("爆炎の猛龍", 7, 1462),
	    ]),
	    new Area("メルクリア海底洞窟", [
	        new Quest("海底への道", 7, 1475), new Quest("魔性の歌声", 7, 1295),
	        new Quest("水龍の門", 7, 1589), new Quest("牙を持つ戦士", 7, 1726),
	        new Quest("氷塊の海龍", 7, 1447),
	    ]),
	    new Area("霊峰バッケス", [
	        new Quest("山頂へと続く道", 7, 1314), new Quest("花々の誘惑", 7, 1373),
	        new Quest("大地の幼龍", 7, 1495), new Quest("龍の騎士", 7, 1670),
	        new Quest("霊峰の大花龍", 7, 1457),
	    ]),
	    new Area("アポルォ双神殿", [
	        new Quest("陽光の神殿", 8, 1322), new Quest("残酷な天使", 8, 1467),
	        new Quest("白き大蛇", 8, 1550), new Quest("天空の戦士", 8, 1751),
	        new Quest("陽光の大鳥龍", 8, 1529),
	    ]),
	    new Area("ディエナ双神殿", [
	        new Quest("月光の神殿", 8, 1416), new Quest("蛇の甘言", 8, 1932),
	        new Quest("2頭の呪詛龍", 8, 1749), new Quest("闇夜の龍騎士", 8, 1690),
	        new Quest("月光の暗殺龍", 8, 1716),
	    ]),
	    new Area("魔王の城", [
	        new Quest("城門", 9, 1793), new Quest("魔女達の舞踏会", 9, 2063),
	        new Quest("魔獣の檻", 9, 2142), new Quest("王を守る者", 9, 2142),
	        new Quest("暗闇の王", 11, 3026),
	    ]),

	    new Area("陽炎の塔", [
	        new Quest("幻影の回廊", 9, 2378), new Quest("陽光の間", 9, 1768),
	        new Quest("陽炎の騎士", 9, 2724), new Quest("炎と光の舞", 9, 2247),
	        new Quest("赤の守護龍", 11, 3652),
	    ]),
	    new Area("極夜の塔", [
	        new Quest("陽を知らぬ道", 9, 2327), new Quest("陰影の間", 9, 1796),
	        new Quest("極夜の騎士", 9, 2724), new Quest("誘惑の宴", 9, 2415),
	        new Quest("青の守護龍", 11, 3624),
	    ]),
	    new Area("森羅の塔", [
	        new Quest("三龍の集い", 9, 2443), new Quest("大地の間", 9, 1687),
	        new Quest("森羅の騎士", 9, 2753), new Quest("火中の大輪", 9, 2137),
	        new Quest("緑の守護龍", 11, 3070),
	    ]),
	    new Area("聖者の墓 -深層-", [
	        new Quest("名もなき英霊", 10, 3300), new Quest("亡者の辿る道", 10, 3000),
	        new Quest("冥府の門", 10, 3300), new Quest("永遠の安らぎ", 10, 3300),
	        new Quest("冥界の王", 12, 5000),
	    ]),

	    new Area("ヒュペリオ溶岩河", [
	        new Quest("燃え盛る河", 10, 4100), new Quest("紅玉の祭壇", 10, 3500),
	        new Quest("溶岩洞窟", 10, 5100), new Quest("炎に愛された蛇", 10, 4000),
	        new Quest("火を統べる龍", 12, 6400),
	    ]),
	    new Area("オケアーノ大瀑布", [
	        new Quest("悠久の滝", 10, 4600), new Quest("蒼玉の祭壇", 10, 3600),
	        new Quest("滝壺の大渦", 10, 5200), new Quest("深海へ誘うもの", 10, 4000),
	        new Quest("深海の大海龍", 12, 5800),
	    ]),
	    new Area("クローノス大密林", [
	        new Quest("暗黒の密林", 10, 4600), new Quest("碧玉の祭壇", 10, 3300),
	        new Quest("秘境への入り口", 10, 5500), new Quest("楽園の妖精", 10, 4000),
	        new Quest("太古の守護龍", 12, 6000),
	    ]),
	    new Area("レア・テミス寺院", [
	        new Quest("龍神の棲む地", 11, 4682), new Quest("黄玉の祭壇", 11, 4682),
	        new Quest("祈りの間", 11, 5274), new Quest("微笑みの代償", 11, 4300),
	        new Quest("神を冠する龍", 14, 5980),
	    ]),
	    new Area("クレイアス監獄", [
	        new Quest("悪意の集う地", 11, 4200), new Quest("紫水晶の祭壇", 11, 4046),
	        new Quest("地下への古井戸", 11, 5572), new Quest("闇を纏う魔女", 11, 4291),
	        new Quest("奈落の処刑龍", 14, 6100),
	    ]),
	    new Area("天へと続く塔", [
	        new Quest("下層の門番", 12, 6112), new Quest("やすらぎ箱庭", 12, 3838),
	        new Quest("白蛇の道", 12, 4020), new Quest("神界への扉", 12, 4370),
	        new Quest("美しきもの", 15, 6123),
	    ]),
	    new Area("天上の海原", [
	        new Quest("白雲の海", 12, 4821), new Quest("天海の双玉", 12, 5633),
	        new Quest("雲海の歌姫", 12, 4593), new Quest("空と海の守護者", 12, 5354),
	        new Quest("天海神", 15, 6400),
	    ]),

	    new Area("ヴェスティーア大空洞", [
	        new Quest("底なしの大穴", 13, 6431), new Quest("地底の大遺跡", 13, 5400),
	        new Quest("灼熱の地底湖", 13, 5500), new Quest("大地の中心", 13, 5200),
	        new Quest("マントルの溶岩龍", 16, 8100),
	    ]),
	    new Area("プローセル凍土", [
	        new Quest("凍てつく大地", 13, 6100), new Quest("樹氷の森", 13, 5700),
	        new Quest("氷ついた城", 13, 6000), new Quest("雲穿つ氷山", 13, 4900),
	        new Quest("氷獄の結晶龍", 16, 8000),
	    ]),
	    new Area("マルースクレーター", [
	        new Quest("円状の大山脈", 13, 6900), new Quest("山穿つ大洞窟", 13, 5700),
	        new Quest("星降りの樹海", 13, 5500), new Quest("龍の巣", 13, 4800),
	        new Quest("星砕く岩砕龍", 16, 7600),
	    ]),
	    new Area("空中都市ジュピテル", [
	        new Quest("空に浮かぶ島", 14, 6800), new Quest("棄てられた都市", 14, 6600),
	        new Quest("裁きの爪痕", 14, 6300), new Quest("孤高の廃城", 14, 5300),
	        new Quest("大空の雷帝龍", 17, 8800),
	    ]),
	    new Area("ジュノース島", [
	        new Quest("禁忌の島", 14, 7500), new Quest("骸の都", 14, 5700),
	        new Quest("悪夢の具現", 14, 6400), new Quest("朽ち果てた祭壇", 14, 5900),
	        new Quest("破滅の混沌龍", 17, 8900),
	    ]),
	    new Area("星空の神域", [
	        new Quest("神を守りし龍", 14, 6300), new Quest("豊穣の神", 14, 6700),
	        new Quest("戦いの神", 14, 6900), new Quest("神王の妃", 14, 8700),
	        new Quest("神々の王", 17, 13000),
	    ]),

	    new Area("伝説の大地", [
	        new Quest("天元の黒龍", 99, 24904),
	    ]),

	];

	this.technich = [
	    new Area("豊穣の大地", [
	        new Quest("新たなる旅路", 10, 1740), new Quest("木漏れ日の中で", 10, 2242),
	        new Quest("森の獣姫", 10, 1806), new Quest("角龍海道", 10, 1781),
	        new Quest("大地を守る砦龍", 13, 2570),
	    ]),
	    new Area("氷の大迷宮", [
	        new Quest("白銀の迷路", 10, 1704), new Quest("冷獄の歌い手", 10, 1838),
	        new Quest("美しき麗獣", 10, 2051), new Quest("忍び寄る顎門", 10, 1842),
	        new Quest("噛み砕くもの", 13, 2900),
	    ]),
	    new Area("紅蓮街道", [
	        new Quest("紅く染まる道", 10, 1900), new Quest("紅き道と紅き蛇", 10, 2000),
	        new Quest("孤高の獅子", 10, 2104), new Quest("灼熱遊戯", 10, 1944),
	        new Quest("燃え盛る玩具龍", 13, 2800),
	    ]),
	    new Area("名も信仰も無き神殿", [
	        new Quest("忘れられた宝物", 11, 2705), new Quest("彷徨える翼", 11, 2683),
	        new Quest("雷獣の咆哮", 11, 2275), new Quest("悪意無き猛襲", 11, 2591),
	        new Quest("滅びを巡る聖獣龍", 14, 3765),
	    ]),
	    new Area("宵闇の森", [
	        new Quest("死を誘う紫水晶", 11, 2610), new Quest("森に潜む魔女", 11, 2618),
	        new Quest("霧と闇の冥獣", 11, 2650), new Quest("本の中の道化龍", 11, 2596),
	        new Quest("終わりなき悪夢", 14, 3880),
	    ]),
	    new Area("深淵の魔王城", [
	        new Quest("呪われし宝石達", 12, 2840), new Quest("柔肌と血染めの鱗", 12, 2901),
	        new Quest("扉の守護獣", 12, 2905), new Quest("傀儡の龍", 12, 2701),
	        new Quest("甦りし暗黒の王", 15, 4003),
	    ]),

	    new Area("樹水の祠", [
	        new Quest("木と水の双玉", 12, 3215), new Quest("大花の妖精", 12, 3100),
	        new Quest("水花の双獣", 12, 3115), new Quest("双魚の間", 12, 3000),
	        new Quest("祠の砦龍", 15, 4238),
	    ]),
	    new Area("水火の祠", [
	        new Quest("水と火の双玉", 12, 3140), new Quest("謳う人魚", 12, 3060),
	        new Quest("氷炎の双獣", 12, 2870), new Quest("2頭の火玩龍", 12, 2868),
	        new Quest("祠の鮫龍", 15, 3742),
	    ]),
	    new Area("炎樹の祠", [
	        new Quest("火と木の双玉", 12, 3231), new Quest("炎の大蛇", 12, 3439),
	        new Quest("炎樹の双獣", 12, 3210), new Quest("立ち塞がる幼龍", 12, 2870),
	        new Quest("祠の玩炎龍", 15, 4446),
	    ]),
	    new Area("三界の神殿", [
	        new Quest("赤く青い緑の宝珠", 13, 2942), new Quest("乙女達のワルツ", 13, 3294),
	        new Quest("三獣乱舞", 13, 3629), new Quest("三界の扉", 13, 3637),
	        new Quest("三界の龍", 16, 4850),
	    ]),

	    new Area("ヒュプノ原生林", [
	        new Quest("眠りの森の花龍", 13, 2885), new Quest("風の妖精", 13, 2825),
	        new Quest("古の龍兵", 13, 3035), new Quest("緑の巨人", 13, 3066),
	        new Quest("風雲を司る者", 16, 4425),
	    ]),
	    new Area("ネレウスの入り江", [
	        new Quest("入江の海龍", 13, 3150), new Quest("水精の誘い", 13, 2765),
	        new Quest("海辺の狩人", 13, 3228), new Quest("入江の守護神", 13, 3094),
	        new Quest("海神の使い", 16, 4384),
	    ]),
	    new Area("ヘーメラウ火山地帯", [
	        new Quest("火を貪る龍", 13, 3053), new Quest("怒りに燃える瞳", 13, 2862),
	        new Quest("不死鳥を宿す者", 13, 3039), new Quest("火！火！火！！", 13, 2950),
	        new Quest("炎と怒りの化身", 16, 4500),
	    ]),
	    new Area("アイテール砂漠", [
	        new Quest("砂上のハンター", 13, 3521), new Quest("流砂の先に", 13, 2870),
	        new Quest("砂漠の地下神殿", 13, 3360), new Quest("光の守護騎兵", 13, 3204),
	        new Quest("ランプの魔神", 16, 4765),
	    ]),
	    new Area("タロス奈落穴", [
	        new Quest("奈落の月", 13, 3302), new Quest("死の片鱗", 13, 2841),
	        new Quest("堕ちた龍騎士", 13, 2985), new Quest("大穴の殲滅者", 13, 3357),
	        new Quest("死と闇と絶望", 16, 4893),
	    ]),
	    new Area("イーリスの虹の丘", [
	        new Quest("愛と美の楽園", 14, 4122), new Quest("輝く丘", 14, 4080),
	        new Quest("憩いの泉", 14, 4318), new Quest("女神の騎士", 14, 4133),
	        new Quest("楽園の女神", 17, 6706),
	    ]),

	    new Area("封印の塔", [
	        new Quest("樹木の扉", 12, 2561), new Quest("水氷の扉", 12, 2567),
	        new Quest("火炎の扉", 12, 2570), new Quest("陰陽の扉", 12, 2010),
	        new Quest("封印の主", 15, 3450),
	    ]),
	    new Area("風樹の塔", [
	        new Quest("疾風の鋭爪", 13, 805), new Quest("暴風の回廊", 13, 990),
	        new Quest("嵐槍の騎士", 13, 1650), new Quest("水纏う賢馬", 13, 850),
	        new Quest("乱れ舞う花吹雪", 16, 2200),
	    ]),
	    new Area("水氷の塔", [
	        new Quest("忍び寄る魔手", 13, 865), new Quest("鏡水の回廊", 13, 1100),
	        new Quest("神威の騎士", 13, 1600), new Quest("灼熱の御霊", 13, 800),
	        new Quest("海を裂く大槍", 16, 2100),
	    ]),
	    new Area("猛炎の塔", [
	        new Quest("燃え盛る大翼", 13, 820), new Quest("憎悪の炎", 13, 1050),
	        new Quest("炎翼の騎士", 13, 1700), new Quest("妖樹の計略", 13, 1000),
	        new Quest("美しき炎剣", 16, 1900),
	    ]),
	    new Area("魔石龍の大洞窟", [
	        new Quest("蒼石の飛龍", 40, 13200), new Quest("翠石の頑龍", 40, 13500),
	        new Quest("緋石の刃龍", 40, 14300), new Quest("紫石の鋼龍", 40, 13200),
	        new Quest("虹石の魔龍", 40, 13000),
	    ]),
	    new Area("聖獣達の楽園", [
	        new Quest("天極の黄龍", 99, 22079),
	    ]),
	];

	this.special = [
	    new Area("ゲリラ系", [
	        new Quest("メタドラ", 15, 900), new Quest("カラメタ系", 20, 900),
	        new Quest("ゴルドラ", 20, 1200), new Quest("チョキメタ系", 50, 2100),
	        new Quest("ペンドラの里", 20, 638),
	    ]),
	    new Area("曜日ダンジョン", [
	        new Quest("3色の番人(火)", 25, 3883), new Quest("虹の番人(火)", 30, 2831),
	        new Quest("仮面の間(水)", 10, 850), new Quest("仮面の間上級(水)", 25, 1932),
	        new Quest("緑龍の巣窟(木)", 10, 323), new Quest("精霊の祠(金)", 10, 400),
	        new Quest("精霊の祠上級(金)", 25, 244), new Quest("3色初級(土日)", 10, 400),
	        new Quest("3色中級(土日)", 15, 1600), new Quest("3色上級(土日)", 20, 5350),
	        new Quest("3色超級(土日)", 25, 9100, 10800),
	    ]),
	    new Area("降臨系", [
	        new Quest("ヘラ降臨", 40, 12000), new Quest("勇者降臨", 50, 6108),
	        new Quest("ゼウス降臨", 50, 10000), new Quest("女神(地獄)", 50, 5310),
	        new Quest("女神(超地獄)", 50, 6084), new Quest("大泥棒(地獄)", 50, 6320),
	        new Quest("大泥棒(超地獄)", 50, 9641), new Quest("ヘライース(地獄)", 50, 18365),
	        new Quest("ヘライース(超地獄)", 50, 25863), new Quest("サタン降臨", 50, 11850),
	        new Quest("ゼウスディオス降臨", 50, 10698), new Quest("ドラりん(超級)", 30, 2448),
	        new Quest("ドラりん(地獄)", 50, 3700), new Quest("ヘラウルズ(地獄)", 50, 9771),
	        new Quest("ヘラウルズ(超地獄)", 50, 15977), new Quest("大天狗(超級)", 30, 6351),
	        new Quest("大天狗(地獄)", 50, 9488), new Quest("アテナ(超地獄)", 50, 14120),
	        new Quest("ラグオデA(超級)", 30, 4800), new Quest("ラグオデA(地獄)", 50, 9630),
	        new Quest("タケミナカタ(地獄)", 50, 7000), new Quest("タケミナカタ(超地獄)", 50, 11000),
	        new Quest("ベルゼブブ降臨", 50, 15300),
	    ]),
	    new Area("歴龍", [
	        new Quest("歴龍中級", 15, 2000), new Quest("歴龍上級", 25, 8000),
	        new Quest("歴龍超級", 40, 16000), new Quest("歴龍地獄級", 50, 20000),
	    ]),
	    new Area("戦国龍", [
	        new Quest("戦国龍中級", 15, 1500), new Quest("戦国龍上級", 25, 3500),
	        new Quest("戦国龍超級", 40, 13000), new Quest("戦国龍地獄級", 50, 18500),
	    ]),
	    new Area("神秘龍", [
	        new Quest("神秘龍中級", 15, 1100), new Quest("神秘龍上級", 25, 2500),
	        new Quest("神秘龍超級", 40, 8220), new Quest("神秘龍地獄級", 50, 12300),
	    ]),

	    new Area("ポリンの塔", [
	        new Quest("ポリンと！中級", 15, 700), new Quest("ポリンと！上級", 25, 4100),
	        new Quest("ポリンと！超級", 40, 8500),
	    ]),
	    new Area("太鼓の達人", [
	        new Quest("ドン！かんたん", 10, 230), new Quest("ドン！ふつう", 15, 500),
	        new Quest("ドン！むずかしい", 40, 10000), new Quest("ドン！おに", 50, 13600),
	    ]),
	    new Area("ECOコラボ", [
	        new Quest("タイニー島中級", 15, 893), new Quest("タイニー島上級", 25, 3444),
	        new Quest("タイニー島超級", 40, 7013), new Quest("タイニー島天国", 50, 11145),
	    ]),
	    new Area("ぐんまコラボ", [
	        new Quest("ぐんまけん中級", 15, 510), new Quest("ぐんまけん上級", 25, 3500),
	        new Quest("ぐんまけん超級", 40, 6100), new Quest("ぐんまけん地獄級", 50, 10200),
	    ]),
	    new Area("CDコラボ", [
	        new Quest("禁域の間中級", 15, 2000), new Quest("禁域の間上級", 25, 5300),
	        new Quest("禁域の間超級", 40, 11000), new Quest("禁域の間地獄級", 50, 15600),
	    ]),
	    new Area("ケリ姫コラボ", [
	        new Quest("姫の庭園中級", 15, 767), new Quest("姫の庭園上級", 25, 4890),
	        new Quest("姫の庭園超級", 40, 7375), new Quest("姫の庭園地獄級", 50, 11965),
	    ]),
	    new Area("ガンホーコラボ", [
	        new Quest("実りの祠中級", 15, 1427), new Quest("実りの祠上級", 25, 5595),
	        new Quest("実りの祠超級", 40, 10777), new Quest("実りの祠地獄級", 50, 14611),
	    ]),
	    new Area("神羅万象チョココラボ", [
	        new Quest("希望の炎中級", 10, 452), new Quest("希望の炎上級", 15, 1363),
	        new Quest("希望の炎超級", 40, 7668), new Quest("希望の炎地獄級", 50, 10835),
	    ]),
	    new Area("カピバラさんコラボ", [
	        new Quest("ミドリノ草原　梅", 10, 396), new Quest("ミドリノ草原　竹", 15, 1025),
	        new Quest("ミドリノ草原　松", 40, 6747), new Quest("ミドリノ草原　極", 50, 9895),
	    ]),
	    new Area("エヴァコラボ", [
	        new Quest("使徒襲来中級", 15, 793), new Quest("使徒襲来上級", 25, 2619),
	        new Quest("使徒襲来超級", 40, 9510), new Quest("使徒襲来地獄級", 50, 13575),
	    ]),
	    new Area("CoCコラボ", [
	        new Quest("勝利の礎中級", 15, 700), new Quest("勝利の礎上級", 25, 2524),
	        new Quest("勝利の礎超級", 40, 12500), new Quest("勝利の礎地獄級", 50, 18500),
	    ]),
	    new Area("グルーヴコースターコラボ", [
	        new Quest("星降る道中級", 15, 670), new Quest("星降る道上級", 25, 2500),
	        new Quest("星降る道超級", 40, 15900), new Quest("星降る道宇宙", 50, 22300),
	    ]),
	    new Area("高岡市コラボ", [
	        new Quest("大仏降臨？中級", 15, 2300), new Quest("大仏降臨？上級", 25, 4400),
	        new Quest("大仏降臨？超級", 40, 12500), new Quest("大仏降臨？祭", 50, 18000),
	    ]),
	    new Area("アイルーでバザールコラボ", [
	        new Quest("仕入れ中級", 15, 400), new Quest("仕入れ上級", 25, 1100),
	        new Quest("仕入れ超級", 40, 4250), new Quest("仕入れG級", 50, 6000),
	    ]),
	    new Area("新・神羅万象チョココラボ", [
	        new Quest("混沌の闇中級", 15, 800), new Quest("混沌の闇上級", 25, 2350),
	        new Quest("混沌の闇超級", 40, 13400), new Quest("混沌の闇地獄級", 50, 19500),
	    ]),

	    new Area("アンケートダンジョン", [
	        new Quest("アンケートD初級", 15, 500), new Quest("アンケートD中級", 15, 1700),
	        new Quest("アンケートD上級", 15, 3500),
	    ]),
	    new Area("伝説龍ラッシュ", [
	        new Quest("伝説龍中級", 15, 2270), new Quest("伝説龍上級", 25, 6800),
	        new Quest("伝説龍超級", 40, 18000), new Quest("伝説龍地獄級", 50, 23800),
	    ]),
	    new Area("天空龍ラッシュ", [
	        new Quest("天空龍中級", 15, 3620), new Quest("天空龍上級", 25, 10855),
	        new Quest("天空龍超級", 40, 26050), new Quest("天空龍地獄級", 50, 29875),
	    ]),
	    new Area("光届かぬ悪魔の巣", [
	        new Quest("光無し初級", 15, 200), new Quest("光無し中級", 15, 700),
	        new Quest("光無し上級", 15, 2600),
	    ]),
	    new Area("ブレイカーズ", [
	        new Quest("ブレイカーズ初級", 15, 500), new Quest("ブレイカーズ中級", 15, 1600),
	        new Quest("ブレイカーズ上級", 15, 3500),
	    ]),
	    new Area("ジュエルの搭", [
	        new Quest("ジュエルの搭中級", 15, 750), new Quest("ジュエルの搭上級", 15, 1300),
	        new Quest("ジュエルの搭超級", 15, 3400),
	    ]),

	];
};
var questlist = new QuestList();

function initList() {
	var normalList = document.getElementById("quest11").options;
	var specialList = document.getElementById("quest21").options;
	var technichList = document.getElementById("quest31").options;
	for ( var i = 0; i < questlist.normal.length; i++) {
		if (questlist.normal[i] != undefined) {
			var addOption = new Option();
			addOption.text = questlist.normal[i].name;
			addOption.value = "n" + i;
			normalList[normalList.length] = addOption;
		}
	}
	for ( var i = 0; i < questlist.special.length; i++) {
		if (questlist.special[i] != undefined) {
			var addOption = new Option();
			addOption.text = questlist.special[i].name;
			addOption.value = "s" + i;
			specialList[specialList.length] = addOption;
		}
	}
	for ( var i = 0; i < questlist.technich.length; i++) {
		if (questlist.technich[i] != undefined) {
			var addOption = new Option();
			addOption.text = questlist.technich[i].name;
			addOption.value = "t" + i;
			technichList[technichList.length] = addOption;
		}
	}
}

function getArea(value) {
	var type = value.charAt(0);
	var index = value.substring(1);
	var ret = null;
	switch (type) {
	case "n":
		ret = questlist.normal[index];
		break;
	case "s":
		ret = questlist.special[index];
		break;
	case "t":
		ret = questlist.technich[index];
		break;
	}
	if (ret == null || ret == undefined)
		return null;
	return ret;
}

function getQuest(value) {
	var type = value.charAt(0);
	var index = value.substring(1).split("-");
	if (index.length < 2)
		return null;
	var index1 = index[0];
	var index2 = index[1];
	var ret = null;
	switch (type) {
	case "n":
		ret = questlist.normal[index1].quest[index2];
		break;
	case "s":
		ret = questlist.special[index1].quest[index2];
		break;
	case "t":
		ret = questlist.technich[index1].quest[index2];
		break;
	}
	if (ret == null || ret == undefined)
		return null;
	return ret;
}