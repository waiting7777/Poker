import { actionTypes } from '../actions/types';
import Card from '../utils';

const card = new Card();

export default (state, action) => {
  switch (action.type) {
    case actionTypes.DRAW_CARD:
      return Object.assign({}, state, {
        inGame: true,
        deck: card.genDeck()
      });
    case actionTypes.HOLD_CARD:
      const hold = [];
      for (let i = 0; i < 5; i++) {
        if (i !== action.index) {
          hold[i] = state.hold[i]
        } else {
          hold[i] = !state.hold[i]
        }
      }
      return Object.assign({}, state, {
        hold: hold
      });
    default:
      return state
  }
}