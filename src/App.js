import './App.css';
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import background from './assets/images/image.png'

function App() {
  console.log(background);
  return (
    <div className='background'>
      <img src={background} alt='background' />
      <div className='app'>
        <Display />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
