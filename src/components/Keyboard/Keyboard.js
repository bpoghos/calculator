import { Component } from 'react'
import './keyboards.css'

class Keyboard extends Component {


    render() {
        const { onValues, onAction } = this.props


        return (
            <div className='keyboard-comp'>
                <div className='actions-one'>
                    <button className='cleare'>&#x43;</button>
                    <button className='increase'>&#60;</button>
                    <button className='divide'>/</button>
                    <button className='multiply'>x</button>
                </div>

                <div className='numbers-and-some-actions-section'>
                    <div className='numbers'>
                        <button className='seven' onClick={onValues}>7</button>
                        <button className='eight' onClick={onValues}>8</button>
                        <button className='nine' onClick={onValues}>9</button>
                        <button className='four' onClick={onValues}>4</button>
                        <button className='five' onClick={onValues}>5</button>
                        <button className='six' onClick={onValues}>6</button>
                        <button className='one' onClick={onValues}>1</button>
                        <button className='two' onClick={onValues}>2</button>
                        <button className='three' onClick={onValues}>3</button>
                        <button className='zero' onClick={onValues}>0</button>
                        <button className='dot' onClick={onValues}>&#46;</button>
                    </div>

                    <div className='actions-two'>
                        <button className='minus'>-</button>
                        <button className='plus' onClick={onAction}>+</button>
                        <button className='equal' onClick={onAction}>&#61;</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Keyboard