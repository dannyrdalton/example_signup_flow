import React from 'react'
import { Link } from 'react-router'
import { Field } from 'redux-form'
import Dropzone from 'react-dropzone'

const renderDropzoneInput = (field) => {
  const files = field.input.value;

  return (
    <div>
      <Dropzone
        name={field.name}
        // onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}.
        onDrop={field.handleImageDrop}
        multiple={false}
        accept="image/*"
      >
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      {files && Array.isArray(files) && (
        <ul>
          { files.map((file, i) => <li key={i}>{file.name}</li>) }
        </ul>
      )}
    </div>
  );
}

export const ImageSelect = (props) => (
  <div>
    <h2>Select An Image</h2>
    <form>
      <div>
        <Field
          name='userImage'
          component={renderDropzoneInput}
          handleImageDrop={props.handleImageDrop}
          image={props.}
        />
      </div>
    </form>
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
