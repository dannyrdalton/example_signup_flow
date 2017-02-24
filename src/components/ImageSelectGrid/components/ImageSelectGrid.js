import React from 'react'
import AutoResponsive from 'autoresponsive-react'

const autoresponsiveProps = {
  itemMargin: 10,
  horizontalDirection: 'left',
  verticalDirection: 'top',
  containerHeight: null,
  containerWidth: null,
  itemClassName: 'item',
  transitionDuration: '.8',
  transitionTimingFunction: 'easeIn'
}

const arrayList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let autoresponsiveInner

const childStyle = {
  width: '300px',
  height: '300px',
  background: 'red'
}

export const ImageSelectGrid = (props) => (
  <div className="image-select-grid">
    <h2>{props.name}</h2>
    <AutoResponsive {...autoresponsiveProps}>
      {props.items.map((item) => {
        return (
          <div className="item" key={item.key} style={childStyle} onClick={() => props.onItemClick(item)}>
            {props.itemComponent(item)}
          </div>
        )
      })}
    </AutoResponsive>
  </div>
)