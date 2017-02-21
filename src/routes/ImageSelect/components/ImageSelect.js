import React from 'react'
import { Link } from 'react-router'

export const ImageSelect = (props) => (
  <div>
    <h2>Select An Image</h2>
    <div>
      <Link to='/pinfo' className="btn btn-default">
        Back
      </Link>
      <Link to='/dental-history' className="btn btn-default">
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

export default ImageSelect
