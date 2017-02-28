import ROUTES from 'constants/routes'
import REDUX_FORM_FIELD_RENDERERS from 'helpers/redux-form/field_renderers'
import REACT_WIDGETS_DROPDOWN_LIST_COMPONENT_RENDERERS from 'helpers/react-widgets/DropdownList/component_renderers'

import MinorCrowdingImage from '../assets/minor_crowding.jpg'
import ModerateCrowdingImage from '../assets/moderate_crowding.jpg'
import MajorCrowdingImage from '../assets/major_crowding.png'

export const DENTAL_GOALS_FORM_NAME = 'dentalGoalsForm'
export const BACK_PATH = '/' + ROUTES.DENTAL_HISTORY.path
export const NEXT_PATH = '/' + ROUTES.SELECT_DOCTOR.path

export const DENTAL_GOALS_DATA = [
  {
    value: 'Fix Minor Crowding',
    imgSrc: MinorCrowdingImage
  },
  {
    value: 'Fix Moderate Crowding',
    imgSrc: ModerateCrowdingImage
  },
  {
    value: 'Fix Major Crowding',
    imgSrc: MajorCrowdingImage
  }
]

export const ACTION_TYPES = {
  DENTAL_GOALS_PERSIST: 'DENTAL_GOALS_PERSIST'
}

export const REDUX_FORM_CONFIG = {
  form: DENTAL_GOALS_FORM_NAME
}

export const FORM_FIELDS = [
  {
    key: 'GOAL',
    name: 'goal',
    component: REDUX_FORM_FIELD_RENDERERS.dropdownList,
    data: DENTAL_GOALS_DATA,
    valueComponent: REACT_WIDGETS_DROPDOWN_LIST_COMPONENT_RENDERERS.imageAndText,
    itemComponent: REACT_WIDGETS_DROPDOWN_LIST_COMPONENT_RENDERERS.imageAndText
  }
]

export const DENTAL_GOALS_CONFIG = {
  DENTAL_GOALS_FORM_NAME,
  BACK_PATH,
  NEXT_PATH,
  ACTION_TYPES,
  DENTAL_GOALS_FORM_NAME
}

export default DENTAL_GOALS_CONFIG