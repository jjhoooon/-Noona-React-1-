import React from 'react'

const Box = (props) => {
  return (
    <div className='boxMain'>
      <div>{props.title}</div>
      <img className='image' src={props.item && props.item.image} />
      <div>{props.item && props.result}</div>
    </div>
  )
}

export default Box