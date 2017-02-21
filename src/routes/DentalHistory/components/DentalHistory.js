import React from 'react'
import { Link } from 'react-router'

export const DentalHistory = (props) => (
  <div>
    <h2>Dental History</h2>
    <div>
      <Link to='/select-an-image' className="btn btn-default">
        Back
      </Link>
      <Link to='/dental-goals' className="btn btn-default">
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

export default DentalHistory
