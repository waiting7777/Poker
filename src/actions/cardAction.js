import { actionTypes } from './types';

export const drawCard = () => dispatch => {
  return dispatch({
    type: actionTypes.DRAW_CARD
  })
}

export const holdCard = (i) => dispatch => {
  return dispatch({
    type: actionTypes.HOLD_CARD,
    index: i
  })
}