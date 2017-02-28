import { connect } from 'react-redux'
import { handleImageDrop, back, next } from '../modules/image_select'
import ImageSelect from '../components/ImageSelect'

const mapDispatchToProps = {
  handleImageDrop,
  back,
  next
}

const mapStateToProps = (state) => ({
  imageSelect: state.imageSelect 
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageSelect)
