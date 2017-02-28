import { push } from 'react-router-redux'
import { BACK_PATH, NEXT_PATH, ACTION_TYPES } from '../config/select_doctor_config'

function unselectAllItems(i) {

}

// ------------------------------------
// Actions
// ------------------------------------

export function onImageSelectItemClick(items, item) {
  return {
    type: ACTION_TYPES.SELECT_DOCTOR_IMAGE_SELECT_GRID_ON_ITEM_CLICK,
    payload: {
      allItems: items,
      item: item
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
  [ACTION_TYPES.SELECT_DOCTOR_IMAGE_SELECT_GRID_ON_ITEM_CLICK]: (state, action) => {
    return Object.assign({}, state, {
      data: {
        doctor: action.payload.item
      }
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { data: {} }
export default function selectDoctorReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
