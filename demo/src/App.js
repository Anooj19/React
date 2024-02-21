import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Sign from './Components/Sign';
import Home from './Components/Home';
import Myntra from './Components/Myntra';
import ShopM5 from './Components/ShopM5';
import Anooj from './Components/Anooj';
import UseMemo from './Components/useMemo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Sign' element={<Sign />} />
        <Route path='/Myntra' element={<Myntra />} />
        <Route path='/ShopM5' element={<ShopM5 />} />
        <Route path='/Anooj' element={<Anooj />} />
        <Route path='/useMemo' element={<UseMemo />} />
        
      </Routes>
    </div>
  );
}

export default App;
