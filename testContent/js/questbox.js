function selectArea(num){
	var box1;
	var box2;
	switch(num){
	case 0:
		box1 = document.getElementById("quest11");
		box2 = document.getElementById("quest12").options;
		break;
	case 1:
		box1 = document.getElementById("quest21");
		box2 = document.getElementById("quest22").options;
		break;
	case 2:
		box1 = document.getElementById("quest31");
		box2 = document.getElementById("quest32").options;
		break;
	default:
		return;
	}
	var idvalue = box1.options[box1.selectedIndex].value;
	var area = getArea(idvalue);
	if(area != null || area != undefined){
		box2.length = 0;
		for(var i=0; i<area.quest.length; i++){
			var newOption = new Option();
			newOption.text = area.quest[i].toStringOption();
			newOption.value = idvalue + "-" + i;
			box2[box2.length] = newOption;
		}
	}
	
}


function addQuest(num) {
	alertMessage("");
	var fromBox;
	var toBox;
	saveCookie();

	switch (num) {
	case 0:
		toBox = document.getElementById("mainTarget");
		break;
	case 1:
		toBox = document.getElementById("subTarget");
		break;
	default:
		return;
	}
	switch (tabindex) {
	case 0:
		fromBox = document.getElementById("quest12");
		break;
	case 1:
		fromBox = document.getElementById("quest22");
		break;
	case 2:
		fromBox = document.getElementById("quest32");
		break;
	default:
		return;
	}

	if ((fromBox != null) && (toBox != null)) {
		if (fromBox.length < 1) {
			alertMessage("エラー:クエストがありません");
			return false;
		}
		if (fromBox.selectedIndex == -1) {
			alertMessage("警告:クエストを選択してください");
			return false;
		}
		if (num == 0 && toBox.length >= 5) {
			alertMessage("警告:主目的クエストが多すぎます");
			return false;
		}
		if (num == 1 && toBox.length >= 15) {
			alertMessage("警告:副目的クエストが多すぎます");
			return false;
		}
		while (fromBox.selectedIndex >= 0) {
			var newOption = new Option();
			newOption.text = fromBox.options[fromBox.selectedIndex].text;
			newOption.value = fromBox.options[fromBox.selectedIndex].value;
			if (!includeQuest(newOption)) {
				toBox.options[toBox.length] = newOption;
			} else
				alertMessage("既に登録されているクエストです");
			fromBox.selectedIndex = -1;
		}
	}
	return true;
}


function removeQuest(num) {
	alertMessage("");
	var box;

	switch (num) {
	case 0:
		box = document.getElementById("mainTarget");
		break;
	case 1:
		box = document.getElementById("subTarget");
		break;
	default:
		return;
	}

	if (box != null) {
		if (box.length < 1) {
			alertMessage("警告:クエストがありません");
			return false;
		}
		if (box.selectedIndex == -1) {
			alertMessage("警告:クエストを選択してください");
			return false;
		}
		while (box.selectedIndex >= 0) {
			box.remove(box.selectedIndex);
		}
	}
	return true;
}


function includeQuest(option) {
	var box1 = document.getElementById("mainTarget");
	var box2 = document.getElementById("subTarget");
	if (box1 != null) {
		for ( var i = 0; i < box1.options.length; i++) {
			if (box1.options[i].text == option.text
					&& box1.options[i].value == option.value)
				return true;
		}
	}
	if (box2 != null) {
		for ( var i = 0; i < box2.options.length; i++) {
			if (box2.options[i].text == option.text
					&& box2.options[i].value == option.value)
				return true;
		}
	}
	return false;
}