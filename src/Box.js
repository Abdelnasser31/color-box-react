import React, { Component } from 'react'
import './Box.css'
export class Box extends Component {
    constructor(props){
        super(props);
      
    }
    static defalutProps = {
        color: 'purple',
    }
 
    render() {
        return (
            <div className='Box' onClick={this.props.onChildClick} style={{backgroundColor: this.props.color}}>
                
            </div>
        )
    }
}

export default Box
