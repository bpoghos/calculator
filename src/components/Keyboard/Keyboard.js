import './keyboards.css'

const Keyboard = () => {
    return(
        <div className='keyboard-comp'>
            <button className='cleare'>&#x43;</button>
            <button className='increase'>&#10094;</button>
            <button className='divide'>/</button>
            <button className='multiply'>x</button>

            <button className='seven'>7</button>
            <button className='eight'>8</button>
            <button className='nine'>9</button>
            <button className='minus'>-</button>

            <button className='four'>4</button>
            <button className='five'>5</button>
            <button className='six'>6</button>
            <button className='plus'>+</button>

            <button className='one'>1</button>
            <button className='two'>2</button>
            <button className='three'>3</button>
            <button className='equal'>=</button>

            <button className='zero'>0</button>
            <button className='dot'>.</button>
        </div>
    )
}

export default Keyboard