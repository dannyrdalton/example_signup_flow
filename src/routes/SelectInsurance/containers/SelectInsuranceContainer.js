import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { next, back } from '../modules/select_insurance'
import { REDUX_FORM_CONFIG } from '../config/select_insurance_config'
import SelectInsurance from '../components/SelectInsurance'

const mapDispatchToProps = {
  back,
  next
}

const mapStateToProps = (state) => ({
  selectInsurance: state.selectInsurance,
  initialValues: state.selectInsurance.data
})

const reduxFormConfig = REDUX_FORM_CONFIG

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(reduxFormConfig)(SelectInsurance))
