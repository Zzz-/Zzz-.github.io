var QuestList = function() {
	this.normal = [
		new Quest("旅立ちの塔1", 3, 35),
		new Quest("旅立ちの塔2", 3, 35),
		new Quest("旅立ちの塔3", 5, 35),
		new Quest("火のダンジョン1", 3, 50),
		new Quest("火のダンジョン2", 3, 100),
		new Quest("火のダンジョン3", 5, 200),
		];
	
	this.special = [
		new Quest("メタドラ", 15, 900),
		new Quest("カラメタ", 20, 900),
		new Quest("ゴルドラ", 20, 1200),
		new Quest("チョキメタ", 50, 2000),
		new Quest("歴龍中級", 15, 2000),
		new Quest("歴龍上級", 25, 8000),
		new Quest("歴龍超級", 40, 16000),
		new Quest("歴龍地獄級", 50, 20000),
	    ];
	
	this.technich = [
		new Quest("豊穣の大地1", 10, 1740),
		new Quest("豊穣の大地2", 10, 2242),
		new Quest("豊穣の大地3", 10, 1806),
		new Quest("豊穣の大地4", 10, 1781),
		new Quest("豊穣の大地5", 13, 2570),
	    ];
};
var questlist = new QuestList();

function initList() {
	var normalList = document.getElementById("quest1").options;
	var specialList = document.getElementById("quest2").options;
	var technichList = document.getElementById("quest3").options;
	for(var i=0; i<questlist.normal.length; i++){
		if(questlist.normal[i] != undefined){
			var addOption = new Option();
			addOption.text = questlist.normal[i].toStringOption();
			addOption.value = "n" + i;
			normalList[normalList.length] = addOption;
		}
	}
	for(var i=0; i<questlist.special.length; i++){
		if(questlist.special[i] != undefined){
			var addOption = new Option();
			addOption.text = questlist.special[i].toStringOption();
			addOption.value = "s" + i;
			specialList[specialList.length] = addOption;
		}
	}
	for(var i=0; i<questlist.technich.length; i++){
		if(questlist.technich[i] != undefined){
			var addOption = new Option();
			addOption.text = questlist.technich[i].toStringOption();
			addOption.value = "t" + i;
			technichList[technichList.length] = addOption;
		}
	}
}

function getQuest(value){
	var type = value.charAt(0);
	var index = parseInt(value.substring(1));
	switch(type){
	case "n":
		return questlist.normal[index];
	case "s":
		return questlist.special[index];
	case "t":
		return questlist.technich[index];
	}
	return null;
}