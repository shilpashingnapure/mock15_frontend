import logo from './logo.svg';
import './App.css';
import { Login } from './components/userLogin';
import { AllRouter } from './components/allRouter';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRouter/>
    </div>
  );
}

export default App;
