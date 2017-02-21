import React from 'react'

export const PersonalInformation = (props) => (
  <div>
    <h2>Personal Information</h2>
    <div className={"form-group"}>
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        className="form-control"
        id="email"
        name="email"
        placeholder="Email"
        value={props.pinfo.data.email}
        onChange={props.handleInputChange} />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" className="form-control" id="password" placeholder="Password" value={props.pinfo.data.password} onChange={props.handleInputChange} />
    </div>
    <div className="form-group">
      <label htmlFor="first-name">First Name</label>
      <input type="text" className="form-control" id="first-name" placeholder="First Name" />
    </div>
    <div className="form-group">
      <label htmlFor="last-name">Last Name</label>
      <input type="text" className="form-control" id="last-name" placeholder="Last Name" />
    </div>
    <div className="form-group">
      <label htmlFor="dob">Date of Birth</label>
      <input type="date" className="form-control" id="dob" placeholder="Date of Birth" />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone #</label>
      <input type="text" className="form-control" id="first-name" placeholder="Phone #" />
    </div>
    <div>
      <button className='btn btn-default' onClick={props.save}>
        Save
      </button>
    </div>
  </div>
)

PersonalInformation.propTypes = {
  pinfo: React.PropTypes.object.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  save: React.PropTypes.func.isRequired
}

export default PersonalInformation
