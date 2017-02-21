import React from 'react'
import { Link } from 'react-router'

export const DentalGoals = (props) => (
  <div>
    <h2>Dental Goals</h2>
    <div>
      <Link to='/dental-history' className="btn btn-default">
        Back
      </Link>
      <Link to='/select-doctor' className="btn btn-default">
        Next
      </Link>
    </div>
  </div>
)

// Counter.propTypes = {
//   counter     : React.PropTypes.number.isRequired,
//   doubleAsync : React.PropTypes.func.isRequired,
//   increment   : React.PropTypes.func.isRequired
// }

export default DentalGoals
