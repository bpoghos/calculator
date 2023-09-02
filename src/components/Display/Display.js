import { Component } from 'react'
import './display.css'

class Display extends Component {
    render(){
        return(
            <div className="display-comp">
                <input type='text' placeholder='0' dir="rtl"/>
            </div>
        )
    }
    
}

export default Display