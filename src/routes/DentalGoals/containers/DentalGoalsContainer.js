import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { back, next } from '../modules/dental_goals'
import { REDUX_FORM_CONFIG } from '../config/dental_goals_config'
import DentalGoals from '../components/DentalGoals'

const mapDispatchToProps = {
  back,
  next 
}

const mapStateToProps = (state) => ({
  dentalGoals: state.dentalGoals,
  initialValues: state.dentalGoals.data 
})

const reduxFormConfig = REDUX_FORM_CONFIG

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(reduxFormConfig)(DentalGoals))
