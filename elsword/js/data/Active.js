/** (スペシャル/ハイパー)アクティブスキルのデータ */
var Active = function(name, id, frame, hit, adframe, tips, icon, url) {
	switch (arguments.length){
	case 0:this.const0(); break;
	case 3:this.const3(name, id, frame); break;
	case 7:this.const7(name, id, frame, hit, adframe, tips, icon); break;
	case 8:this.const8(name, id, frame, hit, adframe, tips, icon, url); break;
	default:
	}
};

Active.prototype = {
	const8 : function(name, id, frame, hit, adframe, tips, icon, url){
		this.name = name;           // スキル名
		this.id = id;               // ID（英語のスキル名）
		this.frame = frame;         // フレーム数（時間はここから逆算）
		this.hit = hit;             // 時間中ヒットの有無(2:フルヒット 1:有り 0:無し -1:攻撃無し)
		this.adframe = adframe;     // 有利フレーム数(無し:=0)
		this.tips = tips;           // 補足説明
		this.icon = icon;           // アイコンのURL
		this.url = url;             // 動画のURL(youtubeのみ)
	},

	const7 : function(name, id, frame, hit, adframe, tips, icon){
		this.const8(name, id, frame, hit, adframe, tips, icon, "");
	},
	
	const3 : function(name, id, icon){
		this.const8(name, id, "", "", "", "NODATA", icon, "");
	},
	
	const0 : function(){
		this.const8("NODATA", "nodat", "", "", "", "NODATA", "", "");
	},

	getTimeFPS : function(fps){
		if(typeof(this.frame) != 'number') return "";
		var num = this.frame/fps;
		num = Math.round(num*100) / 100;
		return num + "s";
	},

	getTime : function(){
		return this.getTimeFPS(60);
	},
	
	getHit : function(){
		switch(this.hit){
		case -1:
			return "－";
		case 0:
			return "×";
		case 1:
			return "△";
		case 2:
			return "○";
	  default:
			return "";	
		}
	},
	
	getIcon : function(){
		return "../icon/" + this.icon;
	},
	
	getIconCell : function(){
		if(!this.icon) return "";
		return '<img class="dataimg" src="'+this.getIcon()+'" width=32 height=32>';
	},
	
	// ***作りかけ(URL不明につき)***
	getUrl : function(){
		if(!this.url) return "";
		if(this.url == "url") return "";
		return "http://www.youtube.com/embed/" + this.url + "?rel=0";
	},
	
	getYoutubeCode : function(){
		if(!this.getUrl()) return "NODATA";
		return '<iframe width="320" height="240" src="' + this.getUrl() + '" frameborder="0" allowfullscreen></iframe>';
	},

	td : function(str) {
		return "<td>" + str + "</td>";
	},
	
	toString : function() {
		return "["+this.name+", "+this.getTime()+"]";
	},
	toRow : function(tableRef){
		var newrow = [this.getIconCell(), this.name, this.getTime(),
		              this.frame, this.getHit(), this.adframe, this.tips];
		var targetRow = tableRef.insertRow(-1);
		targetRow.id = this.id;
		for (var i = 0; i < newrow.length; i++){
			var targetCell = targetRow.insertCell(-1);
			if(i == 0) targetCell.align = "center";
			targetCell.innerHTML = newrow[i];
		}
	},
	toMovieRow : function(tableRef) {
		if(!this.icon) return;
		var targetRow = tableRef.insertRow(-1);
		targetRow.className = "movierow";
		targetRow.id = "m_"+this.id;
		var colCount = tableRef.rows[0].cells.length;
		var targetCell = targetRow.insertCell(-1);
		targetCell.colSpan = colCount;
		targetCell.align = "center";
		targetCell.innerHTML = this.getYoutubeCode();
	}
	
};
