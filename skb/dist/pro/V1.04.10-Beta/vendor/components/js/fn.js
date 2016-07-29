/*
 * @require server/author.js
 */
/************  fn  ************/
function changeimg() {
    var myimg = document.getElementById("code");
    now = new Date();
    myimg.src = "yzm.php?code=" + now.getTime();
}
function getUrl() {

}
