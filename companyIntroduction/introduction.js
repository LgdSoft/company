
init=function(obj) {
	var carousel_img = document.querySelectorAll(obj);
	var sum = 0;
	var number = 0;
	setInterval(function () {
		sum >= 3?sum=0:sum++;
		carousel_img[number].style.opacity = 0;
		carousel_img[sum].style.opacity = 1;
		number = sum
	},2000)
}

init('.f_intro .carousel_img_one ')
init('.f_intro .carousel_img_twe ')
init('.f_intro .carousel_img_three ')