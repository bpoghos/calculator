import { Component } from 'react'
import './keyboards.css'

class Keyboard extends Component {

    render(){



        return(
            <div className='keyboard-comp'>
               <div className='actions-one'>
               <button className='cleare'>&#x43;</button>
                <button className='increase'>&#60;</button>
                <button className='divide'>/</button>
                <button className='multiply'>x</button>
               </div>
    
                <div className='numbers-and-some-actions-section'>
                <div className='numbers'>
                <button className='seven'>7</button>
                <button className='eight'>8</button>
                <button className='nine'>9</button>
                <button className='four'>4</button>
                <button className='five'>5</button>
                <button className='six'>6</button>
                <button className='one'>1</button>
                <button className='two'>2</button>
                <button className='three'>3</button>
                <button className='zero'>0</button>
                <button className='dot'>&#46;</button>
                </div>
    
                <div className='actions-two'>
                <button className='minus'>-</button>
                <button className='plus'>+</button>
                <button className='equal'>&#61;</button>
                </div>
                </div>
            </div>
        )
    }
    
}

export default Keyboard