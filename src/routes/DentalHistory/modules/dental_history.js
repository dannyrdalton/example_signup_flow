import { push } from 'react-router-redux'
import { PATH as IMAGE_SELECT_PATH } from '../../ImageSelect'
import { PATH as DENTAL_GOALS_PATH } from '../../DentalGoals'
import {
  DENTAL_HISTORY_FORM_NAME,
  ACTION_TYPES,
  BACK_PATH,
  NEXT_PATH
} from '../config/dental_history_config'

// ------------------------------------
// Actions
// ------------------------------------

export function back() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.PERSIST_DENTAL_HISTORY_DATA,
      payload: {
        data: getState().form[DENTAL_HISTORY_FORM_NAME].values
      }
    })
    dispatch(push(BACK_PATH))
  }
}

export function next() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.PERSIST_DENTAL_HISTORY_DATA,
      payload: {
        data: getState().form[DENTAL_HISTORY_FORM_NAME].values
      }
    })
    dispatch(push(NEXT_PATH))
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [ACTION_TYPES.PERSIST_DENTAL_HISTORY_DATA]: (state, action) => {
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
    wisdomTeethRemoved: 'Unsure',
    crownsOrFillings: 'Unsure',
    looseTeeth: 'Unsure',
    decayingTeeth: 'Unsure' 
  }
}

export default function dentalHistoryReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
