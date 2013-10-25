(function($){

	$(function(){

		//全てを閉じる
		$('.accordion').find('div').hide();

		//active要素を指定して開く
		var no=0;
		$('.accordion').find('h3').eq(no).next('div').show();

		//クリックアクション設定
		$('.accordion').find('h3').click(function() {

			$(this).next('div').slideToggle('fast')
			.siblings('div:visible').slideUp('fast');

		});
	});

})(jQuery);