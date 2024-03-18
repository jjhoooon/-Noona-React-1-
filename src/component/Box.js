import React from 'react'

const Box = (props) => {
  return (
    <div className='boxContainer'>
      <div>{props.title}</div>
      <img className='image' src={props.item && props.item.image} />
      <div>win</div>
    </div>
  )
}

export default Box