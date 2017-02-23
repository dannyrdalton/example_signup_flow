import React from 'react'
import DropdownList from 'react-widgets/lib/DropdownList'

export const field = (field) => (
  <div className={'form-group ' + (field.meta.error && field.meta.touched ? 'has-error ' : '') + (!field.meta.error && field.meta.touched ? 'has-success': '')}>
    <label>{field.label}</label>
    <div>
      <input {...field.input}
        placeholder={field.label}
        type={field.type} 
        className='form-control' /
      >
    </div>
  </div>
)

export const dropdownList = ({ input, meta, label, ...rest }) => (
  <div className={'form-group'}>
    {label && <label>{label}</label>}
    <div>
      <DropdownList {...input} {...rest}/>
    </div>
  </div>
)

export const REDUX_FORM_FIELD_RENDERERS = {
  field,
  dropdownList
}

export default REDUX_FORM_FIELD_RENDERERS