import REDUX_FORM_FIELD_RENDERERS from 'helpers/redux-form/field_renderers'

export const DENTAL_HISTORY_FORM_NAME = 'personalInfoForm'
export const BACK_PATH = '/select-an-image'
export const NEXT_PATH = '/dental-goals'
export const DENTAL_HISTORY_DROPDOWN_LIST_DATA = ['Yes', 'No', 'Unsure']

export const ACTION_TYPES = {
 PERSIST_DENTAL_HISTORY_DATA: 'DENTAL_HISTORY_FORM_NAME' 
}

export const FORM_FIELDS = [
  {
    key: 'WISDOM_TEETH_REMOVED',
    name: 'wisdomTeethRemoved',
    label: 'Have you had your wisdom teeth removed?',
    component: REDUX_FORM_FIELD_RENDERERS.dropdownList,
    data: DENTAL_HISTORY_DROPDOWN_LIST_DATA
  },
  {
    key: 'CROWNS_OR_FILLINGS',
    name: 'crownsOrFillings',
    label: 'Do you have any crowns or fillings?',
    component: REDUX_FORM_FIELD_RENDERERS.dropdownList,
    data: DENTAL_HISTORY_DROPDOWN_LIST_DATA
  },
  {
    key: 'LOOSE_TEETH',
    name: 'looseTeeth',
    label: 'Do you have any loose teeth?',
    component: REDUX_FORM_FIELD_RENDERERS.dropdownList,
    data: DENTAL_HISTORY_DROPDOWN_LIST_DATA
  },
  {
    key: 'DECAYING_TEETH',
    name: 'decayingTeeth',
    label: 'Do you have any decaying teeth?',
    component: REDUX_FORM_FIELD_RENDERERS.dropdownList,
    data: DENTAL_HISTORY_DROPDOWN_LIST_DATA
  }
]

export const REDUX_FORM_CONFIG = {
  form: DENTAL_HISTORY_FORM_NAME
}

export const DENTAL_HISTORY_CONFIG = {
  DENTAL_HISTORY_FORM_NAME,
  BACK_PATH,
  NEXT_PATH,
  ACTION_TYPES,
  FORM_FIELDS,
  REDUX_FORM_CONFIG
}

export default DENTAL_HISTORY_CONFIG