import React from "react";
import './collection-preview.styles.scss'

const CollectionPreview = ({items, title}) => {
  return (
    <div>
      <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {
            items.filter((item,idx) => idx < 4).map(item =>(
              <div>{item.name}</div>
            ))
            // console.log(items)
            
          //  <div>{items.name}</div>
          }
        </div>
      </div>
    </div>
  )
}

export default CollectionPreview;