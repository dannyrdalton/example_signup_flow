// ------------------------------------
// Constants
// ------------------------------------
export const FORM_NAME = 'IMAGE_SELECT_FORM'
export const HANDLE_IMAGE_DROP = 'HANDLE_IMAGE_DROP'

// ------------------------------------
// Actions
// ------------------------------------

export function handleImageDrop(filesToUpload, e) {
  return {
    type: HANDLE_IMAGE_DROP,
    payload: filesToUpload
  }
}

export const actions = {
  
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [HANDLE_IMAGE_DROP]: (state, action) => {
    console.log(action.payload);
    return state;
  } 
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { data: {} } 
export default function imageSelectReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
