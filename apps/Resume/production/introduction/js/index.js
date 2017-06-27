$(".panel").on('keypress', ".in", function(e) {
	if (e.which == 13) {
		$(this).prop('readonly', true);
		var input = $(this).val().split(" ");
		if (input[1]) {
			var output = execute(input[0], input[1]);
		} else {
			var output = execute(input[0], "");
		}
		$(".output").last().html(output)
		$(".panel").append($("<div class='action'>")
			.html("<div class='action'><div class='command'><span class='symbol'>$</span><input class='in' type='text'></div><div class='output'></div></div>"));
		$(".in").last().focus();
	}
});

function execute(command, parameters) {
	console.log(command, parameters);
	if (window[command]) {
		return window[command](parameters);
	} else {
		return "bash: " + command + " : command not found";
	}
}

files = {
	"root": {
		"YHTML5-App": "hello world!",
		"YHTML5-Pro": "hello world!",
		"YHTML5-Tutorial": "hello world!",
		"YHTML5-WEB": "hello world!",
		"YHTML5-Work": "hello world!",
		"project": {
			"README.md": "cells organisms",
			"package.json": "ions protons",
			"components": "ions protons",
			"node.html": "ions protons",
			"app.js": "ions protons",
			"server": "ions protons",
			"views": "ions protons"
		}
	}
}

var upperFolder = null;
var currentFolder = files["root"];
var path = [];

function ls() {
	var keys = [];
	for (var key in currentFolder) {
		if (currentFolder.hasOwnProperty(key)) { //to be safe
			keys.push(key);
		}
	}
	return keys.join("&nbsp;&nbsp;&nbsp;");
}

function cat(filename) {
	if (filename == "") {
		return "usage: cat file ...";
	}
	if (typeof currentFolder[filename] == "object") {
		return "cat: " + filename + " : Is a directory"

	}
	if (currentFolder[filename] == "") {
		return "";
	}
	if (currentFolder[filename]) {
		return currentFolder[filename];
	} else {
		return "cat: " + filename + " : No such file or directory"
	}
}

function cd(folder) {
	if (folder == "") {
		return "";
	}
	if (folder == "../") {
		if (path.length > 0) {
			currentFolder = upperFolder;
			path.pop();
		}
	} else if (typeof currentFolder[folder] == "object") {
		upperFolder = currentFolder;
		currentFolder = currentFolder[folder];
		path.push(folder);
	} else {
		return "bash: cd: " + folder + ": No such file or directory";
	}
}

function mkdir(folderName) {
	if (folderName != "") {
		currentFolder[folderName] = {};
		return "";
	} else {
		return "usage: mkdir directory ...";
	}
}

function touch(fileName) {
	currentFolder[fileName] = "";
}

function echo(string) {
	return string;
}

function rm(name) {
	delete currentFolder[name]
}

function help() {
	return "Commands: &nbsp;&nbsp;&nbsp;ls, cd, mkdir, echo, touch, rm, cat, pwd, help";
}

function pwd() {
	if (path.length == 0) {
		return "/"
	}
	return "/" + path.join("/")
}

function learn() {
	return "Commands: &nbsp;&nbsp;&nbsp;ls, cd, open, node -v";
}

function nodeVersion() {
	return "v4.3.2";
}
function npmVersion() {
	return "v2.3.2";
}

function 你好() {
	return "&nbsp;&nbsp;&nbsp;您好，主人，请吩咐";
}

function 你叫什么() {
	return "&nbsp;&nbsp;&nbsp;就不告诉你~ 你这愚蠢的人类！";
}

function 你妹() {
	return "&nbsp;&nbsp;&nbsp;你告诉我计算机的妹妹什么东西？ 你这愚蠢的人类！";
}

function 你这愚蠢的计算机() {
	return "&nbsp;&nbsp;&nbsp;一看你就不会跟机聊天， 你这愚蠢的人类！ 聊不下去了...	";
}

function node是什么() {
	return "<div style='color: red'></br>&nbsp;&nbsp;&nbsp;简单的说 Node.js 就是运行在服务端的 JavaScript。" +
		"</br></br>&nbsp;&nbsp;&nbsp;Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。" +
		"</br></br>&nbsp;&nbsp;&nbsp;Node.js是一个事件驱动I/O服务端JavaScript环境，" +
		"</br></br>&nbsp;&nbsp;&nbsp;基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。"+
		"</br></br>&nbsp;&nbsp;&nbsp;它可以用来开发服务器、客户端、构建工具，特别开发适合高并发应用</div>"
}

function 安装node() {
	return "&nbsp;&nbsp;&nbsp;正在下载..." +
		"<br>&nbsp;&nbsp;&nbsp;下载完成" +
		"<br>&nbsp;&nbsp;&nbsp;正在安装..." +
		"<br>&nbsp;&nbsp;&nbsp;安装完成" +
		"<br>&nbsp;&nbsp;&nbsp;正在校验版本..." +
		"<br>&nbsp;&nbsp;&nbsp;版本号：v4.3.2";
}

$('.panel').stop().animate({
	scrollTop: $(".panel")[0].scrollHeight
}, 800);
