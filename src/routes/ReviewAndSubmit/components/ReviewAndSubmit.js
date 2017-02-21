import React from 'react'
import { Link } from 'react-router'

export const ReviewAndSubmit = (props) => (
  <div>
    <h2>Review And Submit</h2>
    <div>
      <Link to='/select-insurance' className="btn btn-default">
        Back
      </Link>
    </div>
  </div>
)

// Counter.propTypes = {
//   counter     : React.PropTypes.number.isRequired,
//   doubleAsync : React.PropTypes.func.isRequired,
//   increment   : React.PropTypes.func.isRequired
// }

export default ReviewAndSubmit
