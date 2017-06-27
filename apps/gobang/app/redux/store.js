'use strict';
import {createStore} from './createStore.js'
import initialState from './state'
import reducer from './reducer'

const store = createStore(reducer,initialState)

export  {store}
