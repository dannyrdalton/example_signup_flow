import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { next } from '../modules/personal_information'
import { REDUX_FORM_CONFIG } from '../config/personal_information_config'
import PersonalInformation from '../components/PersonalInformation'

const mapDispatchToProps = {
  next
}

const mapStateToProps = (state) => ({
  pinfo: state.pinfo,
  initialValues: state.pinfo.data
})

const reduxFormConfig = REDUX_FORM_CONFIG

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(reduxFormConfig)(PersonalInformation))
