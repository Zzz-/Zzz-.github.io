/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** アイシャのデータ型 */
var Aisha = function () {
	this.jobs = [
	  new Job("アイシャ", "aisha", "Aisha/Aisha.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Aisha/icon", "url"),
      new Active("覚醒", "Awaking", "00_awaking.png"),
      new Active("ライトニングボルト", "Lightning Bolt", "Aisha/Aisha04_Lightning Bolt.png"),
      new Active("バインディングサークル", "Binding Circle", "Aisha/Aisha05_Binding Circle.png"),
      new Active("フレアスクリュー", "Pyro Gust", "Aisha/Aisha03_Pyro Gust.png"),
      new Active("アイスストーム", "Ice Storm", 36, 1, 0, "", "Aisha/Aisha29_Ice Storm.png", "LgUnqUXFVMw"),
      new Active("フレアストーム", "Gust Storm", "Aisha/Aisha06_Gust Storm.png"),
	  ]),

	  new Job("ハイマジシャン/エレメンタルマスター", "em", "Aisha/ElementalMaster.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Aisha/icon", "url"),
			new Active("サイクロン", "Cyclone", "Aisha/Aisha13_Cyclone.png"),
			new Active("マジックミサイル", "Magic Missile", "Aisha/Aisha09_Magic Missile.png"),
			new Active("チェーンライトニング", "Chain Lightning", 35, 1, 0, "", "Aisha/Aisha30_Chain Lightning.png", "jgjTd_fdJHs"),
			new Active("ブレイズステップ", "Blaze Step", "Aisha/Aisha12_Blaze Step.png"),
			new Active("ブリザードシャワー", "Blizzard Shower", "Aisha/Aisha10_Blizzard Shower.png"),
			new Active("チェインバースト", "Chain Burst", "Aisha/Aisha08_Chain Burst.png"),
			new Active("ウォーターキャノン", "Water Cannon", "Aisha/Aisha31_Water Cannon.png"),
			new Active("メテオシャワー", "Meteor Shower", "Aisha/Aisha14_Meteor Shower.png"),
			new Active("ライトニングシャワー", "Lightning Shower", "Aisha/Aisha32_Lightning Shower.png"),
			new Active("エレメンタルストーム", "Elemental Storm", 90, 1, 0, "動画募集中", "Aisha/AishaHA01_Elemental Storm.png", ""),
	  ]),

	  new Job("ダークマジシャン/ヴォイドプリンセス", "vp", "Aisha/VoidPrincess.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Aisha/icon", "url"),
			new Active("ダーククラウド", "Poisonous Cloud", "Aisha/Aisha16_Poisonous Cloud.png"),
			new Active("デスフィールド", "Death Field", "Aisha/Aisha17_Death Field.png"),
			new Active("ヘルストーン", "Hell Stone", "Aisha/Aisha15_Hell Stone.png"),
			new Active("ヘルドロップ", "Hell Drop", "Aisha/Aisha20_Hell Drop.png"),
			new Active("エイジング", "Aging", "Aisha/Aisha18_Aging.png"),
			new Active("プラズマカッター", "Plasma Cutter", "Aisha/Aisha19_Plasma Cutter.png"),
			new Active("ファントムブリージング－ダークフォール", "Phantom Breathing - Dark Fall", "Aisha/Aisha21_Phantom Breathing.png"),
			new Active("ファントムブリージング－ダークホール", "Phantom Breathing - Dark Hole", 61, 2, 0, "", "Aisha/Aisha21a_Phantom Breathing.png", "osH6n1nDCOE"),
			new Active("アビスアンゴル", "Abyss Angkor", 132, 0, 0, "吸引開始まで", "Aisha/AishaHA02_Abyss Angkor.png", "IIAanrKtI8Q"),
	  ]),

	  new Job("バトルマジシャン/ディメンションウィッチ", "dw", "Aisha/DimensionWitch.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Aisha/icon", "url"),
			new Active("ギルティプレス", "Guillotine Press", "Aisha/Aisha24_Guillotine Press.png"),
			new Active("マジカルメイクアップ", "Magical Makeup", "Aisha/Aisha25_Magical Makeup.png"),
			new Active("スーパーノヴァ", "Super Nova", "Aisha/Aisha26_Super Nova.png"),
			new Active("エナジースポット", "Energy Spurt", "Aisha/Aisha23_Energy Spurt.png"),
			new Active("ヘビープレス", "Heavy Press", 38, 1, 0, "", "Aisha/Aisha22_Heavy Press.png", "dwZBD77mmGg"),
			new Active("インパクトハンマー", "Impact Hammer", 87, 2, 0, "", "Aisha/Aisha27_Impact Hammer.png", "T7vfwFqiFwA"),
			new Active("スクリュードライバー―トルネード", "Screw Driver – Tornado", 119, 2, 9, "", "Aisha/Aisha28_Screw Driver.png", "dMTyV6I-UnM"),
			new Active("スクリュードライバー―ドリラー", "Screw Driver – Driller", 119, 2, 25, "", "Aisha/Aisha28a_Screw Driver.png", "IvJU333saMk"),
			new Active("フェイトスペース", "Fate Space", "Aisha/AishaHA03_Fate Space.png"),
	  ]),
	  
	];
};

Aisha.prototype = new Chara;

var targetChara = new Aisha();