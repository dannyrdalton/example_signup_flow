import { push } from 'react-router-redux'
// import {
//   PERSONAL_INFORMATION_FORM_NAME,
//   ACTION_TYPES,
//   NEXT_PATH
// } from '../config/personal_information_config'

const IMAGE_SELECT_GRID_ON_ITEM_CLICK = 'IMAGE_SELECT_GRID_ON_ITEM_CLICK'

// ------------------------------------
// Actions
// ------------------------------------
export function onItemClick(e) {
  return {
    type: IMAGE_SELECT_GRID_ON_ITEM_CLICK,
    payload: 'cool'
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [IMAGE_SELECT_GRID_ON_ITEM_CLICK]: (state, action) => {
    console.log(action);
    return state;
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = persistedState;

export default function imageSelectReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
