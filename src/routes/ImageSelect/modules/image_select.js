import { push } from 'react-router-redux'
import { BACK_PATH, NEXT_PATH, ACTION_TYPES } from '../config/image_select_config'
// ------------------------------------
// Actions
// ------------------------------------

export function handleImageDrop(filesToUpload, e) {
  return {
    type: ACTION_TYPES.IMAGE_SELECT_HANDLE_IMAGE_DROP,
    payload: {
      file: filesToUpload[0]
    }
  }
}

export function back() {
  return (dispatch, getState) => {
    dispatch(push(BACK_PATH))
  }
}

export function next() {
  return (dispatch, getState) => {
    dispatch(push(NEXT_PATH))
  }
}



// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ACTION_TYPES.IMAGE_SELECT_HANDLE_IMAGE_DROP]: (state, action) => {
    if (action.payload.file) {
      return Object.assign({}, state, {
        data: {
          file: action.payload.file
        }
      })
    }
    return state;
  } 
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { data: { file: null } } 
export default function imageSelectReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
