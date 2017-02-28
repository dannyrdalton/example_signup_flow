import React from 'react'
import { Link } from 'react-router'
import { Field } from 'redux-form'
import Dropzone from 'react-dropzone'

export const ImageSelect = (props) => (
  <div>
    <h2>Select An Image</h2>
    <div>
      <Dropzone
        onDrop={props.handleImageDrop}
        multiple={false}
        accept="image/*"
      >
        {!props.imageSelect.data.file &&<div>Try dropping some files here, or click to select files to upload.</div>}
        {props.imageSelect.data.file && <img src={props.imageSelect.data.file.preview} />}
      </Dropzone>
    </div>
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

export default ImageSelect
