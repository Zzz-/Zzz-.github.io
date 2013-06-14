var QuestList = function() {
	this.normal = [
	    new Area("旅立ちの塔", [
	    	new Quest("旅立ちの塔1", 3, 35),
	    	new Quest("旅立ちの塔2", 3, 35),
	    	new Quest("旅立ちの塔3", 5, 35),
	    ]),
	    new Area("火のダンジョン", [
	        new Quest("火のダンジョン1", 3, 50),
	    	new Quest("火のダンジョン2", 3, 100),
	    	new Quest("火のダンジョン3", 5, 200),
		]),
		new Area("仮追加", [
			new Quest("ヒュペリオ溶岩河5", 12, 6400),
			new Quest("クローノス大密林3", 10, 5500),
			new Quest("天へと続く塔1", 12, 6112),
			new Quest("天上の海原5", 15, 6400),
			new Quest("マルースクレーター1", 13, 6900),
			new Quest("ジュノース島1", 14, 7500),
			new Quest("星空の神域4", 14, 6700),
			new Quest("星空の神域5", 17, 13000),
		]),
		];
	
	this.special = [
	    new Area("ゲリラ", [
			new Quest("メタドラ", 15, 900),
			new Quest("カラメタ", 20, 900),
			new Quest("ゴルドラ", 20, 1200),
			new Quest("チョキメタ", 50, 2000),
		]),
	    new Area("アンケートダンジョン", [
			new Quest("アンケートD初級", 15, 500),
			new Quest("アンケートD中級", 15, 1700),
			new Quest("アンケートD上級", 15, 3500),
		]),
	    new Area("歴龍", [
			new Quest("歴龍中級", 15, 2000),
			new Quest("歴龍上級", 25, 8000),
			new Quest("歴龍超級", 40, 16000),
			new Quest("歴龍地獄級", 50, 20000),
		]),
	    new Area("戦国龍", [
			new Quest("戦国龍中級", 15, 1500),
			new Quest("戦国龍上級", 25, 4000),
			new Quest("戦国龍超級", 40, 13000),
			new Quest("戦国龍地獄級", 50, 20000),
		]),
	    ];
	
	this.technich = [
	    new Area("豊穣の大地", [
			new Quest("豊穣の大地1", 10, 1740),
			new Quest("豊穣の大地2", 10, 2242),
			new Quest("豊穣の大地3", 10, 1806),
			new Quest("豊穣の大地4", 10, 1781),
			new Quest("豊穣の大地5", 13, 2570),
		]),
		new Area("仮追加", [
			new Quest("タロス奈落穴5", 16, 3357),
			new Quest("イーリスの虹の丘5", 17, 6706),
		]),
	    ];
};
var questlist = new QuestList();

function initList() {
	var normalList = document.getElementById("quest11").options;
	var specialList = document.getElementById("quest21").options;
	var technichList = document.getElementById("quest31").options;
	for(var i=0; i<questlist.normal.length; i++){
		if(questlist.normal[i] != undefined){
			var addOption = new Option();
			addOption.text = questlist.normal[i].name;
			addOption.value = "n" + i;
			normalList[normalList.length] = addOption;
		}
	}
	for(var i=0; i<questlist.special.length; i++){
		if(questlist.special[i] != undefined){
			var addOption = new Option();
			addOption.text = questlist.special[i].name;
			addOption.value = "s" + i;
			specialList[specialList.length] = addOption;
		}
	}
	for(var i=0; i<questlist.technich.length; i++){
		if(questlist.technich[i] != undefined){
			var addOption = new Option();
			addOption.text = questlist.technich[i].name;
			addOption.value = "t" + i;
			technichList[technichList.length] = addOption;
		}
	}
}

function getArea(value){
	var type = value.charAt(0);
	var index = value.substring(1);
	var ret = null;
	switch(type){
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
	if(ret == null || ret == undefined) return null;
	return ret;
}

function getQuest(value){
	var type = value.charAt(0);
	var index = value.substring(1).split("-");
	if(index.length < 2) return null;
	var index1 = index[0];
	var index2 = index[1];
	var ret = null;
	switch(type){
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
	if(ret == null || ret == undefined) return null;
	return ret;
}