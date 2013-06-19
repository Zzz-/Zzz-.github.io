var mainTarget;
var subTarget;

function saveCookie() {
	var box1 = document.getElementById("mainTarget").options;
	var box2 = document.getElementById("subTarget").options;
	$.cookie('stamina', document.getElementById("stamina").value);
	$.cookie('maxstamina', document.getElementById("maxstamina").value);
	$.cookie('restexp', document.getElementById("restexp").value);
	var maintcookie = "";
	if(box1.length != 0){
		maintcookie = box1[0].value;
		for(var i=1; i<box1.length; i++)
			maintcookie += "," + box1[i].value;
	}
	$.cookie('maint', maintcookie);
	var subtcookie = "";
	if(box2.length != 0){
		subtcookie = box2[0].value;
		for(var i=1; i<box2.length; i++)
			subtcookie += "," + box2[i].value;
	}
	$.cookie('subt', subtcookie);
}

function loadCookie() {
	var box1 = document.getElementById("mainTarget").options;
	var optcookie1 = $.cookie('maint');
	var optionID1 = [];
	var box2 = document.getElementById("subTarget").options;
	var optcookie2 = $.cookie('subt');
	var optionID2 = [];
	document.getElementById('stamina').value = $.cookie('stamina');
	if (document.getElementById('stamina').value == "")
		document.getElementById('stamina').value = 0;
	document.getElementById('maxstamina').value = $.cookie('maxstamina');
	if (document.getElementById('maxstamina').value == "")
		document.getElementById('maxstamina').value = 20;
	document.getElementById('restexp').value = $.cookie('restexp');
	if (document.getElementById('restexp').value == "")
		document.getElementById('restexp').value = 10000;
	
	if(optcookie1 != undefined && optcookie1 != null)
		optionID1 = optcookie1.split(",");
	if(optcookie2 != undefined && optcookie2 != null)
		optionID2 = optcookie2.split(",");
	
	for(var i=0; i<optionID1.length; i++){
		var q = getQuest(optionID1[i]);
		if(q != undefined && q != null){
			var newOption = new Option();
			newOption.text = q.toStringOption();
			newOption.value = optionID1[i];
			box1[box1.length] = newOption;
		}
	}
	for(var i=0; i<optionID2.length; i++){
		var q = getQuest(optionID2[i]);
		if(q != undefined && q != null){
			var newOption = new Option();
			newOption.text = q.toStringOption();
			newOption.value = optionID2[i];
			box2[box2.length] = newOption;
		}
	}
}

function init(){
	initList();
	loadCookie();
}

function updateTarget(){
	var box1 = document.getElementById("mainTarget").options;
	var box2 = document.getElementById("subTarget").options;
	mainTarget = [];
	subTarget = [];
	for(var i=0; i<box1.length; i++)
		mainTarget[mainTarget.length] = getQuest(box1[i].value);
	for(var i=0; i<box2.length; i++)
		subTarget[subTarget.length] = getQuest(box2[i].value);
}

function calc(){
	alertMessage("");
	updateTarget();
	var mode = "SCORE";
	var stamina = parseInt(document.getElementById("stamina").value);
	var maxstamina = parseInt(document.getElementById("maxstamina").value);
	var restexp = parseInt(document.getElementById("restexp").value);
	var isManyStone = document.getElementById("jabu").checked;
	var stone = parseInt(document.getElementById("stoneNum").value);
	if(stamina < 0 || stamina > 400){
		alertMessage("エラー:スタミナの値が不正です");
		return;
	}
	if(maxstamina < 20 || maxstamina > 400){
		alertMessage("エラー:スタミナの最大値が不正です");
		return;
	}
	if(restexp <= 0 || restexp > 500000){
		alertMessage("エラー:残り経験値が不正です");
		return;
	}
	if(stone < 0 && !isManyStone){
		alertMessage("エラー:石の値が不正です");
		return;
	}
	if(mainTarget.length <= 0){
		alertMessage("主目的クエストがありません");
		return;
	}
	if(isManyStone) stone = -1;
	
	ResultHide();
	var bestPlan = distribute(mainTarget, subTarget, stamina, restexp, true, mode);
	var rankuped = false;
	if(bestPlan.rankup()){
		rankuped = true;
		if(!isManyStone){
			bestPlan.output();
			return;
		}
	}
	if(stone == 0){
		bestPlan.output();
		return;
	}
	
	var stonePlan;
	if(isManyStone)
		stonePlan = distribute(mainTarget, null, maxstamina, restexp, false, "SCORE");
	else
		stonePlan = distribute(mainTarget, subTarget, maxstamina, restexp, false, "STAMINA");
	
	var last_quest_exp = stonePlan.getLastQuest().exp_average;
	if(isManyStone)
		stone = (restexp / stonePlan.exp) + 1;
	
	var su = isManyStone ? stone : 1;
	var du = isManyStone ? -1 : 1;
	
	for(var use = su; use > 0 && use <= stone; use += du){
		var rest = restexp - stonePlan.exp * use + last_quest_exp;
		var firstPlan = distribute(mainTarget, subTarget, stamina, rest, true, mode);
		var testPlan = new Plan(stamina, maxstamina, restexp);
		testPlan.cat(firstPlan);
		var firststamina = firstPlan.rest_stamina;
		for(var i=0; i<use; i++){
			testPlan.useStone();
			testPlan.cat(stonePlan);
		}
		
		switch(mode) {
		case "EXP":
			if(bestPlan.exp < testPlan.exp)
				bestPlan = testPlan;
			break;
		case "SCORE":
		case "STAMINA":
		default:
			if(testPlan.rankup()){
				if(!rankuped){
					rankuped = true;
					bestPlan = testPlan;
				} else if(isManyStone && bestPlan.stamina > testPlan.stamina && firststamina < bestPlan.getLastQuest().stamina)
					bestPlan = testPlan;
				else if(!isManyStone && bestPlan.rest_stamina > testPlan.rest_stamina)
					bestPlan = testPlan;
			} else if(!rankuped && !isManyStone){
				if(bestPlan.rest_stamina > testPlan.rest_stamina)
					bestPlan = testPlan;
			}
			break;
		}
	}
	bestPlan.output();
	return;
}

