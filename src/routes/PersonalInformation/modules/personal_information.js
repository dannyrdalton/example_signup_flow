import { LOCATION_CHANGE } from 'store/location'

// ------------------------------------
// Constants
// ------------------------------------
export const FORM_NAME = 'PERSONAL_INFO_FORM'
export const PERSONAL_INFORMATION_INPUT_CHANGE = 'PERSONAL_INFORMATION_INPUT_CHANGE'
export const PERSONAL_INFORMATION_SAVE = 'PERSONAL_INFORMATION_SAVE'
export const PERSONAL_INFORMATION_NEXT = 'PERSONAL_INFORMATION_NEXT'

// ------------------------------------
// Persisted Data
// ------------------------------------
let persistedState = {
  data: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dob: '',
    phone: ''
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function next() {
  return (dispatch, getState) => {
    dispatch({
      type: PERSONAL_INFORMATION_NEXT,
      payload: {
        data: getState().form[FORM_NAME].values
      }
    })
  }
}

export const actions = {
  next
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [PERSONAL_INFORMATION_NEXT]: (state, action) => {
    return Object.assign({}, state, {
      data: action.payload.data
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = persistedState;

export default function personalInformationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
