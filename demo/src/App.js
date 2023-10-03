import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Sign from './Components/Sign';
import Home from './Components/Home';
import Myntra from './Components/Myntra';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Sign' element={<Sign />} />
        <Route path='/Myntra' element={<Myntra/>} />
        
      </Routes>
    </div>
  );
}

export default App;
