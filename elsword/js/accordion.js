$(function(){

//--設定----------------------------------------------------//
	
	var clickBtn  = ['.acbtn', '.dataimg'];
	var ac_detail = ['.acdetail', '.movierow'];
	var Speed ="fast";
	var openTypeOne = false; // true or false
	
//--設定ここまで--------------------------------------------//

	$(clickBtn).each(function(i) {
		$(clickBtn[i]).css({"cursor":"pointer"});
		$(ac_detail[i]).hide();
		$(clickBtn[i]).click(function(){
			index = $(clickBtn[i]).index(this);
			if(openTypeOne==true){
				accordion_one(clickBtn[i],ac_detail[i],index,i);
			}else{
				accordion(clickBtn[i],ac_detail[i],index,i);
			}
		});		
	});
	
	function accordion_one(a,b,c,d){
		$(a).each(function(i) {		
			if(c!=i){
				if($(a).eq(i).hasClass('clickBtn_on'+d)){
					$(a).removeClass('clickBtn_on'+d);
					$(b).eq(i).slideUp(Speed);				
				}
			}							   
		});
		
		if ($(a).eq(c).hasClass('clickBtn_on'+d)) {
			$(a).removeClass("clickBtn_on"+d);
			$(b).eq(c).slideUp(Speed);
		}else{
			$(a).eq(c).addClass('clickBtn_on'+d);
			$(b).eq(c).slideDown(Speed);
		}
	}
	
	function accordion(a,b,c,d){
			if($(a).eq(c).hasClass('clickBtn_on'+d)){
				$(a).eq(c).removeClass('clickBtn_on'+d);
				$(b).eq(c).slideToggle(Speed);						
			}else{
				$(a).eq(c).addClass('clickBtn_on'+d);
				$(b).eq(c).slideToggle(Speed);
			}
	}

});