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

const childStyle = {}

function setSelectedItem(items, selectedItem) {
  items.forEach(function (item) {
    if (item.key == selectedItem.key) {
      item.selected = true;
    } else {
      item.selected = false;
    }
  });
}

function onItemClick(item, props) {
  setSelectedItem(props.items, item)
  props.onItemClick(props.items, item);
}

export const ImageSelectGrid = (props) => (
  <div className="image-select-grid">
    <h2>{props.name}</h2>
    <AutoResponsive {...autoresponsiveProps}>
      {props.items.map((item) => {
        return (
          <div
            className="item"
            key={item.key}
            style={childStyle}
            onClick={() => onItemClick(item, props)}
          >
            {props.itemComponent(item)}
          </div>
        )
      })}
    </AutoResponsive>
  </div>
)