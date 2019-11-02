import React, { Component } from 'react'
import './Box.css'
export class Box extends Component {
    static defalutProps = {
        color: 'purple',
    }
    render() {
        return (
            <div className='Box' style={{backgroundColor: this.props.color}}>
                
            </div>
        )
    }
}

export default Box
