import './App.css';
import background from './assets/images/image.png'
import CalculatorFunction from './components/CalculatorFunction';

function App() {
  return (
    <div className='background'>
      <img src={background} alt='background' />
      <div className='app'>
        <CalculatorFunction />
      </div>
    </div>
  );
}

export default App;
