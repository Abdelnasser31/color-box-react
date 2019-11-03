import React, { Component } from 'react'
import Box from './Box';
import './Container.css'

export class Container extends Component {
    constructor(props){
        super(props);
        this.state = {colors: this.props.colors.slice(0,this.props.nBoxes)};
        this.handleChildClick = this.handleChildClick.bind(this);
    }
    static defaultProps = {
        nBoxes: 18,
        colors: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']
    }
    handleChildClick(index) {
        
        let newColors = this.state.colors;
        let random = Math.floor(Math.random() * this.props.nBoxes);
        console.log(index,random,'clicked')
        if(newColors[random] === newColors[index]) this.handleChildClick(index);
        else {
            newColors[index] = `rgb(${this.random(0)},${this.random(255)},${this.random(255)})`;
            this.setState({colors: newColors})
        }
      }
    random(x){
        return Math.floor(Math.random() * x)
    }
    render() {
        let boxes = this.state.colors.map((color,i) => <Box onChildClick ={this.handleChildClick.bind(null,i)} color={color} />)
        return (
            <div className='Container'>
                {boxes}
            </div>
        )
    }
}

export default Container
