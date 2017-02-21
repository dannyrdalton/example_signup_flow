import { LOCATION_CHANGE } from 'store/location'

// ------------------------------------
// Constants
// ------------------------------------
export const PERSONAL_INFORMATION_INPUT_CHANGE = 'PERSONAL_INFORMATION_INPUT_CHANGE'
export const PERSONAL_INFORMATION_SAVE = 'PERSONAL_INFORMATION_SAVE'

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
export function handleInputChange(event) {
  return {
    type: PERSONAL_INFORMATION_INPUT_CHANGE,
    payload: {
      name: event.target.name,
      value: event.target.value
    }
  }
}

export function save() {
  return (dispatch, getState) => {
    dispatch({
      type: PERSONAL_INFORMATION_SAVE,
      payload: getState().pinfo
    })
  }
}

export const actions = {
  save
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOCATION_CHANGE]: (state, action) => {
    if (state.dirty) {
      return Object.assign({}, persistedState);
    }
    return state;
  },
  [PERSONAL_INFORMATION_INPUT_CHANGE]: (state, action) => {
    return Object.assign({}, state, {
      dirty: true,
      data: {
        [action.payload.name]: action.payload.value
      }
    })
  },
  [PERSONAL_INFORMATION_SAVE]: (state, action) => {
    persistedState = state;
    return Object.assign({}, persistedState, {
      dirty: false
    });
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
