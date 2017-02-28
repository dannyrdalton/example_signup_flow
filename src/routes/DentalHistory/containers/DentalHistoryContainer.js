import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { FORM_NAME, back, next } from '../modules/dental_history'
import { REDUX_FORM_CONFIG } from  '../config/dental_history_config'
import DentalHistory from '../components/DentalHistory'

const mapDispatchToProps = {
  back,
  next
}

const mapStateToProps = (state) => ({
  dentalHistory: state.dentalHistory,
  initialValues: state.dentalHistory.data
})

const reduxFormConfig = REDUX_FORM_CONFIG

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(reduxFormConfig)(DentalHistory))
