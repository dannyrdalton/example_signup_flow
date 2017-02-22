export const alphaNumeric = (value) => {
  return /^[a-z0-9]+$/i.test(value) ? undefined : true
}

export const email = (value) => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? true : undefined
}

export const required = (value) => {
  return value ? undefined : true
}

const REDUX_FORM_FIELD_VALIDATORS = {
  alphaNumeric,
  email,
  required
}

export default REDUX_FORM_FIELD_VALIDATORS;