import { push } from 'react-router-redux'
import {
  PERSONAL_INFORMATION_FORM_NAME,
  ACTION_TYPES,
  NEXT_PATH
} from '../config/personal_information_config'

// ------------------------------------
// Persisted Data
// ------------------------------------
let persistedState = {
  data: {
    email: 'd@d.com',
    password: '',
    firstName: 'd',
    lastName: 'df',
    dob: '2000-11-11',
    phone: '5555555555'
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function next() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.PERSIST_PERSONAL_INFORMATION_DATA,
      payload: {
        data: getState().form[PERSONAL_INFORMATION_FORM_NAME].values
      }
    })
    dispatch(push(NEXT_PATH))
  }
}

export const actions = {
  next
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ACTION_TYPES.PERSIST_PERSONAL_INFORMATION_DATA]: (state, action) => {
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
