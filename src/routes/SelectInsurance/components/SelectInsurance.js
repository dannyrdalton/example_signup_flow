import React from 'react'
import { Link } from 'react-router'

export const SelectInsurance = (props) => (
  <div>
    <h2>Select Insurance</h2>
    <div>
      <Link to='/select-doctor' className="btn btn-default">
        Back
      </Link>
      <Link to='/review-and-submit' className="btn btn-default">
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

export default SelectInsurance
