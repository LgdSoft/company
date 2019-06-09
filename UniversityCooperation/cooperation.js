
var num = 0;

$(function() {
	
	$('.f_carousel .carousel_left').click(function () {
		$('.f_carousel .inside_box').attr('style','transform:translateX(0)')
		num == 0;
	})
	$('.f_carousel .carousel_right').click(function () {
		$('.f_carousel .inside_box').attr('style','transform:translateX(-50%)')
	})
	num = 2;
	
})

var inside_box = document.querySelector('.f_carousel .inside_box');

setInterval(function() {
	num++;
	inside_box.style.transform = 'translateX(-50%)';
	if (num >= 2) {
		inside_box.style.transform = 'translateX(0)';
		num = 0;
	}

},5000)

// init = function() {
// 		num++
// 		$('.f_carousel .inside_box').attr('style','transform: translateX(-50%)')
// 		if (num >= 2) {
// 			$('.f_carousel .inside_box').attr('style','transform: translateX(0)')
// 			num = 0;
// 		} 
// 	};