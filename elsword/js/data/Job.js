/** 各職のデータ */
var Job = function(name, id, icon, activeList){
	this.name = name;
	this.id = id;
	this.icon = icon;
	this.activeList = activeList;
};

Job.prototype = {
	getIcon : function(){
		if(!this.icon) return "";
		return "../icon/" + this.icon;
	},
	loadBtn : function(){
		var btn = document.getElementById(this.id+"_btn");
		if(this.getIcon())
			btn.innerHTML = '<img src="'+this.getIcon()+'" width=48 height=48>'+this.name;
		else btn.innerHTML = this.name;
	},
	loadData : function(){
		var tableRef = document.getElementById(this.id);
		var newrow = ["", "名前", "時間", "F", "HIT", "有利F", "補足"];
		var targetRow = tableRef.insertRow(-1);
		targetRow.className = "headrow";
		for (var i = 0; i < newrow.length; i++){
			var targetCell = targetRow.insertCell(-1);
			targetCell.innerHTML = newrow[i];
		}
		for (var i = 0; i < this.activeList.length; i++){
			this.activeList[i].toRow(tableRef);
			this.activeList[i].toMovieRow(tableRef);
		}
	},
	loadLiteData : function(){
		var tableRef = document.getElementById(this.id);
		var newrow = ["", "名前", "時間", "F", "HIT", "有利F", "補足", "動画"];
		var targetRow = tableRef.insertRow(-1);
		targetRow.className = "headrow";
		for (var i = 0; i < newrow.length; i++){
			var targetCell = targetRow.insertCell(-1);
			targetCell.innerHTML = newrow[i];
		}
		for (var i = 0; i < this.activeList.length; i++){
			this.activeList[i].toLiteRow(tableRef);
		}
	}
};
