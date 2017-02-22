
import REDUX_FORM_FIELD_VALIDATORS from 'helpers/redux-form/field_validators'
import REDUX_FORM_FIELD_NORMALIZERS from 'helpers/redux-form/field_normalizers'

export const PERSONAL_INFORMATION_FORM_NAME = 'personalInfoForm'
export const NEXT_PATH = '/select-an-image'

export const ACTION_TYPES = {
 PERSIST_PERSONAL_INFORMATION_DATA: 'PERSIST_PERSONAL_INFORMATION_DATA' 
}

export const REDUX_FORM_CONFIG = {
  form: PERSONAL_INFORMATION_FORM_NAME
}

export const FORM_FIELDS = [
  {
    id: 'EMAIL',
    name: 'email',
    label: 'Email',
    type: 'email',
    component: '',
    validate: [REDUX_FORM_FIELD_VALIDATORS.required, REDUX_FORM_FIELD_VALIDATORS.email]
  },
  {
    id: 'FIRST_NAME',
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    component: '',
    validate: [REDUX_FORM_FIELD_VALIDATORS.required, REDUX_FORM_FIELD_VALIDATORS.alphaNumeric]
  },
  {
    id: 'LAST_NAME',
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    component: '',
    validate: [REDUX_FORM_FIELD_VALIDATORS.required, REDUX_FORM_FIELD_VALIDATORS.alphaNumeric]
  },
  {
    id: 'DOB',
    name: 'dob',
    label: 'Date of Birth',
    type: 'date',
    component: '',
    validate: [REDUX_FORM_FIELD_VALIDATORS.required]
  },
  {
    id: 'PHONE',
    name: 'phone',
    label: 'Phone #',
    type: 'text',
    component: '',
    validate: [REDUX_FORM_FIELD_VALIDATORS.required],
    normalize: REDUX_FORM_FIELD_NORMALIZERS.phone
  }
]

const PERSONAL_INFORMATION_CONFIG = {
  PERSONAL_INFORMATION_FORM_NAME,
  FORM_FIELDS,
  NEXT_PATH,
  REDUX_FORM_CONFIG
}

export default PERSONAL_INFORMATION_CONFIG