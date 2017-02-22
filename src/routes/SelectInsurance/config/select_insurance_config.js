export const SELECT_INSURANCE_FORM_NAME = 'selectInsuranceForm'
export const BACK_PATH = '/select-doctor'
export const NEXT_PATH = '/review-and-submit'

export const ACTION_TYPES = {
  PERSIST_SELECT_INSURANCE_DATA: 'PERSIST_SELECT_INSURANCE_DATA'
}

export const REDUX_FORM_CONFIG = {
  form: SELECT_INSURANCE_FORM_NAME
}

export const DROPDOWN_LIST_CONFIG = {
  data: ['Blue Cross', 'Kaiser', 'Delta Dental', 'Humana', 'No dental insurance']
}

const SELECT_INSURANCE_CONFIG = {
  ACTION_TYPES,
  REDUX_FORM_CONFIG,
  DROPDOWN_LIST_CONFIG,
  BACK_PATH,
  NEXT_PATH
}

export default SELECT_INSURANCE_CONFIG