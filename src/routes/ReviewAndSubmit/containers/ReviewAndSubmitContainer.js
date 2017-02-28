import { connect } from 'react-redux'
import { back, submitAllUserInfo } from '../modules/review_and_submit'
import ReviewAndSubmit from '../components/ReviewAndSubmit'

const mapDispatchToProps = {
  back,
  submitAllUserInfo
}

const mapStateToProps = (state) => ({
  reviewAndSubmit: {
    data: {
      pinfo: state.pinfo,
      imageSelect: state.imageSelect,
      imageSelect: state.imageSelect,
      dentalHistory: state.dentalHistory,
      dentalGoals: state.dentalGoals,
      selectDoctor: state.selectDoctor,
      selectInsurance: state.selectInsurance
    }
  } 
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewAndSubmit)
