let filter = window.localStorage.debug || '';
let enable = !!filter
let count = 0;

const colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];
const hold = {};
const log = window.console.log || function () { };
const start = new Date();
let time = start;
let regs;

function check_filter() {
  var split = filter.split(/[\s,]+/);
  var len = split.length;
  var skips = [];
  var names = [];
  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    var n = split[i].replace(/\*/g, '.*?');
    if (n[0] === '-') {
      skips.push(new RegExp('^' + n.substr(1) + '$'));
    } else {
      names.push(new RegExp('^' + n + '$'));
    }
  }

  regs = {
    skips: skips,
    names: names
  };

}

function check_show(name) {
  var skips = regs.skips;
  var names = regs.names;
  var i, len;
  for (i = 0, len = skips.length; i < len; i++) {
    if (skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = names.length; i < len; i++) {
    if (names[i].test(name)) {
      return true;
    }
  }
  return false;
}


function debug(name) {
  let key = '%c' + name;
  let c = hold[name] || null;
  if (!c) {
    let i = count % colors.length;
    c = 'color:' + colors[i];
    count++;
    hold[name] = c;
  }

  let show = true;
  if (filter) {
    if (regs === undefined) {
      check_filter();
    }
    show = check_show(name);
  }

  function logger(first, ...arg) {

    if (enable && show) {

      var t = new Date();
      var d = t.getTime() - time.getTime();
      var e = 'ms';
      if (d > 1000) {
        d = Math.round(d / 1000);
        e = 's';
      }
      var m = d + e;
      time = t;
      return log(key, c, first, ...arg, m);
    }
  }
  return logger;
}

export default debug;
