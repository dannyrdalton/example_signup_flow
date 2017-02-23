import REDUX_FORM_FIELD_RENDERERS from 'helpers/redux-form/field_renderers'

export const SELECT_INSURANCE_FORM_NAME = 'selectInsuranceForm'
export const BACK_PATH = '/select-doctor'
export const NEXT_PATH = '/review-and-submit'

export const INSURANCE_TYPES = ['Blue Cross', 'Kaiser', 'Delta Dental', 'Humana', 'No dental insurance']

export const ACTION_TYPES = {
  PERSIST_SELECT_INSURANCE_DATA: 'PERSIST_SELECT_INSURANCE_DATA'
}

export const FORM_FIELDS = [
  {
    key: 'INSURANCE',
    name: 'insurance',
    component: REDUX_FORM_FIELD_RENDERERS.dropdownList,
    data: INSURANCE_TYPES
  }
]

export const REDUX_FORM_CONFIG = {
  form: SELECT_INSURANCE_FORM_NAME
}

const SELECT_INSURANCE_CONFIG = {
  SELECT_INSURANCE_FORM_NAME,
  BACK_PATH,
  NEXT_PATH,
  INSURANCE_TYPES,
  ACTION_TYPES,
  FORM_FIELDS,
  REDUX_FORM_CONFIG
}

export default SELECT_INSURANCE_CONFIG