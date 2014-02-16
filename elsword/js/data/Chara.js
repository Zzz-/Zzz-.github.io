var Chara = function (){};

Chara.prototype = {
	loadBtn : function(){
		for( var i = 0; i < this.jobs.length; i++) {
			this.jobs[i].loadBtn();
		}
	},
	
	loadTable : function(){
		for( var i = 0; i < this.jobs.length; i++) {
			this.jobs[i].loadData();
		}
	},
	
	loadLiteTable : function(){
		for( var i = 0; i < this.jobs.length; i++) {
			this.jobs[i].loadLiteData();
		}
	}
};
