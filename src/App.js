import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import  "./index.css";
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);
  const handleCount=()=>{
    setCount(prevCount => prevCount+1)};
  return (
    
    <div className="App">                
      <Button props text=<b>Important</b> />
      <Button props text="Not Important" />
    <div className='card'>
      <Card src="https://source.unsplash.com/random/100×200/?car"
      title="Welcome"
      description="this is the created in the future and  will be created in the future"
      />
      <Card src="https://source.unsplash.com/random/200X200/?car"
      title="Welcome"
      description="this is the car that will be created    in the will be created in the future and  will be created in the future"
      />
      <Card src="https://source.unsplash.com/random/?car"
      title="Welcome"
      description="this is the car that will will be created in the future and  will be created in the future"
      />
      </div>
      
      <div className='counter'>
    <label>{count}</label>
      <button onClick={handleCount}>Increscent</button>
      </div>

        </div>
  );
}

export default App;

