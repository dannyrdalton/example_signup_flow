import React from 'react'
import { Link } from 'react-router'
import { FORM_FIELDS as PERSONAL_INFORMATION_FORM_FIELDS } from '../../PersonalInformation/config/personal_information_config'
import { FORM_FIELDS as DENTAL_HISTORY_FORM_FIELDS } from '../../DentalHistory/config/dental_history_config'
import { FORM_FIELDS as DENTAL_GOALS_FORM_FIELDS } from '../../DentalGoals/config/dental_goals_config'
import { FORM_FIELDS as SELECT_INSURANCE_FORM_FIELDS } from '../../SelectInsurance/config/select_insurance_config'

export const ReviewAndSubmit = (props) => (
  <div>
    <h2>Review And Submit</h2>
    <div>
      <h3>Personal Information</h3>
      <div>
        {PERSONAL_INFORMATION_FORM_FIELDS.map(field =>
          <div className="row" key={field.key}>
            <span>{field.label}:</span>
            <span>{props.reviewAndSubmit.data.pinfo.data[field.name]}</span>
          </div>
        )}
      </div>
      <h3>Profile Picture</h3>
      <div>
        <img src={props.reviewAndSubmit.data.imageSelect.data.file.preview} alt=""/>
      </div>
      <h3>Dental History</h3>
      <div>
        {DENTAL_HISTORY_FORM_FIELDS.map(field =>
          <div className="row" key={field.key}>
            <span>{field.label}:</span>
            <span>{props.reviewAndSubmit.data.dentalHistory.data[field.name]}</span>
          </div>
        )}
      </div>
      <div>
        <h3>Dental Goals</h3>
        {DENTAL_GOALS_FORM_FIELDS.map(field =>
          <div className="row" key={field.key}>
            <span>{props.reviewAndSubmit.data.dentalGoals.data[field.name].value}</span>
            <div><img src={props.reviewAndSubmit.data.dentalGoals.data[field.name].imgSrc} alt=""/></div>
          </div>
        )}
      </div>
      <div>
        <h3>Select Insurance</h3>
        {SELECT_INSURANCE_FORM_FIELDS.map(field =>
          <div className="row" key={field.key}>
            <span>{props.reviewAndSubmit.data.selectInsurance.data[field.name]}</span>
          </div>
        )}
      </div>
    </div>
    {'------------------------------------------'}
    <div>
      <button className="btn btn-default" onClick={props.back}>Back</button>
      <button className="btn btn-primary" onClick={props.submitAllUserInfo}>submit</button>
    </div>
  </div>
)

export default ReviewAndSubmit
