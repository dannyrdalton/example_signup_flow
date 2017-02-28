import { push } from 'react-router-redux'
import { PATH as DENTAL_HISTORY_PATH } from '../../DentalHistory'
import { PATH as SELECT_DOCTOR_PATH } from '../../SelectDoctor'
import {
  DENTAL_GOALS_FORM_NAME,
  BACK_PATH,
  NEXT_PATH,
  ACTION_TYPES
} from '../config/dental_goals_config'

// ------------------------------------
// Actions
// ------------------------------------

export function back() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.DENTAL_GOALS_PERSIST,
      payload: {
        data: getState().form[DENTAL_GOALS_FORM_NAME].values
      }
    })
    dispatch(push(BACK_PATH))
  }
}

export function next() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.DENTAL_GOALS_PERSIST,
      payload: {
        data: getState().form[DENTAL_GOALS_FORM_NAME].values
      }
    })
    dispatch(push(NEXT_PATH))
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [ACTION_TYPES.DENTAL_GOALS_PERSIST]: (state, action) => {
    return Object.assign({}, state, {
      data: action.payload.data
    })
  } 
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  data: {
    goal: '' 
  }
}

export default function dentalGoalsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
