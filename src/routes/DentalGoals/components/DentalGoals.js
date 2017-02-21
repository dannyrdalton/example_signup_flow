import React from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router'

export const DentalGoals = (props) => (
  <div>
    <h2>Dental Goals</h2>
    <form>
      <div>
        <label>Sex</label>
        <div>
          <label><Field name="goal" component='input' type="radio" value="fixMinorCrowding"/>Fix Minor Crowding</label>
          <label><Field name="goal" component='input' type="radio" value="fixModerateCrowding"/>Fix Moderate Crowding</label>
          <label><Field name="goal" component='input' type="radio" value="fixMajorCrowding"/>Fix Major Crowding</label>
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

export default DentalGoals
