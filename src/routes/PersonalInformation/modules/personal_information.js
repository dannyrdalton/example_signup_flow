import { LOCATION_CHANGE } from 'store/location'
import { push } from 'react-router-redux'
import { PATH as IMAGE_SELECT_PATH } from '../../ImageSelect'

// ------------------------------------
// Constants
// ------------------------------------
export const FORM_NAME = 'PERSONAL_INFO_FORM'
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
    dispatch(push(IMAGE_SELECT_PATH))
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
