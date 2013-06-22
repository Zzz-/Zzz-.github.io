/* クエストのデータ型 */
var Quest = function(name, stamina, exp_row, exp_high) {
	this.name = name;
	this.stamina = parseInt(stamina);
	this.exp_row = parseInt(exp_row);
	if(exp_high == undefined) this.exp_high = parseInt(exp_row);
	else this.exp_high = parseInt(exp_high);
	this.exp_average = (this.exp_row + this.exp_high) / 2;
	if(stamina != 0)
		this.exp_efficiency = this.exp_average / this.stamina;
	else this.exp_efficiency = 0;
	this.isQuest = true;
//	alertMessage(this.above_exp);
};

/* クエストの演算と出力文字列 */
Quest.prototype = {
	toString : function(){
		var exp;
		if(this.exp_row == this.exp_high) exp = this.exp_row;
		else exp = this.exp_row + "～" + this.exp_high;
		return this.name + "[スタミナ:" + this.stamina + ", EXP:" + exp + "]";
	},
	toStringOption : function(){
		return this.name + "(" + this.stamina + ", " + this.exp_average + ")";
	}
};

var Area = function(name, questlist){
	this.name = name;
	this.quest = questlist;
};

/* クエストの亜種、石使用 */
var UseStone = function() {};
UseStone.prototype = new Quest("", 0, 0);
UseStone.prototype.isQuest = false;
UseStone.prototype.toString = function() {
	return "魔法石使用";
};

/* ステータスのデータ型 */
var Status = function(stamina, max_stamina, rest_exp){
	this.stamina = parseInt(stamina);
	this.max_stamina = parseInt(max_stamina);
	this.rest_exp = parseInt(rest_exp);
};

/* 解答プランのデータ型 */
var Plan = function(stamina, max_stamina, rest_exp){
	this.quest = [];
	this.stamina = parseInt(stamina);
	this.rest_stamina = parseInt(stamina);
	this.exp = 0;
	this.above_exp = -1 * parseInt(rest_exp);
	this.user = new Status(stamina, max_stamina, rest_exp);
};

Plan.prototype = {
		getLastQuest : function(){
			if(this.quest.length != 0)
				return this.quest[this.quest.length-1];
			else return new Quest("", 0, 0);
		}, 
		rankup : function(){
			return (this.above_exp >= 0);
		},
		add : function(q){
			if(this.rankup() || q.stamina > this.stamina) return;
			this.quest[this.quest.length] = q;
			this.stamina -= q.stamina;
			this.rest_stamina -= q.stamina;
			this.exp += q.exp_average;
			this.above_exp = this.exp - this.user.rest_exp;
		},
		useStone : function(){
			if(this.rankup()) return;
			this.add(new UseStone());
			this.rest_stamina += this.user.max_stamina;
			this.stamina = this.user.max_stamina;
		},
		cat : function(list){
			for(var i=0; i<list.quest.length; i++)
				this.add(list.quest[i]);
		},
		output : function(){
			var num = 0;
			var stone = 0;
			var outdiv = document.getElementById("result");
			if(outdiv == undefined){
				alertMessage("エラー:出力先不明");
				return;
			}
			outdiv.innerHTML = "結果:<br>";
			for(var i=0; i<this.quest.length; i++){
				if(this.quest[i].isQuest){
					num++;
					outdiv.innerHTML += ("[" + num + "]" +this.quest[i].toString() + "<br>");
				} else {
					stone++;
					num = 0;
					outdiv.innerHTML += ("【" + stone + "】" +this.quest[i].toString() + "<br>");
				}
			}
			outdiv.innerHTML += ("残りスタミナ:" + this.stamina + ", スタミナ端数:" + this.rest_stamina + ", EXP:" + this.exp + ", ");
			if(this.rankup())
				outdiv.innerHTML += ("超過EXP:" + this.above_exp + "<br>");
			else
				outdiv.innerHTML += ("残りEXP:" + -1 * this.above_exp + "<br>");
			if(stone != 0)
				outdiv.innerHTML += ("石" + stone + "個使用<br>");
			ResultShow();
		}
};
