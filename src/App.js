import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
    <Button props text=<b>Important</b> />
    <Button props text="Not Important"/>
    </div>
  );
}

export default App;
