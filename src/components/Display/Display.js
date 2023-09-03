import { Component } from 'react'
import './display.css'

class Display extends Component {
    render(){

        const {value} = this.props
        return(
            <div className="display-comp">
                <h1>{value}</h1>
            </div>
        )
    }
    
}

export default Display