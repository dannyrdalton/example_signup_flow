import React from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router'

export const YesOption = (props) => (
  <option value='yes'>Yes</option>
)

export const NoOption = (props) => (
  <option value='no'>No</option>
)

export const UnsureOption = (props) => (
  <option value='unsure'>Unsure</option>
)

export const DentalHistory = (props) => (
  <div>
    <h2>Dental History</h2>
    <form>
      <div className='form-group'>
        <label>Have you had your wisdom teeth removed?</label>
        <div>
          <Field name='wisdomTeethRemoved' component='select' className='form-control'>
            <YesOption></YesOption>
            <NoOption></NoOption>
            <UnsureOption></UnsureOption>
          </Field>
        </div>
      </div>
      <div className='form-group'>
        <label>Do you have any crowns or fillings?</label>
        <div>
          <Field name='crownsOrFillings' component='select' className='form-control'>
            <YesOption></YesOption>
            <NoOption></NoOption>
            <UnsureOption></UnsureOption>
          </Field>
        </div>
      </div>
      <div className='form-group'>
        <label>Do you have any loose teeth?</label>
        <div>
          <Field name='looseTeeth' component='select' className='form-control'>
            <YesOption></YesOption>
            <NoOption></NoOption>
            <UnsureOption></UnsureOption>
          </Field>
        </div>
      </div>
      <div className='form-group'>
        <label>Do you have any decaying teeth?</label>
        <div>
          <Field name='decayingTeeth' component='select' className='form-control'>
            <YesOption></YesOption>
            <NoOption></NoOption>
            <UnsureOption></UnsureOption>
          </Field>
        </div>
      </div>
    </form>
    <div>
      <div className="btn btn-default" onClick={props.back}>Back</div>
      <div className="btn btn-default" onClick={props.next}>Next</div>
    </div>
  </div>
)

// Counter.propTypes = {
//   counter     : React.PropTypes.number.isRequired,
//   doubleAsync : React.PropTypes.func.isRequired,
//   increment   : React.PropTypes.func.isRequired
// }

export default DentalHistory
