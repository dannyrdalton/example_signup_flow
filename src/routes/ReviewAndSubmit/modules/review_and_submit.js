import { push } from 'react-router-redux'

// ------------------------------------
// Actions
// ------------------------------------
export function back() {
  return (dispatch, getState) => {
    dispatch(push('/select-insurance'))
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function reviewAndSubmitReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
