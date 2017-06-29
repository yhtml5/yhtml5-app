const state = {
  chessboard: document.getElementById('chessboard'),
  chessType: 'canvas',
  chessPositons: (() => {
    var arr = [];
    for (var i = 0; i < 15; i++) {
      arr[i] = [];
      for (var j = 0; j < 15; j++) {
        arr[i][j] = 0;
      }
    }
    return arr
  })(),
  width: 450,
  lineColor: '#afafaf',
  lineNum: 15,
  chessColor: true,
  over: false
}

export default state