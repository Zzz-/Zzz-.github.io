var mainTarget;
var subTarget;

function init(){
	initList();
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
				} else if(isManyStone && bestPlan.stamina > testPlan.stamina)
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

