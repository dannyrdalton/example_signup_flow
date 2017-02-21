import { push } from 'react-router-redux'
import { PATH as IMAGE_SELECT_PATH } from '../../ImageSelect'
import { PATH as DENTAL_GOALS_PATH } from '../../DentalGoals'
// ------------------------------------
// Constants
// ------------------------------------
export const FORM_NAME = 'DENTAL_HISTORY_FORM'
export const DENTAL_HISTORY_PERSIST = 'DENTAL_HISTORY_PERSIST'

// ------------------------------------
// Persisted Data
// ------------------------------------
let persistedState = {
  data: {
    wisdomTeethRemoved: 'unsure',
    crownsOrFillings: 'unsure',
    looseTeeth: 'unsure',
    decayingTeeth: 'unsure' 
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function back() {
  return (dispatch, getState) => {
    dispatch({
      type: DENTAL_HISTORY_PERSIST,
      payload: {
        data: getState().form[FORM_NAME].values
      }
    })
    dispatch(push(IMAGE_SELECT_PATH))
  }
}

export function next() {
  return (dispatch, getState) => {
    dispatch({
      type: DENTAL_HISTORY_PERSIST,
      payload: {
        data: getState().form[FORM_NAME].values
      }
    })
    dispatch(push(DENTAL_GOALS_PATH))
  }
}

export const actions = {
  back,
  next 
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DENTAL_HISTORY_PERSIST]: (state, action) => {
    return Object.assign({}, state, {
      data: action.payload.data
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = persistedState 
export default function dentalHistoryReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
