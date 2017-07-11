function state(params) {
  const createChessPositons = (num) => {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr[i] = [];
      for (var j = 0; j < num; j++) {
        arr[i][j] = 0;
      }
    }
    return arr
  }

  return {
    chessboard: null,
    chessType: 'canvas',
    chessPositons: createChessPositons(15),
    width: 450,
    lineNum: 15,
    interval: 30,//width / 15
    pieceWidth: 26, //width / 15 - 2
    lineColor: '#afafaf',
    chessColor: true,
    over: false
  }
}

export default state()