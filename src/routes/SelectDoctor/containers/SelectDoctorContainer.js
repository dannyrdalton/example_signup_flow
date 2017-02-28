import { connect } from 'react-redux'
import { onImageSelectItemClick, back, next } from '../modules/select_doctor'
import SelectDoctor from '../components/SelectDoctor'

const mapDispatchToProps = {
  onImageSelectItemClick,
  back,
  next
}

const mapStateToProps = (state) => ({
  selectDoctor: state.selectDoctor  
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectDoctor)
