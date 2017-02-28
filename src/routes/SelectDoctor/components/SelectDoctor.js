import React from 'react'
import { ImageSelectGrid } from 'components/ImageSelectGrid/components/ImageSelectGrid'
import { Link } from 'react-router'
import { IMAGE_SELECT_GRID_CONFIG } from '../config/select_doctor_config'
import './SelectDoctor.scss'

export const renderImageSelectGridItemComponent = (item) => (
  <div className={"doctor-img " + (item.selected ? 'selected' : '')}>
    <img src={item.imgSrc} />
  </div>
)

export const SelectDoctor = (props) => (
  <div className="select-doctor">
    <h2>Select Doctor</h2>
    <div>
      <ImageSelectGrid
        items={IMAGE_SELECT_GRID_CONFIG.items}
        onItemClick={props.onImageSelectItemClick}
        itemComponent={renderImageSelectGridItemComponent}>
      </ImageSelectGrid>
    </div>
    <div>
      <div className="btn btn-default" onClick={props.back}>Back</div>
      <div className="btn btn-default" onClick={props.next}>Next</div>
    </div>
  </div>
)

export default SelectDoctor
