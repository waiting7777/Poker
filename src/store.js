import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/cardReducer'

const initialState = {
  inGame: false,
  deck: [-1, -1, -1, -1, -1],
  hold: [false, false, false, false, false]
}

export default createStore(reducer, initialState, applyMiddleware(thunk));