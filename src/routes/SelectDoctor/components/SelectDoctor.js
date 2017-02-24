import React from 'react'
import { ImageSelectGrid } from 'components/ImageSelectGrid/components/ImageSelectGrid'
import { Link } from 'react-router'
import { IMAGE_SELECT_GRID_CONFIG } from '../config/select_doctor_config'

export const renderImageSelectGridItemComponent = (item) => (
  <div>
    <img src={item.imgSrc} />
  </div>
)

export const SelectDoctor = (props) => (
  <div>
    <h2>Select Doctor</h2>
    <div>
      <ImageSelectGrid
        items={IMAGE_SELECT_GRID_CONFIG.items}
        onItemClick={props.onImageSelectItemClick}
        itemComponent={renderImageSelectGridItemComponent}>
      </ImageSelectGrid>
    </div>
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
