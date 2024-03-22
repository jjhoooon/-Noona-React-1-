import React, { Component } from 'react'

export default class BoxClass extends Component {
    render() {
        console.log("props: ", this.props)
        return (
        <div className='boxMain'>
            <div>{this.props.title}</div>
                <img className='image' src={this.props.item && this.props.item.image} />
            <div>{this.props.item && this.props.result}</div>
          </div>
        )
    }
}
