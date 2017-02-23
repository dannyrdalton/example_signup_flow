import React from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router'
import { FORM_FIELDS } from '../config/dental_goals_config'

import './DentalGoals.scss'

import MinorCrowdingImage from '../assets/minor_crowding.jpg'
import ModerateCrowdingImage from '../assets/moderate_crowding.jpg'
import MajorCrowdingImage from '../assets/major_crowding.png'

export const DentalGoals = (props) => (
  <div className="dental-goals">
    <h2>Dental Goals</h2>
    <form>
      {FORM_FIELDS.map(field =>
        <Field
          {...field}
        />
      )}
    </form>
    <div>
      <div className="btn btn-default" onClick={props.back}>Back</div>
      <div className="btn btn-default" onClick={props.next}>Next</div>
    </div>
  </div>
)

export default DentalGoals
