import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path='/' exact />
      <Route path='chats' />
    </div>
  );
}

export default App;
