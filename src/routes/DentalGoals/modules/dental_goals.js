import { push } from 'react-router-redux'
import { PATH as DENTAL_HISTORY_PATH } from '../../DentalHistory'
import { PATH as SELECT_DOCTOR_PATH } from '../../SelectDoctor'

// ------------------------------------
// Constants
// ------------------------------------
export const FORM_NAME = 'DENTAL_GOALS_FORM'
export const DENTAL_GOALS_PERSIST = 'DENTAL_GOALS_PERSIST'

// ------------------------------------
// Persisted Data
// ------------------------------------
let persistedState = {
  data: {
    goal: '' 
  }
}

// ------------------------------------
// Actions
// ------------------------------------

export function back() {
  return (dispatch, getState) => {
    dispatch({
      type: DENTAL_GOALS_PERSIST,
      payload: {
        data: getState().form[FORM_NAME].values
      }
    })
    dispatch(push(DENTAL_HISTORY_PATH))
  }
}

export function next() {
  return (dispatch, getState) => {
    dispatch({
      type: DENTAL_GOALS_PERSIST,
      payload: {
        data: getState().form[FORM_NAME].values
      }
    })
    dispatch(push(SELECT_DOCTOR_PATH))
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
  [DENTAL_GOALS_PERSIST]: (state, action) => {
    return Object.assign({}, state, {
      data: action.payload.data
    })
  } 
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = persistedState 
export default function dentalGoalsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
