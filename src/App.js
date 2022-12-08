import { useState } from 'react';

import './App.css';
import Logo from './images/logo512.png';

import Button from './components/Button';
import Counter from './components/Counter';
// import components

function App() {

  const [counter, setCounter] = useState(0);

  const clickCounter = () => {
    console.log('Click');
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    console.log('Reset');
    setCounter(0);
  };

  return (
    <div className="App">
      <div className='container'>
        <img 
          className='logo'
          src={Logo}/>
      </div>
      <div className='counter-container'>
        <Counter 
          counter={counter} />
        <Button 
          text='Click' 
          clickListener={clickCounter} />
        <Button 
          text='Reset' 
          clickListener={resetCounter} />
      </div>
    </div>
  );
}

export default App;
