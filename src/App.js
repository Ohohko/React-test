import './App.css';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  return (
    <><div className="App">                
      <Button props text=<b>Important</b> />
      <Button props text="Not Important" />
    </div><div className='card'>
      <Card src="https://source.unsplash.com/random/100×100/?car"
      title="Welcome"
      description="this is the created in the future and  will be created in the future"
      />
      <Card src="https://source.unsplash.com/random/100×100/?car"
      title="Welcome"
      description="this is the car that will be created    in the will be created in the future and  will be created in the future"
      />
      <Card src="https://source.unsplash.com/random/100×100/?car"
      title="Welcome"
      description="this is the car that will be creatand will be created in the future and  will be created in the future"
      />
      </div></>
    
  );
}

export default App;
