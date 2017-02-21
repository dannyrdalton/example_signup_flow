import React from 'react'
import { Link } from 'react-router'

export const SelectDoctor = (props) => (
  <div>
    <h2>Select Doctor</h2>
    <div>
      <Link to='/dental-goals' className="btn btn-default">
        Back
      </Link>
      <Link to='/select-insurance' className="btn btn-default">
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

export default SelectDoctor
