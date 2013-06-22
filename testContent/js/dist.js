function getSmallestStaminaQuest(list){
	var ret = new Quest("", 1000, 0);
	for(var i=0; i<list.length; i++){
		if(ret.stamina > list[i].stamina)
			ret = list[i];
	}
	return ret;
}

function sortByEXP(list){
	if (list.length > 2){
		list.sort( function(a,b){
			if(a.exp_average < b.exp_average) return -1;
			if(a.exp_average > b.exp_average) return 1;
			return 0;
		});
	}
	return list;
}

function deepcopy(list){
	var ret = new Array(list.length);
	for(var i=0; i<list.length; i++)
		ret[i] = list[i];
	return ret;
}

function distribute(mainQuest, subQuest, stamina, rest_exp, rankup, mode){
	if(mainQuest == null || mainQuest == undefined || mainQuest.length == 0) return;
	// 価値の配列
	var score = new Array(stamina+1);
	for(var i=1; i<score.length; i++)
		score[i] = -1;
	score[0] = 0;
	// 経験値の配列
	var exp = new Array(stamina+1);
	for(var i=1; i<exp.length; i++)
		exp[i] = -1;
	exp[0] = 0;
	// EXPの低い順に並び替えして結合
	var quests = sortByEXP(mainQuest);
	if(subQuest != null && subQuest != undefined && subQuest.length != 0)
		quests = quests.concat(sortByEXP(subQuest));
	// クエストのスコアについて 主目的：必要スタミナと同等 副目的：1
	var q_score = new Array(quests.length);
	for(var i=0; i<q_score.length; i++){
		if(i < mainQuest.length) q_score[i] = quests[i].stamina;
		else q_score[i] = 1;
	}
	// 各クエストを当てはめた際、最後に加えられた要素を記録
	var last_added = new Array(quests.length);
	last_added[0] = new Array(stamina+1);
	for(var i=0; i<last_added[0].length; i++)
		last_added[0][i] = -1;
	
	// クエストを当てはめていく
	for(var q=0; q<quests.length; q++){
		// 直前のlast_addedをコピー
		if(q > 0)
			last_added[q] = deepcopy(last_added[q-1]);
		for(var i=0; i<=stamina-quests[q].stamina; i++){
			if(score[i] >= 0 && exp[i] < rest_exp){
				var i2 = i + quests[q].stamina;
				if(rankup || exp[i] + quests[q].exp_average < rest_exp){
					if(score[i2] <= score[i] + q_score[q]){
						score[i2] = score[i] + q_score[q];
						last_added[q][i2] = q;
						exp[i2] = exp[i] + quests[q].exp_average;
					}
				}
			}
		}
	}
	
	// 結果判定
	var best = 0;
	switch (mode) {
	case "STAMINA": // 端数スタミナが最も少ないもの
		for(var i=score.length-1; i>=0; i--){
			if(score[i] >= 0){
				best = i;
				break;
			}
		}
		break;
	case "EXP":
		var largest = 0;
		for(var i=exp.length-1; i>=0; i--){
				if(exp[i] > largest){
					largest = exp[i];
					best = i;
				}
		}
		break;
	case "SCORE":
	default:
		var best_score = 0;
		var _rankup = false;
		var smallest_stamina = getSmallestStaminaQuest(mainQuest).stamina;
		
		for(var i=score.length-1; i>=0; i--){
			if(i <= score.length - smallest_stamina && best_score != 0) break;
			if(exp[i] > rest_exp){
				if(!_rankup){
					best_score = score[i];
					best = i;
					_rankup = true;
				} else if(score[i] > best_score){
					best_score = score[i];
					best = i;
				}
			} else if(!_rankup && score[i] > best_score){
				best_score = score[i];
				best = i;
			}
		}
		break;
	}
	
	var ret = new Plan(stamina, stamina, rest_exp);
	var addList = new Array(0);
	var level = last_added[last_added.length-1][best];
	while(score[best] > 0){
		var qadd = quests[last_added[level][best]];
		addList[addList.length] = qadd;
		best -= qadd.stamina;
	}
	for(var i=addList.length-1; i>=0; i--)
		ret.add(addList[i]);
	return ret;
}