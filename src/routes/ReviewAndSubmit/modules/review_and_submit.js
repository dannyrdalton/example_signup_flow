import { push } from 'react-router-redux'
import { BACK_LINK, ACTION_TYPES } from '../config/review_and_submit_config'

// ------------------------------------
// Actions
// ------------------------------------

export function back() {
  return (dispatch, getState) => {
    dispatch(push(BACK_LINK))
  }
}

export function submitAllUserInfo() {
  return (dispatch, getState) => {
    //promise for API request would go here
    //would create formatter to format front-end data to the signature the API expects
    dispatch({
      type: ACTION_TYPES.SUBMIT_ALL_USER_INFO
    })
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [ACTION_TYPES.SUBMIT_ALL_USER_INFO]: (state, action) => {
    state.dataSubmitted = true;
    return state;
  } 
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {}
export default function reviewAndSubmitReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
