import Doctor1Image from '../assets/doctor1.jpg'
import Doctor2Image from '../assets/doctor2.jpg'
import Doctor3Image from '../assets/doctor3.jpg'
import Doctor4Image from '../assets/doctor4.jpg'
import Doctor5Image from '../assets/doctor5.jpg'

export const ACTION_TYPES = {
  SELECT_DOCTOR_IMAGE_SELECT_GRID_ON_ITEM_CLICK: 'SELECT_DOCTOR_IMAGE_SELECT_GRID_ON_ITEM_CLICK', 
  PERSIST_SELECT_DOCTOR_DATA: 'PERSIST_SELECT_DOCTOR_DATA'
}

export const IMAGE_SELECT_GRID_CONFIG = {
  items: [
    {
      key: 'DOCTOR_1',
      label: 'Doctor 1',
      imgSrc: Doctor1Image
    },
    {
      key: 'DOCTOR_2',
      label: 'Doctor 2',
      imgSrc: Doctor2Image
    },
    {
      key: 'DOCTOR_3',
      label: 'Doctor 3',
      imgSrc: Doctor3Image
    },
    {
      key: 'DOCTOR_4',
      label: 'Doctor 4',
      imgSrc: Doctor4Image
    },
    {
      key: 'DOCTOR_5',
      label: 'Doctor 5',
      imgSrc: Doctor5Image
    }
  ] 
}