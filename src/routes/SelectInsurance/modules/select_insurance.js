import { push } from 'react-router-redux'
import {
  SELECT_INSURANCE_FORM_NAME,
  BACK_PATH,
  NEXT_PATH,
  ACTION_TYPES
} from '../config/select_insurance_config'


// ------------------------------------
// Dispatchers
// ------------------------------------

export function back() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.PERSIST_SELECT_INSURANCE_DATA,
      payload: {
        data: getState().form[SELECT_INSURANCE_FORM_NAME].values
      }
    })
    dispatch(push(BACK_PATH))
  }
}

export function next() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.PERSIST_SELECT_INSURANCE_DATA,
      payload: {
        data: getState().form[SELECT_INSURANCE_FORM_NAME].values
      }
    })
    dispatch(push(NEXT_PATH))
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [ACTION_TYPES.PERSIST_SELECT_INSURANCE_DATA]: (state, action) => {
    return Object.assign({}, state, {
      data: action.payload.data
    })
  } 
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = { data: { insurance: '' } } 

export default function selectInsuranceReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
