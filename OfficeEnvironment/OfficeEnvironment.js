$(function () {

	$('.f_office .item_choice').click(function () {
		$(this).addClass('item_bg_color').siblings().removeClass('item_bg_color')
		var item_index = $(this).index();

		if (item_index == 0) {
			$('.f_office .environment_one').show().siblings().hide();
		} else if (item_index == 1){
			$('.f_office .environment_twe').show().siblings().hide();
		 } else if (item_index == 2) {
		 	$('.f_office .environment_three').show().siblings().hide();
		 }
		
	})

})