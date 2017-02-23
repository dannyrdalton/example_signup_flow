import React from 'react'

export const imageAndText = (props) => (
  <span>
    <span>{props.item.value}</span><img src={props.item.imgSrc} style={{ height: '100px', paddingLeft: '20px' }}/>
  </span>
)

export const REACT_WIDGETS_DROPDOWN_LIST_COMPONENT_RENDERERS = {
  imageAndText
}

export default REACT_WIDGETS_DROPDOWN_LIST_COMPONENT_RENDERERS