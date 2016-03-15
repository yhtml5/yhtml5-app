/*=========================================================================================
 * Author:Kyle|张大漾
 * Author Website:http://yhtml5.com
 * Author Gihub:https://github.com/yhtml5
 * Description: A Website disgned by boostrap and Jquery.Do something awesome and have fun !
 *==========================================================================================*/


/* General
 * ======= */
var y = $.noConflict()
y(function() {
	y('.list-group a').click(function() {
		y('.list-group a').removeClass('active');
		y(this).addClass('active');
	})
	y('.nav .y-active').click(function() {
		y('.nav .y-active').removeClass('active');
		y(this).addClass('active');
	})
	y(".y-app-add-create").on('click', function() {
		var btn = y(this).button('loading')
			//business logic
		setTimeout(function() {
			btn.button('reset')
		}, 2000)
	})

	function expandTable() {
		var tbody = y('.y-member tbody').html()
		for (var i = 0; i < 9; i++) {
			y('.y-member tbody').append(tbody)
		}
	}
	expandTable();


})