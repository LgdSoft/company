$(function () {
 $('.f_header .item_more').hover( function () {
 	$('.f_right_menu').slideToggle(200);
 },function () {
 	$('.f_right_menu').slideToggle(200);
 })

//全部产品下拉菜单

$('.f_header .flex_product .product_a').click(function () {
	$('.f_header .down_menu').slideToggle();
})
$('.f_header .flex_product').mouseleave(function () {
	$('.f_header .down_menu').slideUp();
})


//我们的服务背景滑动
$('.f_choice .surface_icon').mouseover(function () {
	var icon_index = $(this).index()
	$('.f_choice .inside_box').attr('style','transform:translateX(-'+ (icon_index * 1170) + 'px)')
})


})

new WOW().init();