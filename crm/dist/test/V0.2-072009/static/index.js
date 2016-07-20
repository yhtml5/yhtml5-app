;/*!server/author.js*/
/*=====================================================================
 * Author:Kyle
 * Website:http://yhtml5.com
 * Gihub:https://github.com/yhtml5
 * Description: We work hard to contribute our work back
 *              to the web, mobile, server, & new technology.
 *====================================================================*/
 'use strict';
;/*!components/js/fn.js*/
/*
 * @require server/author.js
 */
/************  fn  ************/
function changeimg() {
    var myimg = document.getElementById("code");
    now = new Date();
    myimg.src = "yzm.php?code=" + now.getTime();
}
;/*!components/js/do.js*/
/*
 * @require components/js/fn.js
 */

/************  do  ************/



