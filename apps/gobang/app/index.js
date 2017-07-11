import { yhtml5 } from '../build/template/author'
import { createChessboard, drawChessBoard } from './Components/Chessboard/index'
import { playChess } from './Components/rules/play'
import { ai } from './Components/rules/ai'
import { initView } from './Components/view/index';
import state from './state';
import './Components/index.js'

process.env.NODE_ENV === 'production' && yhtml5()
process.env.NODE_ENV === 'production' || console.log(state, state.chessboard)

initView(state)
// window.onresize = () => initView(state)

createChessboard('canvas')
state.chessboard = document.getElementById('chessboard')
drawChessBoard('canvas')
state.chessboard.addEventListener("click", (e) => playChess(e, ai))

