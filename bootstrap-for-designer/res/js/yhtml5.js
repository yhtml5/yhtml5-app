$(function  () {
	$('.js-nav-navbar-full').click(function  () {
		$('.custom-navbar').toggleClass('navbar-full')
	})
	$('.js-nav-bg-success').click(function  () {
		$('.custom-navbar').toggleClass('bg-success')
	})
	$('.js-btn-lg').click(function  () {
		$('.custom-button').remove('btn-sm')
//		$('.custom-button').toggleClass('btn-lg')
	})
	$('.js-btn-sm').click(function  () {
		$('.custom-button').toggleClass('btn-sm')
	})
})
