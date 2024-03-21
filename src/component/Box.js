import React from 'react'

const Box = (props) => {
  return (
    <div className='boxMain'>
      <div className='boxTitle'>{props.title}</div>
      <img src={props.item && props.item.image} />
      <div className='boxResult'>{props.item && props.result}</div>
    </div>
  )
}

export default Box