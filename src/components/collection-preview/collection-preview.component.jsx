import React from "react";
import './collection-preview.styles.scss'
import CollectionItems from "../collection-items/collection-item.component";

const CollectionPreview = ({items, title}) => {
  return (
    <div>
      <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {
            items.filter((item,idx) => idx < 4).map(({id, ...otherProps})=>(
             <CollectionItems key={id} {...otherProps}/>
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